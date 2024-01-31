import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="md:w-[70%] mx-auto flex py-4 px-2 justify-bwtween gap-4  ">
        <div className="flex gap-2 justify-start items-center ">
          <span>logo</span>
          <span>Brand</span>
        </div>

        <div className="w-full flex justify-around items-center ">
          <div className="flex md:w-[50%] justify-center gap-4">
            <input type="text" className="border border-blue-200 rounded-md " />
            <option value="category" className="hidden md:flex items-center">
              All Category
            </option>
            <button className="hidden md:visible md:inline border p-2 rounded-md">
              Search
            </button>
          </div>
          <div className="w-[30%] border hidden md:flex md:justify-end list-none gap-2">
            <li>profile</li>
            <li>message</li>
            <li>Orders</li>
            <li>My Cart</li>
          </div>
        </div>
      </div>
    </div>
  );
};
