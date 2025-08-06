const http = require('http');
const url = require('url');
const fs = require('fs');

// Sample course data with detailed information
const coursesData = [
  {
    id: 1,
    title: "Hospitality Front Desk Operations",
    educator: "Chef Rakesh Meena",
    category: "Hospitality",
    type: "blue-collar",
    price: "₹999",
    image: "https://images.pexels.com/photos/3215519/pexels-photo-3215519.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Master guest services, reservation systems, and front office management",
    fullDescription: "This comprehensive course provides you with essential skills for front desk operations in the hospitality industry. Learn guest service excellence, reservation management, and professional communication.",
    duration: "6 weeks",
    language: "Hindi & English",
    level: "Beginner",
    whatYouLearn: [
      "Guest check-in and check-out procedures",
      "Reservation system management",
      "Customer service excellence",
      "Hotel software operations",
      "Cash handling and billing",
      "Guest complaint resolution",
      "Professional communication skills"
    ],
    curriculum: [
      {
        module: "Module 1: Introduction to Hospitality",
        lessons: ["Industry overview", "Service standards", "Professional etiquette"]
      },
      {
        module: "Module 2: Front Desk Operations",
        lessons: ["Check-in procedures", "Check-out processes", "Room assignment strategies"]
      },
      {
        module: "Module 3: Reservation Management",
        lessons: ["Booking systems", "Rate management", "Overbooking strategies"]
      },
      {
        module: "Module 4: Customer Service Excellence",
        lessons: ["Guest interaction", "Problem solving", "Cultural sensitivity"]
      },
      {
        module: "Module 5: Technology & Systems",
        lessons: ["PMS software", "Online booking platforms", "Payment processing"]
      },
      {
        module: "Module 6: Professional Development",
        lessons: ["Career advancement", "Industry certifications", "Interview preparation"]
      }
    ],
    educatorBio: "Chef Rakesh Meena has over 15 years of experience in luxury hotels and resorts. He holds certifications from leading hospitality institutes and has trained over 500 front desk professionals.",
    educatorImage: "👨‍💼"
  },
  {
    id: 2,
    title: "Solar Panel Installation Technician",
    educator: "Engineer Priya Sharma",
    category: "Energy",
    type: "blue-collar",
    price: "ISA Available",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Learn sustainable energy solutions and solar installation techniques",
    fullDescription: "Become a certified solar panel installation technician and join the growing renewable energy sector. This hands-on course covers everything from basic electrical principles to advanced installation techniques.",
    duration: "8 weeks",
    language: "Hindi",
    level: "Intermediate",
    whatYouLearn: [
      "Solar panel types and specifications",
      "Electrical safety procedures",
      "Installation techniques and tools",
      "System design and sizing",
      "Maintenance and troubleshooting",
      "Grid connection procedures",
      "Safety protocols and certifications"
    ],
    curriculum: [
      {
        module: "Module 1: Solar Energy Fundamentals",
        lessons: ["Solar energy basics", "Photovoltaic principles", "System components"]
      },
      {
        module: "Module 2: Electrical Safety",
        lessons: ["Safety protocols", "Electrical hazards", "Personal protective equipment"]
      },
      {
        module: "Module 3: Installation Planning",
        lessons: ["Site assessment", "System design", "Permit requirements"]
      },
      {
        module: "Module 4: Hands-on Installation",
        lessons: ["Mounting systems", "Panel placement", "Wiring techniques"]
      },
      {
        module: "Module 5: System Integration",
        lessons: ["Inverter installation", "Grid connection", "Monitoring systems"]
      },
      {
        module: "Module 6: Maintenance & Troubleshooting",
        lessons: ["Regular maintenance", "Problem diagnosis", "Performance optimization"]
      },
      {
        module: "Module 7: Business & Certification",
        lessons: ["Industry certifications", "Starting your business", "Customer relations"]
      },
      {
        module: "Module 8: Advanced Topics",
        lessons: ["Battery storage", "Smart grid integration", "Future technologies"]
      }
    ],
    educatorBio: "Engineer Priya Sharma is a renewable energy specialist with 12 years of experience in solar installations. She has designed and supervised over 200 solar projects across India.",
    educatorImage: "👩‍🔬"
  },
  {
    id: 3,
    title: "Digital Marketing Assistant",
    educator: "Marketing Expert Amit Kumar",
    category: "IT",
    type: "white-collar",
    price: "₹1,499",
    image: "https://images.pexels.com/photos/1083792/pexels-photo-1083792.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Develop skills in social media marketing and online advertising",
    fullDescription: "Master digital marketing fundamentals and become a valuable asset to any marketing team. Learn social media strategy, content creation, and digital advertising techniques.",
    duration: "10 weeks",
    language: "English",
    level: "Beginner",
    whatYouLearn: [
      "Social media platform management",
      "Content creation and curation",
      "Digital advertising campaigns",
      "Analytics and reporting",
      "SEO basics and optimization",
      "Email marketing strategies",
      "Brand management online"
    ],
    curriculum: [
      {
        module: "Module 1: Digital Marketing Overview",
        lessons: ["Industry landscape", "Key platforms", "Career opportunities"]
      },
      {
        module: "Module 2: Social Media Fundamentals",
        lessons: ["Platform-specific strategies", "Content planning", "Community management"]
      },
      {
        module: "Module 3: Content Creation",
        lessons: ["Visual design basics", "Copywriting", "Video content"]
      },
      {
        module: "Module 4: Paid Advertising",
        lessons: ["Facebook Ads", "Google Ads", "Campaign optimization"]
      },
      {
        module: "Module 5: Analytics & Measurement",
        lessons: ["Google Analytics", "Social media metrics", "ROI calculation"]
      },
      {
        module: "Module 6: SEO Basics",
        lessons: ["Keyword research", "On-page optimization", "Link building"]
      },
      {
        module: "Module 7: Email Marketing",
        lessons: ["Campaign design", "Automation", "List building"]
      },
      {
        module: "Module 8: Tools & Software",
        lessons: ["Marketing automation", "Design tools", "Scheduling platforms"]
      },
      {
        module: "Module 9: Strategy Development",
        lessons: ["Campaign planning", "Budget management", "Brand consistency"]
      },
      {
        module: "Module 10: Career Preparation",
        lessons: ["Portfolio building", "Interview skills", "Freelancing basics"]
      }
    ],
    educatorBio: "Amit Kumar is a digital marketing expert with 8 years of experience helping brands grow online. He has managed campaigns for Fortune 500 companies and trained over 1000 marketers.",
    educatorImage: "👨‍💻"
  },
  {
    id: 4,
    title: "Business Administration Basics",
    educator: "MBA Consultant Neha Gupta",
    category: "Management",
    type: "white-collar",
    price: "₹1,999",
    image: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Build foundational knowledge in business operations and management",
    fullDescription: "Develop essential business administration skills that are crucial for any professional environment. Learn management principles, business communication, and operational excellence.",
    duration: "12 weeks",
    language: "Hindi & English",
    level: "Beginner",
    whatYouLearn: [
      "Business communication skills",
      "Project management fundamentals",
      "Financial basics and budgeting",
      "Team leadership principles",
      "Office administration procedures",
      "Strategic thinking and planning",
      "Customer relationship management"
    ],
    curriculum: [
      {
        module: "Module 1: Business Fundamentals",
        lessons: ["Business types", "Organizational structure", "Industry analysis"]
      },
      {
        module: "Module 2: Communication Skills",
        lessons: ["Professional writing", "Presentation skills", "Meeting management"]
      },
      {
        module: "Module 3: Project Management",
        lessons: ["Planning techniques", "Resource allocation", "Timeline management"]
      },
      {
        module: "Module 4: Financial Literacy",
        lessons: ["Budget preparation", "Financial statements", "Cost analysis"]
      },
      {
        module: "Module 5: Leadership Principles",
        lessons: ["Team dynamics", "Motivation techniques", "Conflict resolution"]
      },
      {
        module: "Module 6: Operations Management",
        lessons: ["Process optimization", "Quality control", "Efficiency improvement"]
      },
      {
        module: "Module 7: Customer Relations",
        lessons: ["Customer service", "Relationship building", "Feedback management"]
      },
      {
        module: "Module 8: Technology in Business",
        lessons: ["Business software", "Digital transformation", "Automation tools"]
      },
      {
        module: "Module 9: Strategic Planning",
        lessons: ["SWOT analysis", "Goal setting", "Performance measurement"]
      },
      {
        module: "Module 10: Professional Development",
        lessons: ["Career planning", "Networking", "Continuous learning"]
      },
      {
        module: "Module 11: Ethics & Compliance",
        lessons: ["Business ethics", "Legal compliance", "Corporate responsibility"]
      },
      {
        module: "Module 12: Capstone Project",
        lessons: ["Real-world application", "Case studies", "Final presentation"]
      }
    ],
    educatorBio: "Neha Gupta is an MBA consultant with 10 years of experience in business strategy and operations. She has helped over 50 companies optimize their processes and has mentored 300+ professionals.",
    educatorImage: "👩‍💼"
  },
  {
    id: 5,
    title: "Mobile App Development Fundamentals",
    educator: "Tech Lead Rohit Singh",
    category: "Technology",
    type: "white-collar",
    price: "₹2,999",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Learn to build mobile apps for Android and iOS platforms",
    fullDescription: "Master mobile app development using React Native and Flutter. Build real-world applications and prepare for a career in the booming mobile development industry.",
    duration: "16 weeks",
    language: "English",
    level: "Intermediate",
    whatYouLearn: [
      "React Native fundamentals",
      "Flutter development basics",
      "Mobile UI/UX design principles",
      "API integration and data management",
      "App store deployment process",
      "Performance optimization techniques",
      "Cross-platform development strategies"
    ],
    curriculum: [
      {
        module: "Module 1: Mobile Development Overview",
        lessons: ["Platform comparison", "Development environment setup", "Market analysis"]
      },
      {
        module: "Module 2: React Native Basics",
        lessons: ["Components and props", "State management", "Navigation patterns"]
      },
      {
        module: "Module 3: Flutter Introduction",
        lessons: ["Dart programming", "Widget system", "Layout building"]
      },
      {
        module: "Module 4: Mobile UI Design",
        lessons: ["Design systems", "Responsive layouts", "User experience principles"]
      },
      {
        module: "Module 5: Data & APIs",
        lessons: ["REST API integration", "Local storage", "State management solutions"]
      },
      {
        module: "Module 6: App Deployment",
        lessons: ["Google Play Store", "Apple App Store", "Beta testing"]
      }
    ],
    educatorBio: "Rohit Singh is a senior mobile developer with 10+ years building apps for startups and enterprises. His apps have been downloaded over 5 million times.",
    educatorImage: "👨‍💻"
  },
  {
    id: 6,
    title: "Automotive Technician Certification",
    educator: "Master Mechanic Vikram Patel",
    category: "Automotive",
    type: "blue-collar",
    price: "₹1,599",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete automotive repair and maintenance training",
    fullDescription: "Become a certified automotive technician with comprehensive training in modern vehicle systems, diagnostics, and repair techniques. High demand for skilled mechanics in India's growing automotive sector.",
    duration: "20 weeks",
    language: "Hindi",
    level: "Beginner",
    whatYouLearn: [
      "Engine diagnostics and repair",
      "Electrical system troubleshooting",
      "Brake and suspension systems",
      "Modern vehicle electronics",
      "Preventive maintenance procedures",
      "Customer service and estimation",
      "Workshop safety protocols"
    ],
    curriculum: [
      {
        module: "Module 1: Automotive Fundamentals",
        lessons: ["Vehicle systems overview", "Engine principles", "Safety procedures"]
      },
      {
        module: "Module 2: Engine Systems",
        lessons: ["Internal combustion engines", "Fuel injection systems", "Cooling systems"]
      },
      {
        module: "Module 3: Electrical Systems",
        lessons: ["Wiring diagrams", "Battery and charging", "Electronic control units"]
      },
      {
        module: "Module 4: Drivetrain & Transmission",
        lessons: ["Manual transmissions", "Automatic systems", "Differential repair"]
      },
      {
        module: "Module 5: Brake & Suspension",
        lessons: ["Brake system components", "Hydraulic principles", "Suspension geometry"]
      },
      {
        module: "Module 6: Diagnostic Tools",
        lessons: ["OBD scanners", "Multimeter usage", "Oscilloscope basics"]
      },
      {
        module: "Module 7: Business Skills",
        lessons: ["Customer communication", "Shop management", "Pricing strategies"]
      }
    ],
    educatorBio: "Vikram Patel has 18 years of experience in automotive repair and has certified over 800 technicians. He specializes in modern vehicle diagnostics and hybrid systems.",
    educatorImage: "👨‍🔧"
  },
  {
    id: 7,
    title: "Healthcare Assistant & Patient Care",
    educator: "Dr. Meera Jain",
    category: "Healthcare",
    type: "blue-collar",
    price: "₹1,299",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Essential skills for healthcare support and patient assistance",
    fullDescription: "Train to become a healthcare assistant with skills in patient care, medical administration, and healthcare support. Address the growing demand for healthcare workers in India.",
    duration: "14 weeks",
    language: "Hindi & English",
    level: "Beginner",
    whatYouLearn: [
      "Patient care fundamentals",
      "Medical terminology and documentation",
      "Infection control procedures",
      "Vital signs measurement",
      "Emergency response basics",
      "Medical equipment handling",
      "Healthcare communication skills"
    ],
    curriculum: [
      {
        module: "Module 1: Healthcare Fundamentals",
        lessons: ["Healthcare system overview", "Professional ethics", "Patient rights"]
      },
      {
        module: "Module 2: Patient Care Basics",
        lessons: ["Personal hygiene assistance", "Mobility support", "Comfort measures"]
      },
      {
        module: "Module 3: Medical Terminology",
        lessons: ["Anatomical terms", "Medical abbreviations", "Documentation standards"]
      },
      {
        module: "Module 4: Infection Control",
        lessons: ["Sterilization techniques", "Personal protective equipment", "Isolation procedures"]
      },
      {
        module: "Module 5: Vital Signs & Monitoring",
        lessons: ["Blood pressure measurement", "Temperature monitoring", "Pulse assessment"]
      },
      {
        module: "Module 6: Emergency Procedures",
        lessons: ["CPR basics", "First aid", "Emergency protocols"]
      },
      {
        module: "Module 7: Communication & Documentation",
        lessons: ["Patient interaction", "Medical records", "Team communication"]
      }
    ],
    educatorBio: "Dr. Meera Jain is a healthcare administrator with 15 years of experience in patient care and medical training. She has developed training programs for over 500 healthcare assistants.",
    educatorImage: "👩‍⚕️"
  },
  {
    id: 8,
    title: "E-commerce & Online Business",
    educator: "Business Coach Arjun Sharma",
    category: "Business",
    type: "white-collar",
    price: "₹1,799",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Start and scale your online business in the digital economy",
    fullDescription: "Learn to build and grow an e-commerce business from scratch. Understand online marketplaces, digital payments, logistics, and customer acquisition in India's booming e-commerce sector.",
    duration: "12 weeks",
    language: "Hindi & English",
    level: "Beginner",
    whatYouLearn: [
      "E-commerce platform selection",
      "Product sourcing and inventory management",
      "Digital marketing for e-commerce",
      "Payment gateway integration",
      "Supply chain and logistics",
      "Customer service and retention",
      "Legal and compliance requirements"
    ],
    curriculum: [
      {
        module: "Module 1: E-commerce Fundamentals",
        lessons: ["Market research", "Business model selection", "Platform comparison"]
      },
      {
        module: "Module 2: Product & Inventory",
        lessons: ["Product sourcing", "Supplier relations", "Inventory management"]
      },
      {
        module: "Module 3: Online Store Setup",
        lessons: ["Website creation", "Product listings", "Payment integration"]
      },
      {
        module: "Module 4: Digital Marketing",
        lessons: ["SEO for e-commerce", "Social media marketing", "Paid advertising"]
      },
      {
        module: "Module 5: Operations & Fulfillment",
        lessons: ["Order processing", "Shipping solutions", "Returns management"]
      },
      {
        module: "Module 6: Growth & Scaling",
        lessons: ["Analytics and optimization", "Expansion strategies", "Team building"]
      }
    ],
    educatorBio: "Arjun Sharma is an e-commerce expert who has helped launch over 200 online businesses. His clients have generated ₹50+ crores in online sales.",
    educatorImage: "👨‍💼"
  },
  {
    id: 9,
    title: "Heavy Equipment Operation",
    educator: "Operator Ravi Kumar",
    category: "Construction",
    type: "blue-collar",
    price: "₹2,199",
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional training for construction equipment operation",
    fullDescription: "Master the operation of heavy construction equipment including excavators, bulldozers, and cranes. Meet the high demand for skilled operators in India's infrastructure boom.",
    duration: "8 weeks",
    language: "Hindi",
    level: "Intermediate",
    whatYouLearn: [
      "Equipment operation fundamentals",
      "Safety protocols and procedures",
      "Maintenance and pre-operation checks",
      "Load calculations and site planning",
      "Equipment-specific operations",
      "Workplace communication and teamwork",
      "Industry regulations and compliance"
    ],
    curriculum: [
      {
        module: "Module 1: Safety & Regulations",
        lessons: ["OSHA standards", "Site safety", "Personal protective equipment"]
      },
      {
        module: "Module 2: Equipment Fundamentals",
        lessons: ["Hydraulic systems", "Engine basics", "Control systems"]
      },
      {
        module: "Module 3: Excavator Operation",
        lessons: ["Basic controls", "Digging techniques", "Load handling"]
      },
      {
        module: "Module 4: Bulldozer & Grader",
        lessons: ["Earthmoving operations", "Grading techniques", "Blade control"]
      },
      {
        module: "Module 5: Crane Operation",
        lessons: ["Load charts", "Rigging basics", "Signaling systems"]
      },
      {
        module: "Module 6: Maintenance & Troubleshooting",
        lessons: ["Daily inspections", "Basic repairs", "Service schedules"]
      }
    ],
    educatorBio: "Ravi Kumar has 20+ years of heavy equipment operation experience and has trained over 1000 operators for major construction projects across India.",
    educatorImage: "👨‍🏭"
  },
  {
    id: 10,
    title: "Financial Services & Banking",
    educator: "Banking Expert Kavita Agarwal",
    category: "Finance",
    type: "white-collar",
    price: "₹1,699",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Banking operations, financial products, and customer service",
    fullDescription: "Prepare for a career in banking and financial services with comprehensive training in banking operations, financial products, and customer relationship management.",
    duration: "10 weeks",
    language: "Hindi & English",
    level: "Beginner",
    whatYouLearn: [
      "Banking fundamentals and regulations",
      "Customer account management",
      "Loan processing and credit analysis",
      "Investment and insurance products",
      "Digital banking systems",
      "Compliance and risk management",
      "Sales and customer service skills"
    ],
    curriculum: [
      {
        module: "Module 1: Banking Fundamentals",
        lessons: ["Banking system overview", "RBI regulations", "Types of banks"]
      },
      {
        module: "Module 2: Account Operations",
        lessons: ["Account opening", "Transaction processing", "KYC procedures"]
      },
      {
        module: "Module 3: Credit & Loans",
        lessons: ["Loan types", "Credit assessment", "Documentation"]
      },
      {
        module: "Module 4: Investment Products",
        lessons: ["Mutual funds", "Insurance products", "Fixed deposits"]
      },
      {
        module: "Module 5: Digital Banking",
        lessons: ["Core banking systems", "Mobile banking", "Digital payments"]
      },
      {
        module: "Module 6: Customer Service",
        lessons: ["Communication skills", "Problem resolution", "Sales techniques"]
      },
      {
        module: "Module 7: Compliance & Risk",
        lessons: ["Anti-money laundering", "Fraud prevention", "Audit procedures"]
      }
    ],
    educatorBio: "Kavita Agarwal is a banking professional with 16 years of experience in retail and corporate banking. She has managed teams across multiple branches and trained 300+ banking professionals.",
    educatorImage: "👩‍💼"
  },
  {
    id: 11,
    title: "Food Production & Commercial Cooking",
    educator: "Executive Chef Sunil Reddy",
    category: "Hospitality",
    type: "blue-collar",
    price: "₹1,399",
    image: "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional commercial kitchen operations and food production",
    fullDescription: "Master commercial food production techniques for restaurants, hotels, and catering operations. Learn large-scale cooking, kitchen management, and food safety standards.",
    duration: "12 weeks",
    language: "Hindi",
    level: "Intermediate",
    whatYouLearn: [
      "Large-scale food preparation techniques",
      "Kitchen equipment operation and maintenance",
      "Food safety and HACCP principles",
      "Menu planning and cost control",
      "Team leadership and kitchen management",
      "International cuisine preparation",
      "Inventory and supply chain management"
    ],
    curriculum: [
      {
        module: "Module 1: Commercial Kitchen Basics",
        lessons: ["Kitchen hierarchy", "Equipment overview", "Safety protocols"]
      },
      {
        module: "Module 2: Food Safety & Hygiene",
        lessons: ["HACCP principles", "Food storage", "Contamination prevention"]
      },
      {
        module: "Module 3: Cooking Techniques",
        lessons: ["Bulk cooking methods", "Sauce preparation", "Protein cookery"]
      },
      {
        module: "Module 4: Menu Development",
        lessons: ["Recipe standardization", "Cost calculation", "Nutritional planning"]
      },
      {
        module: "Module 5: Kitchen Management",
        lessons: ["Workflow optimization", "Staff scheduling", "Quality control"]
      },
      {
        module: "Module 6: Specialized Cuisines",
        lessons: ["Indian regional foods", "Continental cuisine", "Asian preparations"]
      }
    ],
    educatorBio: "Executive Chef Sunil Reddy has 22 years of experience in hotel kitchens and has managed food operations for events serving 10,000+ guests. He has trained over 600 commercial cooks.",
    educatorImage: "👨‍🍳"
  },
  {
    id: 12,
    title: "Cyber Security Fundamentals",
    educator: "Security Expert Pradeep Nair",
    category: "Technology",
    type: "white-collar",
    price: "₹2,499",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Essential cybersecurity skills for the digital age",
    fullDescription: "Learn cybersecurity fundamentals to protect organizations from digital threats. High demand field with excellent career growth prospects in India's digital transformation.",
    duration: "14 weeks",
    language: "English",
    level: "Intermediate",
    whatYouLearn: [
      "Network security fundamentals",
      "Threat detection and incident response",
      "Security tools and technologies",
      "Risk assessment and management",
      "Compliance and governance",
      "Ethical hacking basics",
      "Security awareness and training"
    ],
    curriculum: [
      {
        module: "Module 1: Security Fundamentals",
        lessons: ["CIA triad", "Threat landscape", "Security frameworks"]
      },
      {
        module: "Module 2: Network Security",
        lessons: ["Firewalls", "VPN technologies", "Intrusion detection"]
      },
      {
        module: "Module 3: System Security",
        lessons: ["Access controls", "Endpoint protection", "Patch management"]
      },
      {
        module: "Module 4: Threat Analysis",
        lessons: ["Malware analysis", "Vulnerability assessment", "Penetration testing"]
      },
      {
        module: "Module 5: Incident Response",
        lessons: ["Incident handling", "Forensics basics", "Recovery procedures"]
      },
      {
        module: "Module 6: Compliance & Governance",
        lessons: ["Regulatory requirements", "Policy development", "Audit procedures"]
      },
      {
        module: "Module 7: Practical Applications",
        lessons: ["Security tools", "Case studies", "Hands-on labs"]
      }
    ],
    educatorBio: "Pradeep Nair is a cybersecurity consultant with 12 years of experience protecting organizations from cyber threats. He holds CISSP and CEH certifications and has trained 400+ security professionals.",
    educatorImage: "👨‍💻"
  }
];

const getHomePage = () => `
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Phoenix - Aapka Hunar, Aapka Bhavishya</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d47a1 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: rgba(0, 0, 0, 0.95);
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(13, 71, 161, 0.3);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2196f3;
          text-decoration: none;
          text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #2196f3;
          text-shadow: 0 0 8px rgba(33, 150, 243, 0.6);
        }

        .nav-links a.active {
          color: #2196f3;
          font-weight: 600;
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #2196f3, #1976d2);
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(13,71,161,0.6) 100%);
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 80px;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%232196f3;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%230d47a1;stop-opacity:0.2" /></linearGradient></defs><rect width="600" height="600" fill="url(%23grad1)"/><circle cx="450" cy="150" r="80" fill="%232196f3" opacity="0.1"/><circle cx="500" cy="300" r="60" fill="%231976d2" opacity="0.15"/><circle cx="350" cy="450" r="100" fill="%230d47a1" opacity="0.1"/><path d="M300,200 Q400,150 500,200 T700,200" stroke="%232196f3" stroke-width="3" fill="none" opacity="0.3"/></svg>') no-repeat center;
          background-size: contain;
          z-index: 1;
        }

        .hero-content {
          text-align: left;
          max-width: 600px;
          z-index: 2;
          position: relative;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #ffffff;
          line-height: 1.1;
          text-shadow: 0 0 20px rgba(33, 150, 243, 0.3);
        }

        .hero-content .highlight {
          background: linear-gradient(45deg, #2196f3, #64b5f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: #e3f2fd;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #2196f3, #1976d2);
          color: white;
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
        }

        .cta-button:hover {
          background: linear-gradient(45deg, #1976d2, #1565c0);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
        }

        /* How it Works Section */
        .how-it-works {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          margin: 40px 0;
          border-radius: 20px;
          border: 1px solid rgba(33, 150, 243, 0.2);
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2196f3;
          text-shadow: 0 0 20px rgba(33, 150, 243, 0.4);
        }

        .section-subtitle {
          text-align: center;
          font-size: 1rem;
          color: #e3f2fd;
          margin-bottom: 4rem;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .step-card {
          background: rgba(0, 0, 0, 0.6);
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(33, 150, 243, 0.3);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .step-card:hover {
          border-color: #2196f3;
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
          transform: translateY(-5px);
        }

        .step-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #2196f3, #1976d2);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 20px rgba(33, 150, 243, 0.4);
        }

        .step-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #2196f3;
          font-weight: 600;
        }

        .step-card p {
          color: #e3f2fd;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Impact Statistics */
        .client-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .impact-stat {
          text-align: center;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 8px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          min-width: 150px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .impact-stat:hover {
          border-color: #2196f3;
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #2196f3;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 15px rgba(33, 150, 243, 0.5);
        }

        .stat-label {
          font-size: 0.9rem;
          color: #e3f2fd;
          font-weight: 500;
        }

        /* Services Section */
        .services-section {
          padding: 80px 0;
          background: rgba(13, 71, 161, 0.2);
          backdrop-filter: blur(10px);
          margin: 40px 0;
          border-radius: 20px;
          border: 1px solid rgba(33, 150, 243, 0.2);
        }

        /* Featured Courses Section */
        .featured-courses {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          margin: 40px 0;
          border-radius: 20px;
          border: 1px solid rgba(33, 150, 243, 0.2);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .course-card {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(33, 150, 243, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .course-card:hover {
          border-color: #2196f3;
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
          transform: translateY(-5px);
        }

        .course-image {
          height: 160px;
          background: linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(13, 71, 161, 0.3) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: #2196f3;
          overflow: hidden;
          position: relative;
        }

        .course-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .course-image:hover img {
          transform: scale(1.05);
        }

        .course-content {
          padding: 1.5rem;
        }

        .course-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: #2196f3;
          font-weight: 600;
        }

        .course-card p {
          color: #e3f2fd;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .learn-more-btn {
          background: linear-gradient(45deg, #2196f3, #1976d2);
          color: white;
          padding: 8px 20px;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .learn-more-btn:hover {
          background: linear-gradient(45deg, #1976d2, #1565c0);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .steps-container {
            grid-template-columns: 1fr;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .cta-button {
            padding: 12px 30px;
            font-size: 1.1rem;
          }
        }
      </style>
    </head>
    <body>
      <!-- Navigation -->
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <a href="/" class="logo">Phoenix</a>
            <div class="nav-links">
              <a href="/" class="active">Home</a>
              <a href="/courses">Courses</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1>Bridging India's <br><span class="highlight">Skills Gap</span></h1>
            <p>Empowering underprivileged youth through industry-vetted training for high-demand blue-collar and white-collar jobs. Creating a direct pipeline from learning to employment.</p>
            <a href="/courses" class="cta-button">Start Your Journey</a>
          </div>
        </div>
      </section>

      <!-- Impact Section -->
      <section class="how-it-works">
        <div class="container">
          <h2 class="section-title">Our Impact</h2>
          <p class="section-subtitle">Transforming lives through skills development and economic mobility</p>
          <div class="client-logos">
            <div class="impact-stat">
              <div class="stat-number">500+</div>
              <div class="stat-label">Youth Trained</div>
            </div>
            <div class="impact-stat">
              <div class="stat-number">85%</div>
              <div class="stat-label">Employment Rate</div>
            </div>
            <div class="impact-stat">
              <div class="stat-number">50+</div>
              <div class="stat-label">Industry Partners</div>
            </div>
            <div class="impact-stat">
              <div class="stat-number">Udaipur</div>
              <div class="stat-label">Starting Point</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Approach Section -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Our Hybrid Learning <br>Approach</h2>
          <p class="section-subtitle">Combining digital accessibility with hands-on training for maximum impact</p>
          <div class="steps-container">
            <div class="step-card">
              <div class="step-icon">📱</div>
              <h3>Mobile Platform</h3>
              <p>User-friendly mobile learning platform designed for accessibility, allowing learners to study anytime, anywhere with industry-vetted course content.</p>
            </div>
            <div class="step-card">
              <div class="step-icon">🔧</div>
              <h3>Hands-on Workshops</h3>
              <p>Practical training sessions that provide real-world experience and skills application, ensuring job-readiness for both blue-collar and white-collar roles.</p>
            </div>
            <div class="step-card">
              <div class="step-icon">💼</div>
              <h3>Employment Pipeline</h3>
              <p>Direct connections to employment opportunities through our industry partnerships, creating a seamless transition from training to sustainable careers.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses Section -->
      <section class="featured-courses" id="courses">
        <div class="container">
          <h2 class="section-title">Industry-Vetted Training Programs</h2>
          <p class="section-subtitle">High-demand courses designed to bridge the skills gap and create employment opportunities</p>
          <div class="courses-grid">
            <div class="course-card" onclick="window.location.href='/courses/1'">
              <div class="course-image">
                <img src="https://images.pexels.com/photos/3215519/pexels-photo-3215519.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hotel front desk reception" loading="lazy">
              </div>
              <div class="course-content">
                <h3>Hospitality Front Desk Operations</h3>
                <p>Master guest services, reservation systems, and front office management in the hospitality industry.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/1'">Learn More</button>
              </div>
            </div>
            <div class="course-card" onclick="window.location.href='/courses/2'">
              <div class="course-image">
                <img src="https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Solar panel installation technician" loading="lazy">
              </div>
              <div class="course-content">
                <h3>Solar Panel Installation Technician</h3>
                <p>Learn sustainable energy solutions and become certified in solar panel installation and maintenance.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/2'">Learn More</button>
              </div>
            </div>
            <div class="course-card" onclick="window.location.href='/courses/3'">
              <div class="course-image">
                <img src="https://images.pexels.com/photos/1083792/pexels-photo-1083792.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Digital marketing on laptop" loading="lazy">
              </div>
              <div class="course-content">
                <h3>Digital Marketing Assistant</h3>
                <p>Develop skills in social media marketing, content creation, and online advertising strategies.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/3'">Learn More</button>
              </div>
            </div>
            <div class="course-card" onclick="window.location.href='/courses/4'">
              <div class="course-image">
                <img src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Business administration meeting" loading="lazy">
              </div>
              <div class="course-content">
                <h3>Business Administration Basics</h3>
                <p>Build foundational knowledge in business operations, management principles, and professional communication.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/4'">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script>
        // Add interactive hover effects
        document.querySelectorAll('.learn-more-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            window.location.href = '/courses';
          });
        });
      </script>
    </body>
    </html>
`;

const getAboutPage = () => `
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About Phoenix - Bridging India's Skills Gap</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d47a1 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: rgba(0, 0, 0, 0.95);
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(13, 71, 161, 0.3);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2196f3;
          text-decoration: none;
          text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #2196f3;
          text-shadow: 0 0 8px rgba(33, 150, 243, 0.6);
        }

        .nav-links a.active {
          color: #2196f3;
          font-weight: 600;
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #2196f3, #1976d2);
        }

        /* Hero Section */
        .hero-section {
          padding: 120px 0 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(13,71,161,0.5) 100%),
                      url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(13,71,161,0.4) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #2196f3, #64b5f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #e3f2fd;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Content Sections */
        .content-section {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          margin: 40px 0;
          border-radius: 20px;
          border: 1px solid rgba(33, 150, 243, 0.2);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-align: center;
          color: #2196f3;
          text-shadow: 0 0 20px rgba(33, 150, 243, 0.4);
        }

        .section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .text-content {
          color: #e3f2fd;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .text-content h3 {
          color: #2196f3;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .text-content p {
          margin-bottom: 1.5rem;
        }

        .visual-content {
          text-align: center;
          padding: 2rem;
          background: rgba(33, 150, 243, 0.1);
          border-radius: 15px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          position: relative;
          overflow: hidden;
        }

        .visual-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          filter: brightness(0.8) saturate(1.2);
        }

        .visual-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          color: #2196f3;
          text-shadow: 0 0 20px rgba(33, 150, 243, 0.6);
        }

        /* Programs Showcase */
        .programs-showcase {
          margin-top: 3rem;
        }

        .program-image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .program-item {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(33, 150, 243, 0.3);
          transition: all 0.3s ease;
        }

        .program-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(33, 150, 243, 0.3);
          border-color: #2196f3;
        }

        .program-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .program-item:hover .program-img {
          transform: scale(1.05);
        }

        .program-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          padding: 2rem 1.5rem 1.5rem;
          color: white;
        }

        .program-overlay h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2196f3;
          margin-bottom: 0.5rem;
        }

        .program-overlay p {
          font-size: 0.9rem;
          color: #e3f2fd;
          line-height: 1.4;
        }

        /* Team Section */
        .team-section {
          padding: 80px 0;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 20px;
          margin: 40px 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .team-card {
          background: rgba(0, 0, 0, 0.7);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          border: 1px solid rgba(33, 150, 243, 0.2);
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(33, 150, 243, 0.2);
          border-color: #2196f3;
        }

        .team-avatar {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #2196f3, #1976d2);
          border-radius: 50%;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 0 20px rgba(33, 150, 243, 0.4);
          overflow: hidden;
          border: 3px solid rgba(33, 150, 243, 0.5);
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .team-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2196f3;
          margin-bottom: 0.5rem;
        }

        .team-role {
          color: #90caf9;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .team-bio {
          color: #e3f2fd;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <!-- Navigation -->
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <a href="/" class="logo">Phoenix</a>
            <div class="nav-links">
              <a href="/">Home</a>
              <a href="/courses">Courses</a>
              <a href="/about" class="active">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">About Phoenix</h1>
            <p class="hero-subtitle">Empowering India's youth through dignity, skills, and sustainable career opportunities</p>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">Our Mission</h2>
          <div class="section-content">
            <div class="text-content">
              <h3>Bridging the Gap Between Education and Opportunity</h3>
              <p>To empower every individual with dignity and skills, creating a direct pipeline from learning to meaningful employment. We believe that everyone deserves access to quality training that leads to sustainable careers and economic mobility.</p>
              <p>Phoenix is more than just a training platform – we're building a movement that transforms lives, strengthens communities, and drives India's economic growth through skilled workforce development.</p>
            </div>
            <div class="visual-content">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Students learning technology skills" class="visual-image" loading="lazy">
              <h3 style="color: #2196f3; margin-bottom: 1rem;">Vision 2030</h3>
              <p style="color: #e3f2fd;">To become India's leading skills-to-employment ecosystem, reaching 100,000+ learners across Rajasthan and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem Section -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">The Challenge We're Solving</h2>
          <div class="section-content">
            <div class="visual-content">
              <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Skills gap challenge in India" class="visual-image" loading="lazy">
              <h3 style="color: #2196f3; margin-bottom: 1rem;">Skills Gap Crisis</h3>
              <p style="color: #e3f2fd;">Millions of young Indians lack access to industry-relevant training, while employers struggle to find skilled workers.</p>
            </div>
            <div class="text-content">
              <h3>Rajasthan's Skills Gap Challenge</h3>
              <p>Despite being India's largest state, Rajasthan faces significant challenges in workforce development. Traditional education systems often fail to provide practical, industry-relevant skills needed for today's job market.</p>
              <p>Key challenges include:</p>
              <ul style="color: #90caf9; margin: 1rem 0; padding-left: 2rem;">
                <li>Limited access to quality vocational training</li>
                <li>Disconnect between education and industry needs</li>
                <li>Lack of employment support after training</li>
                <li>Geographic barriers to skill development opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Programs Section -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">Our Training Programs in Action</h2>
          <div class="programs-showcase">
            <div class="program-image-grid">
              <div class="program-item">
                <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Students in technical training" class="program-img" loading="lazy">
                <div class="program-overlay">
                  <h4>Hands-on Technical Training</h4>
                  <p>Practical skills development in real-world environments</p>
                </div>
              </div>
              <div class="program-item">
                <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Digital skills workshop" class="program-img" loading="lazy">
                <div class="program-overlay">
                  <h4>Digital Skills Workshop</h4>
                  <p>Modern technology training for the digital economy</p>
                </div>
              </div>
              <div class="program-item">
                <img src="https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Industry partnerships" class="program-img" loading="lazy">
                <div class="program-overlay">
                  <h4>Industry Partnerships</h4>
                  <p>Direct connections with leading employers</p>
                </div>
              </div>
              <div class="program-item">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Career counseling" class="program-img" loading="lazy">
                <div class="program-overlay">
                  <h4>Career Guidance</h4>
                  <p>Personalized career counseling and job placement support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="container">
          <h2 class="section-title">Meet Our Team</h2>
          <div class="team-grid">
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Yuvraj Sen - Founder & CEO" loading="lazy">
              </div>
              <div class="team-name">Yuvraj Sen</div>
              <div class="team-role">Founder & CEO</div>
              <div class="team-bio">Passionate about bridging India's skills gap through innovative training solutions. Background in business strategy and social impact.</div>
            </div>
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dr. Priya Sharma - Head of Curriculum" loading="lazy">
              </div>
              <div class="team-name">Dr. Priya Sharma</div>
              <div class="team-role">Head of Curriculum</div>
              <div class="team-bio">Former professor with 15+ years in vocational education. Specializes in industry-aligned curriculum development.</div>
            </div>
            <div class="team-card">
              <div class="team-avatar">
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Rajesh Kumar - Technology Lead" loading="lazy">
              </div>
              <div class="team-name">Rajesh Kumar</div>
              <div class="team-role">Technology Lead</div>
              <div class="team-bio">Expert in mobile-first learning platforms. Previously worked with EdTech startups across India.</div>
            </div>
          </div>
        </div>
      </section>
    </body>
    </html>
`;

const getContactPage = () => `
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Phoenix - Get in Touch</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d47a1 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: rgba(0, 0, 0, 0.95);
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(13, 71, 161, 0.3);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2196f3;
          text-decoration: none;
          text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #2196f3;
          text-shadow: 0 0 8px rgba(33, 150, 243, 0.6);
        }

        .nav-links a.active {
          color: #2196f3;
          font-weight: 600;
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #2196f3, #1976d2);
        }

        /* Hero Section */
        .hero-section {
          padding: 120px 0 80px;
          text-align: center;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(13,71,161,0.6) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #2196f3, #64b5f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #e3f2fd;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Main Content */
        .main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 80px 0;
          align-items: start;
        }

        /* Contact Form */
        .contact-form-section {
          background: rgba(0, 0, 0, 0.6);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          backdrop-filter: blur(10px);
        }

        .form-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #2196f3;
          text-align: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          color: #e3f2fd;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-input,
        .form-textarea,
        .form-select {
          padding: 15px;
          border: 2px solid rgba(33, 150, 243, 0.3);
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #2196f3;
          box-shadow: 0 0 15px rgba(33, 150, 243, 0.3);
          background: rgba(0, 0, 0, 0.7);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-select {
          cursor: pointer;
        }

        .form-select option {
          background: #1a1a1a;
          color: #ffffff;
        }

        .submit-btn {
          padding: 15px 30px;
          background: linear-gradient(45deg, #2196f3, #1976d2);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(33, 150, 243, 0.4);
          background: linear-gradient(45deg, #1976d2, #1565c0);
        }

        /* Contact Info */
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-card {
          background: rgba(0, 0, 0, 0.6);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(33, 150, 243, 0.2);
          border-color: #2196f3;
        }

        .contact-icon {
          font-size: 2.5rem;
          color: #2196f3;
          margin-bottom: 1rem;
        }

        .contact-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2196f3;
          margin-bottom: 0.5rem;
        }

        .contact-details {
          color: #e3f2fd;
          line-height: 1.6;
        }

        .contact-link {
          color: #64b5f6;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #2196f3;
        }

        /* Success Message */
        .success-message {
          background: linear-gradient(45deg, #4caf50, #2e7d32);
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
          margin-bottom: 1rem;
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .contact-form-section {
            padding: 2rem;
          }

          .nav-links {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <!-- Navigation -->
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <a href="/" class="logo">Phoenix</a>
            <div class="nav-links">
              <a href="/">Home</a>
              <a href="/courses">Courses</a>
              <a href="/about">About</a>
              <a href="/contact" class="active">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Get in Touch</h1>
            <p class="hero-subtitle">Ready to start your learning journey? Have questions about our programs? We're here to help you succeed.</p>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="main-content">
        <div class="container" style="max-width: none; display: contents;">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2 class="form-title">Send Us a Message</h2>
            <div id="successMessage" class="success-message">
              Thank you for your message! We'll get back to you within 24 hours.
            </div>
            <form class="contact-form" id="contactForm">
              <div class="form-group">
                <label for="name" class="form-label">Full Name *</label>
                <input type="text" id="name" name="name" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <input type="email" id="email" name="email" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Subject *</label>
                <select id="subject" name="subject" class="form-select" required>
                  <option value="">Select a topic</option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="enrollment">Enrollment Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea id="message" name="message" class="form-textarea" placeholder="Tell us how we can help you..." required></textarea>
              </div>
              
              <button type="submit" class="submit-btn">Send Message</button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info-section">
            <div class="contact-card">
              <div class="contact-icon">📧</div>
              <div class="contact-title">Email Us</div>
              <div class="contact-details">
                <a href="mailto:hello@phoenix-skills.com" class="contact-link">hello@phoenix-skills.com</a><br>
                <a href="mailto:support@phoenix-skills.com" class="contact-link">support@phoenix-skills.com</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📱</div>
              <div class="contact-title">Call Us</div>
              <div class="contact-details">
                <a href="tel:+919876543210" class="contact-link">+91 98765 43210</a><br>
                <span style="color: #90caf9; font-size: 0.9rem;">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">📍</div>
              <div class="contact-title">Visit Us</div>
              <div class="contact-details">
                Phoenix Skills Center<br>
                Sector 11, Udaipur<br>
                Rajasthan 313001, India
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">🌐</div>
              <div class="contact-title">Follow Us</div>
              <div class="contact-details">
                <a href="#" class="contact-link">LinkedIn</a> | 
                <a href="#" class="contact-link">Twitter</a> | 
                <a href="#" class="contact-link">Instagram</a><br>
                <span style="color: #90caf9; font-size: 0.9rem;">Stay updated with our latest programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script>
        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Simulate form submission
          const submitBtn = document.querySelector('.submit-btn');
          const originalText = submitBtn.textContent;
          
          submitBtn.textContent = 'Sending...';
          submitBtn.disabled = true;
          
          setTimeout(() => {
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
              document.getElementById('successMessage').style.display = 'none';
            }, 5000);
          }, 1500);
        });
      </script>
    </body>
    </html>
`;

// Server setup
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (pathname === '/' || pathname === '/index.html') {
    res.end(getHomePage());
  } else if (pathname === '/about') {
    res.end(getAboutPage());
  } else if (pathname === '/contact') {
    res.end(getContactPage());
  } else if (pathname === '/courses') {
    res.end(getCoursesPage(coursesData));
  } else if (pathname.startsWith('/courses/')) {
    // Extract course ID from URL
    const courseId = parseInt(pathname.split('/')[2]);
    const course = coursesData.find(c => c.id === courseId);

    if (course) {
      res.end(getCourseDetailsPage(course));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Course Not Found - Phoenix</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 3rem; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
            h1 { color: #e74c3c; margin-bottom: 1rem; }
            p { color: #64748b; margin-bottom: 2rem; }
            a { color: #4f46e5; text-decoration: none; padding: 12px 24px; background: #f1f5f9; border-radius: 8px; display: inline-block; transition: background 0.3s ease; }
            a:hover { background: #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>📚 Course Not Found</h1>
            <p>The course you're looking for doesn't exist or has been moved.</p>
            <a href="/courses">← Browse All Courses</a>
          </div>
        </body>
        </html>
      `);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>404 - Page Not Found</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          h1 { color: #e74c3c; }
          a { color: #4f46e5; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/">Go back to homepage</a>
      </body>
      </html>
    `);
  }
});

const getCoursesPage = (courses) => `
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Phoenix - Course Catalog</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d47a1 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: rgba(0, 0, 0, 0.95);
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(13, 71, 161, 0.3);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2196f3;
          text-decoration: none;
          text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #2196f3;
          text-shadow: 0 0 8px rgba(33, 150, 243, 0.6);
        }

        .nav-links a.active {
          color: #2196f3;
          font-weight: 600;
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #2196f3, #1976d2);
        }

        /* Header Section */
        .page-header {
          padding: 120px 0 60px;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(13,71,161,0.6) 100%);
          color: #ffffff;
          text-align: center;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #2196f3, #64b5f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-header p {
          font-size: 1.1rem;
          color: #e3f2fd;
        }

        /* Course Results Section */
        .courses-section {
          padding: 3rem 0;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .results-count {
          font-size: 1.1rem;
          color: #e3f2fd;
        }

        /* Course Grid */
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .course-card {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(33, 150, 243, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .course-card:hover {
          border-color: #2196f3;
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
          transform: translateY(-5px);
        }

        .course-card-image {
          height: 160px;
          background: linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(13, 71, 161, 0.3) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: #2196f3;
          position: relative;
          overflow: hidden;
        }

        .course-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .course-card:hover .course-card-image img {
          transform: scale(1.05);
        }

        .course-card-content {
          padding: 1.5rem;
        }

        .course-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #2196f3;
        }

        .course-educator {
          color: #64b5f6;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .course-description {
          color: #e3f2fd;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .course-tag {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
        }

        .blue-collar {
          background: rgba(33, 150, 243, 0.2);
          color: #64b5f6;
          border: 1px solid rgba(33, 150, 243, 0.3);
        }

        .white-collar {
          background: rgba(156, 39, 176, 0.2);
          color: #ba68c8;
          border: 1px solid rgba(156, 39, 176, 0.3);
        }

        .course-price {
          font-size: 1rem;
          font-weight: 600;
          color: #2196f3;
        }

        .enroll-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(45deg, #2196f3, #1976d2);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .enroll-btn:hover {
          background: linear-gradient(45deg, #1976d2, #1565c0);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .course-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <!-- Navigation -->
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <a href="/" class="logo">Phoenix</a>
            <div class="nav-links">
              <a href="/">Home</a>
              <a href="/courses" class="active">Courses</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Header Section -->
      <section class="page-header">
        <div class="container">
          <h1>Industry-Vetted Training Programs</h1>
          <p>High-demand courses designed to bridge the skills gap and create employment opportunities</p>
        </div>
      </section>

      <!-- Course Results Section -->
      <section class="courses-section">
        <div class="container">
          <div class="results-header">
            <div class="results-count">
              Showing ${courses.length} course${courses.length === 1 ? '' : 's'}
            </div>
          </div>

          <div class="course-grid">
            ${courses.map(course => `
              <div class="course-card" onclick="window.location.href='/courses/${course.id}'">
                <div class="course-card-image">
                  <img src="${course.image}" alt="${course.title}" loading="lazy">
                </div>
                <div class="course-card-content">
                  <h3 class="course-title">${course.title}</h3>
                  <p class="course-educator">with ${course.educator}</p>
                  <p class="course-description">${course.description}</p>
                  <div class="course-meta">
                    <span class="course-tag ${course.type}">${course.type.replace('-', ' ')}</span>
                    <span class="course-price">${course.price}</span>
                  </div>
                  <button class="enroll-btn" onclick="event.stopPropagation(); window.location.href='/courses/${course.id}'">
                    View Details
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </body>
    </html>
`;

const getCourseDetailsPage = (course) => `
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${course.title} - Phoenix Course Details</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0d47a1 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: rgba(0, 0, 0, 0.95);
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(13, 71, 161, 0.3);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2196f3;
          text-decoration: none;
          text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: #2196f3;
          text-shadow: 0 0 8px rgba(33, 150, 243, 0.6);
        }

        .nav-links a.active {
          color: #2196f3;
          font-weight: 600;
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #2196f3, #1976d2);
        }

        /* Breadcrumb */
        .breadcrumb {
          background: rgba(0, 0, 0, 0.5);
          padding: 1rem 0;
          margin-top: 80px;
          border-bottom: 1px solid rgba(33, 150, 243, 0.2);
        }

        .breadcrumb-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e3f2fd;
        }

        .breadcrumb-links a {
          color: #2196f3;
          text-decoration: none;
        }

        .breadcrumb-links span {
          color: #90caf9;
        }

        /* Course Header */
        .course-header {
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(13,71,161,0.6) 100%);
          color: #ffffff;
          padding: 3rem 0;
        }

        .course-header-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .course-title {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2196f3;
        }

        .course-subtitle {
          font-size: 1.1rem;
          color: #e3f2fd;
          margin-bottom: 1.5rem;
        }

        .course-educator {
          font-size: 1rem;
          color: #64b5f6;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .course-hero-image {
          text-align: center;
          background: rgba(33, 150, 243, 0.1);
          border-radius: 12px;
          padding: 1rem;
          overflow: hidden;
          max-width: 400px;
          margin: 0 auto;
          border: 1px solid rgba(33, 150, 243, 0.3);
        }

        .course-hero-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Key Info Section */
        .key-info-section {
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem 0;
          border-bottom: 1px solid rgba(33, 150, 243, 0.2);
        }

        .key-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .info-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 8px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          backdrop-filter: blur(10px);
        }

        .info-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #2196f3;
        }

        .info-label {
          font-size: 0.8rem;
          color: #90caf9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #e3f2fd;
        }

        /* Main Content */
        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          padding: 3rem 0;
        }

        .content-section {
          background: rgba(0, 0, 0, 0.6);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2196f3;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-icon {
          font-size: 1.3rem;
          color: #2196f3;
        }

        /* What You'll Learn */
        .learning-objectives {
          list-style: none;
        }

        .learning-objectives li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: rgba(33, 150, 243, 0.1);
          border-radius: 8px;
          border: 1px solid rgba(33, 150, 243, 0.2);
        }

        .learning-objectives li::before {
          content: "✅";
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* Curriculum Accordion */
        .curriculum-item {
          border: 1px solid rgba(33, 150, 243, 0.3);
          border-radius: 8px;
          margin-bottom: 1rem;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.5);
        }

        .curriculum-header {
          background: rgba(33, 150, 243, 0.1);
          padding: 1rem 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.3s ease;
        }

        .curriculum-header:hover {
          background: rgba(33, 150, 243, 0.2);
        }

        .curriculum-header.active {
          background: #2196f3;
          color: white;
        }

        .curriculum-title {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .curriculum-toggle {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .curriculum-header.active .curriculum-toggle {
          transform: rotate(180deg);
        }

        .curriculum-content {
          padding: 0 1.5rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .curriculum-content.active {
          max-height: 200px;
          padding: 1rem 1.5rem;
        }

        .curriculum-lessons {
          list-style: none;
        }

        .curriculum-lessons li {
          padding: 0.5rem 0;
          color: #e3f2fd;
          border-bottom: 1px solid rgba(33, 150, 243, 0.2);
        }

        .curriculum-lessons li:last-child {
          border-bottom: none;
        }

        /* Sidebar */
        .sidebar {
          position: sticky;
          top: 120px;
          height: fit-content;
        }

        .enrollment-card {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          padding: 2rem;
          border: 1px solid rgba(33, 150, 243, 0.3);
          text-align: center;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .price-display {
          font-size: 2.2rem;
          font-weight: 600;
          color: #2196f3;
          margin-bottom: 1rem;
        }

        .enrollment-features {
          list-style: none;
          margin: 1.5rem 0;
          text-align: left;
        }

        .enrollment-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: #e3f2fd;
        }

        .enrollment-features li::before {
          content: "✓";
          color: #2196f3;
          font-weight: bold;
        }

        .enroll-btn {
          width: 100%;
          background: linear-gradient(45deg, #2196f3, #1976d2);
          color: white;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .enroll-btn:hover {
          background: linear-gradient(45deg, #1976d2, #1565c0);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
        }

        .money-back {
          font-size: 0.9rem;
          color: #90caf9;
        }

        /* Educator Bio */
        .educator-card {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 8px;
          padding: 2rem;
          border: 1px solid rgba(33, 150, 243, 0.3);
          backdrop-filter: blur(10px);
        }

        .educator-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .educator-avatar {
          font-size: 2.5rem;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .educator-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2196f3;
        }

        .educator-title {
          color: #90caf9;
          font-size: 0.85rem;
        }

        .educator-bio {
          color: #e3f2fd;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-content {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .course-header-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .course-title {
            font-size: 2rem;
          }

          .key-info-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <!-- Navigation -->
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <a href="/" class="logo">Phoenix</a>
            <div class="nav-links">
              <a href="/">Home</a>
              <a href="/courses" class="active">Courses</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Breadcrumb -->
      <section class="breadcrumb">
        <div class="container">
          <div class="breadcrumb-links">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/courses">Courses</a>
            <span>/</span>
            <span>${course.title}</span>
          </div>
        </div>
      </section>

      <!-- Course Header -->
      <section class="course-header">
        <div class="container">
          <div class="course-header-content">
            <div>
              <h1 class="course-title">${course.title}</h1>
              <p class="course-subtitle">${course.fullDescription}</p>
              <p class="course-educator">with ${course.educator}</p>
            </div>
            <div class="course-hero-image">
              <img src="${course.image}" alt="${course.title}" loading="lazy">
            </div>
          </div>
        </div>
      </section>

      <!-- Key Info Section -->
      <section class="key-info-section">
        <div class="container">
          <div class="key-info-grid">
            <div class="info-item">
              <div class="info-icon">⏱️</div>
              <div class="info-label">Duration</div>
              <div class="info-value">${course.duration}</div>
            </div>
            <div class="info-item">
              <div class="info-icon">🗣️</div>
              <div class="info-label">Language</div>
              <div class="info-value">${course.language}</div>
            </div>
            <div class="info-item">
              <div class="info-icon">📊</div>
              <div class="info-label">Level</div>
              <div class="info-value">${course.level}</div>
            </div>
            <div class="info-item">
              <div class="info-icon">🏷️</div>
              <div class="info-label">Category</div>
              <div class="info-value">${course.category}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="main-content">
        <div class="container" style="max-width: none; display: contents;">
          <div>
            <!-- What You'll Learn -->
            <div class="content-section">
              <h2 class="section-title">
                <span class="section-icon">🎯</span>
                What You'll Learn
              </h2>
              <ul class="learning-objectives">
                ${course.whatYouLearn.map(skill => `
                  <li>${skill}</li>
                `).join('')}
              </ul>
            </div>

            <!-- Curriculum -->
            <div class="content-section">
              <h2 class="section-title">
                <span class="section-icon">📚</span>
                Course Curriculum
              </h2>
              <div class="curriculum-accordion">
                ${course.curriculum.map((module, index) => `
                  <div class="curriculum-item">
                    <div class="curriculum-header" onclick="toggleModule(${index})">
                      <span class="curriculum-title">${module.module}</span>
                      <span class="curriculum-toggle">▼</span>
                    </div>
                    <div class="curriculum-content" id="module-${index}">
                      <ul class="curriculum-lessons">
                        ${module.lessons.map(lesson => `
                          <li>${lesson}</li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Educator Bio -->
            <div class="content-section">
              <h2 class="section-title">
                <span class="section-icon">👨‍🏫</span>
                Meet Your Instructor
              </h2>
              <div class="educator-header">
                <div class="educator-avatar">
                  ${course.educatorImage}
                </div>
                <div>
                  <div class="educator-name">${course.educator}</div>
                  <div class="educator-title">Course Instructor</div>
                </div>
              </div>
              <p class="educator-bio">${course.educatorBio}</p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="sidebar">
            <div class="enrollment-card">
              <div class="price-display">${course.price}</div>
              <ul class="enrollment-features">
                <li>Lifetime access to course materials</li>
                <li>Certificate of completion</li>
                <li>24/7 student support</li>
                <li>Mobile and desktop access</li>
                <li>30-day money-back guarantee</li>
              </ul>
              <button class="enroll-btn">Enroll Now</button>
              <p class="money-back">💯 30-day money-back guarantee</p>
            </div>

            <div class="educator-card">
              <h3 style="margin-bottom: 1rem; color: #2196f3;">Course Highlights</h3>
              <ul style="list-style: none; color: #e3f2fd;">
                <li style="margin-bottom: 0.5rem;">📊 <strong>${course.level}</strong> level course</li>
                <li style="margin-bottom: 0.5rem;">⏱️ <strong>${course.duration}</strong> duration</li>
                <li style="margin-bottom: 0.5rem;">🎓 <strong>${course.curriculum.length}</strong> comprehensive modules</li>
                <li style="margin-bottom: 0.5rem;">🏷️ <strong>${course.type.replace('-', ' ')}</strong> career track</li>
                <li style="margin-bottom: 0.5rem;">🌟 Learn from industry expert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <script>
        function toggleModule(index) {
          const header = document.querySelectorAll('.curriculum-header')[index];
          const content = document.getElementById(\`module-\${index}\`);

          header.classList.toggle('active');
          content.classList.toggle('active');
        }

        // Enroll button functionality
        document.querySelector('.enroll-btn').addEventListener('click', () => {
          alert('Enrollment system coming soon! We will notify you when registration opens for this course.');
        });

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        });
      </script>
    </body>
    </html>
`;

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
