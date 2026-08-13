import Profile from "@/components/sections/Profile";
import CareerTimeline from "@/components/sections/CareerTimeline";
import ProjectSection from "@/components/sections/ProjectSection";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Profile />
      <CareerTimeline />
      <ProjectSection />
      <Skills />
    </>
  );
}
