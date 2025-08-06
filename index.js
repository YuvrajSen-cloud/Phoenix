const http = require('http');
const url = require('url');
const querystring = require('querystring');

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
    title: "Electrical Technician Certification",
    educator: "Master Electrician Rajesh Singh",
    category: "Technical",
    type: "blue-collar",
    price: "₹899",
    image: "https://images.pexels.com/photos/7286015/pexels-photo-7286015.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete electrical systems installation and maintenance training",
    fullDescription: "Become a certified electrical technician with comprehensive training in electrical systems, safety protocols, and installation techniques. This course prepares you for a rewarding career in electrical work.",
    duration: "14 weeks",
    language: "Hindi",
    level: "Intermediate",
    whatYouLearn: [
      "Electrical circuit analysis",
      "Wiring installation techniques",
      "Safety protocols and procedures",
      "Motor control systems",
      "Troubleshooting and repair",
      "Electrical code compliance",
      "Industrial electrical systems"
    ],
    curriculum: [
      {
        module: "Module 1: Electrical Fundamentals",
        lessons: ["Ohm's law", "AC/DC circuits", "Power calculations"]
      },
      {
        module: "Module 2: Safety First",
        lessons: ["Electrical hazards", "Safety equipment", "Lockout/tagout procedures"]
      },
      {
        module: "Module 3: Tools and Equipment",
        lessons: ["Hand tools", "Testing equipment", "Power tools safety"]
      },
      {
        module: "Module 4: Wiring Methods",
        lessons: ["Conduit installation", "Cable pulling", "Junction boxes"]
      },
      {
        module: "Module 5: Residential Wiring",
        lessons: ["House wiring", "Panel installation", "GFCI protection"]
      },
      {
        module: "Module 6: Commercial Systems",
        lessons: ["Three-phase systems", "Lighting controls", "Emergency systems"]
      },
      {
        module: "Module 7: Motor Controls",
        lessons: ["Motor types", "Starters", "Variable frequency drives"]
      },
      {
        module: "Module 8: Industrial Applications",
        lessons: ["Control panels", "PLCs basics", "Industrial safety"]
      },
      {
        module: "Module 9: Troubleshooting",
        lessons: ["Problem diagnosis", "Testing procedures", "Repair techniques"]
      },
      {
        module: "Module 10: Electrical Codes",
        lessons: ["NEC standards", "Local codes", "Permit requirements"]
      },
      {
        module: "Module 11: Maintenance Procedures",
        lessons: ["Preventive maintenance", "Equipment testing", "Documentation"]
      },
      {
        module: "Module 12: Advanced Systems",
        lessons: ["Renewable integration", "Smart systems", "Energy efficiency"]
      },
      {
        module: "Module 13: Business Skills",
        lessons: ["Customer service", "Pricing", "Business basics"]
      },
      {
        module: "Module 14: Certification Prep",
        lessons: ["Exam preparation", "Practical assessment", "License application"]
      }
    ],
    educatorBio: "Master Electrician Rajesh Singh has 20 years of experience in electrical installations and has trained over 800 electricians. He holds multiple certifications and specializes in industrial electrical systems.",
    educatorImage: "👨‍🔧"
  },
  {
    id: 6,
    title: "Web Development Fundamentals",
    educator: "Senior Developer Anita Roy",
    category: "IT",
    type: "white-collar",
    price: "₹2,499",
    image: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Learn HTML, CSS, JavaScript and modern web development practices",
    fullDescription: "Start your journey as a web developer with this comprehensive course covering front-end technologies and modern development practices. Build real projects and create an impressive portfolio.",
    duration: "16 weeks",
    language: "English",
    level: "Beginner",
    whatYouLearn: [
      "HTML5 structure and semantics",
      "CSS3 styling and layouts",
      "JavaScript programming fundamentals",
      "Responsive web design",
      "Version control with Git",
      "Modern development tools",
      "Website deployment and hosting"
    ],
    curriculum: [
      {
        module: "Module 1: Web Development Introduction",
        lessons: ["How the web works", "Development environment", "Career paths"]
      },
      {
        module: "Module 2: HTML Fundamentals",
        lessons: ["HTML structure", "Tags and elements", "Forms and inputs"]
      },
      {
        module: "Module 3: CSS Basics",
        lessons: ["Selectors", "Properties", "Box model"]
      },
      {
        module: "Module 4: CSS Layouts",
        lessons: ["Flexbox", "Grid", "Positioning"]
      },
      {
        module: "Module 5: Responsive Design",
        lessons: ["Media queries", "Mobile-first approach", "Viewport settings"]
      },
      {
        module: "Module 6: JavaScript Basics",
        lessons: ["Variables", "Functions", "Control structures"]
      },
      {
        module: "Module 7: DOM Manipulation",
        lessons: ["Selecting elements", "Event handling", "Dynamic content"]
      },
      {
        module: "Module 8: JavaScript Projects",
        lessons: ["Calculator app", "To-do list", "Image gallery"]
      },
      {
        module: "Module 9: CSS Frameworks",
        lessons: ["Bootstrap", "Tailwind CSS", "Component libraries"]
      },
      {
        module: "Module 10: Version Control",
        lessons: ["Git basics", "GitHub", "Collaboration workflow"]
      },
      {
        module: "Module 11: Build Tools",
        lessons: ["NPM", "Webpack", "Development servers"]
      },
      {
        module: "Module 12: API Integration",
        lessons: ["Fetch API", "REST APIs", "JSON handling"]
      },
      {
        module: "Module 13: Modern JavaScript",
        lessons: ["ES6+ features", "Modules", "Async programming"]
      },
      {
        module: "Module 14: Testing & Debugging",
        lessons: ["Browser DevTools", "Testing frameworks", "Debugging techniques"]
      },
      {
        module: "Module 15: Deployment",
        lessons: ["Hosting services", "Domain setup", "Performance optimization"]
      },
      {
        module: "Module 16: Portfolio & Career",
        lessons: ["Portfolio creation", "Job searching", "Interview preparation"]
      }
    ],
    educatorBio: "Senior Developer Anita Roy has 12 years of experience building web applications for startups and enterprises. She has mentored 200+ developers and contributes to open-source projects.",
    educatorImage: "👩‍💻"
  },
  {
    id: 7,
    title: "Culinary Arts & Food Service",
    educator: "Head Chef Suresh Patel",
    category: "Hospitality",
    type: "blue-collar",
    price: "₹1,299",
    image: "https://images.pexels.com/photos/33310413/pexels-photo-33310413.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Professional cooking techniques and kitchen management skills",
    fullDescription: "Master professional cooking techniques and kitchen management skills essential for a successful culinary career. Learn from basic cooking methods to advanced culinary arts and food service management.",
    duration: "10 weeks",
    language: "Hindi",
    level: "Beginner",
    whatYouLearn: [
      "Basic cooking techniques and methods",
      "Food safety and hygiene standards",
      "Menu planning and costing",
      "Kitchen equipment operation",
      "Food presentation and plating",
      "Inventory management",
      "Customer service in food service"
    ],
    curriculum: [
      {
        module: "Module 1: Culinary Fundamentals",
        lessons: ["Cooking basics", "Kitchen safety", "Sanitation principles"]
      },
      {
        module: "Module 2: Knife Skills",
        lessons: ["Knife types", "Cutting techniques", "Maintenance"]
      },
      {
        module: "Module 3: Cooking Methods",
        lessons: ["Dry heat cooking", "Moist heat cooking", "Combination methods"]
      },
      {
        module: "Module 4: Indian Cuisine",
        lessons: ["Regional specialties", "Spice knowledge", "Traditional techniques"]
      },
      {
        module: "Module 5: International Cuisine",
        lessons: ["Continental dishes", "Asian cuisine", "Fusion cooking"]
      },
      {
        module: "Module 6: Baking & Desserts",
        lessons: ["Basic baking", "Cake decoration", "Indian sweets"]
      },
      {
        module: "Module 7: Food Safety",
        lessons: ["HACCP principles", "Food storage", "Contamination prevention"]
      },
      {
        module: "Module 8: Menu Development",
        lessons: ["Menu design", "Cost calculation", "Nutrition basics"]
      },
      {
        module: "Module 9: Kitchen Management",
        lessons: ["Workflow optimization", "Team coordination", "Quality control"]
      },
      {
        module: "Module 10: Career Development",
        lessons: ["Restaurant operations", "Entrepreneurship", "Industry trends"]
      }
    ],
    educatorBio: "Head Chef Suresh Patel has 18 years of experience in fine dining and hotel kitchens. He has won multiple culinary awards and has trained over 400 chefs across India.",
    educatorImage: "👨‍🍳"
  },
  {
    id: 8,
    title: "Data Entry & Office Administration",
    educator: "Office Manager Kavita Joshi",
    category: "Administrative",
    type: "white-collar",
    price: "₹799",
    image: "https://images.pexels.com/photos/5060979/pexels-photo-5060979.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Master office software, data management, and administrative procedures",
    fullDescription: "Develop essential office administration skills including data entry, document management, and professional communication. Perfect for starting a career in administrative roles.",
    duration: "8 weeks",
    language: "Hindi & English",
    level: "Beginner",
    whatYouLearn: [
      "Microsoft Office suite mastery",
      "Data entry accuracy and speed",
      "File organization systems",
      "Professional email communication",
      "Meeting coordination and scheduling",
      "Customer service phone skills",
      "Basic accounting and bookkeeping"
    ],
    curriculum: [
      {
        module: "Module 1: Office Fundamentals",
        lessons: ["Office environment", "Professional etiquette", "Communication basics"]
      },
      {
        module: "Module 2: Microsoft Word",
        lessons: ["Document creation", "Formatting", "Templates and mail merge"]
      },
      {
        module: "Module 3: Microsoft Excel",
        lessons: ["Spreadsheet basics", "Formulas", "Data analysis"]
      },
      {
        module: "Module 4: Microsoft PowerPoint",
        lessons: ["Presentation design", "Slide animations", "Professional templates"]
      },
      {
        module: "Module 5: Data Entry Skills",
        lessons: ["Typing accuracy", "Speed development", "Data validation"]
      },
      {
        module: "Module 6: File Management",
        lessons: ["Digital filing", "Document control", "Backup procedures"]
      },
      {
        module: "Module 7: Communication Skills",
        lessons: ["Email etiquette", "Phone skills", "Meeting minutes"]
      },
      {
        module: "Module 8: Administrative Tasks",
        lessons: ["Scheduling", "Travel arrangements", "Expense reporting"]
      }
    ],
    educatorBio: "Kavita Joshi is an experienced office manager with 14 years in administrative roles across various industries. She has streamlined operations for multiple companies and trained 150+ administrative professionals.",
    educatorImage: "👩‍💼"
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

        /* CSS Custom Properties for Theme Switching */
        :root {
          /* Blue Theme (Default) */
          --primary-color: #2563eb;
          --primary-dark: #1d4ed8;
          --primary-light: #eff6ff;
          --primary-medium: #dbeafe;
          --primary-bright: #bfdbfe;
          --text-primary: #111827;
          --text-secondary: #6b7280;
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-accent: #f9fafb;
          --primary-rgb: 37, 99, 235;
          --primary-light-rgb: 239, 246, 255;
        }

        [data-theme="green"] {
          --primary-color: #22c55e;
          --primary-dark: #16a34a;
          --primary-light: #f0fdf4;
          --primary-medium: #dcfce7;
          --primary-bright: #bbf7d0;
          --primary-rgb: 34, 197, 94;
          --primary-light-rgb: 240, 253, 244;
        }

        [data-theme="purple"] {
          --primary-color: #7c3aed;
          --primary-dark: #6d28d9;
          --primary-light: #faf5ff;
          --primary-medium: #ede9fe;
          --primary-bright: #ddd6fe;
          --primary-rgb: 124, 58, 237;
          --primary-light-rgb: 250, 245, 255;
        }

        [data-theme="dark"] {
          --primary-color: #3b82f6;
          --primary-dark: #2563eb;
          --primary-light: #1f2937;
          --primary-medium: #374151;
          --primary-bright: #4b5563;
          --text-primary: #ffffff;
          --text-secondary: #d1d5db;
          --bg-primary: #111827;
          --bg-secondary: #1f2937;
          --bg-accent: #374151;
          --primary-rgb: 59, 130, 246;
          --primary-light-rgb: 31, 41, 55;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="%23333333" stroke-width="1.5"/><circle cx="12" cy="12" r="6" fill="none" stroke="%23333333" stroke-width="1"/><circle cx="12" cy="12" r="2" fill="%23333333"/><text x="12" y="5" text-anchor="middle" font-size="8" fill="%23333333">🎨</text></svg>') 12 12, auto;
        }

        /* Special cursor for interactive elements */
        a, button, .learn-more-btn, .nav-links a {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="%232563eb" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="%232563eb" stroke-width="1"/><circle cx="12" cy="12" r="2" fill="%232563eb"/><text x="12" y="5" text-anchor="middle" font-size="6" fill="%232563eb">👆</text></svg>') 12 12, pointer;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: var(--bg-primary);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }


        /* Click Hint */
        .click-hint {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(0,0,0,0.8);
          color: var(--bg-primary);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          z-index: 1000;
          opacity: 0.7;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 50%, var(--primary-bright) 100%);
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
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2322c55e;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%2316a34a;stop-opacity:0.2" /></linearGradient></defs><rect width="600" height="600" fill="url(%23grad1)"/><circle cx="450" cy="150" r="80" fill="%2322c55e" opacity="0.1"/><circle cx="500" cy="300" r="60" fill="%2316a34a" opacity="0.15"/><circle cx="350" cy="450" r="100" fill="%2315803d" opacity="0.1"/><path d="M300,200 Q400,150 500,200 T700,200" stroke="%2322c55e" stroke-width="3" fill="none" opacity="0.3"/></svg>') no-repeat center;
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
          color: var(--text-primary);
          line-height: 1.1;
        }

        .hero-content .highlight {
          color: var(--primary-color);
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-button {
          display: inline-block;
          background: var(--primary-color);
          color: white;
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3);
        }

        .cta-button:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4);
        }

        /* How it Works Section */
        .how-it-works {
          padding: 80px 0;
          background: var(--bg-primary);
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .section-subtitle {
          text-align: center;
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .step-card {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        .step-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .step-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .step-card p {
          color: var(--text-secondary);
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
          background: var(--bg-primary);
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          min-width: 150px;
          transition: all 0.3s ease;
        }

        .impact-stat:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Services Section */
        .services-section {
          padding: 80px 0;
          background: var(--bg-accent);
        }

        /* Featured Courses Section */
        .featured-courses {
          padding: 80px 0;
          background: var(--bg-primary);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .course-card {
          background: var(--bg-primary);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .course-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        .course-image {
          height: 160px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: var(--primary-color);
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
          color: var(--text-primary);
          font-weight: 600;
        }

        .course-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .learn-more-btn {
          background: var(--primary-color);
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
          background: var(--primary-dark);
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
              <a href="/">Home</a>
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
        // Theme Cycling Functionality
        const themes = [
          { name: '', display: 'Blue Theme' },
          { name: 'green', display: 'Green Theme' },
          { name: 'purple', display: 'Purple Theme' },
          { name: 'dark', display: 'Dark Theme' }
        ];

        let currentThemeIndex = 0;

        // Create theme hint element only
        function createThemeElements() {
          // Click hint
          const hint = document.createElement('div');
          hint.className = 'click-hint';
          hint.textContent = 'Click anywhere to change theme 🎨';
          document.body.appendChild(hint);

          // Hide hint after 3 seconds
          setTimeout(() => {
            hint.style.display = 'none';
          }, 3000);
        }

        // Load saved theme
        function loadSavedTheme() {
          const savedTheme = localStorage.getItem('phoenix-theme') || '';
          const savedIndex = themes.findIndex(theme => theme.name === savedTheme);
          if (savedIndex !== -1) {
            currentThemeIndex = savedIndex;
          }
          document.documentElement.setAttribute('data-theme', themes[currentThemeIndex].name);
          updateThemeIndicator();
        }

        // Update theme indicator (disabled - no text shown)
        function updateThemeIndicator() {
          // Theme indicator text removed per user request
        }

        // Cycle to next theme
        function cycleTheme() {
          currentThemeIndex = (currentThemeIndex + 1) % themes.length;
          const newTheme = themes[currentThemeIndex];

          document.documentElement.setAttribute('data-theme', newTheme.name);
          localStorage.setItem('phoenix-theme', newTheme.name);
          updateThemeIndicator();
        }

        // Click anywhere to cycle theme
        document.addEventListener('click', cycleTheme);

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
          createThemeElements();
          loadSavedTheme();
        });

        // Add interactive hover effects
        document.querySelectorAll('.learn-more-btn').forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent theme change on button click
            window.location.href = '/courses';
          });
        });
      </script>
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
          color: #333;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: var(--bg-primary);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a.active {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* Breadcrumb */
        .breadcrumb {
          background: var(--bg-primary);
          padding: 1rem 0;
          margin-top: 80px;
          border-bottom: 1px solid #e2e8f0;
        }

        .breadcrumb-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
        }

        .breadcrumb-links a {
          color: var(--primary-color);
          text-decoration: none;
        }

        .breadcrumb-links span {
          color: #cbd5e1;
        }

        /* Course Header */
        .course-header {
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 50%, var(--primary-bright) 100%);
          color: var(--text-primary);
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
          color: var(--text-primary);
        }

        .course-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .course-educator {
          font-size: 1rem;
          color: var(--primary-color);
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .course-hero-image {
          text-align: center;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 12px;
          padding: 1rem;
          overflow: hidden;
          max-width: 400px;
          margin: 0 auto;
        }

        .course-hero-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Key Info Section */
        .key-info-section {
          background: var(--bg-primary);
          padding: 2rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .key-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .info-item {
          text-align: center;
          padding: 1.5rem;
          background: var(--bg-primary);
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }

        .info-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }

        .info-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Main Content */
        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          padding: 3rem 0;
        }

        .content-section {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-icon {
          font-size: 1.3rem;
          color: var(--primary-color);
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
          background: var(--bg-secondary);
          border-radius: 8px;
        }

        .learning-objectives li::before {
          content: "✅";
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* Curriculum Accordion */
        .curriculum-item {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .curriculum-header {
          background: var(--bg-secondary);
          padding: 1rem 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.3s ease;
        }

        .curriculum-header:hover {
          background: #f1f5f9;
        }

        .curriculum-header.active {
          background: var(--primary-color);
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
          color: #64748b;
          border-bottom: 1px solid #f1f5f9;
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
          background: var(--bg-primary);
          border-radius: 8px;
          padding: 2rem;
          border: 1px solid #f3f4f6;
          text-align: center;
          margin-bottom: 2rem;
        }

        .price-display {
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--primary-color);
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
          color: #64748b;
        }

        .enrollment-features li::before {
          content: "✓";
          color: var(--primary-color);
          font-weight: bold;
        }

        .enroll-btn {
          width: 100%;
          background: var(--primary-color);
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
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .money-back {
          font-size: 0.9rem;
          color: #64748b;
        }

        /* Educator Bio */
        .educator-card {
          background: var(--bg-primary);
          border-radius: 8px;
          padding: 2rem;
          border: 1px solid #f3f4f6;
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
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .educator-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .educator-title {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .educator-bio {
          color: var(--text-secondary);
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

          .course-hero-image {
            font-size: 5rem;
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
              <h3 style="margin-bottom: 1rem; color: #1e293b;">Course Highlights</h3>
              <ul style="list-style: none; color: #64748b;">
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
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      </script>
    </body>
    </html>
`;

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
          color: #333;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: var(--bg-primary);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a.active {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* Header Section */
        .page-header {
          padding: 120px 0 60px;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-medium) 50%, var(--primary-bright) 100%);
          color: var(--text-primary);
          text-align: center;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .page-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        /* Search and Filter Section */
        .search-filter-section {
          background: var(--bg-primary);
          padding: 2rem 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .search-filter-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .search-bar {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-input {
          width: 100%;
          padding: 15px 50px 15px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .search-icon {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .filter-btn {
          padding: 8px 16px;
          border: 1px solid #e5e7eb;
          background: var(--bg-primary);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
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
          color: #64748b;
        }

        .sort-dropdown {
          padding: 10px 15px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: var(--bg-primary);
          cursor: pointer;
        }

        /* Course Grid */
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .course-card {
          background: var(--bg-primary);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .course-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        .course-card-image {
          height: 160px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--primary-color);
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
          color: var(--text-primary);
        }

        .course-educator {
          color: var(--primary-color);
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .course-description {
          color: var(--text-secondary);
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
          background: #dbeafe;
          color: #1d4ed8;
        }

        .white-collar {
          background: #ede9fe;
          color: #7c3aed;
        }

        .course-price {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-color);
        }

        .enroll-btn {
          width: 100%;
          padding: 12px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .enroll-btn:hover {
          background: var(--primary-dark);
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #64748b;
        }

        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .search-filter-container {
            gap: 1rem;
          }

          .filter-buttons {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .filter-btn {
            white-space: nowrap;
          }

          .course-grid {
            grid-template-columns: 1fr;
          }

          .results-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
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

      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>Skills Training Catalog</h1>
          <p>Industry-vetted programs for blue-collar and white-collar careers that drive economic mobility</p>
        </div>
      </section>

      <!-- Search and Filter Section -->
      <section class="search-filter-section">
        <div class="container">
          <div class="search-filter-container">
            <div class="search-bar">
              <input type="text" class="search-input" placeholder="Search courses..." id="searchInput">
              <span class="search-icon">🔍</span>
            </div>
            <div class="filter-buttons">
              <button class="filter-btn active" data-category="all">All Courses</button>
              <button class="filter-btn" data-category="Hospitality">Hospitality</button>
              <button class="filter-btn" data-category="Energy">Energy</button>
              <button class="filter-btn" data-category="IT">IT</button>
              <button class="filter-btn" data-category="Management">Management</button>
              <button class="filter-btn" data-category="Technical">Technical</button>
              <button class="filter-btn" data-category="Administrative">Administrative</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Results Section -->
      <section class="courses-section">
        <div class="container">
          <div class="results-header">
            <div class="results-count" id="resultsCount">
              Showing ${courses.length} courses
            </div>
            <select class="sort-dropdown" id="sortDropdown">
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title">Title: A to Z</option>
            </select>
          </div>

          <div class="course-grid" id="courseGrid">
            ${courses.map(course => `
              <div class="course-card" data-category="${course.category}" data-type="${course.type}" data-title="${course.title.toLowerCase()}" data-price="${course.price}" onclick="window.location.href='/courses/${course.id}'">
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
                  <button class="enroll-btn" onclick="event.stopPropagation(); window.location.href='/courses/${course.id}'">View Details</button>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="no-results" id="noResults" style="display: none;">
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        </div>
      </section>

      <script>
        const allCourses = document.querySelectorAll('.course-card');
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const resultsCount = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResults');
        const courseGrid = document.getElementById('courseGrid');
        const sortDropdown = document.getElementById('sortDropdown');

        let currentCategory = 'all';
        let currentSearch = '';

        // Filter functionality
        filterButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterCourses();
          });
        });

        // Search functionality
        searchInput.addEventListener('input', (e) => {
          currentSearch = e.target.value.toLowerCase();
          filterCourses();
        });

        // Sort functionality
        sortDropdown.addEventListener('change', () => {
          sortCourses();
        });

        function filterCourses() {
          let visibleCount = 0;
          
          allCourses.forEach(course => {
            const matchesCategory = currentCategory === 'all' || course.dataset.category === currentCategory;
            const matchesSearch = course.dataset.title.includes(currentSearch);
            
            if (matchesCategory && matchesSearch) {
              course.style.display = 'block';
              visibleCount++;
            } else {
              course.style.display = 'none';
            }
          });

          updateResultsCount(visibleCount);
        }

        function sortCourses() {
          const sortValue = sortDropdown.value;
          const coursesArray = Array.from(allCourses);
          
          coursesArray.sort((a, b) => {
            switch(sortValue) {
              case 'title':
                return a.dataset.title.localeCompare(b.dataset.title);
              case 'price-low':
                return getPriceValue(a.dataset.price) - getPriceValue(b.dataset.price);
              case 'price-high':
                return getPriceValue(b.dataset.price) - getPriceValue(a.dataset.price);
              default:
                return 0;
            }
          });

          coursesArray.forEach(course => courseGrid.appendChild(course));
        }

        function getPriceValue(priceText) {
          if (priceText.includes('ISA')) return 0;
          const match = priceText.match(/₹([0-9,]+)/);
          return match ? parseInt(match[1].replace(',', '')) : 0;
        }

        function updateResultsCount(count) {
          resultsCount.textContent = \`Showing \${count} course\${count !== 1 ? 's' : ''}\`;
          
          if (count === 0) {
            courseGrid.style.display = 'none';
            noResults.style.display = 'block';
          } else {
            courseGrid.style.display = 'grid';
            noResults.style.display = 'none';
          }
        }

        // Course card hover effect enhancement
        allCourses.forEach(card => {
          card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
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
          color: #333;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: var(--bg-primary);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a.active {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.9) 50%, rgba(191, 219, 254, 0.9) 100%), url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg') center/cover;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 80px;
          text-align: center;
          position: relative;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.85) 0%, rgba(219, 234, 254, 0.85) 50%, rgba(191, 219, 254, 0.85) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .hero-content .highlight {
          color: var(--primary-color);
        }

        .hero-content p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Main Content */
        .main-content {
          padding: 80px 0;
          background: var(--bg-primary);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .content-block h2 {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .content-block p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .content-image {
          text-align: center;
          background: #eff6ff;
          border-radius: 12px;
          padding: 1rem;
          overflow: hidden;
        }

        .content-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
        }

        /* Mission Section */
        .mission-section {
          background: var(--bg-accent);
          padding: 80px 0;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .mission-card {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          text-align: center;
          transition: all 0.3s ease;
        }

        .mission-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        .mission-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .mission-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .mission-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Team Section */
        .team-section {
          padding: 80px 0;
          background: var(--bg-primary);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .team-card {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        .team-avatar {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
          overflow: hidden;
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .team-card .role {
          color: var(--primary-color);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .team-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Section Title */
        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .section-subtitle {
          text-align: center;
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .content-image {
            order: -1;
          }

          .mission-grid,
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
            <h1>Empowering Dreams, <br><span class="highlight">Creating Futures</span></h1>
            <p>Phoenix is bridging India's skills gap by providing accessible, industry-vetted training that creates direct pathways from learning to meaningful employment opportunities.</p>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="main-content">
        <div class="container">
          <div class="content-grid">
            <div class="content-block">
              <h2>Our Mission</h2>
              <p>To bridge the gap between education and opportunity, empowering every individual with dignity and skills that lead to sustainable economic mobility.</p>
              <p>We believe that quality skills training should be accessible to everyone, regardless of their background or financial situation. Through our platform, we're creating a direct pipeline between learners and industries that need skilled workers.</p>
            </div>
            <div class="content-image">
              <img src="https://images.pexels.com/photos/21696/pexels-photo.jpg" alt="Success and motivation - skills training leads to achievement" loading="lazy">
            </div>
          </div>

          <div class="content-grid">
            <div class="content-image">
              <img src="https://images.pexels.com/photos/12199101/pexels-photo-12199101.jpeg" alt="Indian students engaged in classroom learning environment" loading="lazy">
            </div>
            <div class="content-block">
              <h2>The Problem We're Solving</h2>
              <p>Rajasthan faces a significant skills gap challenge. Despite having a young, eager workforce, many individuals lack access to industry-relevant training that leads to meaningful employment.</p>
              <p>Traditional education systems often fail to provide practical, job-ready skills. We're changing this by partnering directly with industries to understand their needs and design training programs that guarantee employment opportunities.</p>
            </div>
          </div>

          <div class="content-grid">
            <div class="content-block">
              <h2>Our Solution</h2>
              <p>Phoenix combines the accessibility of mobile learning with hands-on practical training to create a comprehensive skills development ecosystem.</p>
              <p>Our hybrid approach ensures learners get both theoretical knowledge and real-world application, while our industry partnerships guarantee direct employment pathways upon successful completion.</p>
            </div>
            <div class="content-image">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Business partnership and collaboration - handshake over coffee" loading="lazy">
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="container">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">The principles that guide everything we do</p>
          <div class="mission-grid">
            <div class="mission-card">
              <div class="mission-icon">🤝</div>
              <h3>Dignity Through Skills</h3>
              <p>We believe everyone deserves access to quality education and meaningful work opportunities that provide economic dignity.</p>
            </div>
            <div class="mission-card">
              <div class="mission-icon">🌍</div>
              <h3>Industry Relevance</h3>
              <p>Our courses are designed in partnership with employers to ensure they meet real market demands and lead to actual jobs.</p>
            </div>
            <div class="mission-card">
              <div class="mission-icon">📱</div>
              <h3>Accessible Technology</h3>
              <p>We use mobile-first technology to make learning accessible to everyone, regardless of location or socioeconomic background.</p>
            </div>
            <div class="mission-card">
              <div class="mission-icon">🎯</div>
              <h3>Results-Driven</h3>
              <p>Success is measured by employment outcomes, not just course completion. We're committed to real economic impact.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="container">
          <h2 class="section-title">Our Founding Team</h2>
          <p class="section-subtitle">Passionate individuals committed to creating systemic change</p>
          <div class="team-grid">
            <div class="team-card">
              <div class="team-avatar">👨‍💼</div>
              <h3>Founder & CEO</h3>
              <p class="role">Strategic Vision</p>
              <p>Leading the mission to bridge India's skills gap through innovative education-to-employment pathways and sustainable economic mobility solutions.</p>
            </div>
            <div class="team-card">
              <div class="team-avatar">👩‍💻</div>
              <h3>Co-Founder & CTO</h3>
              <p class="role">Technology Leadership</p>
              <p>Building scalable technology solutions that make quality skills training accessible to underserved communities across India.</p>
            </div>
            <div class="team-card">
              <div class="team-avatar">👨‍🏫</div>
              <h3>Head of Curriculum</h3>
              <p class="role">Educational Excellence</p>
              <p>Designing industry-vetted training programs that combine practical skills with employment readiness for maximum impact.</p>
            </div>
            <div class="team-card">
              <div class="team-avatar">👩‍🤝‍👨</div>
              <h3>Partnerships Director</h3>
              <p class="role">Industry Relations</p>
              <p>Building strategic partnerships with employers and industry leaders to create direct employment pathways for our learners.</p>
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
          color: #333;
          background: var(--bg-secondary);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: var(--bg-primary);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .nav-links a.active {
          color: var(--primary-color);
          font-weight: 600;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.9) 0%, rgba(219, 234, 254, 0.9) 50%, rgba(191, 219, 254, 0.9) 100%), url('https://images.pexels.com/photos/7709255/pexels-photo-7709255.jpeg') center/cover;
          padding: 120px 0 60px;
          text-align: center;
          position: relative;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(239, 246, 255, 0.85) 0%, rgba(219, 234, 254, 0.85) 50%, rgba(191, 219, 254, 0.85) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .hero-content .highlight {
          color: var(--primary-color);
        }

        .hero-content p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Main Content */
        .main-content {
          padding: 80px 0;
          background: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }


        /* Contact Form */
        .contact-form {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .contact-form h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .submit-btn {
          background: var(--primary-color);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .submit-btn:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* Contact Info */
        .contact-info {
          padding: 2rem;
        }

        .contact-info h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          background: var(--bg-accent);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }

        .info-card .icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .info-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .info-card p {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .info-card a {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 500;
        }

        .info-card a:hover {
          text-decoration: underline;
        }

        /* Success Message */
        .success-message {
          background: #d1fae5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          display: none;
        }

        .success-message.show {
          display: block;
        }

        /* FAQ Section */
        .faq-section {
          background: var(--bg-accent);
          padding: 80px 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .section-subtitle {
          text-align: center;
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .faq-card {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }

        .faq-card h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .faq-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .faq-grid {
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
            <h1>Get in <span class="highlight">Touch</span></h1>
            <p>Have questions about our programs? Interested in partnering with us? We'd love to hear from you and help you take the next step in your skills journey.</p>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="main-content">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form">
              <h2>Send us a Message</h2>
              <div class="success-message" id="successMessage">
                ✅ Thank you for your message! We'll get back to you within 24 hours.
              </div>
              <form id="contactForm" action="https://formspree.io/f/mzzvjypr" method="POST">
                <input type="hidden" name="_next" value="/contact?success=true">
                <input type="hidden" name="_subject" value="New Contact Form Submission from Phoenix">
                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input type="text" id="firstName" name="first_name" required>
                  </div>
                  <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="last_name" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone">
                </div>

                <div class="form-group">
                  <label for="inquiryType">Type of Inquiry *</label>
                  <select id="inquiryType" name="inquiry_type" required>
                    <option value="">Select an option</option>
                    <option value="course-info">Course Information</option>
                    <option value="enrollment">Enrollment Questions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="employer">Employer/Hiring Partner</option>
                    <option value="media">Media Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required>
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Tell us more about your inquiry..." required></textarea>
                </div>

                <button type="submit" class="submit-btn" id="submitBtn">
                  Send Message
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <h2>Contact Information</h2>
              <div class="info-cards">
                <div class="info-card">
                  <div class="icon">📧</div>
                  <h3>Email Us</h3>
                  <p>For general inquiries:</p>
                  <a href="mailto:info@phoenix-skills.com">info@phoenix-skills.com</a>
                  <p>For partnerships:</p>
                  <a href="mailto:partnerships@phoenix-skills.com">partnerships@phoenix-skills.com</a>
                </div>

                <div class="info-card">
                  <div class="icon">📱</div>
                  <h3>Call Us</h3>
                  <p>Student Support Helpline:</p>
                  <a href="tel:+911234567890">+91 12345 67890</a>
                  <p>Partnership Inquiries:</p>
                  <a href="tel:+911234567891">+91 12345 67891</a>
                </div>

                <div class="info-card">
                  <div class="icon">📍</div>
                  <h3>Visit Us</h3>
                  <p>Phoenix Skills Development Center<br>
                  Udaipur, Rajasthan 313001<br>
                  India</p>
                </div>

                <div class="info-card">
                  <div class="icon">🕒</div>
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST<br>
                  Saturday: 10:00 AM - 4:00 PM IST<br>
                  Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Quick answers to common questions</p>
          <div class="faq-grid">
            <div class="faq-card">
              <h3>How do I enroll in a course?</h3>
              <p>Browse our course catalog, select a program that interests you, and click "Enroll Now". You'll be guided through the registration process step by step.</p>
            </div>
            <div class="faq-card">
              <h3>Are there any prerequisites?</h3>
              <p>Most of our courses are designed for beginners. Specific prerequisites, if any, are listed on each course page. We believe in making skills training accessible to everyone.</p>
            </div>
            <div class="faq-card">
              <h3>Do you offer job placement assistance?</h3>
              <p>Yes! We have partnerships with over 50 companies and provide direct employment pathways for successful course completers. Our goal is employment, not just education.</p>
            </div>
            <div class="faq-card">
              <h3>What devices do I need for online learning?</h3>
              <p>Our platform works on smartphones, tablets, and computers. Most courses can be completed using just a mobile phone, making learning accessible anywhere.</p>
            </div>
            <div class="faq-card">
              <h3>Is financial assistance available?</h3>
              <p>We offer Income Share Agreements (ISAs) for qualifying programs, meaning you pay nothing upfront and only pay after you get a job. Contact us to learn more.</p>
            </div>
            <div class="faq-card">
              <h3>How can my organization partner with Phoenix?</h3>
              <p>We're always looking for industry partners, educational institutions, and employers. Email partnerships@phoenix-skills.com to discuss collaboration opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <script>
        // Contact form handling with Formspree
        document.getElementById('contactForm').addEventListener('submit', function(e) {
          const submitBtn = document.getElementById('submitBtn');
          const successMessage = document.getElementById('successMessage');

          // Disable submit button and show loading state
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';

          // Let the form submit naturally to Formspree
          // Success handling will be done by Formspree's redirect or AJAX response
        });

        // Check if we're returning from a successful Formspree submission
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
          document.getElementById('successMessage').classList.add('show');

          // Hide success message after 5 seconds
          setTimeout(() => {
            document.getElementById('successMessage').classList.remove('show');
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
          }, 5000);
        }

        // Auto-populate subject based on inquiry type
        document.getElementById('inquiryType').addEventListener('change', function() {
          const subjectField = document.getElementById('subject');
          const inquiryType = this.value;

          const subjectMappings = {
            'course-info': 'Course Information Request',
            'enrollment': 'Enrollment Question',
            'partnership': 'Partnership Opportunity',
            'employer': 'Employer/Hiring Partner Inquiry',
            'media': 'Media Inquiry',
            'support': 'Technical Support Request',
            'other': ''
          };

          if (subjectMappings[inquiryType] !== undefined) {
            subjectField.value = subjectMappings[inquiryType];
          }
        });

        // Form validation enhancements
        const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');

        requiredFields.forEach(field => {
          field.addEventListener('blur', function() {
            if (!this.value.trim()) {
              this.style.borderColor = '#ef4444';
            } else {
              this.style.borderColor = '#2563eb';
            }
          });

          field.addEventListener('input', function() {
            if (this.value.trim()) {
              this.style.borderColor = '#2563eb';
            }
          });
        });

        // Email validation
        document.getElementById('email').addEventListener('input', function() {
          const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
          if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#ef4444';
          } else if (this.value) {
            this.style.borderColor = '#2563eb';
          }
        });
      </script>
    </body>
    </html>
`;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (pathname === '/' || pathname === '/index.html') {
    res.end(getHomePage());
  } else if (pathname === '/courses') {
    res.end(getCoursesPage(coursesData));
  } else if (pathname === '/about') {
    res.end(getAboutPage());
  } else if (pathname === '/contact') {
    res.end(getContactPage());
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
            <h1>��� Course Not Found</h1>
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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
