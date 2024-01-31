import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

type Props = {};

export const ProductList = (props: Props) => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => (
          <div className="border rounded-md max-w-[300] bg-white" key={idx}>
            <div className="flex flex-col gap-4 w-full">
              <div className="grid m-auto p-8 w-full ">
                <Image
                  className="w-full "
                  src="/image28.jpg"
                  alt="camera"
                  width={600}
                  height={700}
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex justify-around md:justify-between">
                  <div className="flex flex-col text-sm ">
                    <span className="py-2 font-bold"> $ 200.00</span>
                    <button className="flex gap-1">
                      <StarIcon className="h-4 w-4  text-yellow-400" />
                      <StarIcon className="h-4 w-4  text-yellow-400" />
                      <StarIcon className="h-4 w-4  text-yellow-400" />
                      <StarIcon className="h-4 w-4  text-yellow-400" />
                      <StarIcon className="h-4 w-4  text-blue-100" />
                      <span>7.5</span>
                    </button>
                  </div>
                  <div>
                    <button className="border p-2 rounded-lg">
                      <HeartIcon className="h-4 w-4  text-blue-400" />
                    </button>
                  </div>
                </div>
                <div className="py-2">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
