import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  /** Arrow box has no fill/navy border until hover — for use on dark backgrounds (e.g. the banner). Defaults to the filled navy box used everywhere else. */
  iconOutline?: boolean;
}

const CustomArrow = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M7.4375 15.2939L14.8725 7.85886L7.4375 0.423828M14.8725 7.85886L0.00247078 7.85886" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  iconOutline = false,
  ...props
}: ButtonProps) {
  const isPrimary = variant === 'primary';

  const containerClasses = `inline-flex items-stretch gap-2.5 group font-[family-name:var(--font-futura)] ${className}`;

  const textContainer = `
    relative overflow-hidden flex items-center justify-center px-4 py-2.5 text-[12px] font-medium leading-normal uppercase z-10 border border-[#2E368F] transition-colors duration-300
    ${isPrimary ? 'text-white bg-[#2E368F]' : 'text-[#2E368F] bg-white'}
  `;

  const iconContainer = `
    relative overflow-hidden flex items-center justify-center aspect-square w-[38px] shrink-0 z-10 border
    ${iconOutline ? 'border-white' : 'border-[#2E368F]'}
    ${isPrimary ? 'text-[#2E368F]' : 'text-white'}
  `;

  const iconBgStatic = `absolute inset-0 -z-20 ${isPrimary ? 'bg-white' : iconOutline ? 'bg-transparent' : 'bg-[#2E368F]'}`;
  const iconBgHover = `absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10 bg-[#8ADBF0]`;

  const content = (
    <>
      <div className={textContainer}>
        <div className="relative inline-flex items-center justify-center">
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-12">{children}</span>
          <span className="absolute block translate-y-12 transition-transform duration-500 ease-in-out group-hover:translate-y-0 whitespace-nowrap">{children}</span>
        </div>
      </div>
      <div className={iconContainer}>
        <div className={iconBgStatic} />
        <div className={iconBgHover} />
        <CustomArrow className={`w-[13px] h-[13px] transition-transform duration-500 ease-in-out group-hover:translate-x-12 ${!isPrimary ? 'group-hover:text-[#2E368F]' : ''}`} />
        <CustomArrow className={`absolute w-[13px] h-[13px] -translate-x-12 transition-transform duration-500 ease-in-out group-hover:translate-x-0 ${!isPrimary ? 'text-[#2E368F]' : ''}`} />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={containerClasses} {...props}>
      {content}
    </button>
  );
}
