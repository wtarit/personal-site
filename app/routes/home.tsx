import Header from "~/components/Header";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import WorkExperience from "~/components/WorkExperience";
import TechnicalExtracurriculars from "~/components/TechnicalExtracurriculars";
import Projects from "~/components/Projects";
import Competitions from "~/components/Competitions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tarit's Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of Tarit Witworrasakul, Computer Science student at UBC. Projects, work experience, and contact information.",
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Tarit Witworrasakul",
        url: "https://wtarit.me",
        sameAs: [
          "https://github.com/wtarit",
          "https://www.linkedin.com/in/wtarit",
        ],
        jobTitle: "Computer Science Student",
        Organization: "University of British Columbia",
      },
    },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="p-6">
        <WorkExperience />
        <TechnicalExtracurriculars />
        <Projects />
        <Competitions />
      </div>
    </div>
  );
}
