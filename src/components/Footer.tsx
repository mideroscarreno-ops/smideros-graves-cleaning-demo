import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, PRIMARY_SERVICES } from '../data/siteData';
import { RouteId } from '../types';

interface FooterProps {
  onNavigate: (route: RouteId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const linkClass =
    'text-sm text-[#FAF9F5]/75 hover:text-white transition-colors text-left cursor-pointer';

  return (
    <footer className="bg-[#14263B] text-[#FAF9F5] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-editorial text-2xl font-semibold tracking-tight text-white text-left cursor-pointer"
            >
              {COMPANY_INFO.name}
            </button>
            <p className="text-sm text-[#FAF9F5]/75 leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline} Hospitality-grade Airbnb turnovers, recurring commercial cleaning, deep cleans,
              and vacant property turnovers across Edmond and the Oklahoma City metropolitan area.
            </p>
            <div className="pt-2 space-y-2 text-sm text-[#FAF9F5]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A47A] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLine2}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A47A] shrink-0" aria-hidden="true" />
                <a href={COMPANY_INFO.phoneHref} className="hover:text-white transition-colors tabular-nums">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A47A] shrink-0" aria-hidden="true" />
                <a href={COMPANY_INFO.emailHref} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wide text-[#C5A47A]">Services</h3>
            <ul className="space-y-2.5">
              {PRIMARY_SERVICES.map((service) => (
                <li key={service.id}>
                  <button type="button" onClick={() => onNavigate(service.id)} className={linkClass}>
                    {service.shortTitle}
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => onNavigate('property-managers')} className={linkClass}>
                  Property Management Partners
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wide text-[#C5A47A]">Operations &amp; Proof</h3>
            <ul className="space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('our-standards')} className={linkClass}>
                  Our Cleaning Standards
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('photo-checklist')} className={linkClass}>
                  Photo Checklist Experience
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('service-areas')} className={linkClass}>
                  OKC Metro Service Areas
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('reviews')} className={linkClass}>
                  Reviews &amp; Testimonials
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('faqs')} className={linkClass}>
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wide text-[#C5A47A]">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <button type="button" onClick={() => onNavigate('about')} className={linkClass}>
                  About Graves Cleaning
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('quote')} className={linkClass}>
                  Request a Free Quote
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className={linkClass}>
                  Contact Team
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('privacy')} className={linkClass}>
                  Privacy &amp; Concept Info
                </button>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.originalWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#FAF9F5]/75 hover:text-white transition-colors"
                >
                  <span>Official Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#FAF9F5]/65">
          <p>{COMPANY_INFO.agencyCredit}</p>
          <p>Serving Edmond, Oklahoma City, and surrounding metropolitan communities.</p>
        </div>
      </div>
    </footer>
  );
};
