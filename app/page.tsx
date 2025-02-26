
import Recentprojects from "@/components/Recentprojects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { FloatingNavDemo } from "@/components/Navigation";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex min-h-screen justify-center items-center overflow-hidden mx-auto sm:px-10 flex-col">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl justify-center items-center">
          This is the Zain portfolio website
        </h1>
        <FloatingNavDemo/>
       <Hero/>
       <Grid/>
        <Recentprojects/>
        <Experience/>
        <Footer/>
      
      </div>
    </main>
  );
}
