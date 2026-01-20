import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold mb-3">Let’s Connect</h2>
            <p className="fs-5 text-secondary fw-semibold mb-5">
              Have an idea, opportunity, or just want to say hi? I’m always open
              to meaningful conversations.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mb-5">
              <a
                href="mailto:ajmalbly27@gmail.com"
                className="btn btn-outline-success btn-lg d-flex align-items-center gap-2 justify-content-center"
              >
                <MdEmail size={22} />
                ajmalbly27@gmail.com
              </a>

              <a
                href="https://github.com/ajmal92786"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-lg d-flex align-items-center gap-2 justify-content-center"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>

            <div className="d-flex justify-content-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/mohd-ajmal-raza/"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-3"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/Ajmal92786"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-3"
              >
                <FaXTwitter />
              </a>
            </div>

            <p className="text-secondary mb-0">
              © {new Date().getFullYear()} Mohd Ajmal Raza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
