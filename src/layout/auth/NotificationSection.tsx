"use client";

import React, { useState, useEffect } from "react";
import NotifyCard from "@/components/auth/notifications/NotifyCard";
import ChartCard from "@/components/auth/notifications/ChartCard";
import Clockcard from "@/components/auth/notifications/ClockCard";
import { Icon } from "@/components/ui/icon";

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
          <Icon name="bell" />
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
