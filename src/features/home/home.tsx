import Hero from "@/features/home/components/hero";
import ExperienceSection from "@/features/work";
import ProjectsPage from "@/features/projetcs";

export default function Home() {
  return (
    <div>
      <Hero
        title="Ana"
        jobTitle="Backend Developer"
        subtitle="Backend developer, lifelong learner, cat lover, and an 8-5 tech worker in the office. When I'm away from the keyboard, I'm diving into game worlds!"
        socialLinks={{
          github: "https://github.com/anamarisa",
          linkedin: "https://www.linkedin.com/in/ana-m-039135131",
        }}
      />
      <ProjectsPage />
      <ExperienceSection />
    </div>
  );
}
