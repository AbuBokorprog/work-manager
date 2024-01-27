import AddTaskForm from "@/components/addTaskForm";
import React from "react";
import Image from "next/image";
import addTaskImage from "@/public/assets/addTaskImage.png";
const AddTask = () => {
  return (
    <div className="my-10">
      <Image
        src={addTaskImage}
        alt="Add Task Image"
        width={600}
        height={600}
        // sizes="100vw"
        placeholder="blur"
        quality={70}
        className="mx-auto w-auto h-auto"
        priority
      />
      <h2 className="text-3xl my-2 font-semibold text-center">Add Task page</h2>
      <AddTaskForm />
    </div>
  );
};

export default AddTask;
