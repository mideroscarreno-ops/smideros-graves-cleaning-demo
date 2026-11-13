import React from 'react';
import { ArrowRight, Building2, Camera, Check, FileCheck2, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/siteData';
import { CustomerType, RouteId, ServiceOption } from '../types';
import { ResilientImage } from './ResilientImage';

interface PropertyManagersPageProps {
  onRequestQuote: (customerType: CustomerType, service: ServiceOption) => void;
  onNavigate: (route: RouteId) => void;
}

const PARTNER_PILLARS = [
  {
    icon: Building2,
    title: 'Multi-Property Turnover Coordination',
    description:
      'Coordinate cleaning across short-term rental portfolios, residential move-out units, and commercial common spaces through one local Oklahoma City metro partner.',
  },
  {
    icon: Check,
    title: 'Standardized Property Checklists',
    description:
      'Align cleaning expectations across properties with structured room-by-room checklists tailored to each residence or commercial facility.',
  },
  {
    icon: Camera,
    title: 'Per-Property Photo Documentation',
    description:
      'Receive post-cleaning photo checklists after service so property managers and remote owners can review readiness without visiting every address.',
  },
  {
    icon: FileCheck2,
    title: 'Consolidated Invoicing (Eligibility-Based)',
    description:
      'Net-30 consolidated invoicing is offered as a published option for qualified property management and commercial partners, subject to eligibility review.',
  },
  {
    icon: ShieldCheck,
    title: 'Vendor & COI Inquiries',
    description:
      'Certificate of Insurance (COI) documentation is available upon request for eligible commercial and property management accounts.',
  },
];

export const PropertyManagersPage: React.FC<PropertyManagersPageProps> = ({
  onRequestQuote,
  onNavigate,
}) => {
  return (
    <div>
      {/* B2B Hero */}
      <section className="py-16 lg:py-24 bg-[#14263B] text-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-wide text-[#C5A47A]">
                  For Property Managers &amp; Portfolio Operators
                </p>
                <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                  Cleaner Turnovers. Smoother Property Operations.
                </h1>
                <p className="text-base sm:text-lg text-[#FAF9F5]/80 leading-relaxed">
                  Whether you oversee short-term rentals, vacant unit transitions, or commercial offices across the
                  Oklahoma City metro, Graves Cleaning delivers consistent execution and post-cleaning photo
                  verification.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote('Property Manager', 'Property Management Partnership')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#147D68] text-white text-sm font-semibold hover:bg-[#0F6352] transition-colors cursor-pointer"
                >
                  <span>Discuss a Property Partnership</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A47A]" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 min-h-[320px] rounded-2xl overflow-hidden border border-white/15">
              <ResilientImage
                src={IMAGES.commercialOffice}
                alt="Professionally maintained modern property management office and conference space"
                fallbackTitle="Property Management Partnerships"
                priority
                className="w-full h-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <p className="text-xs font-medium tracking-wide text-[#147D68]">Published Partner Offerings</p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#14263B]">
              One Cleaning Partner. Every Property Ready.
            </h2>
            <p className="text-sm sm:text-base text-[#60717B] leading-relaxed">
              Designed for regional property managers who need dependable crews, transparent photo documentation, and
              straightforward administrative coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#DFF2EA] text-[#147D68] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-editorial text-xl font-semibold text-[#14263B] mb-2.5">{pillar.title}</h3>
                    <p className="text-sm text-[#60717B] leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="bg-[#14263B] text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs font-medium text-[#C5A47A]">Vendor Documentation &amp; Terms</p>
                <h3 className="font-editorial text-xl font-semibold">Subject to Eligibility &amp; Confirmation</h3>
                <p className="text-sm text-[#FAF9F5]/80 leading-relaxed">
                  Net-30 billing terms, Certificate of Insurance (COI) documentation, and multi-property scheduling
                  arrangements are confirmed directly with Graves Cleaning during partnership scoping.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote('Property Manager', 'Property Management Partnership')}
                  className="px-4 py-2.5 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
                >
                  Submit Partnership Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('photo-checklist')}
                  className="px-4 py-2.5 rounded-lg border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
                >
                  View Sample Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
