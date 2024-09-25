import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

export default function Why() {
  return (
    <section className="py-10">
      <Title title="لماذا ايكومبو ؟" />
      <div className="container mt-5  rounded-lg ">
        <div className="bg-[#f3a837]/10 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 py-5">
          <div className="md:w-1/2">
            <p className="text-lg md:text-2xl md:text-start md:max-w-[400px]">
              نقدم حلول مختلفة لزيادة مبيعات التجار ومنتجات ومتنوعة للتسهيل علي
              اصحاب المتاجر الالكترونية البدء بمنتجات بسعر الجملة بدون رأس مال
              بالاضافة الي السرعة الفائقة في سرعة دوران راس المال.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              width={600}
              height={300}
              src={"/images/why.png"}
              alt="why-us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
