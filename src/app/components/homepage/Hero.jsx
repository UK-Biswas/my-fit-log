
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto py-4">
      <div className="mx-auto flex min-h-[70vh] w-full flex-col overflow-hidden rounded-xl border border-[#24272d] bg-[#282e3d] md:flex-row">
        <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-8 md:w-[60%] md:px-10 lg:px-12">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-lime-400">
            Workout Library
          </p>

          <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-5 max-w-md text-xs leading-5 text-gray-400 sm:text-sm">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex w-fit rounded-md bg-lime-400 px-5 py-2.5 text-[10px] font-bold uppercase text-black transition hover:bg-lime-300"
          >
            Browse Workouts
          </Link>
        </div>

        <div className="flex w-full items-center justify-center px-6 pb-8 md:w-[40%] md:px-0 md:pb-0">
          <Image
            src="/assets/banner.png"
            alt="Workout"
            width={450}
            height={350}
            priority
            className="h-auto w-[75%] max-w-[350px] object-contain sm:w-[60%] md:h-[280px] md:w-auto lg:h-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;