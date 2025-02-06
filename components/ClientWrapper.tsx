"use client"; 
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));
const Grid = dynamic(() => import("@/components/Grid"));

export default function ClientWrapper() {
  return (
    <div>
      <Hero />
      <Grid />
    </div>
  );
}
