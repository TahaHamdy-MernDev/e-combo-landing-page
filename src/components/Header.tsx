import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
export default function Header() {
  return (
    <header className=" py-10 min-h-[55svh] bg-[#EBFEFF]">
      <div className="container   rounded-lg">
        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
          <span className="absolute -top-[30%] left-1/2 transform -translate-x-1/2 bg-circle w-40 h-40 rounded-full"></span>
          <span className="absolute -bottom-[0%] right-[-9%] transform -translate-x-1/2 bg-circle w-40 h-40 rounded-full z-0"></span>

          <div className="md:w-1/2 relative flex items-center justify-center">
            {/* Main Image */}
            <Image
              src={"/images/header-img.png"}
              alt="Ecompo Header Image"
              height={500}
              width={400}
              className="rounded-lg relative z-10" // Ensures main image is above the others
              priority
            />

            <Image
              src={"/images/header-bonus.png"}
              alt="First Extra Image"
              height={100}
              width={150}
              className="absolute top-[55%] right-0 z-10"
            />

            <Image
              src={"/images/header-cart.png"}
              alt="Second Extra Image"
              height={80}
              width={80}
              className="absolute top-1/3 left-[10%]  z-10"
            />
          </div>
          <div className="md:w-1/2 mt-8 text-center md:text-right mb-6 md:mb-0 ">
            <h1 className="text-6xl md:text-7xl font-normal text-primary relative inline-block">
              <span className="relative">
                ايكومبو {""}
                <span className="absolute right-0 top-full">
                  <Image
                    src={"/images/title-underline.png"}
                    width={150}
                    height={60}
                    alt="text-underline"
                  />
                </span>
              </span>
            </h1>

            <p className="mt-10 text-2xl md:text-4xl text-text">
              هتساعدك تبدأ تجارتك <br />
              الالكترونية بسعر الجملة وبدون <br />{" "}
              <span className=" text-secondary">راس مال </span>
            </p>
            <div className=" w-full">
              <Button className=" mt-4 z-10 relative">انضم إلينا</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
