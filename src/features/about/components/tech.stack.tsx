import { BiLogoPostgresql } from "react-icons/bi";
import { FaLaravel, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiNestjs,
  SiPhp,
} from "react-icons/si";

const techStack = [
  {
    name: "PHP",
    icon: (
      <SiPhp className="text-indigo-500 transition-transform duration-300 dark:hover:text-indigo-600" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="text-yellow-500 transition-transform duration-300 dark:hover:text-yellow-600" />
    ),
  },
  {
    name: "Laravel",
    icon: (
      <FaLaravel className="text-red-500 transition-transform duration-300 dark:hover:text-red-600" />
    ),
  },
  {
    name: "NestJS",
    icon: (
      <SiNestjs className="text-red-500 transition-transform duration-300 dark:hover:text-red-600" />
    ),
  },
  {
    name: "React",
    icon: (
      <FaReact className="text-sky-400 transition-transform duration-300 dark:hover:text-sky-500" />
    ),
  },
  {
    name: "Vue",
    icon: (
      <FaVuejs className="text-green-600 transition-transform duration-300 dark:hover:text-green-700" />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <BiLogoPostgresql className="text-sky-800 transition-transform duration-300 dark:hover:text-sky-900" />
    ),
  },
  {
    name: "MySQL",
    icon: (
      <GrMysql className="text-sky-800 transition-transform duration-300 dark:hover:text-sky-900" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="text-sky-400 transition-transform duration-300 dark:hover:text-sky-500" />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <SiBootstrap className="text-purple-600 transition-transform duration-300 dark:hover:text-purple-700" />
    ),
  },
];

export default function TechStack() {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Tech Stacks
      </h2>
      <div className="mt-5 flex flex-wrap justify-start gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
