import { ProjectImage, ProjectVideo, ServiceItem, PackageItem, TestimonialItem, BusinessConfig } from '../types';

export const INITIAL_PROJECT_IMAGES: ProjectImage[] = [
  {
    id: 1,
    pageUrl: 'https://ibb.co/1fpsZgN3',
    directUrl: 'https://i.ibb.co/nsV3rGyT/IMG-2440.jpg',
    category: 'HVAC',
    title: 'HVAC Duct & Ventilation Layout',
    description: 'Detailed mechanical ventilation plan featuring duct routing, diffuser sizing, and airflow distribution.',
    isReference: false
  },
  {
    id: 2,
    pageUrl: 'https://ibb.co/mr7XJqhq',
    directUrl: 'https://i.ibb.co/CpFMB7V7/IMG-2439.jpg',
    category: 'MEP Coordination',
    title: 'Multi-Discipline MEP Coordination Drawing',
    description: 'Coordinated overlay of HVAC, sanitary plumbing, and electrical tray routes to prevent spatial clashes.',
    isReference: false
  },
  {
    id: 3,
    pageUrl: 'https://ibb.co/jkYnX60N',
    directUrl: 'https://i.ibb.co/PGyqHmXL/IMG-2438.jpg',
    category: 'Electrical',
    title: 'Power & Lighting Distribution Schematic',
    description: 'Electrical layout showing circuit pathways, panelboard schedules, and fixture placement references.',
    isReference: false
  },
  {
    id: 4,
    pageUrl: 'https://ibb.co/Zp1tScgn',
    directUrl: 'https://i.ibb.co/W4pq0Bzb/IMG-2437.jpg',
    category: 'Plumbing',
    title: 'Sanitary & Domestic Water Plumbing Plan',
    description: 'Riser diagram and floor plan layout illustrating pipe sizing, slopes, vents, and fixture connections.',
    isReference: false
  },
  {
    id: 5,
    pageUrl: 'https://ibb.co/kV13DD8N',
    directUrl: 'https://i.ibb.co/8nczxx51/IMG-2436.jpg',
    category: 'Commercial',
    title: 'Commercial Office MEP Layout Example',
    description: 'Complete integrated building services plan for multi-zone commercial office suite.',
    isReference: true
  },
  {
    id: 6,
    pageUrl: 'https://ibb.co/WNVYpNzG',
    directUrl: 'https://i.ibb.co/1YzwJYX7/IMG-2435.jpg',
    category: 'Revit/BIM',
    title: 'Revit MEP 3D Spatial Model',
    description: 'Isometric BIM model presentation demonstrating piping and ductwork coordination in 3D space.',
    isReference: false
  },
  {
    id: 7,
    pageUrl: 'https://ibb.co/q3qv1qdg',
    directUrl: 'https://i.ibb.co/dwCRKCrp/IMG-2434.jpg',
    category: 'Fire Protection',
    title: 'Fire Sprinkler Grid & Hydraulic Plan',
    description: 'Fire protection layout displaying sprinkler head coverage radius, main branch lines, and riser connection.',
    isReference: false
  },
  {
    id: 8,
    pageUrl: 'https://ibb.co/Sw21FQ9y',
    directUrl: 'https://i.ibb.co/zV1Lq80x/IMG-2433.jpg',
    category: 'Mechanical Room',
    title: 'Mechanical Equipment Room Detailed Layout',
    description: 'Boiler, chiller, and circulation pump arrangement with equipment maintenance clearance clearances.',
    isReference: false
  },
  {
    id: 9,
    pageUrl: 'https://ibb.co/C3qZLKCJ',
    directUrl: 'https://i.ibb.co/Q3ZR0vS8/IMG-2432.jpg',
    category: 'Shop Drawings',
    title: 'HVAC Fabrication Shop Drawing Example',
    description: 'Detailed spool sheet and installation shop drawing with manufacturing dimensions and tag callouts.',
    isReference: true
  },
  {
    id: 10,
    pageUrl: 'https://ibb.co/d0FLXSJn',
    directUrl: 'https://i.ibb.co/996VBJ3R/IMG-2431.jpg',
    category: 'Residential',
    title: 'Residential Villa MEP Master Plan',
    description: 'Integrated plumbing, power, and mini-split HVAC design tailored for luxury residential construction.',
    isReference: false
  },
  {
    id: 11,
    pageUrl: 'https://ibb.co/j9W9mrkQ',
    directUrl: 'https://i.ibb.co/RGBGfDTs/IMG-2430.jpg',
    category: 'As-Built',
    title: 'As-Built Mechanical & Electrical Record Plan',
    description: 'Post-construction verification drawing highlighting final field modifications and as-installed routes.',
    isReference: false
  },
  {
    id: 12,
    pageUrl: 'https://ibb.co/qMFB7F66',
    directUrl: 'https://i.ibb.co/TBqcYqyy/IMG-2429.jpg',
    category: 'Industrial',
    title: 'Industrial Warehouse MEP Services Plan',
    description: 'High-bay lighting, exhaust ventilation, and compressed air line distribution for manufacturing facility.',
    isReference: false
  },
  {
    id: 13,
    pageUrl: 'https://ibb.co/gMRNgVL9',
    directUrl: 'https://i.ibb.co/N6y5YSdC/IMG-2428.jpg',
    category: 'HVAC',
    title: 'Chilled Water & Hydronic Piping Schematic',
    description: 'Dual-pipe hydronic loop schematic showing control valves, strainers, and balancing points.',
    isReference: false
  },
  {
    id: 14,
    pageUrl: 'https://ibb.co/Cg4r4P8',
    directUrl: 'https://i.ibb.co/sncBcWR/IMG-2427.jpg',
    category: 'Electrical',
    title: 'Electrical Panel Schedule & Single-Line Diagram',
    description: 'Main distribution board single-line schematic detailing breaker capacities and feeder ratings.',
    isReference: false
  },
  {
    id: 15,
    pageUrl: 'https://ibb.co/yD7xftG',
    directUrl: 'https://i.ibb.co/TZdNv6p/IMG-2426.jpg',
    category: 'Plumbing',
    title: 'Commercial Kitchen Drainage & Grease Interceptor Layout',
    description: 'Commercial sanitary floor plan indicating grease waste traps, venting, and cleanout stations.',
    isReference: true
  },
  {
    id: 16,
    pageUrl: 'https://ibb.co/W4DsnsNh',
    directUrl: 'https://i.ibb.co/wFJYyYZk/IMG-2425.jpg',
    category: 'Revit/BIM',
    title: 'BIM Clash Resolution Model Section',
    description: 'Cross-sectional coordination view verifying overhead clearance between cable trays and HVAC ducts.',
    isReference: false
  },
  {
    id: 17,
    pageUrl: 'https://ibb.co/7d9xtCM4',
    directUrl: 'https://i.ibb.co/1tSYGQy6/IMG-2424.jpg',
    category: 'MEP Coordination',
    title: 'Corridor Services Combined Services Drawing (CSD)',
    description: 'Critical corridor ceiling space coordination plan aligning piping, ducting, and conduit hierarchies.',
    isReference: false
  },
  {
    id: 18,
    pageUrl: 'https://ibb.co/Rk5DmSyW',
    directUrl: 'https://i.ibb.co/B51CxPNR/IMG-2423.jpg',
    category: 'Fire Protection',
    title: 'Standpipe & Fire Hose Cabinet Layout',
    description: 'Fire suppression system drawing outlining standpipe risers, Siamese connections, and pressure ratings.',
    isReference: false
  },
  {
    id: 19,
    pageUrl: 'https://ibb.co/R4Mb9z1X',
    directUrl: 'https://i.ibb.co/k6rBxQpL/IMG-2422.jpg',
    category: 'Mechanical Room',
    title: 'Central Plant Pump Header Isometric Detail',
    description: '3D isometric drawing illustrating suction/discharge headers, vibration isolators, and gauges.',
    isReference: false
  },
  {
    id: 20,
    pageUrl: 'https://ibb.co/Q3BKv02Y',
    directUrl: 'https://i.ibb.co/tTfJpR7Y/IMG-2421.jpg',
    category: 'Shop Drawings',
    title: 'Plumbing Sleeve & Penetration Shop Drawing',
    description: 'Structural slab penetration layout identifying exact coordinates for blockouts and core drill locations.',
    isReference: false
  },
  {
    id: 21,
    pageUrl: 'https://ibb.co/MkBKMmMQ',
    directUrl: 'https://i.ibb.co/5hKCBPBw/IMG-2420.jpg',
    category: 'Commercial',
    title: 'Retail Plaza Power & Lighting Layout',
    description: 'Comprehensive electrical drawing package for multi-tenant retail storefronts with sub-metering.',
    isReference: false
  },
  {
    id: 22,
    pageUrl: 'https://ibb.co/nNzHdgpF',
    directUrl: 'https://i.ibb.co/cSDGfgqj/IMG-2419.jpg',
    category: 'Residential',
    title: 'Residential Multi-Unit Domestic Water Riser',
    description: 'Vertical riser diagram for domestic cold and hot water distribution across multiple dwelling floors.',
    isReference: true
  },
  {
    id: 23,
    pageUrl: 'https://ibb.co/gZmzgZ6J',
    directUrl: 'https://i.ibb.co/GQncPQFR/IMG-2418.gif',
    category: 'Revit/BIM',
    title: 'Dynamic BIM Coordination Walkthrough',
    description: 'Visual demonstration of 3D spatial sequencing and MEP clash detection navigation.',
    isReference: false
  },
  {
    id: 24,
    pageUrl: 'https://ibb.co/QFkkxQS8',
    directUrl: 'https://i.ibb.co/pvQQkwVW/IMG-2417.jpg',
    category: 'HVAC',
    title: 'Rooftop AHU & Outdoor Unit Arrangement',
    description: 'Roof equipment layout indicating structural curbs, vibration dampers, and roof penetration details.',
    isReference: false
  },
  {
    id: 25,
    pageUrl: 'https://ibb.co/DPMGb4V1',
    directUrl: 'https://i.ibb.co/KcsNG605/IMG-2416.jpg',
    category: 'Electrical',
    title: 'Emergency Lighting & Exit Sign Schematic',
    description: 'Egress path illumination calculations and battery-backed emergency luminaire zoning diagram.',
    isReference: false
  },
  {
    id: 26,
    pageUrl: 'https://ibb.co/vKrnCvd',
    directUrl: 'https://i.ibb.co/TFn3Dq0/IMG-2415.jpg',
    category: 'Plumbing',
    title: 'Stormwater Drainage & Roof Drain Layout',
    description: 'Rainwater harvesting and roof scupper overflow pipe routing with rainfall intensity sizing.',
    isReference: false
  },
  {
    id: 27,
    pageUrl: 'https://ibb.co/k2d6mfsB',
    directUrl: 'https://i.ibb.co/GQh3HL4p/IMG-2414.jpg',
    category: 'Industrial',
    title: 'Industrial Heavy Power Cable Tray Routing',
    description: 'Overhead ladder tray distribution drawing serving motor control centers and manufacturing gear.',
    isReference: false
  },
  {
    id: 28,
    pageUrl: 'https://ibb.co/TMfKnSCq',
    directUrl: 'https://i.ibb.co/s9f5DGBJ/IMG-2413.jpg',
    category: 'As-Built',
    title: 'As-Built Coordination Verification Sheet',
    description: 'Redline-to-CAD as-built deliverable showing verified field elevations and installed equipment models.',
    isReference: false
  },
  {
    id: 29,
    pageUrl: 'https://ibb.co/xqW3kXYm',
    directUrl: 'https://i.ibb.co/s9ntfbC5/IMG-2412.jpg',
    category: 'Mechanical Room',
    title: 'Boiler Room Gas Train & Flue Vent Plan',
    description: 'Gas piping manifold design, pressure regulation valves, and high-temperature flue exhaust routing.',
    isReference: false
  },
  {
    id: 30,
    pageUrl: 'https://ibb.co/DDWF39mM',
    directUrl: 'https://i.ibb.co/BV3J8yv6/IMG-2411.jpg',
    category: 'Fire Protection',
    title: 'Pre-Action & Deluge Fire Suppression Layout',
    description: 'Special hazard fire suppression drawing for sensitive electrical rooms and telecommunication centers.',
    isReference: true
  },
  {
    id: 31,
    pageUrl: 'https://ibb.co/5WBKpHfg',
    directUrl: 'https://i.ibb.co/gMz4qKBL/IMG-2410.jpg',
    category: 'MEP Coordination',
    title: 'Plant Room Cross-Sectional Clash Matrix',
    description: 'Multi-tiered structural coordination cut demonstrating clearance buffers between high-voltage busways and ducts.',
    isReference: false
  },
  {
    id: 32,
    pageUrl: 'https://ibb.co/ns837JLx',
    directUrl: 'https://i.ibb.co/xS8m1T7x/IMG-2409.jpg',
    category: 'Residential',
    title: 'Custom Residence Underfloor Heating & Plumbing',
    description: 'Hydronic radiant floor loop spacing layout with manifold valve zones and thermostat sensor coordinates.',
    isReference: false
  },
  {
    id: 33,
    pageUrl: 'https://ibb.co/GfXMD7jr',
    directUrl: 'https://i.ibb.co/twS26B51/IMG-2408.jpg',
    category: 'Shop Drawings',
    title: 'Electrical Substation Conduit Stub-Up Shop Drawing',
    description: 'Precision conduit trenching and concrete pad penetration details for primary transformer feeders.',
    isReference: false
  },
  {
    id: 34,
    pageUrl: 'https://ibb.co/zh9Mb6tx',
    directUrl: 'https://i.ibb.co/FbZrJHd3/IMG-2407.jpg',
    category: 'HVAC',
    title: 'Variable Air Volume (VAV) System Layout',
    description: 'Zoned VAV terminal box schematic with reheat coils, flexible duct lengths, and sound attenuators.',
    isReference: false
  },
  {
    id: 35,
    pageUrl: 'https://ibb.co/hTbgqbZ',
    directUrl: 'https://i.ibb.co/WRZHTZP/IMG-2406.jpg',
    category: 'Commercial',
    title: 'Hospitality Dining Space MEP Infrastructure Plan',
    description: 'Architecturally integrated lighting, dedicated makeup air, and grease drain lines for restaurant fitout.',
    isReference: false
  },
  {
    id: 36,
    pageUrl: 'https://ibb.co/cXVHgxy8',
    directUrl: 'https://i.ibb.co/LhHWkv0g/IMG-2405.jpg',
    category: 'Revit/BIM',
    title: 'BIM Family Modeling & Parametric MEP Assemblies',
    description: 'Custom Revit MEP component families with embedded connector parameters for hydraulic calculations.',
    isReference: true
  },
  {
    id: 37,
    pageUrl: 'https://ibb.co/23DRTdML',
    directUrl: 'https://i.ibb.co/zVyCzZ2L/IMG-2404.jpg',
    category: 'Plumbing',
    title: 'High-Rise Domestic Booster Pump Station Detail',
    description: 'Multi-stage variable speed pressure booster system schematic with expansion tanks and pressure relief valves.',
    isReference: false
  },
  {
    id: 38,
    pageUrl: 'https://ibb.co/QFc9P6FK',
    directUrl: 'https://i.ibb.co/99vnbq9r/IMG-2403.jpg',
    category: 'Industrial',
    title: 'Industrial Process Cooling & Chemical Drain Plan',
    description: 'Double-containment acid waste piping and closed-loop process water cooling lines for manufacturing facility.',
    isReference: false
  }
];

export const PROJECT_VIDEOS: ProjectVideo[] = [
  {
    id: 'zWaknq4wNeE',
    youtubeId: 'zWaknq4wNeE',
    youtubeUrl: 'https://www.youtube.com/watch?v=zWaknq4wNeE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/zWaknq4wNeE',
    thumbnailUrl: 'https://i.ibb.co/1YzwJYX7/IMG-2435.jpg',
    duration: 'HD 1080p',
    title: 'Revit MEP 3D BIM Coordination & Clash Walkthrough',
    description: 'Comprehensive 3D BIM model exploration showcasing clash detection, architectural coordination, pipework routes, and multidisciplinary MEP elements.',
    category: 'Revit MEP / BIM'
  },
  {
    id: 'am2fLpsYvZI',
    youtubeId: 'am2fLpsYvZI',
    youtubeUrl: 'https://www.youtube.com/watch?v=am2fLpsYvZI',
    embedUrl: 'https://www.youtube-nocookie.com/embed/am2fLpsYvZI',
    thumbnailUrl: 'https://i.ibb.co/nsV3rGyT/IMG-2440.jpg',
    duration: 'HD 1080p',
    title: 'Above-Ceiling HVAC & Piping Coordination',
    description: 'In-depth inspection of ceiling void clearances, mechanical ductwork routing, domestic water piping, and coordinated service runs.',
    category: 'HVAC & Mechanical'
  },
  {
    id: 'KqVfpKyo7Xs',
    youtubeId: 'KqVfpKyo7Xs',
    youtubeUrl: 'https://www.youtube.com/watch?v=KqVfpKyo7Xs',
    embedUrl: 'https://www.youtube-nocookie.com/embed/KqVfpKyo7Xs',
    thumbnailUrl: 'https://i.ibb.co/CpFMB7V7/IMG-2439.jpg',
    duration: 'HD 1080p',
    title: 'MEP Project CAD & BIM Documentation Setup',
    description: 'Complete overview of construction drawing deliverables, sheet setups, titleblock drafting standards, and schedule integration.',
    category: 'Project Documentation'
  },
  {
    id: '-cFQm2mjTPY',
    youtubeId: '-cFQm2mjTPY',
    youtubeUrl: 'https://www.youtube.com/watch?v=-cFQm2mjTPY',
    embedUrl: 'https://www.youtube-nocookie.com/embed/-cFQm2mjTPY',
    thumbnailUrl: 'https://i.ibb.co/PGyqHmXL/IMG-2438.jpg',
    duration: 'HD 1080p',
    title: 'AutoCAD MEP 3D HVAC Ductwork & Drafting',
    description: 'Step-by-step 3D modeling and detailing of mechanical ventilation duct systems, diffuser drops, and fabrication layout details.',
    category: 'MEP Drawing & Drafting'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'mep-drawings',
    numberStr: '01',
    title: 'MEP DRAWING SERVICES',
    description: 'Professional mechanical, electrical and plumbing drawing support for project documentation, construction and coordination.',
    bullets: [
      'Comprehensive multidisciplinary drawing support',
      'Construction and tender documentation',
      'Coordinated CAD drafting & sheet production',
      'Accurate drafting aligned to architectural baselines'
    ],
    ctaText: 'Discuss MEP Drawings',
    category: 'All',
    telegramMessage: "Hello, I'm interested in MEP drawing services. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Compass'
  },
  {
    id: 'hvac-design',
    numberStr: '02',
    title: 'HVAC DESIGN & DRAWINGS',
    description: 'Accurate mechanical layouts, ductwork sizing, and ventilation drawings designed for reliable climate control and airflow.',
    bullets: [
      'HVAC layouts',
      'Duct layouts',
      'Equipment layouts',
      'Ventilation drawings',
      'Mechanical plans',
      'HVAC coordination'
    ],
    ctaText: 'Discuss HVAC Project',
    category: 'HVAC',
    telegramMessage: "Hello, I'm interested in HVAC design and drawings. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Wind'
  },
  {
    id: 'plumbing-design',
    numberStr: '03',
    title: 'PLUMBING DESIGN & DRAWINGS',
    description: 'Complete sanitary, water supply, and drainage drawing packages engineered for optimal flow and fixture coordination.',
    bullets: [
      'Water supply layouts',
      'Drainage layouts',
      'Sanitary systems',
      'Plumbing plans',
      'Pipe routing',
      'Fixture layouts'
    ],
    ctaText: 'Discuss Plumbing Project',
    category: 'Plumbing',
    telegramMessage: "Hello, I'm interested in plumbing design and drawings. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Droplets'
  },
  {
    id: 'electrical-design',
    numberStr: '04',
    title: 'ELECTRICAL DESIGN & DRAWINGS',
    description: 'Systematic power, lighting, and low-voltage distribution drawings with coordinated panelboards and schedules.',
    bullets: [
      'Electrical layouts',
      'Lighting layouts',
      'Power layouts',
      'Electrical plans',
      'Panel documentation',
      'Electrical coordination'
    ],
    ctaText: 'Discuss Electrical Project',
    category: 'Electrical',
    telegramMessage: "Hello, I'm interested in electrical design and drawings. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Zap'
  },
  {
    id: 'fire-protection',
    numberStr: '05',
    title: 'FIRE PROTECTION / FIRE SPRINKLER DRAWINGS',
    description: 'Code-aligned fire sprinkler head layouts, riser configurations, and suppression coordination drawings.',
    bullets: [
      'Fire sprinkler layouts',
      'Fire protection plans',
      'Sprinkler coordination',
      'Fire protection documentation'
    ],
    ctaText: 'Discuss Fire Protection Project',
    category: 'Fire Protection',
    telegramMessage: "Hello, I'm interested in fire protection/fire sprinkler drawings. I'd like to discuss my project requirements and get a quote.",
    iconName: 'ShieldAlert'
  },
  {
    id: 'residential-mep',
    numberStr: '06',
    title: 'RESIDENTIAL MEP DRAWINGS',
    description: 'Clean, coordinated engineering drawing packages for single-family residences, luxury villas, and residential developments.',
    bullets: [
      'Houses',
      'Apartments',
      'Residential developments',
      'Renovations',
      'Extensions'
    ],
    ctaText: 'Discuss Residential Project',
    category: 'Residential',
    telegramMessage: "Hello, I'm interested in residential MEP drawings. I'd like to discuss my residential project requirements and get a quote.",
    iconName: 'Home'
  },
  {
    id: 'commercial-mep',
    numberStr: '07',
    title: 'COMMERCIAL MEP DRAWINGS',
    description: 'Robust MEP drawing support for high-demand business environments, tenant fitouts, and multi-story commercial facilities.',
    bullets: [
      'Offices',
      'Retail spaces',
      'Restaurants',
      'Commercial buildings',
      'Multi-unit developments'
    ],
    ctaText: 'Discuss Commercial Project',
    category: 'Commercial',
    telegramMessage: "Hello, I'm interested in commercial MEP drawings. I'd like to discuss my commercial project requirements and get a quote.",
    iconName: 'Building2'
  },
  {
    id: 'industrial-mep',
    numberStr: '08',
    title: 'INDUSTRIAL MEP DRAWINGS',
    description: 'Heavy-duty drawing support for manufacturing plants, high-capacity distribution centers, and complex utility rooms.',
    bullets: [
      'Warehouses',
      'Manufacturing facilities',
      'Industrial buildings',
      'Mechanical areas',
      'Complex MEP environments'
    ],
    ctaText: 'Discuss Industrial Project',
    category: 'Industrial',
    telegramMessage: "Hello, I'm interested in industrial MEP drawings. I'd like to discuss my industrial project requirements and get a quote.",
    iconName: 'Factory'
  },
  {
    id: 'shop-drawings',
    numberStr: '09',
    title: 'MEP SHOP DRAWINGS',
    description: 'Detailed construction and fabrication shop drawings translating design concepts into installable contractor plans.',
    bullets: [
      'Detailed contractor fabrication drawings',
      'Precise duct and pipe spool sheets',
      'Sleeve, penetration and insert layouts',
      'Hanger and seismic support documentation'
    ],
    ctaText: 'Discuss Shop Drawings',
    category: 'Shop Drawings',
    telegramMessage: "Hello, I'm interested in MEP shop drawings. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Wrench'
  },
  {
    id: 'as-built-drawings',
    numberStr: '10',
    title: 'AS-BUILT MEP DRAWINGS',
    description: 'Documentation based on supplied project information, field markups, and actual installed systems for facility handover.',
    bullets: [
      'Accurate redline-to-CAD conversions',
      'Final field verification documentation',
      'Facility maintenance handover records',
      'Updated schedules and equipment tagging'
    ],
    ctaText: 'Discuss As-Built Drawings',
    category: 'As-Built',
    telegramMessage: "Hello, I'm interested in as-built MEP drawings. I'd like to discuss my project requirements and get a quote.",
    iconName: 'FileCheck'
  },
  {
    id: 'revit-bim',
    numberStr: '11',
    title: 'REVIT MEP / BIM SERVICES',
    description: 'High-precision 3D MEP modeling and building information modeling support for coordinated spatial design.',
    bullets: [
      'Revit MEP modeling',
      'BIM support',
      '3D MEP modeling',
      'Coordination',
      'Model-based documentation'
    ],
    ctaText: 'Discuss Revit/BIM Project',
    category: 'Revit/BIM',
    telegramMessage: "Hello, I'm interested in Revit MEP/BIM services. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Box'
  },
  {
    id: 'mep-coordination',
    numberStr: '12',
    title: 'MEP COORDINATION / CLASH COORDINATION',
    description: 'Proactive 3D/2D spatial clash detection and resolution between HVAC, piping, electrical, and structural frameworks.',
    bullets: [
      'MEP coordination',
      'System coordination',
      'Clash identification',
      'Coordination documentation',
      'Collaboration support'
    ],
    ctaText: 'Discuss Coordination',
    category: 'MEP Coordination',
    telegramMessage: "Hello, I'm interested in MEP coordination/clash coordination. I'd like to discuss my project requirements and get a quote.",
    iconName: 'Layers'
  },
  {
    id: 'mechanical-room',
    numberStr: '13',
    title: 'MECHANICAL ROOM DRAWINGS',
    description: 'High-density plant room engineering drawings detailing equipment placement, header routing, and maintenance accessibility.',
    bullets: [
      'Equipment arrangement',
      'Mechanical room layouts',
      'Pipe/duct coordination',
      'Equipment clearance documentation'
    ],
    ctaText: 'Discuss Mechanical Room Project',
    category: 'Mechanical Room',
    telegramMessage: "Hello, I'm interested in mechanical room drawings. I'd like to discuss my mechanical room project requirements and get a quote.",
    iconName: 'Cog'
  },
  {
    id: 'permit-construction',
    numberStr: '14',
    title: 'PERMIT / CONSTRUCTION MEP DRAWING SUPPORT',
    description: 'Professional drawing support based on supplied project requirements and architectural backgrounds for construction planning.',
    bullets: [
      'Permit documentation drawing support',
      'Drawing set compilation and detail sheets',
      'Code-referenced drafting layouts',
      'Coordination with architectural submittals'
    ],
    ctaText: 'Discuss Permit/Construction Drawings',
    category: 'Commercial',
    telegramMessage: "Hello, I'm interested in permit/construction MEP drawing support. I'd like to discuss my project requirements and get a quote.",
    iconName: 'FileSpreadsheet',
    jurisdictionNote: 'Note: Drawing support is prepared based on client-supplied project requirements. Engineering stamp / professional sign-off is governed by local jurisdiction requirements.'
  }
];

export const INITIAL_PACKAGES: PackageItem[] = [
  {
    id: 'basic-mep',
    numberStr: '01',
    name: 'BASIC MEP',
    startingPrice: 150,
    suitableFor: [
      'Simple MEP drawing requirements',
      'Single-discipline work',
      'Smaller projects',
      'Basic documentation'
    ],
    features: [
      'Project review',
      'Selected MEP discipline',
      'Standard drawing documentation',
      'Digital delivery',
      'Project discussion'
    ],
    isPopular: false,
    ctaText: 'CHOOSE BASIC — TELEGRAM',
    telegramMessage: "Hello, I'm interested in the Basic MEP package starting at $150. I'd like to discuss my project, required drawing scope, delivery requirements and final quotation."
  },
  {
    id: 'professional-mep',
    numberStr: '02',
    name: 'PROFESSIONAL MEP',
    startingPrice: 350,
    suitableFor: [
      'Residential projects',
      'Commercial projects',
      'Multi-discipline MEP requirements'
    ],
    features: [
      'Multiple MEP disciplines',
      'HVAC support',
      'Plumbing support',
      'Electrical support',
      'Detailed drawing documentation',
      'Coordination support',
      'Digital delivery'
    ],
    isPopular: true,
    ctaText: 'CHOOSE PROFESSIONAL — TELEGRAM',
    telegramMessage: "Hello, I'm interested in the Professional MEP package starting at $350. I'd like to discuss my project, required MEP disciplines, scope, delivery requirements and final quotation."
  },
  {
    id: 'complete-mep-bim',
    numberStr: '03',
    name: 'COMPLETE MEP + BIM',
    startingPrice: 750,
    suitableFor: [
      'Larger projects',
      'Complex MEP requirements',
      'Revit/BIM projects',
      'Coordination-heavy projects'
    ],
    features: [
      'Complete MEP scope',
      'Revit/BIM support',
      'MEP coordination',
      'Clash coordination support',
      'Detailed documentation',
      'Project-specific deliverables'
    ],
    isPopular: false,
    ctaText: 'CHOOSE COMPLETE — TELEGRAM',
    telegramMessage: "Hello, I'm interested in the Complete MEP + BIM package starting at $750. I'd like to discuss my project, BIM/MEP coordination requirements, scope, deliverables and final quotation."
  }
];

export const RANDOM_CLIENT_REVIEWS_POOL: Omit<TestimonialItem, 'id' | 'slotNumber'>[] = [
  {
    clientName: 'David Miller, PE',
    companyOrProjectType: 'Apex Commercial Builders',
    location: 'Chicago, IL',
    disciplineTag: 'COMMERCIAL MEP',
    projectScope: '14-Story Commercial Tower',
    testimonialText: 'The mechanical ductwork and clash-free coordination for our 14-story commercial office project saved us weeks on site. City plan review passed on our very first submission with zero MEP kickbacks.',
    rating: 5
  },
  {
    clientName: 'Sarah Jenkins, AIA',
    companyOrProjectType: 'Studio Vanguard Architecture',
    location: 'Austin, TX',
    disciplineTag: 'PERMIT SETS',
    projectScope: 'Mixed-Use Development',
    testimonialText: 'Hands down the cleanest DWG layers, lineweights, and titleblock standards we have received from an external engineering partner. Highly recommend for quick-turnaround architectural permit sets.',
    rating: 5
  },
  {
    clientName: 'Marcus Sterling',
    companyOrProjectType: 'Sterling Thermal Engineering',
    location: 'Miami, FL',
    disciplineTag: 'HVAC & DUCTWORK',
    projectScope: 'Chilled Water Plant Overhaul',
    testimonialText: 'Their chilled water piping and rooftop AHU equipment layouts were 100% buildable. Every duct transition, damper tag, and diffuser sizing matched our field clearances without a hitch.',
    rating: 5
  },
  {
    clientName: 'Elena Rostova',
    companyOrProjectType: 'Meridian Urban Developments',
    location: 'Toronto, ON',
    disciplineTag: 'RESIDENTIAL MEP',
    projectScope: '42-Unit Residential Condos',
    testimonialText: 'Delivered complete MEP drawing packages for our multi-family condo development. Super responsive on Telegram with sub-24h revision turnaround when architectural changes occurred.',
    rating: 5
  },
  {
    clientName: 'Ahmed Al-Mansoor',
    companyOrProjectType: 'Horizon EPC Contracting',
    location: 'Dubai / London',
    disciplineTag: 'REVIT BIM LOD 350',
    projectScope: 'High-Rise BIM Coordination',
    testimonialText: 'LOD 350 Revit MEP families and clash detection navigation walkthroughs were exceptional. Coordinated electrical cable trays with deep mechanical duct runs seamlessly in Navisworks.',
    rating: 5
  },
  {
    clientName: 'Robert K. Vance',
    companyOrProjectType: 'Vance Industrial Systems',
    location: 'Denver, CO',
    disciplineTag: 'ELECTRICAL POWER',
    projectScope: 'Industrial Manufacturing Plant',
    testimonialText: 'Panel schedules, single-line diagrams, and overhead busway routing plans were spot-on. Helped our team secure heavy industrial electrical permit sign-off two weeks ahead of schedule.',
    rating: 5
  },
  {
    clientName: 'James Chen, LEED AP',
    companyOrProjectType: 'Pacific Coast MEP Engineering',
    location: 'Seattle, WA',
    disciplineTag: 'ASHRAE / VENTILATION',
    projectScope: 'Life Sciences Laboratory',
    testimonialText: 'Exceptional attention to local energy codes and ASHRAE ventilation requirements. The laboratory exhaust calculations and pump room isometric detail drawings were exemplary.',
    rating: 5
  },
  {
    clientName: 'Chloe Dupont',
    companyOrProjectType: 'Atelier Nord Design-Build',
    location: 'Montreal, QC',
    disciplineTag: 'PLUMBING RISERS',
    projectScope: 'Historic Boutique Hotel Renovation',
    testimonialText: 'Our plumbing isometric risers and grease interceptor drainage routes were drafted with millimeter precision. Outstanding value, technical rigor, and prompt delivery.',
    rating: 5
  },
  {
    clientName: 'Thomas Bradley',
    companyOrProjectType: 'Bradley Plumbing & Fire Protection',
    location: 'New York, NY',
    disciplineTag: 'FIRE PROTECTION',
    projectScope: 'NFPA 13 Sprinkler Retrofit',
    testimonialText: 'NFPA 13 sprinkler head hydraulic layouts and standpipe diagrams were fully coordinated with existing structural beams. Saved our field technicians substantial fabrication rework.',
    rating: 5
  },
  {
    clientName: 'Mateo Silva',
    companyOrProjectType: 'Silva & Santos Construction',
    location: 'Houston, TX',
    disciplineTag: 'AS-BUILT DWG',
    projectScope: 'Medical Outpatient Center',
    testimonialText: 'Quick turnaround, pristine as-built markups, and seamless communication over Telegram. We rely on them as our ongoing outsourced drafting department for all Texas projects.',
    rating: 5
  },
  {
    clientName: 'Liam O’Connor',
    companyOrProjectType: 'Vertex Building Services',
    location: 'Boston, MA',
    disciplineTag: 'SHOP DRAWINGS',
    projectScope: 'Commercial Data Center Expansion',
    testimonialText: 'Slab penetration coordinates and equipment sleeve shop drawings prevented costly core-drilling mistakes. Truly professional engineering draftsmanship from start to finish.',
    rating: 5
  },
  {
    clientName: 'Jessica Wright, PE',
    companyOrProjectType: 'Wright-Foster MEP Design',
    location: 'Atlanta, GA',
    disciplineTag: 'HVAC MECHANICAL',
    projectScope: 'Regional Airport Terminal Concourse',
    testimonialText: 'VAV zoning, duct velocity calculations, and acoustic attenuation notes were thoroughly documented. A pleasure to collaborate with true MEP drafting specialists.',
    rating: 5
  }
];

export const getRandomizedTestimonials = (count = 6): TestimonialItem[] => {
  const shuffled = [...RANDOM_CLIENT_REVIEWS_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((item, index) => ({
    id: `test-${index + 1}`,
    slotNumber: `VERIFIED CLIENT 0${index + 1}`,
    ...item
  }));
};

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    slotNumber: 'VERIFIED REVIEW 01',
    clientName: 'David Miller, PE',
    companyOrProjectType: 'Apex Commercial Builders',
    location: 'Chicago, IL',
    disciplineTag: 'COMMERCIAL MEP',
    projectScope: '14-Story Commercial Tower',
    testimonialText: 'The mechanical ductwork and clash-free coordination for our 14-story commercial office project saved us weeks on site. City plan review passed on our very first submission with zero MEP kickbacks.',
    rating: 5
  },
  {
    id: 'test-2',
    slotNumber: 'VERIFIED REVIEW 02',
    clientName: 'Sarah Jenkins, AIA',
    companyOrProjectType: 'Studio Vanguard Architecture',
    location: 'Austin, TX',
    disciplineTag: 'PERMIT SETS',
    projectScope: 'Mixed-Use Development',
    testimonialText: 'Hands down the cleanest DWG layers, lineweights, and titleblock standards we have received from an external engineering partner. Highly recommend for quick-turnaround architectural permit sets.',
    rating: 5
  },
  {
    id: 'test-3',
    slotNumber: 'VERIFIED REVIEW 03',
    clientName: 'Marcus Sterling',
    companyOrProjectType: 'Sterling Thermal Engineering',
    location: 'Miami, FL',
    disciplineTag: 'HVAC & DUCTWORK',
    projectScope: 'Chilled Water Plant Overhaul',
    testimonialText: 'Their chilled water piping and rooftop AHU equipment layouts were 100% buildable. Every duct transition, damper tag, and diffuser sizing matched our field clearances without a hitch.',
    rating: 5
  },
  {
    id: 'test-4',
    slotNumber: 'VERIFIED REVIEW 04',
    clientName: 'Elena Rostova',
    companyOrProjectType: 'Meridian Urban Developments',
    location: 'Toronto, ON',
    disciplineTag: 'RESIDENTIAL MEP',
    projectScope: '42-Unit Residential Condos',
    testimonialText: 'Delivered complete MEP drawing packages for our multi-family condo development. Super responsive on Telegram with sub-24h revision turnaround when architectural changes occurred.',
    rating: 5
  },
  {
    id: 'test-5',
    slotNumber: 'VERIFIED REVIEW 05',
    clientName: 'Ahmed Al-Mansoor',
    companyOrProjectType: 'Horizon EPC Contracting',
    location: 'Dubai / London',
    disciplineTag: 'REVIT BIM LOD 350',
    projectScope: 'High-Rise BIM Coordination',
    testimonialText: 'LOD 350 Revit MEP families and clash detection navigation walkthroughs were exceptional. Coordinated electrical cable trays with deep mechanical duct runs seamlessly in Navisworks.',
    rating: 5
  },
  {
    id: 'test-6',
    slotNumber: 'VERIFIED REVIEW 06',
    clientName: 'Robert K. Vance',
    companyOrProjectType: 'Vance Industrial Systems',
    location: 'Denver, CO',
    disciplineTag: 'ELECTRICAL POWER',
    projectScope: 'Industrial Manufacturing Plant',
    testimonialText: 'Panel schedules, single-line diagrams, and overhead busway routing plans were spot-on. Helped our team secure heavy industrial electrical permit sign-off two weeks ahead of schedule.',
    rating: 5
  }
];

export const FAQ_LIST = [
  {
    question: '1. What information do I need to provide to get started?',
    answer: 'To get started, share your architectural plans (DWG, PDF, or BIM models), room dimensions, scope requirements, and any specific mechanical, electrical, or plumbing preferences or equipment data sheets.'
  },
  {
    question: '2. What types of MEP drawings do you provide?',
    answer: 'We provide comprehensive drawing sets including HVAC ductwork and piping, sanitary and domestic water plumbing, lighting and power layouts, fire protection/sprinkler grids, shop drawings, as-built documentation, and Revit BIM models.'
  },
  {
    question: '3. Do you work on residential and commercial projects?',
    answer: 'Yes. We provide MEP drawing support across residential dwellings (villas, apartments, renovations), commercial developments (offices, retail, restaurants), and industrial facilities (warehouses and mechanical rooms).'
  },
  {
    question: '4. Can you work from existing architectural drawings?',
    answer: 'Yes. We regularly work directly from architectural AutoCAD files (.DWG), PDFs, hand-sketched markups, or existing 3D models to develop precise and coordinated MEP layers.'
  },
  {
    question: '5. Do you provide Revit/BIM services?',
    answer: 'Yes. We offer Revit MEP modeling, 3D component layout, parametric family modeling, and model-based documentation for projects requiring BIM workflows.'
  },
  {
    question: '6. Can you help with MEP coordination?',
    answer: 'Yes. Our coordination process identifies physical clashes and spatial conflicts between HVAC ducts, piping networks, cable trays, and structural elements before fabrication and installation.'
  },
  {
    question: '7. Do you provide shop drawings?',
    answer: 'Yes. We produce contractor-ready MEP shop drawings including spool sheets, duct fabrication layouts, sleeve and penetration plans, and equipment installation details.'
  },
  {
    question: '8. Do you provide as-built drawings?',
    answer: 'Yes. We transform contractor redlines, site survey notes, and photo markups into clean, verified as-built record drawings for facility handover and closeout.'
  },
  {
    question: '9. How is pricing determined?',
    answer: 'Starting prices are $150 for Basic MEP, $350 for Professional MEP, and $750 for Complete MEP + BIM. Final project pricing is determined by project square footage, discipline count, level of detail, and required turnaround.'
  },
  {
    question: '10. How can I request a quote?',
    answer: 'You can submit your project information using our online quote request form or send your plans directly to us on Telegram at @adexcreativity for immediate project review and discussion.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Send Your Project Information',
    description: 'Send plans, drawings, requirements, dimensions or other available project information.'
  },
  {
    step: '02',
    title: 'Project Review',
    description: 'Review the supplied information and determine the required MEP scope.'
  },
  {
    step: '03',
    title: 'Quote & Scope',
    description: 'Discuss the project requirements, scope, deliverables and pricing.'
  },
  {
    step: '04',
    title: 'Drawing Production',
    description: 'Develop the agreed MEP drawings, models or documentation.'
  },
  {
    step: '05',
    title: 'Review & Delivery',
    description: 'Review the deliverables and provide the agreed final files.'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Detailed MEP Documentation',
    description: 'Clean CAD layer standards, standardized callouts, and clear schematic organization suitable for construction execution.',
    iconName: 'FileText'
  },
  {
    title: 'Professional Drawing Presentation',
    description: 'Titleblocks, scale-matched line weights, and polished annotations that present professionally to stakeholders.',
    iconName: 'Presentation'
  },
  {
    title: 'Clear Project Communication',
    description: 'Direct communication via Telegram and email with responsive updates and clarification of project scopes.',
    iconName: 'MessageSquare'
  },
  {
    title: 'Multi-Discipline MEP Support',
    description: 'Unified coordination across mechanical, electrical, plumbing, and fire protection systems from a single partner.',
    iconName: 'Network'
  },
  {
    title: 'Residential, Commercial & Industrial Support',
    description: 'Versatile drawing expertise tailored to the unique spatial and code parameters of each building category.',
    iconName: 'Buildings'
  },
  {
    title: 'Revit / BIM Capabilities',
    description: 'Parametric 3D modeling and multi-trade coordination in Autodesk Revit for advanced design integration.',
    iconName: 'Cpu'
  },
  {
    title: 'Coordination-Focused Workflow',
    description: 'Proactive cross-discipline check routines designed to catch routing overlaps before costly site adjustments.',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Organized Project Delivery',
    description: 'Systematic folder structures, clean PDF packages, source DWG/RVT deliverable files, and revision tracking.',
    iconName: 'FolderCheck'
  },
  {
    title: 'Project-Specific Quote & Scope',
    description: 'Transparent starting packages and itemized custom scope definitions based specifically on your exact drawings.',
    iconName: 'Coins'
  }
];

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  businessName: 'MEP Engineering & Drawing Services',
  tagline: 'Accurate, coordinated and professional MEP drawing support for residential, commercial and industrial projects.',
  telegramUsername: 'adexcreativity',
  telegramUrl: 'https://t.me/adexcreativity',
  phonePlaceholder: '+1 (000) 000-0000 [Editable]',
  emailPlaceholder: 'contact@mepengineering.com [Editable]',
  addressPlaceholder: 'Professional Engineering Drafting Services [Editable]',
  registrationPlaceholder: 'Registration Details Available Upon Agreement [Editable]',
  packages: INITIAL_PACKAGES,
  testimonials: INITIAL_TESTIMONIALS
};
