"use client";
import { authContext } from "@/utils/authProvider";
import React, { useContext, useEffect, useState } from "react";
import Dropdown from "./dropdown";

const ShowTask = () => {
  const user = useContext(authContext);
  const id = user?.user?._id;
  const [tasks, setTask] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}/task`)
      .then((res) => res.json())
      .then((data) => {
        const sortedTasks = data.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );

        setTask(sortedTasks);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h2 className=" text-3xl font-semibold mb-10">
            Your total task:{tasks?.length}
          </h2>
          {tasks?.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <div
                  key={task?._id}
                  className={`${
                    task?.status == "pending" ? "bg-green-400" : "bg-red-400"
                  } my-4 w-full rounded-md p-4`}
                >
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-3xl my-2 font-semibold">
                        {task?.title}
                      </h3>
                    </div>
                    <Dropdown
                      title={task?.title}
                      content={task?.content}
                      status={task?.status}
                      id={task?._id}
                      setTask={setTask}
                      task={tasks}
                    />
                  </div>
                  <p className="my-2 h-20">{task?.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 text-center font-medium">
              Your task is empty
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ShowTask;
