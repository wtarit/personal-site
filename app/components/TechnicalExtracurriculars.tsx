import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface Extracurricular {
  title: string;
  organization: string;
  duration: string;
  descriptions: string[];
}

const technicalExtracurriculars: Extracurricular[] = [
  {
    title: "Software Developer",
    organization: "UBC Uncrewed Aircraft Systems Engineering Design Team",
    duration: "September 2023 - Present",
    descriptions: [
      "Contributed to the development of autonomous drones competing in the the Aerial Evolution Association of Canada 2024 competition, achieving 2nd place in the proposals phase and 3rd place in the demonstration phase",
      "Successfully migrated 15+ endpoints in MissionPlanner-Scripts, a REST APIs and WebSocket interface between a backend system and ArduPilot, to a cross-platform architecture using Pymavlink and Flask, eliminating reliance on Windows-only MissionPlanner client scripts",
      "Crafted OpenAPI Specifications and Postman collections to facilitate team collaboration and API integration",
      "Developed a pipeline for drone target detection using a fine-tuned YOLOv8 model with tiled inference",
      "Created dataset generator program using OpenCV and imgaug, eliminating the need for manual data labeling",
    ],
  },
];

export default function TechnicalExtracurriculars() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
        Technical Extracurriculars
      </h1>
      {technicalExtracurriculars.map((extracurricular, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{extracurricular.title}</CardTitle>
              <CardDescription className="flex justify-between flex-col md:flex-row">
                <div>{extracurricular.organization}</div>
                <div>{extracurricular.organization}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc px-6">
                {extracurricular.descriptions.map((des, index) => {
                  return <li key={index}>{des}</li>;
                })}
              </ul>
            </CardContent>
            {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
          </Card>
        );
      })}
    </div>
  );
}
