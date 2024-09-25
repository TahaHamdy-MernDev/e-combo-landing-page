import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

export default function MarketerSolution() {
  const data = [
    {
      img: "/images/boxes.png",
      title: "تخزين وتغليف المنتجات",
      text: "في ايكومبو هنساعدك في تغليف وتخزين منتجاتك في مستودعاتنا",
    },
    {
      img: "/images/customer-service.png",
      title: "خدمة عملاء",
      text: "في ايكومبو لدينا خدمة عملاء دؤوبة تعمل على مدار الساعة",
    },
    {
      img: "/images/delivery-truck.png",
      title: "خدمة الشحن السريع",
      text: "في ايكومبو نوفر خدمة الشحن بكافة الطرق وبأسرع ما يمكن",
    },
    {
      img: "/images/money-box.png",
      title: "تحصيل الأموال",
      text: "في ايكومبو كمان هنحصل أموالك من المشترين وهنسهلها عليك",
    },
    {
      img: "/images/money-transfer.png",
      title: "تحويل الأموال",
      text: "في ايكومبو هنحول الارباح بعد تحصيلها على محفظتك",
    },
  ];
  return (
    <section className="py-10">
      <Title
        title="حلول ايكومبو للمسوق"
        description="لأن للتجارة أصول نقدم لك حلول عملية"
        titleColor="text-primary"
      />
      <div className="container mt-5 rounded-lg">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
          {data.map((item, idx) => (
            <div
              key={idx}
              className=" p-8 text-center flex flex-col items-center justify-center  gap-1"
            >
              <Image alt={item.title} src={item.img} width={150} height={150} />
              <h2 className="text-3xl font-normal">{item.title}</h2>
              <p className=" max-w-[250px] text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
