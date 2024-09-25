import React from "react";

interface TitleProps {
  title?: string;
  description?: string;
  titleColor?: "text-primary" | "text-secondary";
}

const Title: React.FC<TitleProps> = ({
  title,
  description,
  titleColor = "text-secondary",
}) => {
  return (
    <div className="text-center flex flex-col items-center ">
      <h3 className={`text-3xl font-medium ${titleColor}`}>{title}</h3>
      <p className="mt-6 md:max-w-[750px] text-lg font-medium px-2">{description}</p>
    </div>
  );
};

export default Title;
