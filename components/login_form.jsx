"use client";
import { authContext } from "@/utils/authProvider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const router = useRouter();
  const { user, setUser } = useContext(authContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    const user = {
      email: email,
      password: password,
    };
    try {
      fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          if (data.message === "Login success") {
            setUser(data.user);
            router.push("/");
          }
        });
      reset();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="">
      <h2 className="text-center text-4xl font-semibold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="mt-6 text-center">
          <input
            type="submit"
            value="Login"
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
