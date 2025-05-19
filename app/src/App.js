import {
  FaGraduationCap,
  FaBriefcase,
  FaCogs,
  FaLaptop,
  FaUsers,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaEnvelope,
  FaCertificate,
  FaBasketballBall,
  FaSmile,
  FaDumbbell,
  FaMusic,
  FaGamepad,
} from "react-icons/fa"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Jaden Kuriakose</h1>
        <div className="socials">
          <a href="https://www.linkedin.com/in/jaden-kuriakose/" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a
            href="https://drive.google.com/file/d/1Q57Ts8noqNX79oM_WYfG4o_KIfjPuol5/view?usp=drive_link"
            aria-label="Resume"
          >
            <FaFileAlt />
          </a>
          <a href="https://github.com/jadenkuriakose" aria-label="GitHub Profile">
            <FaGithub />
          </a>
          <a href="mailto:jadenjkuriakose@gmail.com" aria-label="email">
            <FaEnvelope />
          </a>
        </div>
      </header>

      <nav className="page-nav">
        <a href="#education">
          <FaGraduationCap /> Education
        </a>
        <a href="#experience">
          <FaBriefcase /> Experience
        </a>
        <a href="#extracurriculars">
          <FaUsers /> Extracurriculars
        </a>
        <a href="#projects">
          <FaCogs /> Projects
        </a>
        <a href="#skills">
          <FaLaptop /> Skills
        </a>
        <a href="#certifications">
          <FaCertificate /> Certifications
        </a>
        <a href="#hobbies">
          <FaSmile /> Hobbies
        </a>
      </nav>

      <main>
        <section id="education">
          <h2>
            <FaGraduationCap /> Education
          </h2>
          <h3>University of Texas at Dallas</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>GPA: 4.0/4</p>
          <p>Expected Graduation: May 2027</p>
          <p>Clubs/Extracurriculars: ACM, Dean's List, AIS</p>
          <p>Relevant Coursework: Computer Science II, Discrete Math, Computer Architecture, & Systems Programming</p>
        </section>

        <section id="experience">
          <h2>
            <FaBriefcase /> Experience
          </h2>

          <div className="experience-item">
            <h3>Tomorrows AI - Software Engineer Intern | Sept. 2024 - Feb. 2025</h3>
            <ul>
              <li>
                Optimized profile management by reducing load time 25% and increasing engagement 45% using React &
                Firebase
              </li>
              <li>
                Enhanced user retention by 35% by integrating interactive maps with React without adding noticeable page
                latency
              </li>
              <li>
                Accelerated delivery speed by 50% and cut bug reports by 30% by collaborating in Agile sprints and code
                reviews
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>SuperIntro - AI Software Engineer Intern | Oct. 2024 - Dec. 2025</h3>
            <ul>
              <li>
                Reduced voice to voice chatbot latency by 60% by integrating inferencing systems with under 300 ms
                response times
              </li>
              <li>
                Decreased chatbot costs and provided users with the opportunity to choose between over 30 different
                voice settings
              </li>
              <li>Improved chatbot response quality through extensive testing and prompt engineering</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>theCoderSchool - Code Instructor | May 2024 - Dec. 2024</h3>
            <ul>
              <li>
                Increased student project completion rates by 40% by teaching 10+ students coding languages and
                frameworks
              </li>
              <li>
                Boosted knowledge retention by 30% by designing personalized lesson plans tailored to student progress
              </li>
              <li>
                Oversaw the development of advanced full-stack projects with 100+ real-time users & 1000+ weekly
                visitors and continue to assist with maintenance
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Lentura LLC - Full Stack Engineer Intern | Aug. 2023 - Feb. 2024</h3>
            <ul>
              <li>Streamlined frontend operations by 30% by building REST APIs using Node.js, AWS Lambda, and MySQL</li>
              <li>
                Decreased verification SMS delay by 40% by implementing lambda functions with Node.js, AWS Pinpoint &
                SNS
              </li>
              <li>
                Expanded sales potential by integrating 10+ payment options using React, PayPal API, and Stripe API
              </li>
            </ul>
          </div>
        </section>

        <section id="extracurriculars">
          <h2>
            <FaUsers /> Extracurriculars
          </h2>

          <div className="extracurricular-item">
            <h3>Software Development Officer | ACM UTD | Dec. 2024 – Present</h3>
            <ul>
              <li>
                Developing SAGE, an AI counselor application expected to assist over 200+ UTD students with schedule
                planning across multiple majors
              </li>
              <li>
                Designed AWS Lambda architecture, integrating cloud & API services for chatbot functionality and
                transcript analysis
              </li>
              <li>
                Automating a script to pull UTD professor data from multiple sources and synthesize content into values
                that can be interpreted by multiple ACM services
              </li>
            </ul>
          </div>

          <div className="extracurricular-item">
            <h3>Co-founder & CTO | GameSense AI | Jan. 2024 – Present</h3>
            <ul>
              <li>
                Led chatbot development, optimizing RAG by scraping data for various query types while maintaining
                latency under 800ms
              </li>
              <li>
                Collaborated on a Random Forest Regressor model that cleans scraped data with pandas and predicts
                performance with 60% accuracy
              </li>
              <li>
                Created promotional content that grew following to 1000+ followers and achieved 500+ impressions on 60%
                of posts within 2 weeks
              </li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <h2>
            <FaCogs /> Projects
          </h2>

          <div className="project-item">
            <h3>
              Transcriptify | React.js, Whisper, Hugging Face Transformers, PyTorch
              <a href="https://github.com/jadenkuriakose/Transcriptify" className="project-link">
                <FaGithub />
              </a>
            </h3>
            <ul>
              <li>
                Engineered a YouTube video transcription tool using Whisper for accurate and efficient speech
                recognition
              </li>
              <li>
                Optimized caching, reducing average latency by 400ms & cutting redundant transcriptions with follow-up
                queries
              </li>
              <li>
                Refined sentiment analysis and LLM prompt engineering to enhance AI-generated insights & improve clarity
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3>
              CLI Anomaly Detection | Golang
            </h3>
            <ul>
              <li>
                Developed a system to monitor system metrics (e.g., CPU usage) and detect anomalies using a z-score-based machine learning algorithm
              </li>
              <li>
                Implemented a REST API with endpoints to submit metrics and retrieve current metric data, enabling external integration
              </li>
              <li>
                Integrated thread-safe logging to track metrics, z-scores, and anomaly alerts in a persistent log file
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Traffic Light Classifier | Python, OpenCV2, YoloV8, numpy</h3>
            <ul>
              <li>
                Converts images to byte arrays using opencv and connects to yolov8 for object detection of traffic
                lights
              </li>
              <li>
                Analyzes image bytes by converting the bytes into a numpy array and using hsv to check the dominant
                color of the traffic light
              </li>
              <li>
                Achieved 100% accuracy on online image test case and with real life test cases collected while driving
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3> Field Goal Odds Predictor | pandas, sci-kit learn, numpy, matplotlib, seaborn </h3>
            <ul>
              <li>
                Cleans & parses data from the prior season from a csv file using pandas and numpy to prepare data for the model
              </li>
              <li>
                Trains the model on the data and uses accuracy from nearby ranges to predict the odds that the field goal will be successful
              </li>
              <li>
                Plots the odds for the player to land a successful field goal & generates an image with seaborn before deleting the image
              </li>
            </ul>
          </div>

          <div className="project-item">
            <h3>
              MentAssistant | Flask, React.js, REST APIs, TextBlob
              <a href="https://github.com/jadenkuriakose/MentAssistant" className="project-link">
                <FaGithub />
              </a>
            </h3>
            <ul>
              <li>
                Built an AI-powered mental health assistant with real-time voice interactions and sentiment detection
              </li>
              <li>
                Implemented NLP to identify high-risk terms and improve response quality through dynamic sentiment
                analysis
              </li>
              <li>Enabled conversation memory by storing past responses, improving LLM contextual understanding</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>
              NBA Stat Predictor | Python, BeautifulSoup4, pandas, sci-kit learn, SHAP, Flask
              <a href="https://github.com/jadenkuriakose/NBA-Player-Predictor" className="project-link">
                <FaGithub />
              </a>
            </h3>
            <ul>
              <li>
                Utilized a BeautifulSoup scraping algorithm to access recent game data and processed data with pandas
                library
              </li>
              <li>
                Predicted stats with a Random Forest Regressor Model developed using sci-kit learn that considers
                various factors
              </li>
              <li>
                Integrated an LLM alongside SHAP in order to give simplified explanations for predictions with relative
                accuracy
              </li>
            </ul>
          </div>
        </section>

        <section id="skills">
          <h2>
            <FaLaptop /> Technical Skills
          </h2>

          <div className="skills-group">
            <h3>Languages</h3>
            <p>Python, JavaScript, Go, Java, HTML, CSS, SQL, C++, R, Kotlin</p>
          </div>

          <div className="skills-group">
            <h3>Technologies</h3>
            <p>
              Node.js, Spring Boot, React.js, Flask, Postman, Axios, Vite, BeautifulSoup, Sci-kit Learn, Pandas,
              Firebase
            </p>
          </div>

          <div className="skills-group">
            <h3>Tools</h3>
            <p>AWS, Google Cloud Compute, Google Workspace, Jira, Asana, ClickUp, VS Code, Github</p>
          </div>
        </section>

        <section id="certifications">
          <h2>
            <FaCertificate /> Certifications
          </h2>
          <ul>
            <li>AWS Technical Essentials</li>
            <li>IBM Software Development Basics: Node.js, Docker, Kubernetes, Databases, React.js, Github</li>
            <li>Google Cloud Generative AI Course</li>
            <li>Forage Certifications in Software Development: Goldman Sachs, Accenture, Wells Fargo, EA</li>
          </ul>
        </section>

        <section id="hobbies">
          <h2>
            <FaSmile /> Hobbies
          </h2>
          <p>
            <FaBasketballBall /> Playing Sports
          </p>
          <p>
            <FaDumbbell /> Going to the Gym
          </p>
          <p>
            <FaMusic /> Listening to Music
          </p>
          <p>
            <FaGamepad /> Playing Video Games
          </p>
        </section>
      </main>
    </div>
  )
}
