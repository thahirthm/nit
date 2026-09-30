"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Plus, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

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
    { name: { en: 'HOME', ar: 'الرئيسية' }, href: '/', active: isHome },
    { name: { en: 'ABOUT', ar: 'من نحن' }, href: '/about', hasDropdown: true },
    { name: { en: 'SOLUTIONS', ar: 'الحلول' }, href: '/solutions', hasDropdown: true },
    { name: { en: 'PROJECTS', ar: 'المشاريع' }, href: '/projects' },
    { name: { en: 'INVESTORS', ar: 'المستثمرون' }, href: '/investors' },
    { name: { en: 'MEDIA CENTRE', ar: 'المركز الإعلامي' }, href: '/media' },
    { name: { en: 'CAREERS', ar: 'الوظائف' }, href: '/careers' },
    { name: { en: 'CONTACT', ar: 'تواصل معنا' }, href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${isHidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'} ${isTransparent ? 'bg-transparent border-transparent' : 'bg-white border-b border-gray-100'}`}
      >
        <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
          
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
          <div className={`flex items-center gap-4 lg:gap-10 h-full ${language === 'ar' ? 'font-arabic' : 'font-[family-name:var(--font-futura)]'}`}>
            <nav dir={language === 'ar' ? 'rtl' : 'ltr'} className="hidden h-full xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name.en} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center text-[11px] font-medium tracking-wider transition-colors pt-1 ${language === 'ar' ? 'font-arabic' : ''} ${isTransparent ? 'text-white hover:text-gray-200' : 'text-[#2b307d] hover:text-blue-700'}`}
                  >
                    {language === 'ar' ? link.name.ar : link.name.en}
                    {link.hasDropdown && (
                      <ChevronDown className="ms-1 h-3.5 w-3.5" strokeWidth={2} />
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
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3.5 h-full flex items-center justify-center tracking-wide transition-colors duration-300 ${language === 'en' ? (isTransparent ? 'bg-white text-[#2b307d]' : 'bg-[#2b307d] text-white') : (isTransparent ? 'bg-transparent text-white' : 'bg-white text-[#2b307d]')}`}
                >
                  ENG
                </button>
                <div className={`w-[1px] h-full transition-colors duration-300 ${isTransparent ? 'bg-white/30' : 'bg-[#2b307d]'}`}></div>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-3.5 h-full flex items-center justify-center tracking-wide font-arabic transition-colors duration-300 ${language === 'ar' ? (isTransparent ? 'bg-white text-[#2b307d]' : 'bg-[#2b307d] text-white') : (isTransparent ? 'bg-transparent text-white' : 'bg-white text-[#2b307d]')}`}
                  dir="rtl"
                >
                  عربي
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
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="w-6 h-6">
                <rect x="16.2695" y="7.32129" width="1.62697" height="16.2697" transform="rotate(90 16.2695 7.32129)" fill="currentColor" />
                <rect x="7.32129" width="1.62697" height="16.2697" fill="currentColor" />
              </svg>
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
        
        <div className={`flex flex-col py-6 px-6 overflow-y-auto h-full ${language === 'ar' ? 'font-arabic' : 'font-[family-name:var(--font-futura)]'}`}>
          {navLinks.map((link) => (
            <div key={link.name.en} className="py-4 border-b border-gray-50">
              <Link
                href={link.href}
                dir={language === 'ar' ? 'rtl' : 'ltr'}
                className={`flex items-center justify-between text-[13px] font-medium tracking-wider text-[#2b307d] ${language === 'ar' ? 'font-arabic' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{language === 'ar' ? link.name.ar : link.name.en}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4" strokeWidth={1.5} />}
              </Link>
            </div>
          ))}

          {/* Mobile Language Switcher */}
          <div className="mt-8 flex md:hidden items-center border border-[#2b307d] text-[13px] font-semibold h-10 w-fit">
            <button
              onClick={() => setLanguage('en')}
              className={`px-5 h-full flex items-center justify-center tracking-wide transition-colors duration-300 ${language === 'en' ? 'bg-[#2b307d] text-white' : 'bg-white text-[#2b307d]'}`}
            >
              ENG
            </button>
            <div className="w-[1px] h-full bg-[#2b307d]"></div>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-5 h-full flex items-center justify-center tracking-wide font-arabic transition-colors duration-300 ${language === 'ar' ? 'bg-[#2b307d] text-white' : 'bg-white text-[#2b307d]'}`}
              dir="rtl"
            >
              عربي
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
