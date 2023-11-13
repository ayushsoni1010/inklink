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
            d="M23.0996 25.9004V11.9004"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7002 25.9V3.5"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.2998 25.9V17.5"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Checkbox checked={true} />
      </div>

      <div className="flex flex-col gap-4 items-start">
        <p className="text-xs  text-gray-900 font-medium text-left">
          Notify me when any wallets move more than
        </p>
        <Select>
          <SelectTrigger className="w-28 h-8 text-xs">
            <SelectValue placeholder="$1,000.00" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="$1,000.00">{"$1,000.00"}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default ClockCard;
