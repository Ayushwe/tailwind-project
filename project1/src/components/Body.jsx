import React from "react";

const Body = () => {
  return (
    <div className="lg:flex">
      <div className="relative flex items-center justify-center h-auto py-8 md:py-12 lg:flex-1 lg:order-2 lg:justify-end ">
        <img src="./src/assets/Blue-Shape.svg" className="-rotate-45 h-48 md:h-72 lg:h-[400px]" />
        <img src="./src/assets/Pink-shape.svg" className="absolute -rotate-[30deg] h-48 md:h-72 lg:h-[400px]" />
        <img src="./src/assets/Purple-Shape.svg" className="absolute -rotate-[15deg] h-48 md:h-72 lg:h-[400px]" />
        <img src="./src/assets/Hero-Model.png" className="absolute h-48 md:h-72 lg:h-[400px]" />
      </div>
      <div className="space-y-6 text-center md:text-left lg:flex-1 lg:order-1">
        <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
          Host your Website in less than 5 minutes
        </h1>
        <p className="font-lato text-lg md:text-xl text-gray-400">
          With Hoster, get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 md:max-w-lg mx-auto md:mx-0 md:flex-row">
          <input
            type="email"
            className="rounded-md px-5 py-4 placeholder:text-gray-400 text-lg"
            placeholder="Enter your email address"
          />
          <button className="rounded-md px-5 py-4 bg-blue-400 hover:bg-blue-600 text-white text-lg">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 justify-center md:justify-start">
          <img src="./src/assets/Checkmark.svg" alt="" />
          <p className="font-lato text-lg text-gray-400">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
