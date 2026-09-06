import { Button } from "@/components/ui/Button";
import { Globe } from "@/components/ui/Globe";

export function ExpertiseSection() {
  const stats = [
    {
      value: "35+",
      label: "Years of Infrastructure &\nEngineering",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M32.0625 47.25L48.9375 10.125H32.0625L23.625 28.6875H40.5" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.625 28.6875L21.3237 33.75H5.90625L14.3438 24.4688L5.90625 15.1875H29.7612" stroke="#81D1E8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      value: "63+",
      label: "Active Infrastructure & Technology\nProjects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M3.375 21.9375L27 35.4375L50.625 21.9375L27 8.4375L3.375 21.9375Z" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.375 30.375L27 43.875L50.625 30.375" stroke="#81D1E8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      value: "1900+",
      label: "Engineers & Specialists",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M40.5 25.3125C42.4651 25.311 44.4034 25.7678 46.161 26.6467C47.9187 27.5255 49.4471 28.8021 50.625 30.375" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.375 30.375C4.55287 28.8021 6.08133 27.5255 7.83895 26.6467C9.59657 25.7678 11.5349 25.311 13.5 25.3125" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 38.8125C31.6599 38.8125 35.4375 35.0349 35.4375 30.375C35.4375 25.7151 31.6599 21.9375 27 21.9375C22.3401 21.9375 18.5625 25.7151 18.5625 30.375C18.5625 35.0349 22.3401 38.8125 27 38.8125Z" stroke="#81D1E8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.1875 45.5625C16.3989 43.5068 18.1258 41.8028 20.1975 40.619C22.2692 39.4352 24.6139 38.8125 27 38.8125C29.3861 38.8125 31.7308 39.4352 33.8025 40.619C35.8742 41.8028 37.6011 43.5068 38.8125 45.5625" stroke="#81D1E8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33.9609 16.875C34.2765 15.6528 34.9285 14.5435 35.8429 13.6732C36.7572 12.8029 37.8973 12.2064 39.1337 11.9515C40.37 11.6966 41.653 11.7936 42.837 12.2312C44.0211 12.6689 45.0586 13.4299 45.8319 14.4276C46.6052 15.4254 47.0832 16.62 47.2116 17.8758C47.34 19.1316 47.1137 20.3982 46.5584 21.5318C46.0031 22.6655 45.141 23.6207 44.0701 24.289C42.9992 24.9573 41.7623 25.3119 40.5 25.3125" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.4966 25.3125C12.2343 25.3119 10.9974 24.9573 9.92649 24.289C8.85557 23.6207 7.9935 22.6655 7.4382 21.5318C6.88289 20.3982 6.6566 19.1316 6.78502 17.8758C6.91345 16.62 7.39143 15.4254 8.1647 14.4276C8.93797 13.4299 9.97553 12.6689 11.1596 12.2312C12.3436 11.7936 13.6266 11.6966 14.8629 11.9515C16.0993 12.2064 17.2394 12.8029 18.1537 13.6732C19.0681 14.5435 19.7201 15.6528 20.0357 16.875" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      value: "60k+",
      label: "In-Kingdom Resources Across\nNesma Group",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <path d="M27 47.25C38.1838 47.25 47.25 38.1838 47.25 27C47.25 15.8162 38.1838 6.75 27 6.75C15.8162 6.75 6.75 15.8162 6.75 27C6.75 38.1838 15.8162 47.25 27 47.25Z" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 6.75C30.7273 6.75 33.75 15.8203 33.75 27C33.75 38.1797 30.7273 47.25 27 47.25" stroke="#81D1E8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M47.25 27C47.25 30.7273 38.1797 33.75 27 33.75C15.8203 33.75 6.75 30.7273 6.75 27" stroke="#2E368F" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)]">
      {/* Top Section: Text + Globe side by side */}
      <div className="flex flex-col lg:flex-row w-full overflow-hidden">

        {/* Left: Text */}
        <div className="w-full lg:w-[58%] px-6 lg:px-16 lg:pr-0 pt-[60px] lg:pt-[100px] flex flex-col justify-start space-y-6">
          <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
            Local expertise. Global reach.
          </h2>
          <p className="text-[15px] md:text-[18px] lg:text-[23px] leading-normal font-light  text-[#727272]">
            NIT operates across Saudi Arabia while collaborating with international partners to deliver infrastructure and technology solutions for complex projects.
          </p>
          <div className="pt-2">
            <Button variant="primary">ABOUT US</Button>
          </div>
        </div>

        {/* Right: Globe — full horizontal, half vertical (top half cropped) */}
        <div className="w-full lg:w-[42%] relative overflow-hidden min-h-[220px] sm:min-h-[320px] lg:min-h-[520px]">
          <div className="absolute bottom-0 -right-[60px] sm:-right-[90px] lg:-right-[120px] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[700px] lg:h-[700px] translate-y-1/2">
            <Globe />
          </div>
        </div>

      </div>

      {/* Bottom Section: Stats Grid */}
      <div className="w-full border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const isLeftCol = index % 2 === 0;
            const isLastRow = index >= stats.length - 2;
            const isLastCol4 = index === stats.length - 1;
            return (
            <div
              key={index}
              className={`group relative flex flex-col justify-between p-4 sm:p-8 min-h-[160px] sm:min-h-[220px] overflow-hidden border-gray-100 lg:border-b-0 ${isLeftCol ? 'border-r' : ''} ${!isLastRow ? 'border-b' : ''} ${isLastCol4 ? 'lg:border-r-0' : 'lg:border-r'}`}
            >
              {/* Slide-up primary bg — same mechanic as button hover */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-[#2E368F] z-0" />

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="leading-none mb-2 sm:mb-4 tracking-tight text-[#2E368F] group-hover:text-white transition-colors duration-500 text-[40px] sm:text-[60px] lg:text-[85px]"
                  style={{ fontWeight: 200 }}
                >
                  {stat.value}
                </h3>
                <p
                  className="font-light leading-relaxed whitespace-pre-line text-[#727272] group-hover:text-white transition-colors duration-500 text-[13px] sm:text-[16px] lg:text-[18px]"
                >
                  {stat.label}
                </p>
              </div>
              <div className="relative z-10 ms-auto md:pt-30 pt-6 sm:pt-10 transition-all duration-500 [&_path]:transition-all [&_path]:duration-500 group-hover:[&_path]:stroke-white [&_svg]:w-9 [&_svg]:h-9 sm:[&_svg]:w-auto sm:[&_svg]:h-auto">
                {stat.icon}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
