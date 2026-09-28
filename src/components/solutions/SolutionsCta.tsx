import { Button } from "@/components/ui/Button";

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M8 1V10.5M8 10.5L4.5 7M8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1.5 13H14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export function SolutionsCta() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      <div className="w-full px-6 lg:px-16">
        <div className="bg-[#F7F7F7] px-6 sm:px-10 py-14 sm:py-16 lg:py-20 flex flex-col items-center text-center">
          <h2 className="text-[#2E368F] text-[26px] sm:text-[34px] lg:text-[42px] font-light tracking-tight mb-4 lg:mb-6">
            Engineering an energy project?
          </h2>
          <p className="text-gray-700 text-[17px] sm:text-[19px] lg:text-[21px] font-light leading-relaxed max-w-2xl mb-8 lg:mb-10">
            Whether it&apos;s a new substation, a grid extension, or an energy efficiency program — our team is ready
            to design, build, and deliver.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Talk to our team
            </Button>

            <a href="/documents/nit-capability-deck.pdf" className="inline-flex items-stretch gap-2.5 group font-[family-name:var(--font-futura)]">
              <div className="relative overflow-hidden flex items-center justify-center px-4 py-2.5 text-[12px] font-medium leading-normal uppercase z-10 border border-[#2E368F] text-[#2E368F] bg-white transition-colors duration-300">
                <div className="relative inline-flex items-center justify-center">
                  <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                    Download capability deck
                  </span>
                  <span className="absolute block translate-y-12 transition-transform duration-500 ease-in-out group-hover:translate-y-0 whitespace-nowrap">
                    Download capability deck
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden flex items-center justify-center aspect-square w-[38px] shrink-0 z-10 border border-[#2E368F] text-white">
                <div className="absolute inset-0 -z-20 bg-transparent" />
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10 bg-[#8ADBF0]" />
                <DownloadIcon className="w-[13px] h-[13px] text-[#2E368F] transition-transform duration-500 ease-in-out group-hover:translate-y-12" />
                <DownloadIcon className="absolute w-[13px] h-[13px] -translate-y-12 text-[#2E368F] transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
