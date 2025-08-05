const http = require('http');
const url = require('url');

// Sample course data with detailed information
const coursesData = [
  {
    id: 1,
    title: "Hospitality Front Desk Operations",
    educator: "Chef Rakesh Meena",
    category: "Hospitality",
    type: "blue-collar",
    price: "₹999",
    image: "🏨",
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
    image: "☀️",
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
    image: "📱",
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
    image: "💼",
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
    image: "⚡",
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
    image: "💻",
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
    image: "👨‍🍳",
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
    image: "📊",
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

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: white;
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
          color: #22c55e;
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
          color: #22c55e;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%);
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
          color: #1f2937;
          line-height: 1.1;
        }

        .hero-content .highlight {
          color: #22c55e;
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: #6b7280;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-block;
          background: #22c55e;
          color: white;
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
        }

        .cta-button:hover {
          background: #16a34a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
        }

        /* How it Works Section */
        .how-it-works {
          padding: 80px 0;
          background: white;
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #374151;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1rem;
          color: #6b7280;
          margin-bottom: 4rem;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .step-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          border-color: #22c55e;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
        }

        .step-icon {
          width: 60px;
          height: 60px;
          background: #22c55e;
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
          color: #374151;
          font-weight: 600;
        }

        .step-card p {
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Client Logos */
        .client-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .client-logo {
          font-size: 2.5rem;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .client-logo:hover {
          opacity: 1;
        }

        /* Services Section */
        .services-section {
          padding: 80px 0;
          background: #f9fafb;
        }

        /* Featured Courses Section */
        .featured-courses {
          padding: 100px 0;
          background: white;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .course-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .course-image {
          height: 200px;
          background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: white;
        }

        .course-content {
          padding: 1.5rem;
        }

        .course-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #1e293b;
          font-weight: 600;
        }

        .learn-more-btn {
          background: #22c55e;
          color: white;
          padding: 10px 25px;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .learn-more-btn:hover {
          background: #16a34a;
          transform: translateY(-1px);
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
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1>Lessons and insights <br><span class="highlight">from 8 years</span></h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <a href="/courses" class="cta-button">Register</a>
          </div>
        </div>
      </section>

      <!-- Clients Section -->
      <section class="how-it-works">
        <div class="container">
          <h2 class="section-title">Our Clients</h2>
          <p class="section-subtitle">We have been working with some Fortune 500+ clients</p>
          <div class="client-logos">
            <div class="client-logo">🏢</div>
            <div class="client-logo">🏪</div>
            <div class="client-logo">🏭</div>
            <div class="client-logo">🏦</div>
            <div class="client-logo">🏛️</div>
            <div class="client-logo">🏬</div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <div class="container">
          <h2 class="section-title">Manage your entire community <br>in a single system</h2>
          <p class="section-subtitle">Who is Phoenix suitable for?</p>
          <div class="steps-container">
            <div class="step-card">
              <div class="step-icon">👥</div>
              <h3>Membership Organisations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div class="step-card">
              <div class="step-icon">🏛️</div>
              <h3>National Associations</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div class="step-card">
              <div class="step-icon">🎯</div>
              <h3>Clubs And Groups</h3>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses Section -->
      <section class="featured-courses" id="courses">
        <div class="container">
          <h2 class="section-title">Featured Courses</h2>
          <div class="courses-grid">
            <div class="course-card" onclick="window.location.href='/courses/1'">
              <div class="course-image">🏨</div>
              <div class="course-content">
                <h3>Hospitality Front Desk Operations</h3>
                <p>Master guest services, reservation systems, and front office management in the hospitality industry.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/1'">Learn More</button>
              </div>
            </div>
            <div class="course-card" onclick="window.location.href='/courses/2'">
              <div class="course-image">☀️</div>
              <div class="course-content">
                <h3>Solar Panel Installation Technician</h3>
                <p>Learn sustainable energy solutions and become certified in solar panel installation and maintenance.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/2'">Learn More</button>
              </div>
            </div>
            <div class="course-card" onclick="window.location.href='/courses/3'">
              <div class="course-image">📱</div>
              <div class="course-content">
                <h3>Digital Marketing Assistant</h3>
                <p>Develop skills in social media marketing, content creation, and online advertising strategies.</p>
                <button class="learn-more-btn" onclick="event.stopPropagation(); window.location.href='/courses/3'">Learn More</button>
              </div>
            </div>
            <div class="course-card" onclick="window.location.href='/courses/4'">
              <div class="course-image">💼</div>
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
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: white;
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
          color: #22c55e;
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
          color: #22c55e;
        }

        .nav-links a.active {
          color: #22c55e;
          font-weight: 600;
        }

        /* Breadcrumb */
        .breadcrumb {
          background: white;
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
          color: #22c55e;
          text-decoration: none;
        }

        .breadcrumb-links span {
          color: #cbd5e1;
        }

        /* Course Header */
        .course-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 0;
        }

        .course-header-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .course-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .course-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .course-educator {
          font-size: 1.1rem;
          color: #a7f3d0;
          margin-bottom: 2rem;
        }

        .course-hero-image {
          text-align: center;
          font-size: 8rem;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 2rem;
        }

        /* Key Info Section */
        .key-info-section {
          background: white;
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
          background: #f8fafc;
          border-radius: 12px;
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .info-label {
          font-size: 0.9rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .info-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
        }

        /* Main Content */
        .main-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          padding: 3rem 0;
        }

        .content-section {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-icon {
          font-size: 1.5rem;
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
          background: #f8fafc;
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
          background: #f8fafc;
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
          background: #22c55e;
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
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
          margin-bottom: 2rem;
        }

        .price-display {
          font-size: 2.5rem;
          font-weight: 700;
          color: #059669;
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
          color: #059669;
          font-weight: bold;
        }

        .enroll-btn {
          width: 100%;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
        }

        .money-back {
          font-size: 0.9rem;
          color: #64748b;
        }

        /* Educator Bio */
        .educator-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .educator-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .educator-avatar {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .educator-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e293b;
        }

        .educator-title {
          color: #64748b;
          font-size: 0.9rem;
        }

        .educator-bio {
          color: #64748b;
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
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
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
              ${course.image}
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
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .navbar {
          background: white;
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
          color: #22c55e;
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
          color: #22c55e;
        }

        .nav-links a.active {
          color: #22c55e;
          font-weight: 600;
        }

        /* Header Section */
        .page-header {
          padding: 120px 0 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .page-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-header p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        /* Search and Filter Section */
        .search-filter-section {
          background: white;
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
          border-color: #22c55e;
        }

        .search-icon {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          font-size: 1.2rem;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: #22c55e;
          color: white;
          border-color: #22c55e;
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
          background: white;
          cursor: pointer;
        }

        /* Course Grid */
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .course-card-image {
          height: 180px;
          background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3.5rem;
          color: white;
          position: relative;
        }

        .course-card-content {
          padding: 1.5rem;
        }

        .course-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .course-educator {
          color: #22c55e;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .course-description {
          color: #64748b;
          font-size: 0.95rem;
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
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .blue-collar {
          background: #dbeafe;
          color: #1e40af;
        }

        .white-collar {
          background: #f3e8ff;
          color: #7c3aed;
        }

        .course-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: #059669;
        }

        .enroll-btn {
          width: 100%;
          padding: 12px;
          background: #22c55e;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .enroll-btn:hover {
          background: #16a34a;
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
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>Course Catalog</h1>
          <p>Discover skills that shape your future</p>
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
                  ${course.image}
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

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (pathname === '/' || pathname === '/index.html') {
    res.end(getHomePage());
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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
