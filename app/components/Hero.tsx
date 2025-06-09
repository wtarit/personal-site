import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "./ui/button";

async function trackResumeDownload() {
  // @ts-ignore
  window.gtag("event", "download_resume", {
    event_category: "engagement",
    event_label: "Resume Downloaded",
  });
}

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6 p-6 h-screen">
      <div className="basis-1/3 content-center">
        <img
          className="rounded-full object-contain"
          src="/images/Tarit_image.jpeg"
          alt="Tarit's portrait"
        ></img>
      </div>

      <div className="flex flex-col justify-center p-6 basis-2/3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">{`Hi, I'm Tarit Witworrasakul`}</h1>
        <h2>{`I'm a third-year Computer Science student at the University of British Columbia (UBC) with a passion for solving problems and building solutions to make life easier through programming. My journey began with Arduino robot programming, which sparked my interest in creating innovative systems. Over time, I expanded my skill set to include web development, mobile apps, and embedded systems.`}</h2>
        <div
          className="py-6"
          onClick={() => {
            trackResumeDownload();
          }}
        >
          <a href="/Tarit-Resume.pdf" target="_blank" rel="noreferrer">
            <Button>Resume</Button>
          </a>
          <a href="https://github.com/wtarit" target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <SiGithub />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/wtarit"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost">
              <SiLinkedin />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
