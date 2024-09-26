import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success";
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  variant = "primary",
  onClick,
}: Readonly<ButtonProps>) {
  const baseStyles = "py-2 px-10  text-white transition-all";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-secondary hover:bg-primary-dark";
      break;
    case "secondary":
      variantStyles = "bg-primary hover:bg-yellow-600";
      break;
    case "success":
      variantStyles = "bg-successGreen hover:bg-green-700";
      break;
    default:
      variantStyles = "bg-primary";
  }

  return (
    <button
      className={`flex items-center justify-center  ${baseStyles} font-medium rounded ${className} ${variantStyles} h-[40px]`}
      onClick={onClick}
    >
      <p className="-mt-2">{children}</p>
    </button>
  );
}
