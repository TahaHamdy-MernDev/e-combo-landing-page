"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/Logo_Ecombo 1.png";
import Link from "next/link";
import Button from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="ايكومبو" width={150} height={60} />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

      
        <div className=" hidden md:flex gap-3 justify-center items-center">
          <Link
            href="#"
            className="text-textBase text-xl  hover:text-secondary transition"
          >
            عن ايكومبو
          </Link>
          <Link
            href="#"
            className="text-textBase text-xl  hover:text-secondary transition"
          >
            لماذا ايكومبو
          </Link>
          <Link
            href="#"
            className="text-textBase text-xl  hover:text-secondary transition"
          >
            كيف تبدأ
          </Link>
          <Link
            href="#"
            className="text-textBase text-xl  hover:text-secondary transition"
          >
            الاسئلة الشائعة
          </Link>
          <Link
            href="#"
            className="text-textBase text-xl  hover:text-secondary transition"
          >
            <Button>تسجيل دخول</Button>
          </Link>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleSidebar}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleSidebar();
            }
          }}
        >
          <div className="fixed top-0 right-0 w-64 bg-white shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-text">القائمة</span>
              <button
                onClick={toggleSidebar}
                className="text-text"
                aria-label="Close sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-text hover:text-secondary transition"
              >
                عن ايكومبو
              </Link>
              <Link
                href="#"
                className="text-text hover:text-secondary transition"
              >
                لماذا ايكومبو
              </Link>
              <Link
                href="#"
                className="text-text hover:text-secondary transition"
              >
                كيف تبدأ
              </Link>
              <Link
                href="#"
                className="text-text hover:text-secondary transition"
              >
                الاسئلة الشائعة
              </Link>
              <Link
                href="#"
                className="text-text hover:text-secondary transition"
              >
                تسجيل دخول
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
