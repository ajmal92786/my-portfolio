import {
  FaReact,
  FaBootstrap,
  FaCube,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiTypescript,
  SiJest,
  SiFlask,
  SiSqlalchemy,
  SiPostgresql,
  SiRailway,
  SiSupabase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscCode } from "react-icons/vsc";
import { BiAccessibility, BiLogoPostgresql } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";

function Skills() {
  const skills = [
    { title: "React", icon: FaReact },
    // { title: "Next.js", icon: TbBrandNextjs },
    // { title: "Redux", icon: SiRedux },
    // { title: "Zustand", icon: FaCube },
    // { title: "Tailwind CSS", icon: RiTailwindCssFill },
    { title: "Bootstrap", icon: FaBootstrap },
    { title: "Node.js", icon: FaNodeJs },
    { title: "Express", icon: SiExpress },
    // { title: "JWT", icon: SiJsonwebtokens },
    { title: "MongoDB", icon: SiMongodb },
    { title: "Mongoose", icon: SiMongoose },
    // { title: "Python", icon: FaPython },
    // { title: "Flask", icon: SiFlask },
    // { title: "SQLAlchemy", icon: SiSqlalchemy },
    // { title: "PostgreSQL", icon: SiPostgresql },
    { title: "Vercel", icon: SiVercel },
    // { title: "Railway", icon: SiRailway },
    // { title: "Supabase", icon: SiSupabase },
    // { title: "CI/CD", icon: FaDocker },
    { title: "VS Code", icon: VscCode },
    { title: "Git", icon: FaGitAlt },
    { title: "Github", icon: FaGithub },
    { title: "DevTools", icon: VscCode },
    // { title: "TypeScript", icon: SiTypescript },
    // { title: "Testing", icon: SiJest },
    { title: "Accessibility", icon: BiAccessibility },
    // { title: "Performance", icon: CgPerformance },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <div className="mb-5">
          <h2 className="display-4 fw-bold">Tech Stack</h2>
          <p className="fs-5 text-secondary fw-semibold">
            Technologies and tools I work with
          </p>
          <div
            className="bg-success"
            style={{
              height: "4px",
              width: "80px",
              marginTop: "2rem",
              marginBottom: "3rem",
            }}
          ></div>
        </div>
        <div className="row g-4">
          {skills.map((skill) => (
            <div key={skill.title} className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-white">
                  {<skill.icon size={24} />}
                </div>
                <span className="fs-4">{skill.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
