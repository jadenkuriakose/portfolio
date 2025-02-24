import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaCogs, FaLaptop, FaUsers, FaLinkedin, FaGithub, FaFileAlt, FaEnvelope, FaCertificate, FaBasketballBall, FaSmile, FaDumbbell, FaMusic, FaGamepad, FaBars } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Jaden Kuriakose</h2>
        <ul className="sidebar-nav">
          <li><a href="#education"><FaGraduationCap /> Education</a></li>
          <li><a href="#experience"><FaBriefcase /> Experience</a></li>
          <li><a href="#extracurriculars"><FaUsers /> Extracurriculars</a></li>
          <li><a href="#projects"><FaCogs /> Projects</a></li>
          <li><a href="#skills"><FaLaptop /> Technical Skills</a></li>
          <li><a href="#certifications"><FaCertificate /> Certifications</a></li>
          <li><a href="#hobbies"><FaSmile /> Hobbies</a></li>
        </ul>
        <div className="socials">
          <a href="https://www.linkedin.com/in/jaden-kuriakose/" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href="https://drive.google.com/file/d/1Q57Ts8noqNX79oM_WYfG4o_KIfjPuol5/view?usp=drive_link" aria-label="Resume">
            <FaFileAlt />
          </a>
          <a href="https://github.com/jadenkuriakose" aria-label="GitHub Profile">
            <FaGithub />
          </a>
          <a href="mailto:jadenjkuriakose@gmail.com" aria-label="email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="content">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div id="education" className="section">
          <h3 className="section-title">Education</h3>
          <div className="container">
            <h4>University of Texas at Dallas</h4>
            <p>Bachelor of Science in Computer Science</p>
            <p>GPA: 4.0/4</p>
            <p>Expected Graduation: Dec. 2026</p>
            <p>Clubs/Extracurriculars: ACM, Dean's List, AIS</p>
            <p>Relevant Coursework: Computer Science II, Discrete Math, Computer Architecture, & Systems Programming</p>
          </div>
        </div>

        <div id="experience" className="section">
          <h3 className="section-title">Experience</h3>

          <div className="experience-container">
            <div className="experience-content">
              <h4>Tomorrows AI - Software Engineer Intern | Sept. 2024 - Feb. 2025</h4>
              <ul className="highlight-list">
               <li>Optimized profile management by reducing load time 25% and increasing engagement 45% using React & Firebase</li>
               <li>Enhanced user retention by 35% by integrating interactive maps with React without adding noticeable page latency</li>
               <li>Accelerated delivery speed by 50% and cut bug reports by 30% by collaborating in Agile sprints and code reviews</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="experience-content">
              <h4>SuperIntro - AI Software Engineer Intern | Oct. 2024 - Dec. 2025</h4>
              <ul className="highlight-list">
               <li>Reduced voice to voice chatbot latency by 60% by integrating inferencing systems with under 300 ms response times</li>
              <li>Decreased chatbot costs and provided users with the opportunity to choose between over 30 different voice settings</li>
              <li>Improved chatbot response quality through extensive testing and prompt engineering</li>
              </ul>
            </div>

          <div className="glowing-line"></div>

          <div className="experience-container">
            <div className="experience-content">
              <h4>theCoderSchool - Code Instructor | May 2024 - Dec. 2024</h4>
              <ul className="highlight-list">
                <li>Increased student project completion rates by 40% by teaching 10+ students coding languages and frameworks</li>
                <li>Boosted knowledge retention by 30% by designing personalized lesson plans tailored to student progress</li>
                <li>Oversaw the development of advanced full-stack projects with 100+ real-time users & 1000+ weekly visitors and continue to assist with maintenance</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="experience-container">
            <div className="experience-content">
              <h4>Lentura LLC - Full Stack Engineer Intern | Aug. 2023 - Feb. 2024</h4>
              <ul className="highlight-list">
                <li>Streamlined frontend operations by 30% by building REST APIs using Node.js, AWS Lambda, and MySQL</li>
                <li>Decreased verification SMS delay by 40% by implementing lambda functions with Node.js, AWS Pinpoint & SNS</li>
                <li>Expanded sales potential by integrating 10+ payment options using React, PayPal API, and Stripe API</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="extracurriculars" className="section">
  <h3 className="section-title">Extracurriculars</h3>
  
  <div className="container">
    <h4>Software Development Officer | ACM UTD | Dec. 2024 – Present</h4>
    <ul className="highlight-list">
      <li>Developing SAGE, an AI counselor application expected to assist over 200+ UTD students with schedule planning across multiple majors</li>
      <li>Designed AWS Lambda architecture, integrating cloud & API services for chatbot functionality and transcript analysis</li>
      <li>Automating a script to pull UTD professor data from multiple sources and synthesize content into values that can be interpreted by multiple ACM services</li>
     </ul>
  </div>
  
  <div className="container">
    <h4>Co-founder & CTO | GameSense AI | Jan. 2024 – Present</h4>
    <ul className="highlight-list">
      <li>Led chatbot development, optimizing RAG by scraping data for various query types while maintaining latency under 800ms</li>
      <li>Collaborated on a Random Forest Regressor model that cleans scraped data with pandas and predicts performance with 60% accuracy</li>
      <li>Created promotional content that grew following to 1000+ followers and achieved 500+ impressions on 60% of posts within 2 weeks</li>
    </ul>
  </div>
  
</div>

        <div id="projects" className="section">
          <h3 className="section-title">Projects</h3>

          <div className="project-container">
          <a href="https://github.com/jadenkuriakose/Transcriptify" aria-label="GitHub Profile">
            <FaGithub />
          </a>
            <div className="project-content">
              <h4>Transcriptify | React.js, Whisper, Hugging Face Transformers, PyTorch</h4>
              <ul className="highlight-list">
                <li>Engineered a YouTube video transcription tool using Whisper for accurate and efficient speech recognition</li>
                <li>Optimized caching, reducing average latency by 400ms & cutting redundant transcriptions with follow-up queries</li>
                <li>Refined sentiment analysis and LLM prompt engineering to enhance AI-generated insights & improve clarity</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="project-container">
            <div className="project-content">
              <h4>Traffic Light Classifier | Python, OpenCV2, YoloV8, numpy</h4>
              <ul className="highlight-list">
                <li>Converts images to byte arrays using opencv and connects to yolov8 for object detection of traffic lights</li>
                <li>Analyzes image bytes by converting the bytes into a numpy array and using hsv to check the dominant color of the traffic light</li>
                <li>Achieved 100% accuracy on online image test case and with real life test cases collected while driving</li>
              </ul>
            </div>
          </div>


          <div className="glowing-line"></div>

          <div className="project-container">
          <a href="https://github.com/jadenkuriakose/MentAssistant" aria-label="GitHub Profile">
            <FaGithub />
          </a>
            <div className="project-content">
              <h4>MentAssistant | Flask, React.js, REST APIs, TextBlob</h4>
              <ul className="highlight-list">
                <li>Built an AI-powered mental health assistant with real-time voice interactions and sentiment detection</li>
                <li>Implemented NLP to identify high-risk terms and improve response quality through dynamic sentiment analysis</li>
                <li>Enabled conversation memory by storing past responses, improving LLM contextual understanding</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="project-container">
          <a href="https://github.com/jadenkuriakose/NBA-Player-Predictor" aria-label="GitHub Profile">
            <FaGithub />
          </a>
            <div className="project-content">
              <h4>NBA Stat Predictor | Python, BeautifulSoup4, pandas, sci-kit learn, SHAP, Flask, React.js</h4>
              <ul className="highlight-list">
                <li>Utilized a BeautifulSoup scraping algorithm to access recent game data and processed data with pandas library</li>
                <li>Predicted stats with a Random Forest Regressor Model developed using sci-kit learn that considers various factors</li>
                <li>Integrated an LLM alongside SHAP in order to give simplified explanations for predictions with relative accuracy</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="skills" className="section">
          <h3 className="section-title">Technical Skills</h3>

          <div className="container">
            <h4>Languages</h4>
            <p>Python, JavaScript, Java, HTML, CSS, SQL, C++, R, Kotlin</p>
          </div>

          <div className="container">
            <h4>Technologies</h4>
            <p>Node.js, Spring Boot, React.js, Flask, Postman, Axios, Vite, BeautifulSoup, Sci-kit Learn, Pandas, Firebase</p>
          </div>

          <div className="container">
            <h4>Tools</h4>
            <p>AWS, Google Cloud Compute, Google Workspace, Jira, Asana, ClickUp, VS Code, Github</p>
          </div>
        </div>

        <div id="certifications" className="section">
          <h3 className="section-title">Certifications</h3>
          <div className="container">
            <ul className="highlight-list">
              <li>AWS Technical Essentials</li>
              <li>IBM Software Development Basics: Node.js, Docker, Kubernetes, Databases, React.js, Github</li>
              <li>Google Cloud Generative AI Course</li>
              <li>Forage Certifications in Software Development: Goldman Sachs, Accenture, Wells Fargo, EA</li>
            </ul>
          </div>
        </div>

        <div id="hobbies" className="section">
          <h3 className="section-title">Hobbies</h3>
          <div className="container">
            <p><FaBasketballBall /> Playing Sports</p> 
            <p><FaDumbbell /> Going to the Gym</p>
            <p><FaMusic /> Listening to Music</p>
            <p><FaGamepad /> Playing Video Games</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

