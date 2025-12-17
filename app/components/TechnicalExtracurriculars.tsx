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
      "Contributed as part of a 60+ member engineering team to develop autonomous drones, achieving 2nd place at the Aerial Evolution Association of Canada 2025 competition",
      "Migrated 15+ endpoints in MissionPlanner-Scripts, an API that connects backend system and ArduPilot, to a cross-platform architecture using Pymavlink, eliminating reliance on Windows-only MissionPlanner client scripts",
      "Created OpenAPI Specifications and Postman collections to facilitate team collaboration and API integration",
      "Built a target-detection pipeline using a fine-tuned YOLOv8 model with tiled inference",
      "Developed a dataset generation tool with OpenCV and imgaug, reducing manual data labeling requirements",
    ],
  },
];

export default function TechnicalExtracurriculars() {
  return (
    <div id="technical-extracurriculars" className="scroll-mt-16">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6 text-center">
        Technical Extracurriculars
      </h1>
      {technicalExtracurriculars.map((extracurricular, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{extracurricular.title}</CardTitle>
              <CardDescription className="flex justify-between flex-col md:flex-row">
                <div>{extracurricular.organization}</div>
                <div>{extracurricular.duration}</div>
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
