import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

export default function Why() {
  return (
    <section className="py-10 overflow-hidden" id="why" data-aos="fade-up">
      <Title
        title="لماذا ايكومبو ؟"
        titleColor="text-primary"
        description="ايكومبو هي اول وأكبر منصة خدمية للتجارة الإلكترونية في الامارات وهي مستودعك الإلكتروني, لتأسيس مشروعك التجاري بسهولة بدون رأس مال , كل ماتحتاجه هو أن تبدأ مشروعك ونحن سنقوم بدعمك وبتوفير المنتجات لك كما سنضمن لك التخزين والتغليف والشحن"
        dataAos="fade-up"
        dataAosDelay={100}
      />
      <div className="container mt-5 rounded-lg">
        <div
          className="bg-[#f3a837]/10 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 py-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Text Section */}
          <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="300">
            <p className="text-lg md:text-2xl md:text-start md:max-w-[400px]">
              نقدم حلول مختلفة لزيادة مبيعات التجار ومنتجات ومتنوعة للتسهيل علي
              اصحاب المتاجر الالكترونية البدء بمنتجات بسعر الجملة بدون رأس مال
              بالاضافة الي السرعة الفائقة في سرعة دوران راس المال.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <Image
              width={600}
              height={300}
              src={"/images/why.png"}
              alt="why-us"
              className="rounded-lg"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
