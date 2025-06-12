"use client";
import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const VantaBirdsBackground = dynamic(
  () => import("./components/VantaBirdsBackground"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <VantaBirdsBackground>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-10 bg-transparent flex-1 flex flex-col items-center justify-center text-center px-4">
          <Hero />
        </main>
        <Footer />
      </div>
    </VantaBirdsBackground>
  );
}
