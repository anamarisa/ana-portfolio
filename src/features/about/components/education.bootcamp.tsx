// src/pages/About.tsx
import Education from "@/components/education";
import React from "react";

const EducationAndBootcamps: React.FC = () => {
  const formalEducation = {
    university: "Gunadarma University",
    gpa: 3.55,
    program: "Bachelor's Degree in Informatics Engineering",
    startDateCollege: "November 2018",
    endDateCollege: "September 2022",
  };

  const bootcamps = [
    {
      name: "Basic Web Application Development",
      startDate: "June 2022",
      endDate: "June 2022",
      learnedSkills: ["PHP", "UI", "MySQL", "XAMPP", "Github"],
      certificateLink:
        "https://drive.google.com/drive/folders/1INwhXj66aBymZGl_Jgg4W_Wf_U86s8dy?usp=sharing",
    },
    {
      name: "React - The Complete Guide 2023 (incl Hooks, React Router, Redux)",
      startDate: "Jan 2023",
      endDate: "May 2023",
      learnedSkills: ["React", "Hooks", "Router", "Redux"],
      certificateLink:
        "https://drive.google.com/drive/folders/1INwhXj66aBymZGl_Jgg4W_Wf_U86s8dy?usp=sharing",
    },
  ];

  return (
    <section>
      <Education formalEducation={formalEducation} bootcamps={bootcamps} />
    </section>
  );
};

export default EducationAndBootcamps;
