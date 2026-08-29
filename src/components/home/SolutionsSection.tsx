import Image from "next/image";
import { Button } from "@/components/ui/Button";

const solutions = [
  {
    title: "Infrastructure",
    description:
      "Designing and delivering critical infrastructure that supports energy, communications, and industrial operations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 shrink-0">
        <path d="M31.2399 13.0485L15.2086 3.60907C15.0173 3.49503 14.8053 3.41999 14.5849 3.38828C14.3644 3.35657 14.1398 3.36882 13.9241 3.42431C13.7084 3.47981 13.5059 3.57745 13.3281 3.71162C13.1503 3.84578 13.0008 4.01381 12.8883 4.20602L10.3571 8.49649C10.2431 8.68793 10.1682 8.90004 10.1366 9.12058C10.1051 9.34113 10.1175 9.56573 10.1732 9.78145C10.2289 9.99716 10.3268 10.1997 10.4611 10.3774C10.5955 10.5551 10.7637 10.7045 10.9561 10.8168L43.0397 29.6999C43.2321 29.8123 43.4003 29.9616 43.5347 30.1393C43.6691 30.317 43.7669 30.5196 43.8226 30.7353C43.8783 30.951 43.8908 31.1756 43.8592 31.3961C43.8276 31.6167 43.7527 31.8288 43.6388 32.0202L41.1075 36.3107C40.995 36.5029 40.8455 36.6709 40.6678 36.8051C40.49 36.9393 40.2874 37.0369 40.0717 37.0924C39.856 37.1479 39.6314 37.1602 39.411 37.1284C39.1905 37.0967 38.9785 37.0217 38.7872 36.9077L22.756 27.4682" stroke="#2E368F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.7985 16.0097L10.3591 32.041C10.245 32.2323 10.17 32.4443 10.1383 32.6648C10.1066 32.8852 10.1188 33.1098 10.1743 33.3255C10.2298 33.5412 10.3275 33.7437 10.4616 33.9215C10.5958 34.0993 10.7638 34.2488 10.956 34.3613L15.2465 36.8925C15.4379 37.0065 15.65 37.0814 15.8706 37.113C16.0911 37.1445 16.3157 37.1321 16.5314 37.0764C16.7472 37.0207 16.9497 36.9229 17.1274 36.7885C17.3051 36.6541 17.4545 36.4859 17.5668 36.2935L36.4415 4.21833C36.5538 4.02595 36.7032 3.85771 36.8809 3.72334C37.0586 3.58896 37.2611 3.49111 37.4768 3.43541C37.6926 3.37972 37.9172 3.36729 38.1377 3.39885C38.3583 3.4304 38.5704 3.50532 38.7618 3.61927L43.0523 6.15052C43.2445 6.26304 43.4125 6.41251 43.5467 6.59029C43.6808 6.76807 43.7785 6.97065 43.834 7.18635C43.8895 7.40205 43.9017 7.6266 43.87 7.84706C43.8383 8.06752 43.7633 8.27951 43.6492 8.47083L34.2098 24.5021" stroke="#2E368F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.75 48.9375H47.25" stroke="#2E368F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35.0916 34.71L37.125 48.9377" stroke="#2E368F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.0413 33.7734L16.875 48.9377" stroke="#2E368F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    capabilities: [
      { name: "Energy Infrastructure", image: "/images/in-1.png" },
      { name: "Transmission & Distribution", image: "/images/in-2.png" },
      { name: "Water & MEP Systems", image: "/images/in-3.png" },
      { name: "Industrial Infrastructure", image: "/images/in-4.png" },
      { name: "Operations & Maintenance", image: "/images/in-5.png" },
    ],
  },
  {
    title: "Technology",
    description:
      "Enabling digital transformation through advanced technology solutions, secure networks, and managed services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" fill="none" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 shrink-0">
        <path d="M29.1093 43.031C29.1093 43.4482 28.9856 43.856 28.7538 44.2029C28.5221 44.5498 28.1926 44.8201 27.8072 44.9798C27.4217 45.1394 26.9976 45.1812 26.5884 45.0998C26.1793 45.0184 25.8034 44.8175 25.5084 44.5225C25.2134 44.2275 25.0125 43.8517 24.9311 43.4425C24.8497 43.0333 24.8915 42.6092 25.0512 42.2238C25.2108 41.8383 25.4812 41.5089 25.8281 41.2771C26.1749 41.0453 26.5828 40.9216 27 40.9216C27.5594 40.9216 28.0959 41.1438 28.4915 41.5394C28.8871 41.935 29.1093 42.4715 29.1093 43.031ZM49.7411 18.6782C43.3292 13.4191 35.2928 10.5449 27 10.5449C18.7072 10.5449 10.6707 13.4191 4.25879 18.6782C4.12958 18.7835 4.02244 18.9133 3.94351 19.0601C3.86459 19.2069 3.81543 19.3678 3.79887 19.5336C3.7823 19.6995 3.79866 19.867 3.84699 20.0265C3.89533 20.186 3.97469 20.3344 4.08052 20.4631C4.18636 20.5919 4.31658 20.6984 4.46371 20.7767C4.61084 20.855 4.77199 20.9035 4.9379 20.9193C5.10381 20.9352 5.27122 20.9181 5.43051 20.8691C5.5898 20.82 5.73784 20.74 5.86613 20.6336C11.8251 15.7468 19.2935 13.0761 27 13.0761C34.7065 13.0761 42.1748 15.7468 48.1338 20.6336C48.2621 20.74 48.4101 20.82 48.5694 20.8691C48.7287 20.9181 48.8961 20.9352 49.062 20.9193C49.2279 20.9035 49.3891 20.855 49.5362 20.7767C49.6833 20.6984 49.8136 20.5919 49.9194 20.4631C50.0252 20.3344 50.1046 20.186 50.1529 20.0265C50.2013 19.867 50.2176 19.6995 50.2011 19.5336C50.1845 19.3678 50.1353 19.2069 50.0564 19.0601C49.9775 18.9133 49.8703 18.7835 49.7411 18.6782ZM42.9743 26.2277C38.4278 22.6281 32.7989 20.6695 27 20.6695C21.2011 20.6695 15.5721 22.6281 11.0257 26.2277C10.7624 26.4364 10.5929 26.7411 10.5543 27.0747C10.5158 27.4084 10.6113 27.7437 10.82 28.007C11.0287 28.2702 11.3334 28.4397 11.667 28.4783C12.0007 28.5169 12.336 28.4213 12.5993 28.2126C16.6981 24.9682 21.7725 23.203 27 23.203C32.2275 23.203 37.3018 24.9682 41.4007 28.2126C41.6258 28.3864 41.903 28.4793 42.1875 28.4763C42.4502 28.4763 42.7063 28.3946 42.9205 28.2425C43.1347 28.0903 43.2962 27.8753 43.3826 27.6273C43.4691 27.3792 43.4762 27.1104 43.4031 26.8581C43.3299 26.6058 43.18 26.3826 42.9743 26.2193V26.2277ZM36.1821 33.7814C33.5139 31.8405 30.2994 30.795 27 30.795C23.7006 30.795 20.486 31.8405 17.8179 33.7814C17.5545 33.9818 17.3802 34.2775 17.3322 34.6049C17.2842 34.9324 17.3664 35.2656 17.5612 35.5332C17.7559 35.8008 18.0477 35.9814 18.3741 36.0364C18.7004 36.0915 19.0354 36.0164 19.3071 35.8275C21.5425 34.2015 24.2357 33.3256 27 33.3256C29.7642 33.3256 32.4574 34.2015 34.6929 35.8275C34.9642 36.0249 35.3028 36.1064 35.6343 36.0542C35.9658 36.002 36.263 35.8203 36.4605 35.549C36.6579 35.2777 36.7395 34.939 36.6873 34.6076C36.635 34.2761 36.4533 33.9789 36.1821 33.7814Z" fill="#2E368F" />
      </svg>
    ),
    capabilities: [
      { name: "Digital Transformation", image: "/images/t-1.png" },
      { name: "Data & AI", image: "/images/t-2.png" },
      { name: "ERP Solutions", image: "/images/t-3.png" },
      { name: "Cloud Services", image: "/images/t-4.png" },
      { name: "Cybersecurity", image: "/images/t-5.png" },
      { name: "Blockchain", image: "/images/t-6.png" },
    ],
  },
];

export function SolutionsSection() {
  return (
    <section className="w-full bg-white font-[family-name:var(--font-futura)] pt-[60px] lg:pt-[100px]">
      {/* Heading */}
      <div className="w-full px-6 lg:px-16 mb-8 lg:mb-12">
        <h2 className="text-gray-900 text-[26px] leading-[1.15] md:text-[38px] lg:text-[54px] font-extralight tracking-tight">
          Our solutions
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {solutions.map((solution) => (
          <div key={solution.title} className="bg-[#F9F9F9] p-6 sm:p-8 lg:p-12 flex flex-col">
            {/* Icon + title */}
            <div className="flex items-center gap-3 sm:gap-4">
              {solution.icon}
              <span className="w-px h-7 sm:h-8 lg:h-10 bg-gray-300 shrink-0" />
              <h3 className="text-[26px] sm:text-[32px] lg:text-[55px] font-extralight text-[#2E368F] tracking-tight leading-none">
                {solution.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] lg:text-[20px] text-gray-500 font-normal leading-snug max-w-lg">
              {solution.description}
            </p>

            {/* Capabilities */}
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <span className="text-[13px] sm:text-[15px] lg:text-[17px] font-medium text-[#2E368F] tracking-widest uppercase">
                Capabilities
              </span>
              <div className="mt-3 border-t border-gray-200">
                {solution.capabilities.map((capability) => (
                  <div
                    key={capability.name}
                    className="group/row relative flex items-center justify-between py-2 sm:py-2.5 border-b border-gray-200 cursor-pointer hover:z-30"
                  >
                    <span className="text-[18px] sm:text-[22px] lg:text-[28px] text-gray-600 font-extralight group-hover/row:text-[#2E368F] transition-colors duration-300">
                      {capability.name}
                    </span>
                    <span className="text-lg sm:text-xl text-gray-400 font-light group-hover/row:text-[#2E368F] transition-colors duration-300">
                      +
                    </span>

                    {/* Hover preview image */}
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[170px] h-[130px] opacity-0 scale-95 translate-x-2 group-hover/row:opacity-100 group-hover/row:scale-100 group-hover/row:translate-x-0 transition-all duration-500 ease-out pointer-events-none overflow-hidden shadow-lg">
                      <Image
                        src={capability.image}
                        alt={capability.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 lg:mt-10">
              <Button variant="primary">EXPLORE SOLUTIONS</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
