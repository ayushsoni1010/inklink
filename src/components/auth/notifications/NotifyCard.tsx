"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const NotifyCard: React.FunctionComponent = () => {
  return (
    <Card className="w-48 h-44 p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <Icon name="bell" />
        <Button
          variant={"link"}
          size={"sm"}
          className="py-0 h-3 w-7 text-xs font-semibold"
        >
          Save
        </Button>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <p className="text-xs text-gray-900 font-medium text-left">
          We’ll be sending notifications to you here
        </p>
        <Input defaultValue="hello@gmail.com" className="text-xs h-8" />
      </div>
    </Card>
  );
};

export default NotifyCard;
