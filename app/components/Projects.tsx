import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "~/components/ui/card";

const projects = [
  {
    image: "/images/2ndkibo.webp",
    title: "WasteWizard",
  },
  {
    image: "/images/2ndkibo.webp",
    title: "Ring Notify",
  },
  {
    image: "/images/2ndkibo.webp",
    title: "TH-EN Machine Translation ",
  },
  {
    image: "/images/2ndkibo.webp",
    title: "TH-EN Machine Translation ",
  },
  {
    image: "/images/2ndkibo.webp",
    title: "TH-EN Machine Translation ",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
        Projects
      </h1>
      <div className="flex flex-row flex-wrap">
        {projects.map((project, index) => {
          return (
            <Card key={index} className="w-[380px] min-w-60 mx-2">
              <CardImage src="/images/2ndkibo.webp" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
