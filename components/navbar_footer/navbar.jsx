"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { authContext } from "@/utils/authProvider";

const Navbar = () => {
  const { user, setUser } = useContext(authContext);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        setUser([]);
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <nav className="flex bg-blue-500 h-20 px-4 justify-between items-center">
      <h2 className="text-xl font-semibold">Work Manager</h2>
      <div className="flex justify-between gap-5 items-center font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/addTask"}>Add Task</Link>
        <Link href={"/showTask"}>Show task</Link>
      </div>
      {user?.email ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 font-semibold hover:bg-gray-400 rounded-md"
        >
          Logout
        </button>
      ) : (
        <div className="flex justify-between gap-5 items-center">
          <button className="px-4 py-2 hover:bg-gray-400 font-semibold rounded-md">
            <Link href={"/login"}>Login</Link>
          </button>
          <button className="px-4 py-2 font-semibold hover:bg-gray-400 rounded-md">
            <Link href={"/sign_up"}>Sign Up</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
