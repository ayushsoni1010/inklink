"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@/components/ui/icon";
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
        <Icon name="clock" />
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
