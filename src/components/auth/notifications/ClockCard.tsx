"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ClockCard: React.FunctionComponent = () => {
  return (
    <Card className="w-48 h-44 p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
        >
          <path
            d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.4004 7V14L19.0671 16.3333"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Checkbox checked={true} />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <p className="text-xs  text-gray-900 font-medium text-left">
          Notify me when any wallet dormant for
        </p>
        <Select>
          <SelectTrigger className="w-28 h-8 text-xs">
            <SelectValue placeholder="> 30 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="> 30 days">{"> 30 days"}</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs  text-gray-900 font-medium text-left">
          becomes active
        </p>
      </div>
    </Card>
  );
};

export default ClockCard;
