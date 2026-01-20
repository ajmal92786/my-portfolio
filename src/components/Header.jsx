function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top border-bottom border-secondary-subtle shadow-sm"
      data-bs-theme="dark"
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-5 d-flex align-items-center gap-2"
          href="#home"
        >
          <span className="text-success fw-bolder">{"</>"}</span>
          <span>Mohd Ajmal Raza</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link px-3 text-light" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-light" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-light" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-light" href="#contact">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
