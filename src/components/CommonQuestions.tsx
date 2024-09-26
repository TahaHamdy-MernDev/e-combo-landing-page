import React from "react";
import Title from "./ui/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function CommonQuestions() {
  return (
    <section className="py-10" id="common-questions">
      <Title title="الأسئلة الشائعة" />
      <div className="container mt-5">
        <div className="md:w-2/3 mx-auto">
          <Accordion type="single" collapsible>
            {/* First Accordion Item */}
            <AccordionItem value="item-1" data-aos="fade-up" data-aos-delay="100">
              <AccordionTrigger>
                ماهي البلاد التي يمكنني التسويق اليها؟
              </AccordionTrigger>
              <AccordionContent>
                ايكومبو توفر المنتجات حاليا في دولة الامارات، وقريبا في جميع دول الخليج العربي، فيمكنك حتي الان التسويق لدولة الامارات فقط
              </AccordionContent>
            </AccordionItem>

            {/* Second Accordion Item */}
            <AccordionItem value="item-2" data-aos="fade-up" data-aos-delay="200">
              <AccordionTrigger>
                هل يمكنني التسويق لدولة الامارات، وانا متواجد بدولة اخري{" "}
              </AccordionTrigger>
              <AccordionContent>
                يمكنك التسويق لدولة الامارات حتى لو كنت متواجدًا في دولة أخرى.
              </AccordionContent>
            </AccordionItem>

            {/* Third Accordion Item */}
            <AccordionItem value="item-3" data-aos="fade-up" data-aos-delay="300">
              <AccordionTrigger>
                ما هو الحد الادني لسحب الأرباح؟
              </AccordionTrigger>
              <AccordionContent>
                الحد الأدنى لسحب الأرباح هو 100 درهم.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" data-aos="fade-up" data-aos-delay="400">
              <AccordionTrigger>
                متي يتم احتساب الارباح القابلة للسحب ؟
              </AccordionTrigger>
              <AccordionContent>
                يتم احتساب الأرباح القابلة للسحب بعد انتهاء كل دورة تجارية.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" data-aos="fade-up" data-aos-delay="500">
              <AccordionTrigger>
                هل في حالة ان العميل لم يستلم الطلب سوف يقوم بدفع مصاريف الشحن؟
              </AccordionTrigger>
              <AccordionContent>
                لا، إذا لم يستلم العميل الطلب، فإن مصاريف الشحن تتحملها الشركة.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
