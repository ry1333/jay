// Single source of truth for all BWS content
// All page content should be imported from here

// Base path for GitHub Pages deployment
const BASE = import.meta.env.BASE_URL || '/';

export const siteConfig = {
  name: 'Bailey Wildfire Solutions',
  shortName: 'BWS',
  tagline: 'Wildfire Mitigation Specialists',
  email: 'info@baileywildfiresolutions.com',
  phone: '(XXX) XXX-XXXX',
  location: 'Florida & Colorado',
  logo: `${BASE}images/logo.png`,
};

export const mission =
  "To reduce wildfire risk, strengthen community resilience, and safeguard lives, property, and natural landscapes through science-based mitigation strategies and expert guidance.";

export const about =
  "With decades of experience from a team with a robust background in several states, BWS offers a variety of solutions to the ever-growing need for wildfire planning, management, education and implementation.";

export const stats = [
  { value: '750+', label: 'Prescribed Burns' },
  { value: '25+', label: 'Years Experience' },
  { value: '600+', label: 'Burns Participated' },
  { value: '100%', label: 'Science-Based' },
];

// Real images from web.zip
export const images = {
  hero: `${BASE}images/hero-prescribed-burn.jpg`,
  planning: `${BASE}images/planning-map.jpg`,
  fuels: `${BASE}images/fuels-management-tree.jpg`,
  nightFire: `${BASE}images/night-wildfire-bg.jpg`,
  training: `${BASE}images/training-workshop.jpg`,
  headshots: {
    jay: `${BASE}images/headshot-jay-field.jpg`,
  },
};

// Services with full details for individual pages
export const services = [
  {
    id: 'wildfire-risk-planning',
    name: 'Wildfire Risk Planning',
    shortDescription: 'Comprehensive risk assessment, spatial analysis, and strategic development for communities.',
    icon: 'BarChart3',
    color: 'orange',
    image: `${BASE}images/planning-map.jpg`,
    fullDescription: 'Our Wildfire Risk Planning service provides communities and landowners with comprehensive assessments that identify vulnerabilities and prioritize mitigation actions.',
    features: ['Community-wide risk assessments', 'Parcel-level vulnerability mapping', 'Fuel load analysis', 'Evacuation route evaluation', 'Mitigation priority ranking'],
    benefits: ['Identify high-risk areas before fires occur', 'Prioritize limited resources effectively', 'Meet insurance and regulatory requirements', 'Qualify for federal and state funding'],
  },
  {
    id: 'cwpp-development',
    name: 'CWPP Development',
    shortDescription: 'Community Wildfire Protection Plans tailored to local regulations and funding opportunities.',
    icon: 'FileText',
    color: 'blue',
    image: `${BASE}images/planning-map.jpg`,
    fullDescription: 'Community Wildfire Protection Plans (CWPPs) are essential documents that help communities qualify for federal funding and coordinate wildfire mitigation efforts.',
    features: ['Stakeholder engagement', 'Risk assessment and mapping', 'Mitigation action prioritization', 'Funding opportunity identification', 'Implementation timeline development'],
    benefits: ['Qualify for Hazardous Fuels Reduction grants', 'Coordinate multi-agency response', 'Establish community-wide priorities', 'Meet FEMA and state requirements'],
  },
  {
    id: 'courses-certification',
    name: 'Wildfire Courses/certification',
    shortDescription: 'NWCG compliant training for agencies, private crews, and land managers.',
    icon: 'GraduationCap',
    color: 'purple',
    image: `${BASE}images/training-workshop.jpg`,
    fullDescription: 'We offer comprehensive wildfire training programs that meet National Wildfire Coordinating Group (NWCG) standards.',
    features: ['S-130/S-190 Basic Firefighter Training', 'S-290 Intermediate Fire Behavior', 'RX-310 Burn Plan Preparation', 'Burn Boss certification prep', 'Annual refresher courses'],
    benefits: ['NWCG-compliant certifications', 'Hands-on field training', 'Experienced instructor cadre', 'Flexible scheduling options'],
  },
  {
    id: 'prescribed-burn-planning',
    name: 'Prescribed Burn Planning',
    shortDescription: 'Detailed burn plans (RXB2) including permits, ecological goals, and compliance.',
    icon: 'ClipboardList',
    color: 'green',
    image: `${BASE}images/planning-map.jpg`,
    fullDescription: 'Prescribed fire is one of the most effective tools for reducing hazardous fuels. Our planning services ensure burns are safe, effective, and compliant.',
    features: ['Site assessment and mapping', 'Burn prescription development', 'Permit application assistance', 'Smoke management planning', 'Contingency and holding plans'],
    benefits: ['Reduce wildfire risk to structures', 'Restore native ecosystem health', 'Meet regulatory requirements', 'Minimize smoke impacts'],
  },
  {
    id: 'prescribed-burn-assistance',
    name: 'Prescribed Burn Assistance',
    shortDescription: 'On-the-ground support for executing safe and effective prescribed burns.',
    icon: 'FlameKindling',
    color: 'red',
    image: `${BASE}images/hero-prescribed-burn.jpg`,
    fullDescription: 'Our experienced burn crews provide hands-on support for prescribed fire operations. With over 750 burns led and 600+ participated in, our team brings unmatched expertise.',
    features: ['Certified Burn Boss leadership', 'Trained holding and ignition crews', 'Equipment and tool support', 'Weather monitoring', 'Post-burn assessment'],
    benefits: ['Access to experienced burn crews', 'Reduce liability with certified leadership', 'Achieve ecological objectives safely', 'Build internal capacity'],
  },
  {
    id: 'fire-breaks-fuels',
    name: 'Fire Breaks and Fuels management',
    shortDescription: 'Strategic vegetation management to reduce fire spread and intensity.',
    icon: 'Trees',
    color: 'emerald',
    image: `${BASE}images/fuels-management-tree.jpg`,
    fullDescription: 'Mechanical fuel reduction and firebreak construction create defensible space and interrupt fire spread.',
    features: ['Defensible space creation', 'Firebreak design and construction', 'Mechanical brush clearing', 'Ladder fuel removal', 'Maintenance scheduling'],
    benefits: ['Immediate risk reduction', 'Protect structures and infrastructure', 'Support safe evacuation routes', 'Complement prescribed fire programs'],
  },
  {
    id: 'workshops-seminars',
    name: 'Workshops and seminars',
    shortDescription: 'Educational programs for communities, agencies, and landowners.',
    icon: 'Users',
    color: 'cyan',
    image: `${BASE}images/training-workshop.jpg`,
    fullDescription: 'Education is key to building fire-adapted communities. We offer workshops for homeowners, land managers, and community groups.',
    features: ['Firewise USA community programs', 'Homeowner defensible space workshops', 'Land manager seminars', 'Fire department coordination training', 'Custom educational programs'],
    benefits: ['Build community awareness', 'Empower individual action', 'Coordinate neighborhood efforts', 'Qualify for Firewise recognition'],
  },
];

export const sectors = [
  {
    name: 'Federal, State and Local Governments',
    icon: 'Globe',
    description: 'Planning, education, and implementation support for wildfire risk reduction programs.'
  },
  {
    name: 'Utility and Power Companies',
    icon: 'Zap',
    description: 'Wildfire planning and mitigation support for critical infrastructure protection.'
  },
  {
    name: 'Rail Industry',
    icon: 'TrainFront',
    description: 'Right-of-way management and fire prevention strategies for rail corridors.'
  },
  {
    name: 'Timber Industry',
    icon: 'Trees',
    description: 'Forest management and prescribed fire programs to protect timber resources.'
  },
  {
    name: 'Non-profit and Land Preservation Organizations',
    icon: 'Heart',
    description: 'Ecosystem restoration and habitat management through science-based fire practices.'
  },
  {
    name: 'Private Landowners',
    icon: 'Home',
    description: 'Property assessments and defensible space creation for individual landowners.'
  },
  {
    name: "HOA's and Communities",
    icon: 'Users',
    description: 'Community-wide planning and Firewise USA recognition support.'
  },
];

export const credentials = [
  { name: 'NWCG Member', description: 'Federally certified wildland firefighters', icon: 'Award' },
  { name: 'Florida Certified Burn Manager', description: 'State of Florida certification', icon: 'BadgeCheck' },
  { name: 'RXB2 Qualified', description: 'Prescribed Fire Burn Boss Type 2', icon: 'Flame' },
  { name: 'TFLD Qualified', description: 'Task Force Leader certification', icon: 'Shield' },
  { name: 'Fully Insured', description: 'Comprehensive liability coverage', icon: 'ShieldCheck' },
  { name: '25+ Years Experience', description: 'Proven track record', icon: 'Clock' },
];

export const team = [
  {
    name: 'Christy Bailey',
    role: 'President/CFO',
    shortBio: 'As a business owner for more than 25 years and a parent to three children, Christy has devoted much of her life to balancing professional and family responsibilities. A graduate of Elon University, Christy is passionate about the outdoors and is committed to preserving and restoring natural habitats through systematic, cost-effective, and efficient processes.',
    longBio: [],
    image: `${BASE}images/headshot-christy.jpg`,
    icon: 'User',
  },
  {
    name: 'Jay Bailey',
    role: 'VP/COO',
    shortBio: 'With nearly three decades dedicated to wildfire response, mitigation, and incident management, Jay has consistently demonstrated a commitment to strengthening communities.',
    longBio: [
      "Beginning in the 1990s with the Florida Forest Service during a period of intense wildfire activity, Jay's career evolved into leading Sarasota County's wildfire management program for 17 years.",
      'In this role, Jay oversaw more than 750 prescribed burns, responded to hundreds of wildfires, and conducted risk assessments for numerous homes and properties each year and helped educate hundreds of firefighters as well as residents of Sarasota County.',
      'Over a 25-year career, Jay also contributed to national disaster response efforts, joining Incident Response Teams for hurricanes and other natural disasters across the country.',
      'Since retiring from public service, Jay has continued to support disaster response in the private sector, including an extended deployment to North Carolina following Hurricane Helene.',
    ],
    image: `${BASE}images/headshot-dave.jpg`,
    icon: 'Shield',
  },
  {
    name: 'David Cavanaugh',
    role: 'Wildfire Mitigation Coordinator',
    shortBio: "David is the Fire Program Lead for The Nature Conservancy's Pennsylvania/Delaware Business Unit, where he supports partners statewide in building fire capacity, planning prescribed burns, and leading operations in the field. He previously served as a Wildfire Mitigation Specialist for Sarasota County, contributing to one of Florida's most active prescribed fire programs.",
    longBio: [
      'A Florida Certified Burn Manager, David has served as burn boss on more than 200 prescribed fires and has participated in over 600 burns throughout his career.',
      'He holds NWCG qualifications including TFLD, RXB2, READ, FIRB, HEQB, and ENGB, and earned his degree in Environmental Studies from Florida Gulf Coast University.',
    ],
    image: `${BASE}images/headshot-jay-field.jpg`,
    icon: 'Map',
  },
  {
    name: 'Shepard M. Zedaker, PhD',
    role: 'Fire Scientist/Forester/Teacher',
    shortBio: 'Retired Professor of Forestry at Virginia Tech with over 30 years of wildland fire and forest vegetation management research. Published 60+ refereed journal articles and raised over $7 million in extramural funding. Named a Fellow in the Society of American Foresters.',
    longBio: [
      'Education: BS Humboldt State, MS Purdue, PhD Oregon State University (all accredited forestry programs). Received Certified Forester certificate in 1994 when the Society of American Foresters CF program began.',
      'Published 60+ refereed journal articles and book chapters, and more than 250 total publications. Raised over $7 million in extramural funding for Virginia Tech.',
      'Worked as consultant to the US forest industry, US Forest Service, US EPA, and served on international forestry panels.',
      'Awards include: Fellow in the Society of American Foresters, best paper in Weed Technology journal, best paper in international journal Forestry, Visiting Research Fellowship to NZ Forest Research Institute, International Weed Science Society Speaker Fellowship, S.F. Pond Visiting Research Fellowship to University of Melbourne, and Hans Merensky Forestry and Agriculture Fellowship to South Africa.',
      'Continues to work seasonally as a Single Resource Boss in the National Wildfire Coordinating Group wildland fire Incident Qualification System.',
      'Most important contribution: impacting the learning of over 4,000 students in 100+ courses taught.',
    ],
    image: `${BASE}images/sterling.jpg`,
    icon: 'GraduationCap',
  },
  {
    name: 'Maria Sokol',
    role: 'Technical Writer & Grant Professional',
    shortBio: 'Technical writer and grant professional with more than 25 years of experience in public-sector and community-based work, including over 12 years supporting proposals and technical documentation. Has helped clients across the country secure more than $95M in federal, state, local, and private funding.',
    longBio: [
      'Supported fire departments, city municipalities, and public agencies nationwide with clear, compliant, and results-focused writing.',
      'Over 12 years of experience in proposals and technical documentation.',
      'Based in Sarasota, Florida.',
    ],
    image: `${BASE}images/maria.jpg`,
    icon: 'User',
  },
];

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Who We Serve', path: '/who-we-serve' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];
