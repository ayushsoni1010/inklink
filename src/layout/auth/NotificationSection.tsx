"use client";

import React, { useState, useEffect } from "react";
import NotifyCard from "@/components/auth/notifications/NotifyCard";
import ChartCard from "@/components/auth/notifications/ChartCard";
import Clockcard from "@/components/auth/notifications/ClockCard";

const cardComponents = [NotifyCard, ChartCard, Clockcard];

const NotificationsSection: React.FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardComponents.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-4 max-w-xs h-fit">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z"
                fill="white"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2 className="text-2xl font-medium drop-shadow-lg w-56">
            Get notified when a highly correlated whale makes a move
          </h2>
          <p className="text-sm opacity-70 font-medium">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="h-full w-72 overflow-x-scroll overflow-hidden drop-shadow-xl">
          <div
            className="grid grid-cols-3 gap-x-52 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 60}%)`,
            }}
          >
            {cardComponents.map((Item, index) => (
              <Item key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;
