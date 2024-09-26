import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

export default function Says() {
  return (
    <section className="py-10">
      <Title
        title="ماذا قالوا عنا؟"
        description="ايكومبو هي شركة ناشئة رائدة وهناك الكثير من تكلم عن نجاحاتنا"
      />
      <div className="container mt-5">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
          <Image
            src={"/images/Fintech-logo.png"}
            alt=""
            width={150}
            height={60}
          />
          <Image
            src={"/images/wasla-logo.png"}
            alt=""
            width={150}
            height={60}
          />
          <Image
            src={"/images/Fe-el-mal-logo.png"}
            alt=""
            width={150}
            height={60}
          />
          <Image
            src={"/images/Enterprise-logo.png"}
            alt=""
            width={150}
            height={60}
          />
        </div>
      </div>
    </section>
  );
}
