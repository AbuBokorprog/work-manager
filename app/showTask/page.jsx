import ShowTask from "@/components/showTask";
import React from "react";

export const metadata = {
  title: "Show Task",
  description: "Show Task Page",
};

export default function page() {
  return (
    <div className="my-10">
      <ShowTask />
    </div>
  );
}
