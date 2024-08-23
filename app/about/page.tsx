import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="" alt={siteConfig.name} />
            <AvatarFallback>AmplifyHer</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.name}
          </h2>
          <p className="text-md text-muted-foreground text-center break-words">
            We are on a mission to improve the well-being of all women
          </p>
        </div>
        <div className="text-muted-foreground text-xl py-4">
        <p className="mb-4">
          At AmplifyHer, we believe that knowledge is power, especially when it comes to your health. Numerous studies show that health literacy directly influences different health outcomes, meaning poor health literacy rates often lead to poor overall health and well-being for women and girls, and people who menstruate.
        </p>
        <p className="mb-4">Therefore, <span className="text-xl text-orange-600">AmplifyHer is gifting AmplifyHer Premium for free*</span> in countries where access to reliable health information is limited. Our ambition is to reach 1bn women with this initiative, so they can have better access to reliable health information through the AmplifyHer Application. And together with all of you, we believe that we can make a true impact on improving health literacy across the globe.
        </p>

        <p className="mb-4">Your body. Your data. At AmplifyHer, we do not sell your data. No matter where you are, and what service you use, we protect your data in accordance with the International General Data Protection Regulations. You can delete, access, and update it at any time. You can read our privacy policy here.
        </p>
        </div>
      </div>
    </div>
  );
}