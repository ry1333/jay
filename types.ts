
// Fix: Add React import to resolve "Cannot find namespace 'React'" error
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StatItemProps {
  value: string;
  label: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AssessmentResult {
  riskLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  summary: string;
  recommendations: string[];
}
