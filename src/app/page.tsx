import About from "@/components/About";
import Header from "@/components/Header";
import MarketerSolution from "@/components/MarketerSolution";
import Navbar from "@/components/Navbar";
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
      </main>
    </React.Fragment>
  );
}
