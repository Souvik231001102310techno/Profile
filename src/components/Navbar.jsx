function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>&lt;</span> Souvik <span>/&gt;</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;