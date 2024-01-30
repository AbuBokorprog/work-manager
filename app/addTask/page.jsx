import AddTaskForm from "@/components/addTaskForm";
import React from "react";
import Image from "next/image";
import addTaskImage from "@/public/assets/addTaskImage.png";

export const metadata = {
  title: "Add Task",
  description: "Add Task Page",
};

const AddTask = () => {
  return (
    <div className="my-10 lg:flex items-center justify-betweens gap-10">
      <Image
        src={addTaskImage}
        alt="Add Task Image"
        width={500}
        height={600}
        // sizes="100vw"
        placeholder="blur"
        quality={70}
        className="mx-auto w-auto h-auto rounded-lg"
        priority
      />
      <div className="w-full">
        <h2 className="text-3xl my-2 font-semibold text-center">
          Add Task page
        </h2>
        <AddTaskForm />
      </div>
    </div>
  );
};

export default AddTask;
