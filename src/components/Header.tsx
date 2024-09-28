import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
export default function Header() {
  return (
    <header className="overflow-hidden  bg-[#EBFEFF]" data-aos="fade-up">
      <Carousel
        className="container h-full px-0"
        plugins={[
          Autoplay({
            delay: 50000,
          }),
        ]}
        opts={{ direction: "rtl", loop: true }}
      >
        <CarouselContent>
          <CarouselItem className="min-h-[50vh] md:h-[60vh] relative overflow-hidden px-4">
            <div className="rounded-lg h-full px-0">
              <span
                className="absolute -top-[10%] md:-top-[25%] left-[75%] md:left-[45%] transform -translate-x-1/2 bg-circle w-52 h-52 rounded-full"
                data-aos="zoom-in"
                data-aos-delay="300"
              ></span>
              <span
                className="absolute bottom-[10%] -left-[30%] md:-bottom-[20%] md:-right-[10%] transform -translate-x-1/2 bg-circle w-52 h-52 rounded-full z-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              ></span>

              <div className=" pt-10  md:h-[60vh]  relative overflow-hidden  flex flex-col md:flex-row-reverse items-center justify-center md:justify-between">
                <div className="md:w-1/2 relative flex items-end justify-center">
                  <Image
                    src={"/images/header-img.png"}
                    alt="Ecompo Header Image"
                    height={675}
                    width={505}
                    className="rounded-lg relative z-10"
                    priority
                    data-aos="fade-right"
                  />

                  <Image
                    src={"/images/header-bonus.png"}
                    alt="First Extra Image"
                    height={100}
                    width={150}
                    className="absolute top-[80%] md:top-[55%] right-[60%] md:right-0 z-10"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  />

                  <Image
                    src={"/images/header-cart.png"}
                    alt="Second Extra Image"
                    height={80}
                    width={80}
                    className="absolute top-[40%] md:top-1/3 left-[5%] md:left-[10%] z-10"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  />
                </div>
                <div className="md:h-full md:w-1/2 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0 text-center md:text-right mb-6 md:mb-0">
                  <h1
                    className="text-6xl md:text-7xl font-normal text-primary relative inline-block"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <span className="relative">
                      ايكومبو{" "}
                      <span className="absolute right-0 top-full">
                        <Image
                          src={"/images/title-underline.png"}
                          width={150}
                          height={60}
                          alt="text-underline"
                          data-aos="zoom-in"
                          data-aos-delay="600"
                        />
                      </span>
                    </span>
                  </h1>

                  <p
                    className="mt-10 text-2xl md:text-4xl text-text"
                    data-aos="fade-up"
                  >
                    هتساعدك تبدأ تجارتك <br />
                    الالكترونية بسعر الجملة وبدون <br />{" "}
                    <span className="text-secondary">راس مال </span>
                  </p>
                  <div
                    className="w-full"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <Button
                      variant={"secondary"}
                      className="mt-4 z-10 relative w-2/3 md:w-1/3"
                    >
                      انضم إلينا
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="h-[80vh] md:h-[60vh] relative overflow-hidden px-4">
            <div className="w-full h-[80vh] md:h-[60vh] px-0 flex flex-col gap-1 md:flex-row-reverse items-center justify-between">
              <div className="relative h-full flex items-end justify-end">
                <Image
                  src={"/images/header-man-after.png"}
                  alt="header-man-after.png"
                  className="absolute top-0 left-[-4%] md:left-0 -z-10"
                  width={460}
                  height={851.957}
                />
                <Image
                  src={"/images/header-man.png"}
                  alt="header-man"
                  width={600}
                  height={600}
                  data-aos="fade-right"
                />
              </div>
              <div className="px-4 relative text-center md:text-start h-full flex items-center md:items-start justify-center flex-col">
                <Image
                  src={"/images/header-man-after.png"}
                  alt="header-man-after.png"
                  className="absolute rotate-180 bottom[-3%] md:bottom-0 -right-[7%]"
                  width={460}
                  height={851.957}
                />
                <h1
                  className="text-6xl md:text-7xl font-normal text-primary relative inline-block"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  ايكو<span className=" text-secondary">مبو</span>
                </h1>
                <p
                  className="mt-10 text-2xl md:text-4xl text-text w-3/4 md:w-1/2"
                  data-aos="fade-up"
                >
                  هتوفرلك كل خدمات التجارة الالكترونية في الإمارات
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-primary text-white border-0 hover:bg-primary/10" />
        <CarouselNext className=" bg-primary text-white border-0 hover:bg-primary/10" />
      </Carousel>
    </header>
  );
}
