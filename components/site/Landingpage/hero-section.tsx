"use client";
import React from "react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="lg:py-32 md:py-24 py-12 w-full h-full ">
      <div className="container mx-auto flex flex-col items-center gap- px-4 m6d:px-6 text-center md:text-left">
        <h1 className="font-extrabold lg:text-6xl md:text-5xl text-4xl tracking-wide">
          Progress{" "}
          <span className="inline-block font-semibold text-xl tracking-tighter">
            one step at a time.
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
          Build consistency, track your journey, and
          <span className="block">
            celebrate milestones — all in one place.
          </span>
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <Button
            className="bg-purple-500 hover:bg-purple-600 hover:cursor-pointer"
            onClick={() => router.push("/auth")}
          >
            Get Going
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
