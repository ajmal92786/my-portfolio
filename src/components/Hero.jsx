function Hero() {
  return (
    <section id="home" className="py-1">
      <div className="container py-1">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 py-1">
            <div className="mb-3">
              <h1 className="display-4 fw-bold mb-0">Mohd Ajmal Raza</h1>
              <p className="text-success fw-semibold fs-5 mt-3">
                Full Stack Developer
              </p>
            </div>

            <div className="mb-5 py-2 border-start border-success border-3 ps-4">
              <p className="lead mb-3">
                Passionate full-stack developer crafting intuitive digital
                experiences with modern technologies.
              </p>
              <p className="lead">
                Specializing in React, Node.js, and MongoDB to build scalable
                and user-centered applications.
              </p>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn btn-success btn-lg px-3 fw-semibold"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1nHAPPVrGkiN5BsqGw5g1j-2Vg9TzOh6C/view?usp=sharing"
                target="_blank"
                className="btn btn-outline-light btn-lg px-3 fw-semibold"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
