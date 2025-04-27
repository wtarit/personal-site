import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  CardTitle,
} from "~/components/ui/card";

const competitions = [
  {
    image: "/images/NSCC2024_Translink.jpg",
    title: "National Strategy Consulting Competition",
    date: "December 2024",
    description: "Analyzed TransLink's financial challenges at NSCC 2024 and proposed a three-tiered strategy, including advertising optimization, event-specific transportation services, and a long-term integrated Super App",
  },
  {
    image: "/images/ADSE2022.jpg",
    title: "ASEAN Data Science Explorers",
    date: "August 2022",
    description: "Developed a data analytics storyboard, proposing 'Caregiver Hub,' an app connecting the elderly with trusted caregivers, social groups, and activity recommendations to support aging societies",
  },
];

export default function Competitions() {
  return (
    <div id="competitions" className="scroll-mt-16">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl py-6 text-center">
        Competitions
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {competitions.map((competition, index) => {
          return (
            <Card key={index} className="w-[430px] min-w-60 mx-2 my-2">
              <CardImage
                src={competition.image}
                className="aspect-[16/9] object-cover"
              />
              <CardHeader>
                <CardTitle>{competition.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{competition.date}</p>
              </CardHeader>
              <CardContent>
                <p>{competition.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 