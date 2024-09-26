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
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <main className="pt-20 overflow-clip">
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
    </React.Fragment>
  );
}
