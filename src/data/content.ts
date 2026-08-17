import {
  Cog,
  Scissors,
  Flame,
  Layers,
  Sparkles,
  Search,
  Wrench,
  Car,
  Cpu,
  Building2,
  Zap,
  Factory,
  Wheat,
  Plane,
  Gauge,
  ShieldCheck,
  FileCheck2,
  Microscope,
  MonitorCheck,
  ClipboardCheck,
  Target,
  Cpu as CpuIcon,
  Users,
  Truck,
  Award,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Quality', href: '#quality' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '50+', label: 'Industrial Clients' },
  { value: '99%', label: 'Quality Commitment' },
];

export type Product = {
  id: string;
  name: string;
  category: 'CNC' | 'Fabrication' | 'Components' | 'Assemblies';
  image: string;
  description: string;
  specs: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 'precision-components',
    name: 'Precision Components',
    category: 'Components',
    image:
      'https://images.pexels.com/photos/28752153/pexels-photo-28752153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Tight-tolerance machined components built to exact specifications for critical industrial applications.',
    specs: ['Tolerance ±0.01mm', 'Material: Steel, Aluminium, Brass', 'Surface Ra 0.8µm'],
  },
  {
    id: 'cnc-machined-parts',
    name: 'CNC Machined Parts',
    category: 'CNC',
    image:
      'https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Multi-axis CNC turning and milling for complex geometries with repeatable accuracy across batches.',
    specs: ['3 / 4 / 5-axis machining', 'Batch sizes 1–10,000+', 'Full CAD/CAM integration'],
  },
  {
    id: 'industrial-fabrication',
    name: 'Industrial Fabrication',
    category: 'Fabrication',
    image:
      'https://images.pexels.com/photos/15947586/pexels-photo-15947586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Heavy-duty structural fabrication and welded assemblies engineered for demanding load conditions.',
    specs: ['MIG / TIG / ARC welding', 'Up to 12m length', 'Certified welders'],
  },
  {
    id: 'sheet-metal-components',
    name: 'Sheet Metal Components',
    category: 'Fabrication',
    image:
      'https://images.pexels.com/photos/17180807/pexels-photo-17180807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Precision laser-cut and formed sheet metal parts for enclosures, brackets and structural panels.',
    specs: ['Laser cut up to 20mm', 'Press brake forming', 'Powder coating finish'],
  },
  {
    id: 'custom-machine-parts',
    name: 'Custom Machine Parts',
    category: 'CNC',
    image:
      'https://images.pexels.com/photos/8956445/pexels-photo-8956445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Bespoke machine components designed and manufactured to your drawings or reverse-engineered samples.',
    specs: ['Reverse engineering', 'Prototype to production', 'Material certification'],
  },
  {
    id: 'industrial-assemblies',
    name: 'Industrial Assemblies',
    category: 'Assemblies',
    image:
      'https://images.pexels.com/photos/38427501/pexels-photo-38427501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Complete sub-assembly and integration services with full traceability and functional testing.',
    specs: ['Sub-assembly & integration', 'Functional testing', 'Full traceability'],
  },
];

export const PRODUCT_FILTERS = ['All', 'CNC', 'Fabrication', 'Components', 'Assemblies'] as const;

export const CAPABILITIES = [
  { icon: Cog, title: 'CNC Machining', desc: 'Multi-axis turning and milling with micron-level precision.' },
  { icon: Scissors, title: 'Laser Cutting', desc: 'High-speed fibre laser cutting for sheet metal and plates.' },
  { icon: Flame, title: 'Welding & Fabrication', desc: 'Certified MIG, TIG and ARC welding for structural assemblies.' },
  { icon: Layers, title: 'Sheet Metal Manufacturing', desc: 'Cutting, forming and finishing of sheet components at scale.' },
  { icon: Sparkles, title: 'Surface Finishing', desc: 'Powder coating, anodising and plating for durable finishes.' },
  { icon: Search, title: 'Quality Inspection', desc: 'CMM and precision measurement at every production stage.' },
  { icon: Wrench, title: 'Custom Engineering', desc: 'Design support and reverse engineering from sample or drawing.' },
];

export const INDUSTRIES = [
  { name: 'Automotive', image: 'https://images.pexels.com/photos/14522449/pexels-photo-14522449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Engineering', image: 'https://images.pexels.com/photos/48799/drill-milling-milling-machine-drilling-48799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Construction', image: 'https://images.pexels.com/photos/36003961/pexels-photo-36003961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Electronics', image: 'https://images.pexels.com/photos/36522029/pexels-photo-36522029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Energy', image: 'https://images.pexels.com/photos/14614016/pexels-photo-14614016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Industrial Equipment', image: 'https://images.pexels.com/photos/7568428/pexels-photo-7568428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Agriculture', image: 'https://images.pexels.com/photos/13065279/pexels-photo-13065279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { name: 'Aerospace', image: 'https://images.pexels.com/photos/11493642/pexels-photo-11493642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Requirement', desc: 'We analyse your drawings, specifications and material requirements.' },
  { num: '02', title: 'Engineering & Design', desc: 'Our engineers refine the design and plan the manufacturing route.' },
  { num: '03', title: 'Production', desc: 'CNC machining, fabrication and forming on calibrated equipment.' },
  { num: '04', title: 'Quality Inspection', desc: 'In-process and post-process measurement against tolerances.' },
  { num: '05', title: 'Finishing', desc: 'Surface treatment, coating and final assembly to specification.' },
  { num: '06', title: 'Delivery', desc: 'Secure packaging and on-time dispatch to your facility.' },
];

export const QUALITY_ITEMS = [
  { icon: ShieldCheck, title: 'Quality Control', desc: 'Documented QC procedures at every stage of production.' },
  { icon: Gauge, title: 'Precision Inspection', desc: 'CMM and optical measurement to verify critical dimensions.' },
  { icon: Microscope, title: 'Material Testing', desc: 'Composition, hardness and mechanical property verification.' },
  { icon: MonitorCheck, title: 'Process Monitoring', desc: 'Real-time machine monitoring for consistent output.' },
  { icon: ClipboardCheck, title: 'Final Inspection', desc: 'Comprehensive final inspection before dispatch approval.' },
];

export const CERTIFICATIONS = [
  { title: 'ISO 9001:2015', desc: 'Quality Management System certified. Demo certification data.' },
  { title: 'Quality Assured', desc: 'Every batch inspected to documented acceptance criteria. Demo data.' },
  { title: 'Precision Manufacturing', desc: 'Calibrated equipment and traceable processes. Demo data.' },
];

export const PROJECTS = [
  {
    title: 'Automotive Precision Components',
    industry: 'Automotive',
    image: 'https://images.pexels.com/photos/8865189/pexels-photo-8865189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    solution: 'High-precision CNC components manufactured for automotive powertrain applications.',
    result: '50,000+ components delivered with zero PPM defects over 18 months.',
  },
  {
    title: 'Aerospace Structural Brackets',
    industry: 'Aerospace',
    image: 'https://images.pexels.com/photos/11493642/pexels-photo-11493642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    solution: '5-axis machined aluminium brackets with full material traceability.',
    result: 'Delivered to spec with 100% on-time dispatch across 12 batches.',
  },
  {
    title: 'Energy Sector Fabrication',
    industry: 'Energy',
    image: 'https://images.pexels.com/photos/14614016/pexels-photo-14614016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    solution: 'Heavy structural fabrication for power transmission equipment.',
    result: 'Reduced client lead time by 22% through optimised production routing.',
  },
  {
    title: 'Industrial Equipment Assemblies',
    industry: 'Industrial Equipment',
    image: 'https://images.pexels.com/photos/38427501/pexels-photo-38427501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    solution: 'Complete sub-assembly and functional testing of drive modules.',
    result: 'Assembled 300+ units with full traceability and zero field returns.',
  },
];

export const FACILITY_IMAGES = [
  { src: 'https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Modern Production Facility' },
  { src: 'https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'CNC Machines' },
  { src: 'https://images.pexels.com/photos/36003961/pexels-photo-36003961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Quality Inspection Area' },
  { src: 'https://images.pexels.com/photos/32845683/pexels-photo-32845683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Engineering Team' },
  { src: 'https://images.pexels.com/photos/28752153/pexels-photo-28752153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Finished Products' },
  { src: 'https://images.pexels.com/photos/17180807/pexels-photo-17180807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', label: 'Laser Cutting Bay' },
];

export const WHY_CHOOSE = [
  { icon: Target, title: 'High Precision', desc: 'Tolerances to ±0.01mm verified on calibrated measurement equipment.' },
  { icon: CpuIcon, title: 'Advanced Machinery', desc: 'Modern multi-axis CNC, laser and fabrication equipment.' },
  { icon: Users, title: 'Experienced Engineers', desc: 'A skilled engineering team with 15+ years of combined expertise.' },
  { icon: Award, title: 'Consistent Quality', desc: 'Repeatable processes that deliver the same result, batch after batch.' },
  { icon: Factory, title: 'Fast Production', desc: 'Optimised routing and capacity for short lead times.' },
  { icon: Truck, title: 'Reliable Delivery', desc: 'On-time dispatch with secure packaging and full traceability.' },
];

export const FAQS = [
  {
    q: 'What materials can you manufacture with?',
    a: 'We work with a wide range of metals including mild steel, stainless steel, aluminium, brass and copper, as well as engineering plastics. Material certificates are available on request.',
  },
  {
    q: 'Do you accept custom drawings and samples?',
    a: 'Yes. We manufacture to your drawings in STEP, IGES, DXF or PDF format. We can also reverse-engineer components from physical samples when drawings are unavailable.',
  },
  {
    q: 'What is your typical lead time?',
    a: 'Standard lead times range from 7 to 21 days depending on complexity and quantity. Prototype and urgent jobs can often be expedited — share your requirement for a confirmed schedule.',
  },
  {
    q: 'What quality documentation do you provide?',
    a: 'Every order includes dimensional inspection reports and material certificates where required. Full FAI (First Article Inspection) reports are available for critical components.',
  },
  {
    q: 'What are your minimum order quantities?',
    a: 'We support everything from single prototype parts to production runs of 10,000+ units. There is no rigid minimum — we quote based on your actual requirement.',
  },
];

export const PRODUCT_SERVICE_OPTIONS = [
  'Precision Components',
  'CNC Machined Parts',
  'Industrial Fabrication',
  'Sheet Metal Components',
  'Custom Machine Parts',
  'Industrial Assemblies',
  'Other / Not sure',
];

export { Car, Cpu, Building2, Zap, Factory, Wheat, Plane };
