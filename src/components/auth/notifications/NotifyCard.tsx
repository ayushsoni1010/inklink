"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NotifyCard: React.FunctionComponent = () => {
  return (
    <Card className="w-48 h-44 p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5"
            stroke="black"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
