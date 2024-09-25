import React from "react";
import Title from "./ui/Title";

export default function Where() {
  return (
    <section className="my-10">
      <Title
        title="أين ايكومبو ؟"
        description="ايكومبو بيوجد في أكثر من دولة"
      />
      <div className="container my-5">
        <div className="bg-primary rounded-lg">
          <div className="flex flex-col gap-4 items-center md:items-start justify-center">
            <h4>
              احنا موجودين في السعودية <span> O</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
