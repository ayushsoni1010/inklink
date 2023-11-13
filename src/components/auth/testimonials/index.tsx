"use client";

import { ITestimonial } from "@/types/auth/testimonial";

const TestimonialCard: React.FunctionComponent<ITestimonial> = ({
  id,
  name,
  title,
  message,
}) => {
  return (
    <div
      id={id.toString()}
      className="bg-white p-4 rounded-xl max-w-md flex flex-col items-start gap-3 shadow-sm w-fit"
    >
      <div className="flex items-center gap-2">
        <h4 className="text-gray-900 text-base font-semibold">{name}</h4>
        <p className="text-gray-500 font-medium text-sm">{title}</p>
      </div>
      <p className={"text-gray-800 text-sm font-medium text-left"}>{message}</p>
    </div>
  );
};

export default TestimonialCard;
