"use client";
import { authContext } from "@/utils/authProvider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const AddTaskForm = () => {
  const user = useContext(authContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const content = data.content;
    const status = data.status;

    const task = {
      title: title,
      content: content,
      status: status,
      userId: user?.user?._id,
    };

    try {
      fetch("http://localhost:3000/api/task", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          alert(data.message);
        });
    } catch (error) {
      alert(error.message);
    }
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Title:
          </label>
          <input
            placeholder="Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("title", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Content:
          </label>
          <textarea
            placeholder="Content"
            rows={5}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("content", { required: true, maxLength: 150 })}
          />
        </div>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Status
          </label>
          <select
            {...register("status")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"Select the Status"}>
              ---- Select the Status ----
            </option>
            <option value="pending">Pending</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div className="flex gap-5 items-center justify-center mt-6">
          <input
            type="submit"
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          />
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
