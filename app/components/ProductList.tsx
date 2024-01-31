import React from "react";
import Image from "next/image";

type Props = {};

export const ProductList = (props: Props) => {
  return (
    <div className=" py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => (
          <div className="border rounded-md max-w-[300] bg-white" key={idx}>
            <div className="flex flex-col gap-4">
              <div className="grid m-auto p-4 ">
                <Image
                  src="/image28.jpg"
                  alt="camera"
                  width={150}
                  height={250}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="flex flex-col items-center text-sm ">
                    <span> $ 200.00</span>
                    <span>Rating </span>
                  </div>
                  <div>
                    <span className="border p-2 rounded-lg ">Icon</span>
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
