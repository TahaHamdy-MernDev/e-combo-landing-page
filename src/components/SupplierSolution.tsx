import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

export default function SupplierSolution() {
  const data = [
    {
      img: "/images/warehouse.png",
      title: "الجرد والتخزين",
      text: "في ايكومبو لا تحتاج إلى رأس مال لشراء منتجات لبدء في تجارتك الإلكترونية",
    },
    {
      img: "/images/delivery-box.png",
      title: "التغليف والشحن",
      text: "في ايكومبو لا تحتاج إلى رأس مال لشراء منتجات لبدء في تجارتك الإلكترونية",
    },
    {
      img: "/images/money.png",
      title: "التحصيل",
      text: "في ايكومبو لا تحتاج إلى رأس مال لشراء منتجات لبدء في تجارتك الإلكترونية",
    },
  ];
  return (
    <section className="py-10">
    <Title
      title="حلول ايكومبو للمورد"
      description="لأن للتجارة أصول نقدم لك حلول عملية"
    />
    <div className="container mt-5">
      <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-5">
        {data.map((item, idx) => {
          const middle = idx === 1;
          return (
            <div
              key={idx+1}
             
              data-aos="fade-up" 
              data-aos-delay={idx * 200} 
              className={`md:w-1/3 p-2 md:p-4 ${
                middle ? "mt-0" : "md:mt-[80px]"
              }`}
          >
              <div className="bg-[#FEF5E9] p-2 py-6 md:px-4 rounded-lg flex flex-col gap-2 items-center justify-center">
                <Image
                  src={item.img}
                  alt="delivery-box"
                  width={100}
                  height={100}
                />
                <h2 className="text-3xl font-normal mt-2 text-primary">
                  {item.title}
                </h2>
                <p className=" max-w-[280px] text-center">{item.text} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
}
