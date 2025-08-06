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
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(13,71,161,0.6) 100%);
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
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:%232196f3;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%230d47a1;stop-opacity:0.3" /></radialGradient></defs><circle cx="200" cy="300" r="150" fill="url(%23grad)"/><circle cx="800" cy="200" r="100" fill="url(%23grad)"/><circle cx="600" cy="700" r="200" fill="url(%23grad)"/></svg>') no-repeat center;
          background-size: cover;
          opacity: 0.3;
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
          text-shadow: 0 0 30px rgba(33, 150, 243, 0.5);
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
        }

        .visual-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          color: #2196f3;
          text-shadow: 0 0 20px rgba(33, 150, 243, 0.6);
        }

        /* Stats Section */
        .stats-section {
          padding: 80px 0;
          background: linear-gradient(135deg, rgba(13, 71, 161, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
          border-radius: 20px;
          margin: 40px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(33, 150, 243, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(33, 150, 243, 0.3);
          border-color: #2196f3;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #2196f3;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 15px rgba(33, 150, 243, 0.5);
        }

        .stat-label {
          color: #e3f2fd;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
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
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2196f3, #1976d2);
          border-radius: 50%;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 0 20px rgba(33, 150, 243, 0.4);
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

          .stats-grid {
            grid-template-columns: 1fr;
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
              <div class="visual-icon">🎯</div>
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
              <div class="visual-icon">⚡</div>
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

      <!-- Solution Section -->
      <section class="content-section">
        <div class="container">
          <h2 class="section-title">Our Hybrid Learning Solution</h2>
          <div class="section-content">
            <div class="text-content">
              <h3>Mobile-First Platform + Hands-on Training</h3>
              <p>Phoenix combines the accessibility of digital learning with the effectiveness of practical, hands-on training. Our approach ensures learners gain both theoretical knowledge and real-world skills.</p>
              <h3>Industry-Vetted Programs</h3>
              <p>Every course is designed in partnership with industry experts and employers, ensuring our graduates have the exact skills needed for in-demand jobs in both blue-collar and white-collar sectors.</p>
              <h3>Employment Pipeline</h3>
              <p>We don't just train – we connect. Our extensive network of industry partners provides direct pathways to employment, internships, and career advancement opportunities.</p>
            </div>
            <div class="visual-content">
              <div class="visual-icon">🚀</div>
              <h3 style="color: #2196f3; margin-bottom: 1rem;">Complete Ecosystem</h3>
              <p style="color: #e3f2fd;">From skill assessment to job placement, we support learners throughout their entire career journey.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Impact Stats -->
      <section class="stats-section">
        <div class="container">
          <h2 class="section-title">Our Growing Impact</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">500+</div>
              <div class="stat-label">Youth Trained</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">85%</div>
              <div class="stat-label">Employment Success Rate</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">50+</div>
              <div class="stat-label">Industry Partners</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">8</div>
              <div class="stat-label">Training Programs</div>
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
              <div class="team-avatar">👨‍💼</div>
              <div class="team-name">Yuvraj Sen</div>
              <div class="team-role">Founder & CEO</div>
              <div class="team-bio">Passionate about bridging India's skills gap through innovative training solutions. Background in business strategy and social impact.</div>
            </div>
            <div class="team-card">
              <div class="team-avatar">👩‍🎓</div>
              <div class="team-name">Dr. Priya Sharma</div>
              <div class="team-role">Head of Curriculum</div>
              <div class="team-bio">Former professor with 15+ years in vocational education. Specializes in industry-aligned curriculum development.</div>
            </div>
            <div class="team-card">
              <div class="team-avatar">👨‍💻</div>
              <div class="team-name">Rajesh Kumar</div>
              <div class="team-role">Technology Lead</div>
              <div class="team-bio">Expert in mobile-first learning platforms. Previously worked with EdTech startups across India.</div>
            </div>
          </div>
        </div>
      </section>

      <script>
        // Add smooth scrolling for any internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });

        // Add animation on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        // Observe all content sections
        document.querySelectorAll('.content-section, .stats-section, .team-section').forEach(section => {
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
          section.style.transition = 'all 0.6s ease';
          observer.observe(section);
        });
      </script>
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
          background: white;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          min-width: 150px;
          transition: all 0.3s ease;
        }

        .impact-stat:hover {
          border-color: #22c55e;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #22c55e;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #6b7280;
          font-weight: 500;
        }

        /* Services Section */
        .services-section {
          padding: 80px 0;
          background: #f9fafb;
        }

        /* Featured Courses Section */
        .featured-courses {
          padding: 80px 0;
          background: white;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .course-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .course-card:hover {
          border-color: #22c55e;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
        }

        .course-image {
          height: 160px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: #22c55e;
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
          color: #374151;
          font-weight: 600;
        }

        .course-card p {
          color: #6b7280;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .learn-more-btn {
          background: #22c55e;
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
          background: #16a34a;
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
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%);
          color: #374151;
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
          color: #1f2937;
        }

        .course-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .course-educator {
          font-size: 1rem;
          color: #22c55e;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .course-hero-image {
          text-align: center;
          background: rgba(34, 197, 94, 0.1);
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
          background: white;
          border-radius: 8px;
          border: 1px solid #f3f4f6;
        }

        .info-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #22c55e;
        }

        .info-label {
          font-size: 0.8rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
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
          border-radius: 8px;
          border: 1px solid #f3f4f6;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .section-icon {
          font-size: 1.3rem;
          color: #22c55e;
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
          border-radius: 8px;
          padding: 2rem;
          border: 1px solid #f3f4f6;
          text-align: center;
          margin-bottom: 2rem;
        }

        .price-display {
          font-size: 2.2rem;
          font-weight: 600;
          color: #22c55e;
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
          color: #22c55e;
          font-weight: bold;
        }

        .enroll-btn {
          width: 100%;
          background: #22c55e;
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
          background: #16a34a;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        .money-back {
          font-size: 0.9rem;
          color: #64748b;
        }

        /* Educator Bio */
        .educator-card {
          background: white;
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
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .educator-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
        }

        .educator-title {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .educator-bio {
          color: #6b7280;
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
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%);
          color: #374151;
          text-align: center;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .page-header p {
          font-size: 1.1rem;
          color: #6b7280;
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
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }

        .search-icon {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
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
          background: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: #22c55e;
          color: white;
          border-color: #22c55e;
          box-shadow: 0 2px 4px rgba(34, 197, 94, 0.2);
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
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .course-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .course-card:hover {
          border-color: #22c55e;
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
        }

        .course-card-image {
          height: 160px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: #22c55e;
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
          color: #374151;
        }

        .course-educator {
          color: #22c55e;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }

        .course-description {
          color: #6b7280;
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
          color: #22c55e;
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
              <span class="search-icon">���</span>
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
