function Home() {
  return (
    <section id="home" className="home">
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      <div className="home-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Souvik Roy</span>
        </h1>

        <h2>
          <span className="typing">BCA Student & Developer</span>
        </h2>

        <p className="intro">
          I love creating modern websites, learning new technologies
          and turning ideas into interactive digital experiences.Currently i am in 4th year
        </p>

        <div className="home-buttons">
          <a href="#about" className="button primary">
            Explore Me
          </a>

          <a href="#contact" className="button secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;