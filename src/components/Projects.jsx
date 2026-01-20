import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: "1",
      title: "ClientFlow CRM",
      image: "/projects/clientflow-crm.png",
      techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
      demo: "https://clientflow-crm-frontend.vercel.app/",
      code: "https://github.com/ajmal92786/clientflow-crm-frontend.git",
      description:
        "A modern CRM platform for managing leads, sales agents, and performance insights with real-time dashboards and analytics.",
    },
    {
      id: "2",
      title: "ShopHub",
      image: "/projects/shophub.png",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      demo: "https://shophub-app-eac27.vercel.app/",
      code: "https://github.com/ajmal92786/shophub.git",
      description:
        "A full-stack e-commerce platform with product browsing, advanced filtering, cart and wishlist management, and smooth checkout flows.",
    },
    {
      id: "3",
      title: "Meetup App",
      image: "/projects/meetup.png",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      demo: "https://meetup-app-frontend-eac.vercel.app/",
      code: "https://github.com/ajmal92786/meetup-app-frontend.git",
      description:
        "A full-stack event platform for discovering meetups with detailed event information, schedules, speakers, and venue details.",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <div className="mb-5">
          <h2 className="display-5 fw-bold mb-2">Projects</h2>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="bg-success rounded"
              style={{ width: "4px", height: "32px" }}
            ></div>
            <p className="fs-6 text-secondary fw-semibold mb-0">
              Building solutions that solve real-world problems
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div
                className="card h-100 bg-dark border-0 shadow transition-transform"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  alt={project.title}
                  className="card-img-top object-fit-cover ratio ratio-16x9"
                  src={project.image}
                />
                <div className="card-body px-4 py-3 d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3 text-light">
                    {project.title}
                  </h5>
                  <p className="card-text fw-semibold text-secondary flex-grow-1 mb-3">
                    {project.description}
                  </p>

                  <div className="mb-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-dark bg-gradient text-light me-1 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-5 align-items-center mb-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-decoration-none text-light fw-semibold d-flex gap-1 justify-content-center align-items-center"
                    >
                      <MdOutlineRemoveRedEye size={18} />
                      Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="text-decoration-none text-light fw-semibold d-flex gap-1 justify-content-center align-items-center"
                    >
                      <FaCode size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
