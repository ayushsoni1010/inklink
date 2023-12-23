import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import React from "react";
import bg from "../../assets/hero-landing-asset.webp";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[768px] w-full">
      <div className="max-w-screen-xl mx-auto flex items-center mt-20">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-7xl font-bold text-black">
            Where developer blogs meet community power!
          </h1>
          <p className="text-2xl text-gray-500 font-medium">
            Create and grow your developer blog, newsletter, or team engineering
            blog effortlessly with Hashnode. Level up your writing using
            powerful AI features!
          </p>
          <div className="space-x-3">
            <Button>
              Start building
              <Icon name="arrow-right" className="ml-1" />
            </Button>
            <Button variant="outline">Join the Community</Button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-center py-14">
        <Image
          src={bg}
          alt="BG"
          width={1000}
          height={1000}
          className="shadow-xl hover:shadow rounded-xl"
        />
      </div>
      {/* <div className="hero-background-pattern -z-10"></div> */}
    </section>
  );
};

export default HeroSection;
