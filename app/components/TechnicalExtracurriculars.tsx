import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function TechnicalExtracurriculars() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6">
        Technical Extracurriculars
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Software Developer</CardTitle>
          <CardDescription className="flex justify-between flex-col md:flex-row">
            <div>UBC Uncrewed Aircraft Systems Engineering Design Team</div>
            <div>September 2023 - Present</div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc px-6">
            <li>
              Developed Object Detection, Classification, and Localization
              software for finding targets from a drone with a team of four
            </li>
            <li>
              Reduced time to create training dataset by implementing dataset
              generator using OpenCV and imgaug
            </li>
            <li>
              Created inference pipeline integrating tiled inference, object
              detection, and OCR for processing captured image
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
