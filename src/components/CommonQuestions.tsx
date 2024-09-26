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
    <section className=" py-10" id="common-questions">
      <Title title="الأسئلة الشائعة" />
      <div className=" container mt-5 ">
        <div className="md:w-2/3 mx-auto">
          <Accordion type="single" collapsible>
            {/* First Accordion Item */}
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ماهي البلاد التي يمكنني التسويق اليها؟
              </AccordionTrigger>
              <AccordionContent>
                ايكومبو توفر المنتجات حاليا في دولة الامارات، وقريبا في جميع دول
                الخليج العربي، فيمكنك حتي الان التسويق لدولة الامارات فقط
              </AccordionContent>
            </AccordionItem>

            {/* Second Accordion Item (Add more items as needed) */}
            <AccordionItem value="item-2">
              <AccordionTrigger>
                هل يمكنني التسويق لدولة الامارات، وانا متواجد بدولة اخري{" "}
              </AccordionTrigger>
              <AccordionContent>Item 2 content</AccordionContent>
            </AccordionItem>

            {/* Third Accordion Item */}
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ما هو الحد الادني لسحب الأرباح؟
              </AccordionTrigger>
              <AccordionContent>Item 3 content</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                متي يتم احتساب الارباح القابلة للسحب ؟
              </AccordionTrigger>
              <AccordionContent>Item 3 content</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                هل في حالة ان العميل لم يستلم الطلب سوف يقوم بدفع مصاريف الشحن
              </AccordionTrigger>
              <AccordionContent>Item 3 content</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
