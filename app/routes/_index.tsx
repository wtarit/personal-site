import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import TechnicalExtracurriculars from "~/components/TechnicalExtracurriculars";
import WorkExperience from "~/components/WorkExperience";

export const meta: MetaFunction = () => {
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
};

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="p-6">
        <WorkExperience />
        <TechnicalExtracurriculars />
        <Projects />
      </div>
    </div>
  );
}
