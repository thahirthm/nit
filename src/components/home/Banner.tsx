"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-105'}`}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/ban-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* #2E368F overlay with Overlay blend mode */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: '#2E368F', mixBlendMode: 'overlay', opacity: 1 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-end">
        <div className="max-w-[750px] pt-[90px]">
          <h1 className="text-white text-[43px] leading-[50px] md:text-[55px] md:leading-[62px] font-extralight mb-12 tracking-wide font-[family-name:var(--font-futura)] flex flex-col">
            <span className="overflow-hidden pb-2 -mb-2">
              <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoaded ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                Engineering Infrastructure.
              </span>
            </span>
            <span className="overflow-hidden pb-2 -mb-2">
              <span className={`block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${isLoaded ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                Enabling Digital Transformation.
              </span>
            </span>
          </h1>
          <div className="overflow-hidden pb-4 -mb-4">
            <div className={`transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${isLoaded ? 'translate-y-0' : 'translate-y-[120%]'}`}>
              <Button variant="secondary" className="mt-2">Know more about us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
