import React from "react";
import {
  UserCircleIcon,
  EnvelopeOpenIcon,
  HeartIcon,
  ShoppingCartIcon,
  CubeTransparentIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="w-full md:w-[70%] mx-auto flex md:py-8 px-2 justify-bwtween gap-4">
        <div className="flex gap-2 justify-start items-center  ">
          <span>
            <CubeTransparentIcon className="pl-2 h-8 w-8 text-blue-900" />
          </span>
          <span className="hidden md:flex r p-2 text-2xl text-blue-600 ">
            Brand
          </span>
        </div>
        <div className="w-full flex justify-around items-center ">
          <div className=" mx-auto flex w-[70%] md:w-[70%] md:justify-end border border-blue-500 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className=" w-full p-2 outline-none"
            />

            <div className="hidden md:flex px-2 ">
              <select className="px-2 text-sm border-l border-blue-300 rounded-sm outline-none">
                <option value="electronic">Electronic</option>
                <option value="books">Books</option>
                <option value="phones">Phones</option>
                <option value="foods">Foods</option>
              </select>
            </div>

            <button className="hidden md:visible md:inline py-2 px-8 bg-blue-500 text-white text-sm">
              Search
            </button>
          </div>
          <div className=" flex justify-end md:hidden py-8">
            <Bars3BottomLeftIcon className="h-12 w-12 text-blue-900" />
          </div>
          <div className="w-[40%] hidden md:flex md:justify-end list-none gap-4 text-xs items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <UserCircleIcon className="h-6 w-6 text-gray-400 " />

              <li>Profile</li>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <EnvelopeOpenIcon className="h-6 w-6 text-gray-400" />
              <li>Message</li>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <HeartIcon className="h-6 w-6 text-gray-400" />
              <li>Order</li>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <ShoppingCartIcon className="h-6 w-6 text-gray-400" />
              <li>My Cart</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
