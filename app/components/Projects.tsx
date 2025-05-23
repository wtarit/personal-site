import { SiGithub, SiDevpost } from "react-icons/si";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    image: "/images/SAM_Cover.png",
    title: "SAM - Sarcasm Authentication Model",
    description:
      "An app that helps individuals with Autism Spectrum Disorder (ASD) recognize sarcasm in conversations—making social interactions smoother and reducing misunderstandings",
    footer: (
      <>
        {/* <a
          href="https://github.com/LordofSabres/nwhacks2025"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost">
            <SiGithub />
          </Button>
        </a> */}
        <a
          href="https://devpost.com/software/sam-sarcasm-authentication-model"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost">
            <SiDevpost />
          </Button>
        </a>
      </>
    ),
  },
  {
    image: "/images/WasteWizard_Cover.png",
    title: "WasteWizard",
    description:
      "A digital solution to biomedical waste management in hospitals",
    footer: (
      <>
        <a
          href="https://github.com/wtarit/nwHack2024"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost">
            <SiGithub />
          </Button>
        </a>
        <a
          href="https://devpost.com/software/wastewizard-oyiqta"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="ghost">
            <SiDevpost />
          </Button>
        </a>
      </>
    ),
  },
  {
    image: "/images/RingNotify_Cover.png",
    title: "Ring Notify",
    description:
      "Mobile application for notifying urgent events through call in screen",
    footer: (
      <a
        href="https://github.com/wtarit/ring-notify"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="ghost">
          <SiGithub />
        </Button>
      </a>
    ),
  },
  {
    image: "/images/TH-EN-MT_Cover.png",
    title: "TH-EN Machine Translation ",
    description:
      "Finetuning No Language Left Behind model for Thai to English machine translation using SCB-1M and OPUS dataset",
    footer: (
      <a
        href="https://github.com/wtarit/th-en-machine-translation"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="ghost">
          <SiGithub />
        </Button>
      </a>
    ),
  },
  {
    image: "/images/Domacod_Cover.png",
    title: "Domacod",
    description:
      "Mobile application to index images based on the content of the image by using object detection and optical character recognition",
    footer: (
      <a
        href="https://github.com/wtarit/domacod"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="ghost">
          <SiGithub />
        </Button>
      </a>
    ),
  },
  {
    image: "/images/2ndkibo.webp",
    title: "Kibo Robot Programming Challenge",
    description:
      "Android application for controlling NASA's free-flying robot (Astrobee) in the Japanese Experimental Module “Kibo” of the International Space Station (ISS)",
    footer: (
      <a
        href="https://github.com/wtarit/2nd-Kibo-RPC_Indentation-Error"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="ghost">
          <SiGithub />
        </Button>
      </a>
    ),
  },
  {
    image: "/images/Nuclear_Robot_Cover.webp",
    title: "Logistics Robot",
    description:
      "Logistics robot that travels on a simulated moon surface, detects radioactive substances and moves them into storage boxes",
  },
  {
    image: "/images/Roboinnovator_Cover.webp",
    title: "RoboInnovator Challenge",
    description:
      "Logistics robot that drives on the road lane and transports objects to the correct destination by reading the QR code",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-16">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6 text-center">
        Projects
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {projects.map((project, index) => {
          return (
            <Card key={index} className="w-[430px] min-w-60 mx-2 my-2">
              <CardImage
                src={project.image}
                className="aspect-[16/9] object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>{project.footer}</CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
