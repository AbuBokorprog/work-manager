import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex bg-blue-500 h-20 px-4 justify-between items-center">
      <h2 className="text-xl font-semibold">Work Manager</h2>
      <div className="flex justify-between  gap-5 items-center font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/addTask"}>Add Task</Link>
        <Link href={"/showTask"}>Show task</Link>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <button className="px-4 py-2 hover:bg-gray-400 rounded-md">
          <Link href={"/login"}>Login</Link>
        </button>
        <button className="px-4 py-2 hover:bg-gray-400 rounded-md">
          <Link href={"/signIn"}>Sign In</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
