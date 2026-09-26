import { useState } from "react";
import hero from "./assets/hero-3d.png";


const projects = [
  
  {
    name: "Employee Management System",
    type: "Full Stack",
    description:
      "A CRUD application for managing employee records with authentication and REST APIs.",
    stack: ["React", "Flask", "MySQL", "REST API"],
    demo: "https://employee-management-system-94ww.onrender.com/",
    github: "https://github.com/Abdulvahafsafir/employee-management"
  },
];


const skills = {
  "Programming": [
    "Python",
    "Java",
    "JavaScript (ES6+)",
    "TypeScript"
    
  ],

  "Frontend": [
    "HTML5",
    "CSS3",
    "React.js",
    "Redux",
    "Responsive Design"
  ],

  "Backend": [
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
    ".NET",
    "REST APIs"
  ],

  "Database & Tools": [
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
   
    "VS Code"
  ],

  "Testing & Practices": [
    
    "Agile",
    "Web Performance Optimization"
  ]
};

const certifications = [
  "Microsoft — Foundations of Coding: Full Stack Development",
  "Amazon Web Services — AWS for Developers",
  "IBM — Software Engineering",
  "Google — Get Started with Python",
  "Meta — Front-End Development",
  "IBM — Python for Data Science",
  "Microsoft — Data Structures and Algorithms"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const navItems = ["Home", "About", "Skills", "Projects", "Education", "Certifications", "Contact"];

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="AVS home"><span>AV</span><b>S</b></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
          {menuOpen ? "×" : "☰"}
        </button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <div className="top-actions">
          <a href="https://github.com/Abdulvahafsafir" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="outline-button small-button" href="mailto:your-email@example.com">Let's Talk</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-content">
            <div className="kicker"><span className="status-dot"></span> OPEN TO OPPORTUNITIES</div>
            <p className="overline">HELLO, I'M</p>
            <h1>Abdul Vahaf <span>Safir</span></h1>
            <h2>Full-Stack Developer<span className="typing-caret">|</span></h2>
            <p className="hero-summary">
              I create responsive web applications and practical software experiences,
              combining frontend development, backend APIs, databases, and AI.
            </p>
            <div className="hero-ctas">
              <a className="primary-button" href="#projects">Explore My Work <span>↗</span></a>
              <a className="outline-button" href="mailto:your-email@example.com">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Abdulvahafsafir" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="mailto:your-email@example.com" aria-label="Email">@</a>
            </div>
            <div className="hero-facts">
              <div><strong>M.Sc</strong><span>CSIT Graduate</span></div>
              <div><strong>Full Stack</strong><span>Development Focus</span></div>
              <div><strong>AI + Web</strong><span>Project Interests</span></div>
            </div>
          </div>

          <div className="hero-art" onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
            <div className="art-glow"></div>
            <div className="art-orbit orbit-a"></div>
            <div className="art-orbit orbit-b"></div>
            <div className="art-frame" style={{ transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}>
              <img src={hero} alt="Stylized 3D portrait artwork for Abdul Vahaf Safir's portfolio" />
            </div>
            <div className="floating-tag tag-react">React.js</div>
            <div className="floating-tag tag-node">Node.js</div>
            <div className="floating-tag tag-ai">AI Projects</div>
          </div>
        </section>

        <section id="about" className="content-section section-wrap">
          <p className="section-kicker">01 / ABOUT</p>
          <h2>Curious about technology.<br /><span>Focused on building.</span></h2>
          <div className="about-columns">
            <p>I am Abdul Vahaf Safir, a Computer Science and Information Technology postgraduate with an interest in building useful, user-friendly digital products.</p>
            <p>My work and learning span React interfaces, backend services, REST APIs, databases, and AI-powered applications. I enjoy understanding how the pieces connect and turning ideas into working projects.</p>
          </div>
          <div className="about-note"><span>MY APPROACH</span><p>Learn continuously · Build thoughtfully · Improve through feedback</p></div>
        </section>

        <section id="skills" className="content-section section-wrap">
          <p className="section-kicker">02 / SKILLS</p>
          <h2>Tools I use to <span>make things work.</span></h2>
          <div className="skill-groups">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="skill-list">{items.map(skill => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section section-wrap">
          <p className="section-kicker">03 / SELECTED WORK</p>
          <h2>Projects built with <span>purpose.</span></h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-top"><span>0{index + 1}</span><span>{project.type}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                
                <div className="tech-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-section section-wrap">
          <p className="section-kicker">04 / EDUCATION</p>
          <h2>Academic <span>background.</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div><span className="timeline-date">COMPLETED</span><h3>M.Sc. Computer Science and Information Technology (CSIT)</h3><p>Jain University</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div><span className="timeline-date">2024</span><h3>B.Sc. Computer Science</h3><p>SRM Arts and Science College, Trichy</p></div>
            </div>
          </div>
        </section>

        <section id="certifications" className="content-section section-wrap">
          <p className="section-kicker">05 / CERTIFICATIONS</p>
          <h2>Learning <span>along the way.</span></h2>
          <div className="cert-list">
            {certifications.map((cert, i) => <div className="cert-item" key={cert}><span>0{i + 1}</span><p>{cert}</p><b>↗</b></div>)}
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <p className="section-kicker">06 / CONTACT</p>
          <h2>Have an opportunity<br />or an idea? <span>Let's connect.</span></h2>
          <p>I'm interested in developer roles, internships, and projects where I can keep learning and contribute.</p>
          <a className="primary-button" href="mailto:your-email@example.com">Send Me an Email ↗</a>
          <div className="contact-links">
            <a href="https://github.com/Abdulvahafsafir" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Abdul Vahaf Safir</span><span>Designed & developed with React</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
