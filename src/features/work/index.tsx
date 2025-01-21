import { BriefcaseBusiness } from "lucide-react";
import WorkExperience from "./components/works.experience";

const ExperienceSection = () => {
  const workExperiences = [
    {
      company: "Lab TI Gunadarma",
      title: "Computer Lab Assistant",
      date: "Nov 2019 - Sept 2021",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
    {
      company: "PT Aneka Dasuib Jaya",
      title: "Backend Developer",
      date: "Nov 2023 - Present",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <WorkExperience experiences={workExperiences} />
    </div>
  );
};

export default ExperienceSection;
