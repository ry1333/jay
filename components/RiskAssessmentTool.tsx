
import React, { useState } from 'react';
import { getFireRiskAssessment } from '../services/geminiService';
import { AssessmentResult } from '../types';
import { ShieldAlert, CheckCircle, Loader2, Send } from 'lucide-react';

const RiskAssessmentTool: React.FC = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getFireRiskAssessment(location, description);
      setResult(data);
    } catch (err) {
      alert("Failed to get assessment. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-custom-card border border-white/5 rounded-2xl p-8 shadow-2xl">
      <div className="flex items-center space-x-3 mb-6">
        <ShieldAlert className="text-custom-orange w-6 h-6" />
        <h3 className="text-xl font-bold">AI Fire Risk Assessment</h3>
      </div>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Property Location</label>
            <input
              type="text"
              required
              placeholder="e.g., Napa Valley Foothills"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-custom-orange transition-colors"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Terrain / Vegetation Details</label>
            <textarea
              required
              rows={3}
              placeholder="Describe surrounding brush, slope, and structure materials..."
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-custom-orange transition-colors"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-custom-orange hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
            <span>{loading ? "Analyzing Data..." : "Analyze Risk Profile"}</span>
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
            <span className="text-sm font-medium text-gray-400">Risk Level</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
              result.riskLevel === 'Extreme' ? 'bg-red-500/20 text-red-500' :
              result.riskLevel === 'High' ? 'bg-orange-500/20 text-orange-500' :
              result.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
              'bg-green-500/20 text-green-500'
            }`}>
              {result.riskLevel}
            </span>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-200">Expert Summary</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{result.summary}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-200">Top Recommendations</h4>
            {result.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-gray-400">
                <CheckCircle className="text-custom-orange w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setResult(null)}
            className="w-full text-xs font-semibold text-gray-500 hover:text-white transition-colors"
          >
            Start New Assessment
          </button>
        </div>
      )}
    </div>
  );
};

export default RiskAssessmentTool;
