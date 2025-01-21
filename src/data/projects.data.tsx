import { FaLaravel, FaReact } from "react-icons/fa";
import { DiBootstrap, DiCodeigniter } from "react-icons/di";
import { BiLogoJavascript, BiLogoJquery } from "react-icons/bi";
import { ReactNode } from "react";
import KosaCoffee from "@/assets/projects/kosacoffee.png";
import Ssayomart from "@/assets/projects/Ssayomart.png";
import SupplyChain from "@/assets/projects/supplychain.png";
import { SiInertia, SiPhp, SiTailwindcss } from "react-icons/si";

// Define the type for the tech stack icon
interface TechStackIcon {
  name?: string; // Optional tech name
  icon: ReactNode; // Icon can be any React component or JSX
}

// Define the type for the project
interface Project {
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

// Define tech stack for each project
const techStack1: TechStackIcon[] = [
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-500" />,
  },
  {
    name: "JQuery",
    icon: <BiLogoJquery className="text-sky-500" />,
  },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
];

const techStack2: TechStackIcon[] = [
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "CodeIgniter", icon: <DiCodeigniter className="text-red-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-500" />,
  },
  {
    name: "JQuery",
    icon: <BiLogoJquery className="text-sky-500" />,
  },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
];

const techStack3: TechStackIcon[] = [
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-500" />,
  },
  { name: "Inertia", icon: <SiInertia className="text-purple-500" /> },
  { name: "React", icon: <FaReact className="text-sky-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
];

// Array of projects
export const projects: Project[] = [
  {
    title: "Java Supply Chain",
    description:
      "Designed for efficiency and scalability, this app optimizes supply chain operations while providing a user-friendly interface. It covers invoicing, delivery notes, and stock management, including raw materials, support materials, and finished products. Users can manage complex formulation recipes, weighing processes, waste tracking, and repackaging of products.",
    img: SupplyChain,
    techStack: techStack3,
    portfolioUrl: "https://jsf-supplychain.cloud/login",
  },
  {
    title: "Ssayomart",
    description:
      "Ssayomart is an e-commerce project, and it was my first professional project as a backend developer. I worked on an existing project, focusing on improving its functionalities, particularly on the admin dashboard. If you're viewing it on a large screen and want to switch to mobile view, please refresh your browser for a better experience.",
    img: Ssayomart,
    techStack: techStack2,
    portfolioUrl: "https://apps.ssayomart.com/",
  },
  {
    title: "Kosa Coffee",
    description:
      "The self-order web application is a user-friendly platform designed for customers to place orders and make payments without requiring the assistance of an employee.",
    img: KosaCoffee,
    techStack: techStack1,
    portfolioUrl: "http://108.136.244.193/menu?tableId=14",
  },

  // Add more projects as needed
];
