import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HomeIcon, ContactIcon } from "lucide-react"; // Replace with your icon library
import Image from "next/image";

export default function Home() {
  // Define navItems outside the component
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon />, // Replace with your desired icon
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <ContactIcon />, // Replace with your desired icon
    },
  ];

  return (
    <main className="relative bg-black justify-center px-5 items-center overflow-hidden mx-auto sm:px-10 flex-col">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl justify-center items-center">
          This is the Zain portfolio website
        </h1>
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
