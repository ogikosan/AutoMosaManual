import Image from "next/image";
import { Header } from "@/components/Header";
import { TableOfContents } from "@/components/TableOfContents";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { RequirementsSection } from "@/components/sections/RequirementsSection";
import { SetupSection } from "@/components/sections/SetupSection";
import { MainScreenSection } from "@/components/sections/MainScreenSection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <TableOfContents />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <IntroductionSection />
        <RequirementsSection />
        <SetupSection />
        <MainScreenSection />
      </main>
    </div>
  );
}