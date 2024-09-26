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
import React from "react";

export default function Home() {
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
