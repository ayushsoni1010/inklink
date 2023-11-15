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
        <Icon name="bar-chart-2"/>
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
