import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import {
  ALL_FAQS,
  CLEANING_PROCESS_STEPS,
  COMPANY_INFO,
  IMAGES,
  PUBLISHED_TRUST_FIGURES,
  RELIABILITY_COMMITMENTS,
  VERIFIED_TESTIMONIALS,
} from '../data/siteData';
import { RouteId } from '../types';
import { ResilientImage } from './ResilientImage';

interface SharedPageProps {
  onNavigate: (route: RouteId) => void;
}

export const OurStandardsPage: React.FC<SharedPageProps> = ({ onNavigate }) => (
  <div className="bg-[#FAF9F5]">
    <section className="py-16 lg:py-24 border-b border-[#14263B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-14">
          <p className="text-xs font-medium tracking-wide text-[#147D68]">Our Cleaning Standards</p>
          <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-[#14263B]">
            A Clear Standard for Every Clean.
          </h1>
          <p className="text-base sm:text-lg text-[#60717B] leading-relaxed">
            Consistency is built through clear property scoping, reliable arrival windows, detailed walkthroughs, and
            photo documentation sent after cleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {CLEANING_PROCESS_STEPS.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-[#14263B]/10 p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono-tabular text-xs font-medium text-[#147D68]">{item.step}</span>
                <h2 className="font-editorial text-lg font-semibold text-[#14263B] mt-2 mb-2">{item.title}</h2>
                <p className="text-sm text-[#60717B] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-medium tracking-wide text-[#147D68]">Published Reliability Commitments</p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#14263B]">
              Reliability You Can Build Around.
            </h2>
            <p className="text-sm sm:text-base text-[#60717B] leading-relaxed">
              Graves Cleaning publishes clear service promises designed for short-term rental operators and commercial
              clients who cannot afford missed cleanings or unverified turnovers.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#14263B]/10 border border-[#14263B]/10 rounded-2xl bg-[#FAF9F5]">
            {RELIABILITY_COMMITMENTS.map((item) => (
              <div key={item.title} className="p-6">
                <h3 className="text-base font-semibold text-[#14263B]">{item.title}</h3>
                <p className="text-sm text-[#60717B] mt-1.5 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const AboutPage: React.FC<SharedPageProps> = ({ onNavigate }) => (
  <section className="py-16 lg:py-24 bg-[#FAF9F5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-wide text-[#147D68]">About Graves Cleaning &amp; Property Management</p>
            <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-[#14263B]">
              Local Oklahoma Operations Built for Hospitality &amp; Commercial Standards.
            </h1>
            <p className="text-base text-[#60717B] leading-relaxed">
              Based in Edmond, Oklahoma and serving the greater Oklahoma City metropolitan area, Graves Cleaning &amp;
              Property Management focuses on the properties where timing, consistency, and accountability matter most:
              Airbnb and short-term rental turnovers, recurring commercial spaces, deep cleanings, and move-in/move-out
              transitions.
            </p>
            <p className="text-base text-[#60717B] leading-relaxed">
              Instead of treating hospitality properties like casual errands, the team emphasizes repeatable checklists,
              post-cleaning photo documentation, and clear communication with both local managers and out-of-state
              owners.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className="px-5 py-3 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
            >
              Request a Free Quote
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium hover:bg-white transition-colors cursor-pointer"
            >
              Contact Our Team
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 min-h-[320px] rounded-2xl overflow-hidden border border-[#14263B]/10">
          <ResilientImage
            src={IMAGES.heroLiving}
            alt="Guest-ready living room prepared for short-term rental arrival in Oklahoma City"
            fallbackTitle="Graves Cleaning OKC"
            priority
            className="w-full h-full object-cover lg:h-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export const ReviewsPage: React.FC<SharedPageProps> = ({ onNavigate }) => (
  <section className="py-16 lg:py-24 bg-[#FAF9F5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs font-medium tracking-wide text-[#147D68]">Verified Client Proof &amp; Attribution</p>
        <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-[#14263B]">
          Trusted by Local Hosts, Remote Owners, and OKC Businesses.
        </h1>
        <p className="text-base text-[#60717B] leading-relaxed">
          Each published figure below is presented separately with its reported platform or geographic scope rather
          than combined into an aggregate estimate.
        </p>
      </div>

      {/* Separated Verifiable Figures */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PUBLISHED_TRUST_FIGURES.map((stat) => (
          <div key={stat.unit} className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8">
            <div className="font-editorial text-4xl font-semibold text-[#14263B] tabular-nums">{stat.figure}</div>
            <div className="text-base font-semibold text-[#147D68] mt-2">{stat.unit}</div>
            <p className="text-sm text-[#60717B] mt-2 leading-relaxed">{stat.scope}</p>
          </div>
        ))}
      </div>

      {/* Genuine Published Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VERIFIED_TESTIMONIALS.map((item) => (
          <blockquote
            key={item.id}
            className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8 flex flex-col justify-between"
          >
            <p className="font-editorial text-lg sm:text-xl text-[#14263B] leading-relaxed">“{item.quote}”</p>
            <footer className="mt-6 pt-4 border-t border-[#14263B]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#60717B]">
              <div>
                <span className="font-semibold text-[#14263B]">{item.author}</span>
                <span aria-hidden="true"> · </span>
                <span>{item.context}</span>
              </div>
              <span>{item.sourceLabel}</span>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="bg-[#14263B] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-editorial text-2xl font-semibold">Read Original Published Reviews</h2>
          <p className="text-sm text-[#FAF9F5]/80 mt-1">
            Visit the official website for original platform links and current review listings.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={COMPANY_INFO.originalWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/25 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <span>Visit gravescleaningokc.com</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="px-4 py-2.5 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
          >
            Request a Free Quote
          </button>
        </div>
      </div>
    </div>
  </section>
);

export const FAQsPage: React.FC<SharedPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string>(ALL_FAQS[0].id);
  const [category, setCategory] = useState<string>('All');

  const categories = ['All', 'Airbnb & STR', 'Commercial', 'Policies & Quotes', 'Service Areas'];
  const visibleFaqs = category === 'All' ? ALL_FAQS : ALL_FAQS.filter((f) => f.category === category);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-wide text-[#147D68]">Frequently Asked Questions</p>
          <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-[#14263B]">
            Clear Answers Before You Book.
          </h1>
          <p className="text-base text-[#60717B] leading-relaxed">
            Everything hosts, property managers, and commercial clients ask about turnovers, photo checklists,
            supplies, and quoting.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                category === cat
                  ? 'bg-[#14263B] text-white'
                  : 'bg-white text-[#60717B] border border-[#14263B]/10 hover:text-[#14263B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {visibleFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="bg-white rounded-xl border border-[#14263B]/10 overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F5]/60 transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-[#14263B]">{faq.question}</span>
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

        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#14263B]/10">
          <p className="text-sm text-[#60717B]">Have a question about a specific property or schedule?</p>
          <button
            type="button"
            onClick={() => onNavigate('quote')}
            className="px-5 py-2.5 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
          >
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export const ContactPage: React.FC<SharedPageProps> = ({ onNavigate }) => (
  <section className="py-16 lg:py-24 bg-[#FAF9F5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium tracking-wide text-[#147D68]">Contact Graves Cleaning</p>
            <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-[#14263B]">
              Speak With Our Edmond &amp; OKC Team.
            </h1>
            <p className="text-base text-[#60717B] leading-relaxed">
              Reach out directly by phone or email, or complete our guided quote form so we can review your property
              details and confirm pricing and availability.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="font-editorial text-xl font-semibold text-[#14263B]">{COMPANY_INFO.name}</h2>
              <div className="mt-4 space-y-4 text-sm text-[#14263B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Published Address</div>
                    <div className="text-[#60717B]">
                      {COMPANY_INFO.addressLine1}
                      <br />
                      {COMPANY_INFO.addressLine2}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-[#147D68] font-medium hover:underline tabular-nums"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href={COMPANY_INFO.emailHref} className="text-[#147D68] font-medium hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#14263B]/10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="flex-1 py-3 px-4 rounded-lg bg-[#147D68] text-white text-sm font-medium text-center hover:bg-[#0F6352] transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
              <button
                type="button"
                onClick={() => onNavigate('property-managers')}
                className="flex-1 py-3 px-4 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium text-center hover:bg-[#FAF9F5] transition-colors cursor-pointer"
              >
                Property Partnership Info
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8 space-y-4">
            <h2 className="font-editorial text-2xl font-semibold text-[#14263B]">What Happens Next</h2>
            <ol className="space-y-4 text-sm text-[#60717B]">
              <li className="flex items-start gap-3">
                <span className="font-mono-tabular text-xs font-semibold text-[#147D68] mt-0.5">01</span>
                <span>
                  <strong className="text-[#14263B]">Share your property details:</strong> Let us know your service
                  type, OKC metro location, and general size or turnover cadence.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono-tabular text-xs font-semibold text-[#147D68] mt-0.5">02</span>
                <span>
                  <strong className="text-[#14263B]">Scope &amp; availability confirmation:</strong> Graves Cleaning
                  reviews your requirements to confirm custom pricing and scheduling windows.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono-tabular text-xs font-semibold text-[#147D68] mt-0.5">03</span>
                <span>
                  <strong className="text-[#14263B]">Ongoing checklist alignment:</strong> Confirm linen preferences,
                  restocking notes, and post-cleaning photo documentation.
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-[#14263B] text-white rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#C5A47A]">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Service Coverage</span>
            </div>
            <h3 className="font-editorial text-xl font-semibold">Greater Oklahoma City Metro</h3>
            <p className="text-sm text-[#FAF9F5]/80 leading-relaxed">
              Serving Edmond, Oklahoma City, Norman, Moore, Yukon, Mustang, Nichols Hills, Midwest City, Del City,
              Bethany, Warr Acres, Choctaw, Harrah, Newcastle, Tuttle, Piedmont, and El Reno—confirmed per property
              address.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('service-areas')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#DFF2EA] hover:text-white pt-1 cursor-pointer"
            >
              <span>Explore service areas</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PrivacyPage: React.FC<SharedPageProps> = ({ onNavigate }) => (
  <section className="py-16 lg:py-24 bg-[#FAF9F5]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <p className="text-xs font-medium tracking-wide text-[#147D68]">Privacy &amp; Redesign Notice</p>
      <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#14263B]">
        Privacy Policy &amp; Concept Website Disclosure
      </h1>
      <div className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8 space-y-4 text-sm text-[#60717B] leading-relaxed">
        <p>
          <strong className="text-[#14263B]">Independent Concept Notice:</strong> {COMPANY_INFO.agencyCredit} It is not
          the official live operational website of Graves Cleaning &amp; Property Management.
        </p>
        <p>
          <strong className="text-[#14263B]">Form Data Handling:</strong> The interactive quote workflow on this site
          runs locally in your browser as a demonstration and does not transmit, store, or sell personal information to
          an external server.
        </p>
        <p>
          <strong className="text-[#14263B]">Official Inquiries:</strong> For official privacy terms or direct cleaning
          inquiries, please contact Graves Cleaning &amp; Property Management at{' '}
          <a href={COMPANY_INFO.phoneHref} className="text-[#147D68] underline">
            {COMPANY_INFO.phoneDisplay}
          </a>{' '}
          or{' '}
          <a href={COMPANY_INFO.emailHref} className="text-[#147D68] underline">
            {COMPANY_INFO.email}
          </a>
          .
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="text-sm font-semibold text-[#147D68] hover:underline cursor-pointer"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  </section>
);
