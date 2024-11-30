import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import WorkExperience from "~/components/WorkExperience";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="p-6">
        <WorkExperience />
        <Projects />
      </div>
    </div>

    // <div className="flex h-screen items-center justify-center">

    // </div>
  );
}
