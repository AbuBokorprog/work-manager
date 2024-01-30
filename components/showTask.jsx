"use client";
import { authContext } from "@/utils/authProvider";
import React, { useContext, useEffect, useState } from "react";

const ShowTask = () => {
  const user = useContext(authContext);
  const id = user?.user?._id;
  const [task, setTask] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}/task`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
      });
  }, [id]);

  return (
    <div>
      <h2 className=" text-3xl font-semibold mb-10">
        Your total task:{task?.length}
      </h2>
      {task?.length > 0 ? (
        <div>
          {task.map((task) => (
            <div
              key={task?._id}
              className="bg-green-400 my-4 w-full rounded-md p-4"
            >
              <h3 className="text-3xl my-2 font-semibold">{task?.title}</h3>

              <p className="my-2 h-20">{task?.content}</p>
              <div className="flex justify-between items-center">
                <p>{task?.status}</p>
                <button>X</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-center font-medium">
          Your task is empty
        </p>
      )}
    </div>
  );
};

export default ShowTask;
