"use client";

import { useState, useEffect, useRef } from "react";
import { ITestimonial } from "@/types/auth/testimonial";
import TestimonialCard from "@/components/auth/testimonials";
import { testimonialsData } from "@/data/auth/__testimonialsData";
import { Icon } from "@/components/ui/icon";

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
        <Icon name="command" size={70} />
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
