import TitleSection from "@/components/title.section";
import { SiReaddotcv } from "react-icons/si";

const About: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-start md:items-center lg:flex-row">
      <div className="flex-1 md:pr-4">
        <TitleSection title="About" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white md:text-6xl">
          Ana Marisa
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Hello! 👋🏻 I'm a backend developer. I started learning web development
          in April 2022 during my final thesis for college. It was an exciting
          journey where I discovered my passion for creating interactive,
          user-friendly web applications and solving problems. After finishing
          college, I decided to delve deeper into web development. Through
          countless hours of coding and problem-solving, I have honed my skills
          and continue to grow in this dynamic field.
        </p>
        <a
          className="mt-2 inline-flex text-gray-600 underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          href="https://drive.google.com/file/d/1vhzJF3O_x9r5pXTJ-XptnWwW4XII7og1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <SiReaddotcv />
            Resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
