import React from "react";
import HeroSection from "./Hero";
import ServiceProcess from "./ServiceProcess";
import Services from "./ServicesSection";
import Philosophy from "./Philosophy";
import Clienttrust from "./Clienttrust";
import ProjectsFolders from "./Projects";
import Cta from "../Common/Cta";

const Index = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <ServiceProcess />
      <Services />
      {/* <ProjectsFolders /> */}
      <Philosophy />
      <Clienttrust />
      <Cta />
    </div>
  );
};

export default Index;
