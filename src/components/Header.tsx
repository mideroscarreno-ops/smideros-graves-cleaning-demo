import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { COMPANY_INFO, PRIMARY_SERVICES } from '../data/siteData';
import { RouteId } from '../types';

interface HeaderProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesMenuOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const goTo = (route: RouteId) => {
    setServicesMenuOpen(false);
    setMobileOpen(false);
    onNavigate(route);
  };

  const isServiceRoute =
    currentRoute === 'airbnb-turnover' ||
    currentRoute === 'commercial-cleaning' ||
    currentRoute === 'deep-cleaning' ||
    currentRoute === 'move-out-cleaning';

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#14263B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goTo('home');
          }}
          className="font-editorial text-xl font-semibold tracking-tight text-[#14263B] whitespace-nowrap shrink-0 hover:text-[#147D68] transition-colors"
        >
          Graves Cleaning
        </a>

        {/* Zone 2: Concise single-line desktop nav links */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#60717B]">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesMenuOpen((prev) => !prev)}
              aria-expanded={servicesMenuOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isServiceRoute ? 'text-[#14263B] underline decoration-[#147D68] underline-offset-8' : 'hover:text-[#14263B]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesMenuOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesMenuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-72 bg-white border border-[#14263B]/12 rounded-xl shadow-lg p-2 z-50"
              >
                {PRIMARY_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    role="menuitem"
                    onClick={() => goTo(service.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                      currentRoute === service.id
                        ? 'bg-[#DFF2EA]/70 text-[#14263B]'
                        : 'hover:bg-[#FAF9F5] text-[#14263B]'
                    }`}
                  >
                    <div className="text-sm font-semibold">{service.shortTitle}</div>
                    <div className="text-xs text-[#60717B] line-clamp-1 mt-0.5">{service.headline}</div>
                  </button>
                ))}
                <div className="my-1.5 border-t border-[#14263B]/10" />
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => goTo('photo-checklist')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#147D68] hover:bg-[#DFF2EA]/50 transition-colors cursor-pointer"
                >
                  Photo Checklist Experience
                </button>
              </div>
            )}
          </div>

          <a
            href="#property-managers"
            onClick={(e) => {
              e.preventDefault();
              goTo('property-managers');
            }}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors ${
              currentRoute === 'property-managers'
                ? 'text-[#14263B] underline decoration-[#147D68] underline-offset-8'
                : 'hover:text-[#14263B]'
            }`}
          >
            Property Managers
          </a>

          <a
            href="#our-standards"
            onClick={(e) => {
              e.preventDefault();
              goTo('our-standards');
            }}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors ${
              currentRoute === 'our-standards'
                ? 'text-[#14263B] underline decoration-[#147D68] underline-offset-8'
                : 'hover:text-[#14263B]'
            }`}
          >
            Our Standards
          </a>

          <a
            href="#service-areas"
            onClick={(e) => {
              e.preventDefault();
              goTo('service-areas');
            }}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors ${
              currentRoute === 'service-areas'
                ? 'text-[#14263B] underline decoration-[#147D68] underline-offset-8'
                : 'hover:text-[#14263B]'
            }`}
          >
            Service Areas
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goTo('contact');
            }}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors ${
              currentRoute === 'contact'
                ? 'text-[#14263B] underline decoration-[#147D68] underline-offset-8'
                : 'hover:text-[#14263B]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Single Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => goTo('quote')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a Free Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#14263B]/15 text-[#14263B] hover:bg-white transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#14263B]/10 bg-[#FAF9F5] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="px-4 py-5 space-y-5">
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => goTo('home')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => goTo('property-managers')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                For Property Managers
              </button>
              <button
                type="button"
                onClick={() => goTo('our-standards')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                Our Standards
              </button>
              <button
                type="button"
                onClick={() => goTo('photo-checklist')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                Photo Checklist Experience
              </button>
              <button
                type="button"
                onClick={() => goTo('service-areas')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                Service Areas
              </button>
              <button
                type="button"
                onClick={() => goTo('reviews')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                Reviews
              </button>
              <button
                type="button"
                onClick={() => goTo('faqs')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                FAQs
              </button>
              <button
                type="button"
                onClick={() => goTo('contact')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-[#14263B] hover:bg-white cursor-pointer"
              >
                Contact
              </button>
            </div>

            <div className="pt-4 border-t border-[#14263B]/10">
              <p className="px-3 text-xs font-semibold text-[#60717B] mb-2">Cleaning Services</p>
              <div className="grid grid-cols-1 gap-1">
                {PRIMARY_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => goTo(service.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#14263B] hover:bg-white cursor-pointer"
                  >
                    {service.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#14263B]/10 space-y-2.5">
              <button
                type="button"
                onClick={() => goTo('quote')}
                className="w-full py-3 px-4 rounded-lg bg-[#147D68] text-white text-sm font-medium text-center hover:bg-[#0F6352] transition-colors cursor-pointer"
              >
                Get a Free Quote
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full py-3 px-4 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#147D68]" aria-hidden="true" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
