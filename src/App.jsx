
import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>My Portfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hello, I'm Aisha 👋</h2>
        <p>
          I am a web developer learning React, JavaScript, HTML and CSS.
        </p>

        <a href="#about" className="button">
          Learn More
        </a>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a beginner web developer who is interested in creating
          simple, useful and beautiful websites.
        </p>

        <h3>My Skills</h3>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>

        <p>If you would like to contact me, feel free to reach me through:</p>

        <p><strong>Email:</strong> your-email@example.com</p>
        <p><strong>Phone:</strong> +255 XXX XXX XXX</p>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Aisha. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App

