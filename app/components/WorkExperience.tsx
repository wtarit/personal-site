import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  descriptions: string[];
}

const workExperiences: WorkExperience[] = [
  {
    title: "Software Developer Intern",
    company: "Applicad Public Company Limited - Bangkok, Thailand",
    duration: "June - August 2024",
    descriptions: [
      "Conducted an analysis of the sales team's needs for a customer identification solution, defining essential functionalities and designing user flows in collaboration with a UX/UI designer to develop a Figma prototype",
      "Developed a real-time facial recognition web application using Next.js, featuring a user interface for customer identification with 95% accuracy via webcam, along with an admin page for managing customer data",
      "Built a backend service in Python with FastAPI for face vector comparison using ChromaDB, integrated with a PostgreSQL database for storing User Data, and linked it to the existing internal customer database",
      "Implemented a robust authentication system featuring role-based access control with NextAuth, utilizing JWT sessions and email OTP for secure login, and employed Next.js middleware for token verification",
      "Deployed the application and databases to an on-premises Ubuntu server using Docker and Docker Compose",
    ],
  },
];

export default function WorkExperience() {
  return (
    <div id="work-experience" className="scroll-mt-16">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6 text-center">
        Work Experience
      </h1>
      {workExperiences.map((workExperience, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{workExperience.title}</CardTitle>
              <CardDescription className="flex justify-between flex-col md:flex-row">
                <div>{workExperience.company}</div>
                <div>{workExperience.duration}</div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc px-6">
                {workExperience.descriptions.map((des, index) => {
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
