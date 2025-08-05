const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
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
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1>आपका हुनर, आपका भविष्य</h1>
            <p>Your Skill, Your Future</p>
            <a href="#courses" class="cta-button">Explore Courses</a>
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
        // Smooth scrolling for CTA button
        document.querySelector('.cta-button').addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector('#courses').scrollIntoView({
            behavior: 'smooth'
          });
        });

        // Add interactive hover effects
        document.querySelectorAll('.learn-more-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            alert('Course details coming soon! Stay tuned for more information.');
          });
        });
      </script>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
