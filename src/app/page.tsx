"use client";
import About from "@/components/About";
import CommonQuestions from "@/components/CommonQuestions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarketerSolution from "@/components/MarketerSolution";
import Navbar from "@/components/Navbar";
import Says from "@/components/Says";
import SupplierSolution from "@/components/SupplierSolution";
import Where from "@/components/Where";
import Why from "@/components/Why";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 10,
      once: true,
      easing: "ease-in-out",
    });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <span className="relative overflow-clip">
      <Navbar isSticky={isSticky} />
      <main>
        <Header />
        <About />
        <Why />
        <MarketerSolution />
        <SupplierSolution />
        <Where />
        <CommonQuestions />
        <Says />
      </main>
      <Footer />
    </span>
  );
}
