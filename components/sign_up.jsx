"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Sign_up = () => {
  const [match, setMatch] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.username;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const photoURL = data.photoURL;
    const user = {
      name: name,
      email: email,
      password: password,
      photoURL: photoURL,
    };

    try {
      if (password !== confirmPassword) {
        setMatch("not matched password");
      } else {
        setMatch("");
        fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert(data.message);
          });
        reset();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            UserName:
          </label>
          <input
            placeholder="Type your username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("username", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Email:
          </label>
          <input
            type="email"
            placeholder="Type your email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email", { required: true })}
          />
        </div>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Type your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password", { required: true })}
          />
        </div>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Retype your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("confirmPassword", { required: true })}
          />
          <p className="text-red-500">{match}</p>
        </div>
        <div className="my-2">
          <label className="block mb-2 font-medium text-gray-900 dark:text-white">
            PhotoURL:
          </label>
          <input
            placeholder="Paste your photo URL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("photoURL", { required: true })}
          />
        </div>
        <div className="mt-6 text-center">
          <input
            type="submit"
            value={"Sign Up"}
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};

export default Sign_up;
