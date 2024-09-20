"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import {BentoGridThirdDemo} from "../components/bentoGrid"

export default function Hero() {
  return (
    <>
    <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Creative UI/UX
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Akash Design Studio, where creativity meets functionality.
          I deliver intuitive, scalable, and visually captivating UI/UX design
          solutions tailored to your business. Whether you&apos;re launching a
          new app, redesigning a website, or optimizing user journeys, I&apos;ve
          got you covered.
        </p>

        <input
          type="text"
          placeholder="hi@akashinsights.com"
          className="rounded-lg border px-2 border-border focus:ring-0 outline-none focus:ring-teal-500  w-full relative z-10 mt-4  bg-background placeholder:text-primary placeholder:text-center"
        />
      </div>
      <BackgroundBeams />
    </div>
    <BentoGridThirdDemo/>
    </>
  );
}
