import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import WorkExperience from "~/components/WorkExperience";

export const meta: MetaFunction = () => {
  return [
    { title: "Tarit's Portfolio" },
    { name: "description", content: "Tarit's Portfolio" },
  ];
};

export default function Index() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <div className="p-6">
        <WorkExperience />
        <Projects />
      </div>
    </div>
  );
}
