import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer",
    company: "Code Lush",
    date: "2023 - 2024",
    responsibilities: [
      "Developed and maintained full-stack web applications using MERN stack.",
      "Collaborated with cross-functional teams to deliver scalable solutions.",
      "Ensured responsive design and cross-browser compatibility.",
    ],
  },
  {
    job: "Cloud Engineer",
    company: "Google Developer Groups on Campus - PEC",
    date: "2024 - Present",
    responsibilities: [
      "Designed practice labs and assessments on IaaS, PaaS, and SaaS.",
      "Guided students in deploying applications using cloud services like Google Cloud and AWS.",
    ],
  },
  {
    job: "ML Enthusiast",
    company: "Google Developer Groups on Campus - PEC",
    date: "2024 - Present",
    responsibilities: [
      "Explored model training, validation, and deployment workflows.",
      "Presented ML projects focused on safety, automation, and prediction models."
    ],
  }  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
