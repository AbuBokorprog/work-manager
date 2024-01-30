import React from "react";
import Link from "next/link";
import Testimonials from "@/components/testimonials";

export default function page() {
  return (
    <div className="">
      <section className="bg-blue-500 text-white pt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Boost Your Productivity with Work Manager
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Streamline your tasks, manage projects efficiently, and achieve your
            goals.
          </p>
          <div className="flex justify-center">
            <Link
              href={"/sign_up"}
              className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
