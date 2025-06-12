"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function VantaBirdsBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (
      threeLoaded &&
      vantaLoaded &&
      typeof window !== "undefined" &&
      (window as any).VANTA &&
      (window as any).THREE &&
      vantaRef.current
    ) {
      vantaEffect.current = (window as any).VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 0.0,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [threeLoaded, vantaLoaded]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Ensure THREE is available globally
          if (typeof window !== "undefined" && !(window as any).THREE) {
            (window as any).THREE =
              (window as any).THREE || (window as any).THREE;
          }
          setThreeLoaded(true);
        }}
      />
      {/* Only load Vanta after THREE is loaded */}
      {threeLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
          strategy="afterInteractive"
          onLoad={() => setVantaLoaded(true)}
        />
      )}
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
