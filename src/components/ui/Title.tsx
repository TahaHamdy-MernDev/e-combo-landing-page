import React from "react";

interface TitleProps {
  title?: string;
  description?: string;
  titleColor?: "text-primary" | "text-secondary";
  dataAos?: string;
  dataAosDelay?: number;
}

const Title: React.FC<TitleProps> = ({
  title,
  description,
  titleColor = "text-secondary",
  dataAos = "fade-up",
  dataAosDelay = 100,
}) => {
  return (
    <div
      className="text-center flex flex-col items-center my-10"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <h3 className={`text-3xl md:text-4xl font-medium ${titleColor}`}>
        {title}
      </h3>
      <p className="mt-6 md:max-w-[750px] text-lg font-medium px-2">
        {description}
      </p>
    </div>
  );
};

export default Title;
