import ClientWrapper from "@/components/ClientWrapper";
import Recentprojects from "@/components/Recentprojects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black justify-center px-5 items-center overflow-hidden mx-auto sm:px-10 flex-col">
      <div className="max-w-7xl w-full">
        <h1 className="text-3xl justify-center items-center">
          This is the Zain portfolio website
        </h1>
        <ClientWrapper /> {/* Now safely wrapping client components */}
        <Recentprojects/>
        <Experience/>
        <Approach/>
      </div>
    </main>
  );
}
