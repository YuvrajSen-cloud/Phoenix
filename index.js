const http = require('http');
const url = require('url');

// Sample course data
const coursesData = [
  {
    id: 1,
    title: "Hospitality Front Desk Operations",
    educator: "Chef Rakesh Meena",
    category: "Hospitality",
    type: "blue-collar",
    price: "₹999",
    image: "🏨",
    description: "Master guest services, reservation systems, and front office management"
  },
  {
    id: 2,
    title: "Solar Panel Installation Technician",
    educator: "Engineer Priya Sharma",
    category: "Energy",
    type: "blue-collar",
    price: "ISA Available",
    image: "☀️",
    description: "Learn sustainable energy solutions and solar installation techniques"
  },
  {
    id: 3,
    title: "Digital Marketing Assistant",
    educator: "Marketing Expert Amit Kumar",
    category: "IT",
    type: "white-collar",
    price: "₹1,499",
    image: "📱",
    description: "Develop skills in social media marketing and online advertising"
  },
  {
    id: 4,
    title: "Business Administration Basics",
    educator: "MBA Consultant Neha Gupta",
    category: "Management",
    type: "white-collar",
    price: "₹1,999",
    image: "💼",
    description: "Build foundational knowledge in business operations and management"
  },
  {
    id: 5,
    title: "Electrical Technician Certification",
    educator: "Master Electrician Rajesh Singh",
    category: "Technical",
    type: "blue-collar",
    price: "₹899",
    image: "⚡",
    description: "Complete electrical systems installation and maintenance training"
  },
  {
    id: 6,
    title: "Web Development Fundamentals",
    educator: "Senior Developer Anita Roy",
    category: "IT",
    type: "white-collar",
    price: "₹2,499",
    image: "💻",
    description: "Learn HTML, CSS, JavaScript and modern web development practices"
  },
  {
    id: 7,
    title: "Culinary Arts & Food Service",
    educator: "Head Chef Suresh Patel",
    category: "Hospitality",
    type: "blue-collar",
    price: "₹1,299",
    image: "👨‍🍳",
    description: "Professional cooking techniques and kitchen management skills"
  },
  {
    id: 8,
    title: "Data Entry & Office Administration",
    educator: "Office Manager Kavita Joshi",
    category: "Administrative",
    type: "white-collar",
    price: "₹799",
    image: "📊",
    description: "Master office software, data management, and administrative procedures"
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
          color: #4f46e5;
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
          color: #4f46e5;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(255, 156, 84, 0.9)),
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23f0f9ff" width="1200" height="800"/><circle fill="%23ddd6fe" cx="200" cy="200" r="50"/><circle fill="%23fed7d7" cx="800" cy="150" r="30"/><circle fill="%23c6f6d5" cx="1000" cy="300" r="40"/><circle fill="%23fef3c7" cx="300" cy="500" r="35"/><circle fill="%23bfdbfe" cx="900" cy="600" r="45"/><path fill="%23a78bfa" d="M100,400 Q200,350 300,400 T500,400"/></svg>');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          margin-top: 80px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-button {
          display: inline-block;
          background: #4f46e5;
          color: white;
          padding: 15px 40px;
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }

        .cta-button:hover {
          background: #3730a3;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
        }

        /* How it Works Section */
        .how-it-works {
          padding: 100px 0;
          background: #f8fafc;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1e293b;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .step-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-5px);
        }

        .step-number {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .step-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .step-card p {
          color: #64748b;
          font-size: 1.1rem;
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
          background: #10b981;
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
          background: #059669;
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
            <h1>आपका हुनर, आपका भविष्य</h1>
            <p>Your Skill, Your Future</p>
            <a href="/courses" class="cta-button">Explore Courses</a>
          </div>
        </div>
      </section>

      <!-- How it Works Section -->
      <section class="how-it-works">
        <div class="container">
          <h2 class="section-title">How it Works</h2>
          <div class="steps-container">
            <div class="step-card">
              <div class="step-number">1</div>
              <h3>Learn Skills</h3>
              <p>Choose from industry-relevant courses designed to enhance your professional capabilities and career prospects.</p>
            </div>
            <div class="step-card">
              <div class="step-number">2</div>
              <h3>Get Certified</h3>
              <p>Complete assessments and earn recognized certifications that validate your expertise to employers.</p>
            </div>
            <div class="step-card">
              <div class="step-number">3</div>
              <h3>Start Your Career</h3>
              <p>Apply your new skills and certifications to secure better job opportunities and advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses Section -->
      <section class="featured-courses" id="courses">
        <div class="container">
          <h2 class="section-title">Featured Courses</h2>
          <div class="courses-grid">
            <div class="course-card">
              <div class="course-image">🏨</div>
              <div class="course-content">
                <h3>Hospitality Front Desk Operations</h3>
                <p>Master guest services, reservation systems, and front office management in the hospitality industry.</p>
                <button class="learn-more-btn">Learn More</button>
              </div>
            </div>
            <div class="course-card">
              <div class="course-image">☀️</div>
              <div class="course-content">
                <h3>Solar Panel Installation Technician</h3>
                <p>Learn sustainable energy solutions and become certified in solar panel installation and maintenance.</p>
                <button class="learn-more-btn">Learn More</button>
              </div>
            </div>
            <div class="course-card">
              <div class="course-image">📱</div>
              <div class="course-content">
                <h3>Digital Marketing Assistant</h3>
                <p>Develop skills in social media marketing, content creation, and online advertising strategies.</p>
                <button class="learn-more-btn">Learn More</button>
              </div>
            </div>
            <div class="course-card">
              <div class="course-image">💼</div>
              <div class="course-content">
                <h3>Business Administration Basics</h3>
                <p>Build foundational knowledge in business operations, management principles, and professional communication.</p>
                <button class="learn-more-btn">Learn More</button>
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
          color: #4f46e5;
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
          color: #4f46e5;
        }

        .nav-links a.active {
          color: #4f46e5;
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
          border-color: #4f46e5;
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
          background: #4f46e5;
          color: white;
          border-color: #4f46e5;
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
          color: #4f46e5;
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
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .enroll-btn:hover {
          background: #3730a3;
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
              <div class="course-card" data-category="${course.category}" data-type="${course.type}" data-title="${course.title.toLowerCase()}" data-price="${course.price}">
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
                  <button class="enroll-btn">Enroll Now</button>
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

        // Enroll button functionality
        document.querySelectorAll('.enroll-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Enrollment feature coming soon! We will notify you when it becomes available.');
          });
        });

        // Course card click functionality
        allCourses.forEach(card => {
          card.addEventListener('click', () => {
            const title = card.querySelector('.course-title').textContent;
            alert(\`Course details for "\${title}" coming soon!\`);
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
