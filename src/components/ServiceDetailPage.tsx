import React from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { COMPANY_INFO, PRIMARY_SERVICES } from '../data/siteData';
import { CustomerType, RouteId, ServiceOption, ServiceProfile } from '../types';
import { PhotoChecklistDemo } from './PhotoChecklistDemo';
import { ResilientImage } from './ResilientImage';

interface ServiceDetailPageProps {
  service: ServiceProfile;
  onRequestQuote: (customerType: CustomerType, service: ServiceOption) => void;
  onNavigate: (route: RouteId) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onRequestQuote,
  onNavigate,
}) => {
  const otherServices = PRIMARY_SERVICES.filter((s) => s.id !== service.id);

  return (
    <div>
      {/* Hero Banner */}
      <section className="py-14 lg:py-20 bg-[#FAF9F5] border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#147D68]">
                  <span className="font-mono-tabular">{service.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>{service.category}</span>
                </div>
                <h1 className="font-editorial text-4xl sm:text-5xl font-semibold tracking-tight text-[#14263B]">
                  {service.headline}
                </h1>
                <p className="text-base sm:text-lg text-[#60717B] leading-relaxed">{service.summary}</p>
              </div>

              <ul className="space-y-2.5 pt-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#14263B]">
                    <span className="w-5 h-5 rounded bg-[#DFF2EA] text-[#147D68] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote(service.quoteCustomerType, service.quoteServiceOption)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#147D68] text-white text-sm font-semibold hover:bg-[#0F6352] transition-colors cursor-pointer"
                >
                  <span>Request a Quote for {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium hover:bg-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#147D68]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 min-h-[320px] rounded-2xl overflow-hidden border border-[#14263B]/10">
              <ResilientImage
                src={service.image}
                alt={service.imageAlt}
                fallbackTitle={service.shortTitle}
                priority
                className="w-full h-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope Details */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#14263B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium tracking-wide text-[#147D68] mb-2">Cleaning Scope</p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#14263B]">
              What This Service Covers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.scopeGroups.map((group) => (
              <div key={group.title} className="bg-[#FAF9F5] rounded-2xl border border-[#14263B]/10 p-6 sm:p-8">
                <h3 className="font-editorial text-xl font-semibold text-[#14263B] mb-5">{group.title}</h3>
                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#60717B] leading-relaxed">
                      <Check className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-[#14263B]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#DFF2EA]/45 rounded-xl border border-[#147D68]/20 p-6 space-y-2">
            <h3 className="text-sm font-semibold text-[#14263B]">Scheduling &amp; Scope Notes</h3>
            {service.importantNotes.map((note) => (
              <p key={note} className="text-sm text-[#60717B] leading-relaxed">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Checklist Section on Airbnb / Commercial */}
      {(service.id === 'airbnb-turnover' || service.id === 'commercial-cleaning') && (
        <PhotoChecklistDemo
          compact
          onRequestQuote={() => onRequestQuote(service.quoteCustomerType, service.quoteServiceOption)}
        />
      )}

      {/* Related Services */}
      <section className="py-16 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#14263B] mb-8">
            Explore Other Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() => onNavigate(other.id)}
                className="text-left bg-white rounded-xl border border-[#14263B]/10 p-6 hover:border-[#147D68]/50 transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs text-[#147D68]">{other.number}</span>
                  <h3 className="font-editorial text-xl font-semibold text-[#14263B] mt-2">{other.shortTitle}</h3>
                  <p className="text-sm text-[#60717B] mt-2 leading-relaxed">{other.summary}</p>
                </div>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#147D68]">
                  <span>{other.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
