import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import Button from "./ui/Button";
export default function About() {
  return (
    <section className="py-10" id="about">
      <Title
        title="عن ايكومبو"
        titleColor="text-primary"
        description="ايكومبو هي اول وأكبر منصة خدمية للتجارة الإلكترونية في الامارات وهي مستودعك الإلكتروني, لتأسيس مشروعك التجاري بسهولة بدون رأس مال , كل ماتحتاجه هو أن تبدأ مشروعك ونحن سنقوم بدعمك وبتوفير المنتجات لك كما سنضمن لك التخزين والتغليف والشحن"
      />
      <div className="container mt-6">
        <div className="mt-8 flex flex-col md:flex-row-reverse gap-2 items-center justify-between">
          <div className="md:w-1/2 p-2  md:p-8">
            <div className="bg-[#59C6C91C] p-4 md:p-8 rounded-lg flex flex-col gap-2 items-center justify-center">
              <Image
                src="/images/supplier.png"
                alt="supplier"
                width={80}
                height={80}
              />
              <h4 className=" text-3xl font-normal text-secondary">المورد</h4>
              <p className=" text-xl max-w-[70%] text-center">
                التسجيل كمورد يمنحك مزايا في استخدام مستودعاتنا وحقوق التسويق{" "}
              </p>
              <Button className="mt-2" variant="secondary">
                سجل كمورد
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 p-2  md:p-8">
            <div className="bg-[#F3A8371C] p-4  md:p-8 rounded-lg flex flex-col gap-2 items-center justify-center">
              <Image
                src="/images/marketer.png"
                alt="marketer"
                width={80}
                height={80}
              />
              <h4 className=" text-3xl font-normal text-secondary">المسوق</h4>
              <p className=" text-xl max-w-[70%] text-center">
                التسجيل كمسوق يمنحك مزايا في استخدام مستودعاتنا وحقوق التسويق
              </p>
              <Button className="mt-2">سجل كمسوق</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
