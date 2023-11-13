"use client";

import { useState, useEffect, useRef } from "react";
import { ITestimonial } from "@/types/auth/testimonial";
import TestimonialCard from "@/components/auth/testimonials";
import { testimonialsData } from "@/data/auth/__testimonialsData";

const TestimonialsSection: React.FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const dragStartX = useRef(0);
  const dragDeltaX = useRef(0);

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);

    console.log(e.clientX, e.clientY);
    dragStartX.current = e.clientX;
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    dragDeltaX.current = e.clientX - dragStartX.current;
    const newIndex = currentIndex - Math.sign(dragDeltaX.current);

    if (newIndex >= 0 && newIndex < testimonialsData.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    dragStartX.current = 0;
    dragDeltaX.current = 0;
  };

  const startAutoPlay = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 10000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };
    startAutoPlay();

    window.addEventListener("resize", handleResize);

    return () => {
      stopAutoPlay();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div
        className="flex gap-10 items-start justify-between w-full"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <svg
          width={70}
          height={70}
          fill="currentColor"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 85.333333a170.666667 170.666667 0 0 1 170.666667 170.666667v85.333333h170.666666V256a170.666667 170.666667 0 0 1 170.666667-170.666667 170.666667 170.666667 0 0 1 170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667 170.666667h-85.333333v170.666666h85.333333a170.666667 170.666667 0 0 1 170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667-170.666667v-85.333333h-170.666666v85.333333a170.666667 170.666667 0 0 1-170.666667 170.666667 170.666667 170.666667 0 0 1-170.666667-170.666667 170.666667 170.666667 0 0 1 170.666667-170.666667h85.333333v-170.666666H256a170.666667 170.666667 0 0 1-170.666667-170.666667 170.666667 170.666667 0 0 1 170.666667-170.666667m426.666667 682.666667a85.333333 85.333333 0 0 0 85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333h-85.333333v85.333333m-85.333334-341.333333h-170.666666v170.666666h170.666666v-170.666666m-341.333333 256a85.333333 85.333333 0 0 0-85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333-85.333333v-85.333333H256M341.333333 256a85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333 85.333333 85.333333 85.333333 0 0 0 85.333333 85.333333h85.333333V256m426.666667 85.333333a85.333333 85.333333 0 0 0 85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333 85.333333 85.333333 0 0 0-85.333333 85.333333v85.333333h85.333333z"
            fill="currentColor"
          />
        </svg>
        <div className="relative max-w-md overflow-hidden w-full h-fit">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${testimonialsData.length * 100}%`,
            }}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            {testimonialsData.map((item: ITestimonial) => (
              <div key={item.id} className="flex-none w-full">
                <TestimonialCard
                  id={item.id}
                  name={item.name}
                  title={item.title}
                  message={item.message}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center justify-center mt-2">
            {testimonialsData.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 cursor-pointer rounded-full bg-white ${
                  index === currentIndex ? "bg-gray-600" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
