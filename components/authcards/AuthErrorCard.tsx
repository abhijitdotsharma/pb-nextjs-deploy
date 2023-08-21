import * as React from "react";

import Link from "next/link";

export function AuthErrorCard({ errorMessage }) {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Oops, {errorMessage}
              </h1>
              <p className="my-2 text-gray-800 mb-8">
                Sorry about that! Please visit Login page to get where you need
                to go.
              </p>
              <Link
                href="/login"
                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-black text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-black-700 focus:ring-opacity-50"
              >
                Take me there
              </Link>
            </div>
          </div>
          <div>
            {/* TODO: change with next Image, get logo from arvind */}
            <img alt="404 image" src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        {/* TODO: change with next Image, get logo from arvind */}
        <img alt="error page hero" src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
}
