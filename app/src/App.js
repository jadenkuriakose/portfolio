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
          <li><a href="#projects"><FaCogs /> Projects</a></li>
          <li><a href="#skills"><FaLaptop /> Technical Skills</a></li>
          <li><a href="#certifications"><FaCertificate /> Certifications</a></li>
          <li><a href="#extracurriculars"><FaUsers /> Extracurriculars</a></li>
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
            <p>GPA: 4.0</p>
            <p>Expected Graduation: Dec. 2026</p>
            <p>Involvements: Collegium V Honors, Deans List, ACM</p>
            <p>Relevant Coursework: Computer Science II, Discrete Math, Computer Architecture, & Systems Programming</p>
          </div>
        </div>

        <div id="experience" className="section">
          <h3 className="section-title">Experience</h3>

          <div className="experience-container">
            <div className="experience-content">
              <h4>Tomorrows AI - Software Engineer Intern | Oct. 2024 - Current</h4>
              <ul className="highlight-list">
                <li>Integrated React & Firebase for profile management, reducing load time by 25% & increasing user engagement by 45%</li>
                <li>Implemented interactive maps with React improving user retention by 35% without significant impact on page latency</li>
                <li>Collaborated in an Agile environment increasing delivery speed by 50% and reducing bug reports by 30% over time</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="experience-container">
            <div className="experience-content">
              <h4>theCoderSchool - Code Instructor | May 2024 - Dec. 2024</h4>
              <ul className="highlight-list">
                <li>Taught 10+ students various programming languages and frameworks, increasing project completion rates by 40%</li>
                <li>Created personalized lesson plans based on student progress, resulting in a 30% increase in knowledge retention</li>
                <li>Guided students through real-world projects, cutting completion time by 25%</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="experience-container">
            <div className="experience-content">
              <h4>Lentura LLC - Full Stack Engineer Intern | Aug. 2023 - Feb. 2024</h4>
              <ul className="highlight-list">
                <li>Constructed REST APIs with Node.js, AWS Lambda, & mySQL for inventory streamlining frontend operations by 30%</li>
                <li>Developed user verification systems with Node.js, mySQL, and Amazon Pinpoint increasing function speeds by 40%</li>
                <li>Fully integrated payment systems into checkout using React.js, Paypal API, and Stripe API increasing sales opportunity</li>
              </ul>
            </div>
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
                <li>Leveraged whisper models to quickly and efficiently transcribe YouTube videos with automatic speech recognition</li>
                <li>Cached video transcriptions and optimized models decreasing latency by over 900 ms when downloading transcripts</li>
                <li>Tested sentiment analysis models and LLM performances optimizing prompts & models to improve AI responses</li>
              </ul>
            </div>
          </div>

          <div className="glowing-line"></div>

          <div className="project-container">
            <div className="project-content">
              <h4>Traffic Light Classifier | Python, OpenCV2, YoloV8, numpy</h4>
              <ul className="highlight-list">
                <li>Converts images byte size arrays using opencv and connects to yolov8 for object detection of traffic lights</li>
                <li>Analyzes image bytes by converting the bytes into a numpy array and using hsv to check the dominant color of the traffic light</li>
                <li>Achieved 90% accuracy on online image test case and with real life test cases collected while driving</li>
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
                <li>Created a conversational voice-to-voice bot that uses an LLM to assist those with mental health issues</li>
                <li>Developed NLP analysis of sentiment and length to detect high-risk terms and produce higher quality responses</li>
                <li>Maintained storage of past message responses giving the LLM a memory of past responses informing conversation</li>
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
              <li>IBM Software Development Basics, Intro to Node.js, Developing with React.js, Docker & Kubernetes Basics</li>
              <li>Google Cloud Generative AI Course</li>
              <li>Forage Certifications in Software Development: Goldman Sachs, Accenture, Wells Fargo, EA</li>
            </ul>
          </div>
        </div>

        <div id="extracurriculars" className="section">
          <h3 className="section-title">Extracurriculars</h3>
          <div className="container">
            <h4>ACM Development | Dec. 2024 – Present </h4>
            <ul className="highlight-list">
              <li>Updating SAGE, an application expected to assist over 200+ UTD students with schedule planning across multiple majors</li>
              <li>Optimizing RAG models & algorithms for transcript analysis and schedule improvements aiming to lower latency by 40%</li>
              <li>Improving the AI chatbot to improve responses to user questions about site features and schedule-related questions</li>
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

