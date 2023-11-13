"use client";

import React from "react";
import NotificationSection from "./NotificationSection";
import LayerSection from "./LayerSection";
import TestimonialsSection from "./TestimonialSection";

const AuthSidebarLayout: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col my-auto justify-center items-stretch mx-auto h-full w-full gap-12">
      <NotificationSection />
      <LayerSection />
      <TestimonialsSection />
    </div>
  );
};

export default AuthSidebarLayout;
