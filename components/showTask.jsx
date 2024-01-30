"use client";
import { authContext } from "@/utils/authProvider";
import React, { useContext, useEffect, useState } from "react";

const ShowTask = () => {
  const user = useContext(authContext);
  const id = user?.user?._id;
  const [task, setTask] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${id}/task`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      });
  }, [id]);

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/api/task/${id}/`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Task deleted") {
          const filterTask = task.filter(
            (task) => task._id !== data.deleteTask._id
          );
          setTask(filterTask);
        }
      });
  };

  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
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
                    <button onClick={() => deleteTask(task?._id)}>X</button>
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
      )}
    </div>
  );
};

export default ShowTask;
