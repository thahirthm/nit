"use client";

import { useState } from "react";
import Image from "next/image";

const offices = [
  {
    label: "Head Office",
    image: "/images/glance-time.png",
    phone: "012 212 2226",
    email: "INFO@NESMA-NIT.COM",
    address: ["AN NAHDAH,", "JEDDAH, SAUDI ARABIA"],
  },
  {
    label: "Riyadh Office",
    image: "/images/fp1.png",
    phone: "011 465 1188",
    email: "RIYADH@NESMA-NIT.COM",
    address: ["AL OLAYA,", "RIYADH, SAUDI ARABIA"],
  },
];

const navLinks = ["HOME", "ABOUT", "SOLUTIONS", "PROJECTS", "INVESTORS", "MEDIA CENTRE", "CAREERS", "CONTACT"];

const policyLinks = ["PRIVACY POLICY", "TERMS OF SERVICE", "COOKIE POLICY"];

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const socials = [
  {
    name: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect width="38" height="38" fill="#203366" />
        <g opacity="0.5">
          <path d="M13.1906 29.3875H8.8258V15.3512H13.1906V29.3875ZM11.0082 13.4387C9.60686 13.4387 8.47546 12.3073 8.47546 10.9118C8.47546 9.51617 9.60686 8.38477 11.0082 8.38477C12.4038 8.38477 13.5352 9.51617 13.5352 10.9118C13.5352 12.3016 12.4038 13.4387 11.0082 13.4387ZM29.5241 29.3875H25.1651V22.5646C25.1651 20.9393 25.1363 18.843 22.8965 18.843C20.628 18.843 20.2834 20.6177 20.2834 22.4497V29.3875H15.9301V15.3512H20.1111V17.2694H20.1685C20.7486 16.1667 22.1729 15.0009 24.2921 15.0009C28.7086 15.0009 29.5241 17.9069 29.5241 21.6859V29.3875Z" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect width="38" height="38" fill="#203366" />
        <g opacity="0.5" clipPath="url(#footer-clip-instagram)">
          <path d="M19 10.0982C21.9009 10.0982 22.2444 10.1109 23.3852 10.1618C24.4455 10.2085 25.018 10.3866 25.3997 10.535C25.9044 10.7301 26.2692 10.9676 26.6466 11.3451C27.0283 11.7268 27.2616 12.0873 27.4567 12.592C27.6051 12.9736 27.7832 13.5504 27.8299 14.6065C27.8808 15.7515 27.8935 16.0951 27.8935 18.9917C27.8935 21.8926 27.8808 22.2361 27.8299 23.377C27.7832 24.4373 27.6051 25.0098 27.4567 25.3915C27.2616 25.8962 27.0241 26.2609 26.6466 26.6384C26.2649 27.0201 25.9044 27.2533 25.3997 27.4484C25.018 27.5969 24.4413 27.775 23.3852 27.8216C22.2401 27.8725 21.8966 27.8853 19 27.8853C16.0991 27.8853 15.7555 27.8725 14.6147 27.8216C13.5544 27.775 12.9819 27.5969 12.6002 27.4484C12.0955 27.2533 11.7308 27.0158 11.3533 26.6384C10.9716 26.2567 10.7384 25.8962 10.5433 25.3915C10.3948 25.0098 10.2167 24.433 10.1701 23.377C10.1192 22.2319 10.1064 21.8884 10.1064 18.9917C10.1064 16.0908 10.1192 15.7473 10.1701 14.6065C10.2167 13.5462 10.3948 12.9736 10.5433 12.592C10.7384 12.0873 10.9759 11.7225 11.3533 11.3451C11.735 10.9634 12.0955 10.7301 12.6002 10.535C12.9819 10.3866 13.5587 10.2085 14.6147 10.1618C15.7555 10.1109 16.0991 10.0982 19 10.0982ZM19 8.14307C16.0524 8.14307 15.6834 8.15579 14.5256 8.20668C13.3721 8.25758 12.579 8.44418 11.8919 8.71137C11.1752 8.99128 10.5687 9.36025 9.96648 9.96673C9.36001 10.569 8.99104 11.1754 8.71113 11.8879C8.44394 12.5792 8.25733 13.3681 8.20644 14.5216C8.15555 15.6837 8.14282 16.0527 8.14282 19.0002C8.14282 21.9478 8.15555 22.3167 8.20644 23.4745C8.25733 24.6281 8.44394 25.4212 8.71113 26.1082C8.99104 26.825 9.36001 27.4315 9.96648 28.0337C10.5687 28.6359 11.1752 29.0091 11.8877 29.2848C12.579 29.552 13.3678 29.7386 14.5214 29.7895C15.6792 29.8404 16.0482 29.8531 18.9957 29.8531C21.9433 29.8531 22.3122 29.8404 23.4701 29.7895C24.6236 29.7386 25.4167 29.552 26.1038 29.2848C26.8163 29.0091 27.4227 28.6359 28.025 28.0337C28.6272 27.4315 29.0004 26.825 29.2761 26.1125C29.5433 25.4212 29.7299 24.6324 29.7808 23.4788C29.8317 22.321 29.8444 21.952 29.8444 19.0045C29.8444 16.0569 29.8317 15.6879 29.7808 14.5301C29.7299 13.3765 29.5433 12.5835 29.2761 11.8964C29.0089 11.1754 28.6399 10.569 28.0334 9.96673C27.4312 9.36449 26.8247 8.99128 26.1122 8.71561C25.4209 8.44842 24.6321 8.26182 23.4785 8.21092C22.3165 8.15579 21.9475 8.14307 19 8.14307Z" fill="white" />
          <path d="M19 13.4233C15.921 13.4233 13.423 15.9213 13.423 19.0003C13.423 22.0794 15.921 24.5774 19 24.5774C22.079 24.5774 24.577 22.0794 24.577 19.0003C24.577 15.9213 22.079 13.4233 19 13.4233ZM19 22.618C17.0024 22.618 15.3823 20.9979 15.3823 19.0003C15.3823 17.0028 17.0024 15.3827 19 15.3827C20.9975 15.3827 22.6176 17.0028 22.6176 19.0003C22.6176 20.9979 20.9975 22.618 19 22.618Z" fill="white" />
          <path d="M26.0995 13.2024C26.0995 13.9234 25.5142 14.5044 24.7975 14.5044C24.0765 14.5044 23.4955 13.9191 23.4955 13.2024C23.4955 12.4814 24.0808 11.9004 24.7975 11.9004C25.5142 11.9004 26.0995 12.4857 26.0995 13.2024Z" fill="white" />
        </g>
        <defs>
          <clipPath id="footer-clip-instagram">
            <rect width="21.7143" height="21.7143" fill="white" transform="translate(8.14282 8.14307)" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "X",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect width="38" height="38" fill="#203366" />
        <g opacity="0.5">
          <path d="M24.7238 9.86572H27.776L21.1078 17.487L28.9524 27.8578H22.8102L17.9994 21.5679L12.4947 27.8578H9.44066L16.5729 19.706L9.04761 9.86572H15.3458L19.6943 15.6149L24.7238 9.86572ZM23.6526 26.0309H25.3438L14.4268 11.5967H12.6119L23.6526 26.0309Z" fill="white" />
        </g>
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect width="38" height="38" fill="#203366" />
        <g opacity="0.5" clipPath="url(#footer-clip-youtube)">
          <path d="M29.6408 14.6576C29.6408 14.6576 29.4288 13.1605 28.7756 12.5032C27.9486 11.638 27.0241 11.6337 26.6 11.5828C23.5634 11.3623 19.0042 11.3623 19.0042 11.3623H18.9957C18.9957 11.3623 14.4366 11.3623 11.4 11.5828C10.9759 11.6337 10.0513 11.638 9.2243 12.5032C8.57117 13.1605 8.36336 14.6576 8.36336 14.6576C8.36336 14.6576 8.14282 16.4177 8.14282 18.1735V19.819C8.14282 21.5748 8.35912 23.3348 8.35912 23.3348C8.35912 23.3348 8.57117 24.8319 9.22005 25.4893C10.0471 26.3545 11.1328 26.3248 11.6163 26.4181C13.3551 26.5835 19 26.6344 19 26.6344C19 26.6344 23.5634 26.6259 26.6 26.4096C27.0241 26.3587 27.9486 26.3545 28.7756 25.4893C29.4288 24.8319 29.6408 23.3348 29.6408 23.3348C29.6408 23.3348 29.8571 21.579 29.8571 19.819V18.1735C29.8571 16.4177 29.6408 14.6576 29.6408 14.6576ZM16.7564 21.8165V15.7136L22.6218 18.7757L16.7564 21.8165Z" fill="white" />
        </g>
        <defs>
          <clipPath id="footer-clip-youtube">
            <rect width="21.7143" height="21.7143" fill="white" transform="translate(8.14282 8.14307)" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export function Footer() {
  const [officeIndex, setOfficeIndex] = useState(0);
  const office = offices[officeIndex];

  const prevOffice = () => setOfficeIndex((i) => (i === 0 ? offices.length - 1 : i - 1));
  const nextOffice = () => setOfficeIndex((i) => (i === offices.length - 1 ? 0 : i + 1));

  return (
    <footer className="w-full mt-[60px] lg:mt-[100px] bg-[#2E368F] font-[family-name:var(--font-futura)]">
      <div className="w-full px-6 lg:px-16 pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-12">
        {/* Left: Vision statement + office */}
        <div>
          <h2 className="text-white text-[44px] sm:text-[60px] lg:text-[70px] font-extralight leading-[1.15] tracking-tight">
            Your vision, Engineered<br />&amp; delivered.
          </h2>

          <p className="mt-8 lg:mt-10 text-white/70 text-base sm:text-lg">Delivering excellence across regions</p>

          <div className="mt-4 bg-white/10 max-w-[460px]">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <span className="text-[13px] font-medium tracking-widest uppercase text-white/80">
                {office.label}
              </span>
              <div className="flex items-center gap-3">
                <button aria-label="Previous office" onClick={prevOffice} className="text-white/60 hover:text-white transition-colors">
                  <ArrowIcon className="rotate-180" />
                </button>
                <button aria-label="Next office" onClick={nextOffice} className="text-white hover:text-white/80 transition-colors">
                  <ArrowIcon />
                </button>
              </div>
            </div>

            <div className="flex">
              <div className="relative w-[90px] h-[115px] sm:w-[120px] sm:h-[150px] shrink-0">
                <Image src={office.image} alt={office.label} fill className="object-cover" />
              </div>
              <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 flex flex-col justify-center gap-2 sm:gap-2.5 text-white">
                <span className="text-sm sm:text-base">{office.phone}</span>
                <span className="text-sm sm:text-base">{office.email}</span>
                <span className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {office.address[0]}<br />{office.address[1]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="max-w-[520px] ml-auto">
          <h3 className="text-white text-[26px] lg:text-[28px] font-normal">
            Join Our Growth Journey <span className="text-white/40 mx-1">|</span> Invest In The Future!
          </h3>

          <form className="mt-10  flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 text-base sm:text-lg focus:outline-none focus:border-white transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={1}
              className="w-full bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 text-base sm:text-lg focus:outline-none focus:border-white transition-colors resize-y"
            />

            <div className="flex items-stretch gap-2.5 mt-1 w-fit">
              <button
                type="submit"
                className="px-6 py-3 text-[13px] font-medium tracking-wide uppercase bg-white text-[#2E368F] hover:bg-white/90 transition-colors"
              >
                Submit
              </button>
              <span className="flex items-center justify-center w-[46px] shrink-0 border border-white/40">
                <ArrowIcon className="text-white w-4 h-4" />
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Nav links + socials */}
      <div className="w-full px-6 lg:px-16 pb-10">
        <div className=" pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <nav className="flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-3 border-b border-white/15 pb-5">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors ${
                  i === 0 ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="block w-[38px] h-[38px] overflow-hidden opacity-90 hover:opacity-100 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full px-6 lg:px-16 py-8  border-white/15">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/nit-logo.svg"
              alt="Nesma Infrastructure & Technology"
              width={110}
              height={20}
              className="h-5 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <p className="text-white/60 text-sm text-center">
            (C) 2026 NESMA INFRASTRUCTURE &amp; TECHNOLOGY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-2 text-sm text-white/60">
            {policyLinks.map((link, i) => (
              <span key={link} className="flex items-center gap-2">
                <a href="#" className="hover:text-white transition-colors">{link}</a>
                {i < policyLinks.length - 1 && <span className="text-white/30">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
