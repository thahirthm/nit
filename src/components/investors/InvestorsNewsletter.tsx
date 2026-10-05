"use client";

import { Button } from "@/components/ui/Button";

export function InvestorsNewsletter() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <div className="bg-[#F7F7F7] px-6 sm:px-10 py-10 sm:py-12 lg:py-14">
          <p className="text-gray-900 text-[20px] sm:text-[22px] font-light leading-relaxed max-w-lg">
            Subscribe to NIT&apos;s newsletter for the latest news, strategy, and IPO insights.
          </p>

          <form className="mt-10 sm:mt-14" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-gray-900 placeholder:text-gray-400 text-base focus:outline-none focus:border-[#2E368F] transition-colors"
            />
            <div className="mt-6">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
