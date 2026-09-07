"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Plus, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isTransparent = isHome && !isScrolled;

  const navLinks = [
    { name: 'HOME', href: '/', active: isHome },
    { name: 'ABOUT', href: '/about', hasDropdown: true },
    { name: 'SOLUTIONS', href: '/solutions', hasDropdown: true },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'INVESTORS', href: '/investors' },
    { name: 'MEDIA CENTRE', href: '/media' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${isHidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${isTransparent ? 'bg-transparent border-transparent' : 'bg-white border-b border-gray-100'}`}
      >
        <div className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
          
          {/* Left section: Logo */}
          <div className="flex items-center gap-6 h-full py-4">
            <Link href="/" className="flex items-center h-full">
              <Image
                src="/images/nit-logo.svg"
                alt="Nesma Infrastructure & Technology"
                width={200}
                height={50}
                className={`h-7 w-auto object-contain transition-all duration-300 ${isTransparent ? 'brightness-0 invert' : ''}`}
                priority
              />
            </Link>
          </div>

          {/* Right section: Navigation and Language */}
          <div className="flex items-center gap-4 lg:gap-10 h-full font-[family-name:var(--font-futura)]">
            <nav className="hidden h-full xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center text-[11px] font-medium tracking-wider transition-colors pt-1 ${isTransparent ? 'text-white hover:text-gray-200' : 'text-[#2b307d] hover:text-blue-700'}`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="ml-1 h-3.5 w-3.5" strokeWidth={2} />
                    )}
                  </Link>
                  {/* Active indicator line */}
                  {link.active && (
                    <div className={`absolute bottom-[30px] left-0 right-0 h-[2px] ${isTransparent ? 'bg-white' : 'bg-[#2b307d]'}`}></div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Switcher & Plus */}
            <div className="hidden md:flex items-center gap-6 h-full">
              <div className={`flex items-center border text-[13px] font-semibold h-9 transition-colors duration-300 ${isTransparent ? 'border-white/30' : 'border-[#2b307d]'}`}>
                <button className={`px-3.5 h-full flex items-center justify-center tracking-wide transition-colors duration-300 ${isTransparent ? 'bg-white text-[#2b307d]' : 'bg-[#2b307d] text-white'}`}>
                  ENG
                </button>
                <div className={`w-[1px] h-full transition-colors duration-300 ${isTransparent ? 'bg-white/30' : 'bg-[#2b307d]'}`}></div>
                <button className={`px-3.5 h-full flex items-center justify-center tracking-wide font-arabic transition-colors duration-300 ${isTransparent ? 'bg-transparent text-white' : 'bg-white text-[#2b307d]'}`} dir="rtl">
                  آرا
                </button>
              </div>
              
              <div className={`w-[1px] h-8 transition-colors duration-300 ${isTransparent ? 'bg-white/30' : 'bg-gray-200'}`}></div>
              <button className={`${isTransparent ? 'text-white' : 'text-[#2b307d]'}`}>
                <Plus className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className={`xl:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-[#2b307d]'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Offcanvas Overlay */}
      <div 
        className={`fixed inset-0 bg-[#2b307d]/20 backdrop-blur-sm z-50 xl:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Offcanvas Menu */}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-white z-50 xl:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col shadow-2xl`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Image src="/images/nit-logo.svg" alt="Logo" width={120} height={30} className="h-7 w-auto object-contain" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#2b307d] hover:bg-gray-50 rounded-full transition-colors">
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex flex-col py-6 px-6 overflow-y-auto font-[family-name:var(--font-futura)] h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="py-4 border-b border-gray-50">
              <Link
                href={link.href}
                className="flex items-center justify-between text-[13px] font-medium tracking-wider text-[#2b307d]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" strokeWidth={1.5} />}
              </Link>
            </div>
          ))}

          {/* Mobile Language Switcher */}
          <div className="mt-8 flex md:hidden items-center border border-[#2b307d] text-[13px] font-semibold h-10 w-fit">
            <button className="bg-[#2b307d] text-white px-5 h-full flex items-center justify-center tracking-wide">
              ENG
            </button>
            <div className="w-[1px] h-full bg-[#2b307d]"></div>
            <button className="bg-white text-[#2b307d] px-5 h-full flex items-center justify-center tracking-wide font-arabic" dir="rtl">
              آرا
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
