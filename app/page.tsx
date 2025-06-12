"use client";
import dynamic from "next/dynamic";

const VantaBirdsBackground = dynamic(
  () => import("./components/VantaBirdsBackground"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <VantaBirdsBackground>
      <main className="relative z-10 bg-transparent min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 bg-clip-text text-transparent mb-6">
          AI for Consulting
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
          Taking over simple and complex tasks, and building the Full-stack
          Consulting Service
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded bg-black/60 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get early access
          </button>
        </form>
      </main>
    </VantaBirdsBackground>
  );
}
