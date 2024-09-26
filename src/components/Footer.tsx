import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 bg-[#172B4D] text-white">
      <div className="container">
        <Image
          src={"/images/footer-logo.png"}
          width={150}
          height={60}
          alt="footer-logo"
        />
        <div className="mt-4 flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <p className=" text-start">
              ايكومبو هي اول وأكبر منصة خدمية للتجارة الإلكترونية في الامارات
              وهي مستودعك الإلكتروني, لتأسيس مشروعك التجاري بسهولة بدون رأس مال
              , كل ماتحتاجه هو أن تبدأ مشروعك ونحن سنقوم بدعمك وبتوفير المنتجات
              لك كما سنضمن لك التخزين والتغليف والشحن . ايكومبو نوفر الحلول
              اللوجستيةالمتكاملة في التجارة الالكترونية للتسهيل علي اصحاب
              المتاجر الالكترونية البدء بمنتجات بسعر الجملة بدون رأس مال.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-evenly md:justify-start  gap-4 ">
            <div className="w-1/2 flex flex-col gap-3 items-center justify-start">
              <a href="http://" target="_blank">
                سجل كمورد
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                سجل كمسوق
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                تواصل معنا
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                الشروط والأحكام
              </a>
            </div>
            <div className="w-1/2 flex items-center justify-evenly md:justify-start flex-col gap-3">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                كيف تبدأ
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                فروعنا
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                الأسئلة الشائعة
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                خدماتنا
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center  justify-center md:justify-start  gap-4">
          <Image
            src={"/images/facebook.png"}
            alt="face-book"
            width={35}
            height={35}
          />
          <Image src={"/images/insta.png"} alt="insta" width={35} height={35} />
          <Image
            src={"/images/twitter.png"}
            alt="twitter"
            width={35}
            height={35}
          />
        </div>
      </div>
    </footer>
  );
}
