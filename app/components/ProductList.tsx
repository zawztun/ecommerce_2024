import React from "react";
import Image from "next/image";

type Props = {};

export const ProductList = (props: Props) => {
  return (
    <div className=" py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => (
          <div className="border max-h-auto max-w-[300]" key={idx}>
            <div className="flex flex-col w-">
              <Image src="/image28.jpg" alt="camera" width={50} height={250} />
              <div className="flex justify-between px-2">
                <div className="flex flex-col">
                  <span> $ 200.00</span>
                  <span>Rating </span>
                </div>
                <div>
                  <span>Icon</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
