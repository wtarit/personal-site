import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function WorkExperience() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
        Work Experience
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Software Developer Intern</CardTitle>
          <CardDescription className="flex justify-between flex-col md:flex-row">
            <div>Applicad Public Company Limited - Bangkok, Thailand</div><div>June - August 2024</div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc px-6">
            <li>
              Developed a full-stack real-time face recognition web application
              using Next.js, enabling customer identification
            </li>
            <li>
              Built a backend service in Python with FastAPI for face vector
              comparison using ChromaDB, integrated with a PostgreSQL database
              for storing User Data, and linked it to the existing internal
              customer database
            </li>
            <li>
              Implemented an Email OTP authentication system using NextAuth
              Credentials Provider, with a custom Python backend for email
              delivery via SMTP and credential validation and utilized Next.js
              middleware for role separation
            </li>
            <li>
              Deployed the application on an on-premises Ubuntu server using
              Docker and Docker Compose
            </li>
          </ul>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
