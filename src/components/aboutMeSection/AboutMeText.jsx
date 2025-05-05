import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Hemanth Kumar, a cloud and full-stack developer with a passion for innovation and mentoring. I specialize in building responsive web apps, IoT-based solutions, and integrating AI/ML into real-world applications. I lead technical clubs, conduct workshops, and guide students in cloud computing, ethical hacking, and software development. I also participate in national-level hackathons and internships to constantly learn and apply cutting-edge technologies. Outside of tech, I’m driven by community building and helping others grow in their tech journey.

      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
