import React from "react";
import Hero from "@/app/components/AboutComponent/Hero";
import Kitchen from "@/app/components/AboutComponent/Kitchen";
import About from "@/app/components/AboutComponent/About";

const page = () => {
  return (
    <div>
      <Hero />
      <Kitchen />
      <About />
    </div>
  );
};

export default page;
