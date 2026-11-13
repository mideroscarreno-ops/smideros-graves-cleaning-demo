import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  ChevronDown,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import {
  ALL_FAQS,
  CLEANING_PROCESS_STEPS,
  COMPANY_INFO,
  IMAGES,
  PRIMARY_SERVICES,
  PUBLISHED_TRUST_FIGURES,
  RELIABILITY_COMMITMENTS,
  VERIFIED_TESTIMONIALS,
} from '../data/siteData';
import { CustomerType, RouteId, ServiceOption } from '../types';
import { PhotoChecklistDemo } from './PhotoChecklistDemo';
import { ResilientImage } from './ResilientImage';
import { ServiceAreaExplorer } from './ServiceAreaExplorer';

interface HomePageProps {
  onNavigate: (route: RouteId) => void;
  onStartQuote: (customerType?: CustomerType, service?: ServiceOption, location?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onStartQuote }) => {
  const [openFaqId, setOpenFaqId] = useState<string>(ALL_FAQS[0].id);

  const scrollToServices = () => {
    const el = document.getElementById('services-overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* B. Cinematic Hospitality Hero */}
      <section className="bg-[#FAF9F5] border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-6">
                <p className="text-xs sm:text-sm font-medium text-[#147D68] tracking-wide">
                  Airbnb Turnovers · Commercial Cleaning · OKC Metro
                </p>

                <h1 className="font-editorial text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] font-semibold tracking-tight text-[#14263B]">
                  Guest-Ready Spaces. Without the Guesswork.
                </h1>

                <p className="text-base sm:text-lg text-[#60717B] leading-relaxed max-w-xl">
                  Reliable Airbnb turnovers, commercial cleaning, and property-ready services across Oklahoma City —
                  with photo documentation that helps you stay informed.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onStartQuote()}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#147D68] text-white text-sm font-semibold hover:bg-[#0F6352] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Request My Free Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToServices}
                    className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Explore Our Services
                  </button>
                </div>
              </div>

              {/* Quiet Editorial Contact & Location Footnote */}
              <div className="pt-6 border-t border-[#14263B]/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#60717B]">
                <span>Headquartered in Edmond · Serving Greater OKC</span>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#14263B] hover:text-[#147D68] transition-colors tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#147D68]" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 min-h-[300px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#14263B]/10">
              <ResilientImage
                src={IMAGES.heroLiving}
                alt="Sunlit boutique short-term rental living room and open kitchen prepared for incoming guests"
                fallbackTitle="Guest-Ready Spaces"
                priority
                className="w-full h-full object-cover lg:h-full"
              />
            </div>
          </div>

          {/* 4-column summary bar below hero split */}
          <div className="mt-10 pt-8 border-t border-[#14263B]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs font-medium text-[#147D68]">Turnover Focus</div>
              <div className="text-sm font-semibold text-[#14263B] mt-1">Same-Day &amp; Weekend Options</div>
              <p className="text-xs text-[#60717B] mt-1">Subject to confirmation around guest windows.</p>
            </div>
            <div>
              <div className="text-xs font-medium text-[#147D68]">Remote Visibility</div>
              <div className="text-sm font-semibold text-[#14263B] mt-1">Post-Cleaning Photo Checklists</div>
              <p className="text-xs text-[#60717B] mt-1">Review room readiness from anywhere.</p>
            </div>
            <div>
              <div className="text-xs font-medium text-[#147D68]">Commercial Care</div>
              <div className="text-sm font-semibold text-[#14263B] mt-1">After-Hours &amp; Supplies Included</div>
              <p className="text-xs text-[#60717B] mt-1">Built for Oklahoma City offices and studios.</p>
            </div>
            <div>
              <div className="text-xs font-medium text-[#147D68]">Accountability</div>
              <div className="text-sm font-semibold text-[#14263B] mt-1">Free Re-Clean Policy</div>
              <p className="text-xs text-[#60717B] mt-1">Backed by clear published service commitments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* C. Cleaning Built for People Who Manage Properties */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-medium tracking-wide text-[#147D68]">
                Every Turnover. Every Detail. Every Time.
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#14263B]">
                When Your Property Is Your Business, Every Detail Matters.
              </h2>
              <p className="text-sm sm:text-base text-[#60717B] leading-relaxed">
                Standard residential cleaning habits don’t hold up under tight check-in windows, remote ownership,
                or commercial workplace standards. Graves Cleaning operates around the realities of active properties.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <div className="pt-4 border-t border-[#14263B]/15">
                <h3 className="text-base font-semibold text-[#14263B]">Airbnb Hosts &amp; Vacation Rentals</h3>
                <p className="text-sm text-[#60717B] mt-2 leading-relaxed">
                  Dependable between-stay preparation, coordinated linen resets where offered, and guest-ready
                  staging so check-in never turns into an emergency.
                </p>
              </div>
              <div className="pt-4 border-t border-[#14263B]/15">
                <h3 className="text-base font-semibold text-[#14263B]">Remote &amp; Out-of-State Owners</h3>
                <p className="text-sm text-[#60717B] mt-2 leading-relaxed">
                  Clear communication and post-cleaning photo documentation give owners visibility into property
                  readiness without driving across town—or flying in.
                </p>
              </div>
              <div className="pt-4 border-t border-[#14263B]/15">
                <h3 className="text-base font-semibold text-[#14263B]">Property Managers</h3>
                <p className="text-sm text-[#60717B] mt-2 leading-relaxed">
                  Standardized checklists, vacant unit move-out transitions, and coordinated multi-property service
                  across the Oklahoma City metro.
                </p>
              </div>
              <div className="pt-4 border-t border-[#14263B]/15">
                <h3 className="text-base font-semibold text-[#14263B]">Commercial Businesses</h3>
                <p className="text-sm text-[#60717B] mt-2 leading-relaxed">
                  Consistent recurring office maintenance with after-hours flexibility, supplies included, and a clean
                  workplace for employees and visiting clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Four Visually Differentiated Primary Cleaning Services */}
      <section id="services-overview" className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium tracking-wide text-[#147D68]">Four Core Cleaning Disciplines</p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#14263B]">
              Focused Services for Rentals, Workplaces, and Property Transitions.
            </h2>
          </div>

          {/* 01. Airbnb & STR Turnover (Featured Full-Width Split) */}
          {(() => {
            const airbnb = PRIMARY_SERVICES[0];
            return (
              <article className="bg-white rounded-2xl border border-[#14263B]/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-6 min-h-[280px] sm:min-h-[380px]">
                  <ResilientImage
                    src={airbnb.image}
                    alt={airbnb.imageAlt}
                    fallbackTitle={airbnb.shortTitle}
                    className="w-full h-full object-cover lg:h-full"
                  />
                </div>
                <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#147D68]">
                      <span className="font-mono-tabular">{airbnb.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{airbnb.category}</span>
                    </div>
                    <h3 className="font-editorial text-3xl font-semibold text-[#14263B]">{airbnb.headline}</h3>
                    <p className="text-sm sm:text-base text-[#60717B] leading-relaxed">{airbnb.summary}</p>
                    <ul className="space-y-2 pt-2">
                      {airbnb.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#14263B]">
                          <Check className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate(airbnb.id)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#14263B] text-white text-sm font-medium hover:bg-[#1E3550] transition-colors cursor-pointer"
                    >
                      <span>{airbnb.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })()}

          {/* 02. Commercial Cleaning (Dark Navy Contrast Editorial Split) */}
          {(() => {
            const commercial = PRIMARY_SERVICES[1];
            return (
              <article className="bg-[#14263B] text-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#C5A47A]">
                      <span className="font-mono-tabular">{commercial.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{commercial.category}</span>
                    </div>
                    <h3 className="font-editorial text-3xl font-semibold text-white">{commercial.headline}</h3>
                    <p className="text-sm sm:text-base text-[#FAF9F5]/80 leading-relaxed">{commercial.summary}</p>
                    <ul className="space-y-2 pt-2">
                      {commercial.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#FAF9F5]/90">
                          <Check className="w-4 h-4 text-[#DFF2EA] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate(commercial.id)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
                    >
                      <span>{commercial.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-6 min-h-[280px] sm:min-h-[380px] order-1 lg:order-2">
                  <ResilientImage
                    src={commercial.image}
                    alt={commercial.imageAlt}
                    fallbackTitle={commercial.shortTitle}
                    className="w-full h-full object-cover lg:h-full"
                  />
                </div>
              </article>
            );
          })()}

          {/* 03 & 04 Asymmetric 2-Column Pair: Deep Cleaning & Move-In / Move-Out */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRIMARY_SERVICES.slice(2).map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-2xl border border-[#14263B]/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden border-b border-[#14263B]/10">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackTitle={service.shortTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 sm:p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#147D68]">
                      <span className="font-mono-tabular">{service.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.category}</span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#14263B]">
                      {service.headline}
                    </h3>
                    <p className="text-sm text-[#60717B] leading-relaxed">{service.summary}</p>
                    <ul className="space-y-2 pt-1">
                      {service.highlights.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#14263B]">
                          <Check className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#147D68] hover:text-[#0F6352] transition-colors cursor-pointer"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E. The Photo-Proof Difference */}
      <PhotoChecklistDemo onRequestQuote={() => onStartQuote('Airbnb / Short-Term Rental Host', 'Airbnb Turnover Cleaning')} />

      {/* F. The Graves Reliability Approach */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-medium tracking-wide text-[#147D68]">Published Service Promises</p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#14263B]">
                Reliability You Can Build Around.
              </h2>
              <p className="text-sm sm:text-base text-[#60717B] leading-relaxed">
                Your calendar depends on crews arriving when promised and documenting the work clearly. Graves
                Cleaning stands behind published scheduling and re-clean commitments.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('our-standards')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147D68] hover:text-[#0F6352] cursor-pointer"
                >
                  <span>Read our full cleaning standards</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#14263B]/10 border border-[#14263B]/10 rounded-2xl bg-[#FAF9F5]">
              {RELIABILITY_COMMITMENTS.map((item) => (
                <div key={item.title} className="p-6 flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-semibold text-[#14263B]">{item.title}</h3>
                    <p className="text-sm text-[#60717B] mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G. Property Manager Partnerships */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#14263B] text-white rounded-2xl p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-medium text-[#C5A47A]">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                <span>Property Management &amp; Commercial Coordination</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                One Cleaning Partner. Every Property Ready.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF9F5]/80 leading-relaxed max-w-2xl">
                Coordinate multi-property turnovers, standardized checklists, per-property photo documentation, and
                commercial spaces through a single Edmond-based team. Net-30 consolidated invoicing and Certificate of
                Insurance (COI) documentation are available for qualified partners, subject to eligibility and
                confirmation.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onStartQuote('Property Manager', 'Property Management Partnership')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#147D68] text-white text-sm font-semibold hover:bg-[#0F6352] transition-colors cursor-pointer"
                >
                  <span>Discuss a Property Partnership</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('property-managers')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span>Explore Partner Details</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-3 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-10 text-sm">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#DFF2EA] shrink-0 mt-1" aria-hidden="true" />
                <span>Multi-property turnover scheduling coordination</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#DFF2EA] shrink-0 mt-1" aria-hidden="true" />
                <span>Standardized per-property room checklists</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#DFF2EA] shrink-0 mt-1" aria-hidden="true" />
                <span>Photo documentation sent after completed cleans</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#DFF2EA] shrink-0 mt-1" aria-hidden="true" />
                <span>Net-30 invoicing &amp; COI options for eligible partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. Trust and Social Proof */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium tracking-wide text-[#147D68]">Published Client Proof</p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#14263B]">
                Verified Host &amp; Client Feedback Across OKC.
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('reviews')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147D68] hover:text-[#0F6352] cursor-pointer"
              >
                <span>View all trust details</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href={COMPANY_INFO.originalWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#60717B] hover:text-[#14263B]"
              >
                <span>gravescleaningokc.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Separated Numerical Figures with Scope */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PUBLISHED_TRUST_FIGURES.map((item) => (
              <div key={item.unit} className="bg-[#FAF9F5] rounded-xl border border-[#14263B]/10 p-6">
                <div className="font-editorial text-3xl sm:text-4xl font-semibold text-[#14263B] tabular-nums">
                  {item.figure}
                </div>
                <div className="text-sm font-semibold text-[#147D68] mt-1">{item.unit}</div>
                <p className="text-xs text-[#60717B] mt-2 leading-relaxed">{item.scope}</p>
              </div>
            ))}
          </div>

          {/* Genuine Published Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_TESTIMONIALS.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                className="bg-[#FAF9F5] rounded-2xl border border-[#14263B]/10 p-7 flex flex-col justify-between"
              >
                <p className="font-editorial text-lg text-[#14263B] leading-relaxed">“{testimonial.quote}”</p>
                <footer className="mt-6 pt-4 border-t border-[#14263B]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#60717B]">
                  <div>
                    <span className="font-semibold text-[#14263B]">{testimonial.author}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{testimonial.context}</span>
                  </div>
                  <span>{testimonial.sourceLabel}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* I. Cleaning Standards Process */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium tracking-wide text-[#147D68]">Repeatable Workflow</p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#14263B]">
                A Clear Standard for Every Clean.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('photo-checklist')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#147D68] hover:text-[#0F6352] cursor-pointer"
            >
              <Camera className="w-4 h-4" aria-hidden="true" />
              <span>See illustrative photo checklist</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CLEANING_PROCESS_STEPS.map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-[#14263B]/10 p-5 space-y-2.5">
                <span className="font-mono-tabular text-xs font-medium text-[#147D68]">{item.step}</span>
                <h3 className="text-base font-semibold text-[#14263B]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#60717B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* J. Interactive Service Areas */}
      <ServiceAreaExplorer
        onStartQuoteWithLocation={(location, isHomeownerInquiry) =>
          onStartQuote(
            isHomeownerInquiry ? 'Homeowner' : undefined,
            isHomeownerInquiry ? 'Recurring Home Cleaning — Confirm Availability' : undefined,
            location
          )
        }
      />

      {/* K. Interactive FAQ */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#14263B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#147D68] mb-2">Common Questions</p>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#14263B]">
                Answers on Turnovers, Photos &amp; Quotes.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('faqs')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147D68] hover:text-[#0F6352] whitespace-nowrap cursor-pointer"
            >
              <span>All FAQs</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3">
            {ALL_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-[#FAF9F5] rounded-xl border border-[#14263B]/10 overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/70 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#14263B]">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#60717B] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#60717B] leading-relaxed border-t border-[#14263B]/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* L. Final Conversion Section */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5] border-t border-[#14263B]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-medium tracking-wide text-[#147D68]">Edmond &amp; Oklahoma City Metro</p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#14263B] mx-auto max-w-3xl">
            Your Properties Deserve a Cleaning Partner You Can Count On.
          </h2>
          <p className="text-base text-[#60717B] max-w-xl mx-auto leading-relaxed">
            Tell us about your property or business and explore a cleaning plan built around your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onStartQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#147D68] text-white text-sm font-semibold hover:bg-[#0F6352] transition-colors cursor-pointer"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={COMPANY_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium hover:bg-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#147D68]" aria-hidden="true" />
              <span>Call Our Team · {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
