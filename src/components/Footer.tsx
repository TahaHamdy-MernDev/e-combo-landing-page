import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mt-20 pt-10 bg-[#172B4D] text-white overflow-hidden">
        <div className="container mb-3">
          <Image
            src={"/images/footer-logo.png"}
            width={150}
            height={60}
            alt="footer-logo"
          />
          <div className="mt-4 flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <p className="text-start" data-aos="fade-up">
                ايكومبو هي اول وأكبر منصة خدمية للتجارة الإلكترونية في الامارات
                وهي مستودعك الإلكتروني, لتأسيس مشروعك التجاري بسهولة بدون رأس
                مال , كل ماتحتاجه هو أن تبدأ مشروعك ونحن سنقوم بدعمك وبتوفير
                المنتجات لك كما سنضمن لك التخزين والتغليف والشحن . ايكومبو نوفر
                الحلول اللوجستيةالمتكاملة في التجارة الالكترونية للتسهيل علي
                اصحاب المتاجر الالكترونية البدء بمنتجات بسعر الجملة بدون رأس
                مال.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-evenly md:justify-start  gap-4 ">
              <div className="w-1/2 flex flex-col gap-3 items-center justify-start">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  سجل كمورد
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  سجل كمسوق
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  تواصل معنا
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  الشروط والأحكام
                </a>
              </div>
              <div className="w-1/2 flex items-center justify-evenly md:justify-start flex-col gap-3">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  كيف تبدأ
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  فروعنا
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  الأسئلة الشائعة
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  خدماتنا
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center  justify-center md:justify-start  gap-4">
            <Image
              src={"/images/facebook.png"}
              alt="facebook"
              width={35}
              height={35}
              data-aos="fade-in"
            />
            <Image
              src={"/images/insta.png"}
              alt="instagram"
              width={35}
              height={35}
              data-aos="fade-in"
              data-aos-delay="100"
            />
            <Image
              src={"/images/twitter.png"}
              alt="twitter"
              width={35}
              height={35}
              data-aos="fade-in"
              data-aos-delay="200"
            />
          </div>
        </div>
      </footer>
      <div className="bg-[#172B4D] border-t-2  px-6 py-4">
        <div className="container ">

        <div className="flex justify-between items-center ">
          <p className=" text-white">E combo 2023</p>
          <p className=" text-white">All Rights Reserved</p>
        </div>
        </div>
      </div>
    </>
  );
}
