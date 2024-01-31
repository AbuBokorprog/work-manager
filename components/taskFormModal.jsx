import React from "react";
import { useForm } from "react-hook-form";

const TaskFormModal = ({ title, content, status, id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const task = {
      title: data.title,
      content: data.content,
      status: data.status,
    };

    try {
      fetch(`http://localhost:3000/api/task/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.updateTask) {
            title = data.updateTask.title;
            content = data.updateTask.content;
            status = data.updateTask.status;
          }
          alert(data.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Title:
          </label>
          <input
            defaultValue={title}
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
            defaultValue={content}
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
            <option defaultValue={status}>{status}</option>
            {status === "pending" ? (
              <option value="complete">Complete</option>
            ) : (
              <option value="pending">pending</option>
            )}
          </select>
        </div>
        <div className="flex gap-5 items-center justify-center mt-6">
          <input
            type="submit"
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskFormModal;
