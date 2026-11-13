import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Info, Mail, Phone, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO, CUSTOMER_SERVICE_MAP } from '../data/siteData';
import { CustomerType, QuoteFormState, ServiceOption } from '../types';

interface QuoteFlowProps {
  initialCustomerType?: CustomerType | '';
  initialService?: ServiceOption | '';
  initialLocation?: string;
}

const CUSTOMER_TYPES: { type: CustomerType; description: string }[] = [
  {
    type: 'Airbnb / Short-Term Rental Host',
    description: 'Single or multiple vacation rentals needing reliable between-stay turnovers and photo checklists.',
  },
  {
    type: 'Property Manager',
    description: 'Multi-property portfolios, recurring rental turnovers, vacant unit prep, or commercial coordination.',
  },
  {
    type: 'Commercial Business',
    description: 'Offices, studios, clinics, and workspaces seeking recurring or after-hours commercial cleaning.',
  },
  {
    type: 'Homeowner',
    description: 'One-time deep cleans, move-in/move-out transitions, or Edmond recurring availability inquiries.',
  },
  {
    type: 'Other',
    description: 'Post-construction inquiries, landlords, real estate transitions, or custom cleaning requests.',
  },
];

const INITIAL_FORM: QuoteFormState = {
  customerType: '',
  service: '',
  cityOrZip: '',
  bedrooms: '',
  bathrooms: '',
  propertyCount: '',
  turnoverFrequency: '',
  preferredScheduling: '',
  facilityType: '',
  approxSqFt: '',
  commercialFrequency: '',
  preferredHours: '',
  generalPropertyTypes: '',
  serviceLocations: '',
  estimatedTurnoverVolume: '',
  additionalRequirements: '',
  homeSize: '',
  cleaningPriorities: '',
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  additionalDetails: '',
};

const STEPS = [
  { num: 1, label: 'Customer Type' },
  { num: 2, label: 'Service' },
  { num: 3, label: 'Property Details' },
  { num: 4, label: 'Contact Info' },
  { num: 5, label: 'Review' },
];

export const QuoteFlow: React.FC<QuoteFlowProps> = ({
  initialCustomerType = '',
  initialService = '',
  initialLocation = '',
}) => {
  const [step, setStep] = useState<number>(initialCustomerType && initialService ? 3 : initialCustomerType ? 2 : 1);
  const [form, setForm] = useState<QuoteFormState>(() => ({
    ...INITIAL_FORM,
    customerType: initialCustomerType,
    service: initialService,
    cityOrZip: initialLocation,
    serviceLocations: initialLocation,
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedDemo, setSubmittedDemo] = useState(false);

  useEffect(() => {
    if (initialCustomerType || initialService || initialLocation) {
      setForm((prev) => ({
        ...prev,
        customerType: initialCustomerType || prev.customerType,
        service: initialService || prev.service,
        cityOrZip: initialLocation || prev.cityOrZip,
        serviceLocations: initialLocation || prev.serviceLocations,
      }));
      if (initialCustomerType && initialService) {
        setStep(3);
      } else if (initialCustomerType) {
        setStep(2);
      }
      setSubmittedDemo(false);
    }
  }, [initialCustomerType, initialService, initialLocation]);

  const updateField = <K extends keyof QuoteFormState>(key: K, value: QuoteFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const availableServices: ServiceOption[] = form.customerType
    ? CUSTOMER_SERVICE_MAP[form.customerType]
    : ['Airbnb Turnover Cleaning', 'Commercial Cleaning', 'Deep Cleaning', 'Move-In / Move-Out Cleaning'];

  const validateCurrentStep = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (step === 1 && !form.customerType) {
      nextErrors.customerType = 'Please select who this quote is for.';
    }

    if (step === 2 && !form.service) {
      nextErrors.service = 'Please select a service category.';
    }

    if (step === 3) {
      if (form.customerType === 'Airbnb / Short-Term Rental Host') {
        if (!form.cityOrZip.trim()) nextErrors.cityOrZip = 'Enter the city or ZIP code.';
        if (!form.bedrooms.trim()) nextErrors.bedrooms = 'Select or enter bedroom count.';
        if (!form.bathrooms.trim()) nextErrors.bathrooms = 'Select or enter bathroom count.';
        if (!form.turnoverFrequency.trim()) nextErrors.turnoverFrequency = 'Select approximate turnover frequency.';
      } else if (form.customerType === 'Commercial Business') {
        if (!form.facilityType.trim()) nextErrors.facilityType = 'Specify your facility type.';
        if (!form.cityOrZip.trim()) nextErrors.cityOrZip = 'Enter the city or ZIP code.';
        if (!form.commercialFrequency.trim()) nextErrors.commercialFrequency = 'Select desired cleaning frequency.';
      } else if (form.customerType === 'Property Manager') {
        if (!form.generalPropertyTypes.trim()) nextErrors.generalPropertyTypes = 'Describe the general property types.';
        if (!form.serviceLocations.trim()) nextErrors.serviceLocations = 'List the Oklahoma City metro locations.';
      } else {
        if (!form.cityOrZip.trim()) nextErrors.cityOrZip = 'Enter the property city or ZIP code.';
      }
    }

    if (step === 4) {
      if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
      if (!form.email.trim()) {
        nextErrors.email = 'Please enter your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        nextErrors.email = 'Please enter a valid email address.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setStep((s) => Math.min(5, s + 1));
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      setSubmittedDemo(true);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`Cleaning Quote Inquiry — ${form.service || 'Graves Cleaning'}`);
    const lines = [
      `Customer Type: ${form.customerType}`,
      `Service Requested: ${form.service}`,
      form.cityOrZip ? `Location: ${form.cityOrZip}` : '',
      form.serviceLocations ? `Service Locations: ${form.serviceLocations}` : '',
      form.bedrooms ? `Bedrooms: ${form.bedrooms}` : '',
      form.bathrooms ? `Bathrooms: ${form.bathrooms}` : '',
      form.propertyCount ? `Number of Properties: ${form.propertyCount}` : '',
      form.turnoverFrequency ? `Turnover Frequency: ${form.turnoverFrequency}` : '',
      form.preferredScheduling ? `Preferred Scheduling: ${form.preferredScheduling}` : '',
      form.facilityType ? `Facility Type: ${form.facilityType}` : '',
      form.approxSqFt ? `Approximate Sq Ft: ${form.approxSqFt}` : '',
      form.commercialFrequency ? `Commercial Frequency: ${form.commercialFrequency}` : '',
      form.preferredHours ? `Preferred Cleaning Hours: ${form.preferredHours}` : '',
      form.generalPropertyTypes ? `Property Types: ${form.generalPropertyTypes}` : '',
      form.estimatedTurnoverVolume ? `Estimated Turnover Volume: ${form.estimatedTurnoverVolume}` : '',
      form.additionalRequirements ? `Requirements: ${form.additionalRequirements}` : '',
      form.homeSize ? `Approximate Home Size: ${form.homeSize}` : '',
      form.cleaningPriorities ? `Cleaning Priorities: ${form.cleaningPriorities}` : '',
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      form.companyName ? `Company: ${form.companyName}` : '',
      form.additionalDetails ? `Additional Details: ${form.additionalDetails}` : '',
    ].filter(Boolean);
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <section className="py-12 lg:py-16 bg-[#FAF9F5] min-h-[75vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-xs font-medium tracking-wide text-[#147D68]">
            Guided Quote Request · Concept Demonstration
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#14263B]">
            Tell Us About Your Property.
          </h1>
          <p className="text-sm sm:text-base text-[#60717B] max-w-2xl leading-relaxed">
            Share your property type, service scope, and location. Graves Cleaning reviews each inquiry directly to
            confirm pricing and schedule availability.
          </p>
        </div>

        {/* Demonstration Disclosure Banner */}
        <div className="mb-8 bg-[#DFF2EA]/60 border border-[#147D68]/25 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#147D68] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-[#14263B] leading-relaxed">
            <strong>Interactive Concept Demonstration:</strong> No backend submission server is connected on this
            redesign preview. To send an actual inquiry to Graves Cleaning today, call{' '}
            <a href={COMPANY_INFO.phoneHref} className="font-semibold underline decoration-[#147D68]">
              {COMPANY_INFO.phoneDisplay}
            </a>{' '}
            or email{' '}
            <a href={COMPANY_INFO.emailHref} className="font-semibold underline decoration-[#147D68]">
              {COMPANY_INFO.email}
            </a>
            .
          </p>
        </div>

        {/* Progress Indicator */}
        <nav aria-label="Quote request steps" className="mb-8">
          <ol className="grid grid-cols-5 gap-2">
            {STEPS.map((item) => {
              const isCurrent = step === item.num && !submittedDemo;
              const isDone = step > item.num || submittedDemo;
              return (
                <li key={item.num}>
                  <button
                    type="button"
                    disabled={item.num > step && !submittedDemo}
                    onClick={() => {
                      if (item.num <= step || submittedDemo) {
                        setSubmittedDemo(false);
                        setStep(item.num);
                      }
                    }}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-lg border transition-colors ${
                      isCurrent
                        ? 'bg-[#14263B] text-white border-[#14263B]'
                        : isDone
                        ? 'bg-white text-[#14263B] border-[#147D68]/40 cursor-pointer hover:bg-[#DFF2EA]/30'
                        : 'bg-white/50 text-[#60717B] border-[#14263B]/10 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono-tabular">
                      <span>0{item.num}</span>
                      {isDone && !isCurrent && <Check className="w-3.5 h-3.5 text-[#147D68]" aria-hidden="true" />}
                    </div>
                    <div className="text-xs font-medium mt-1 truncate">{item.label}</div>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Main Form Surface */}
        <div className="bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8 lg:p-10">
          {submittedDemo ? (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#14263B]/12 space-y-2">
                <p className="text-xs font-semibold text-[#147D68]">
                  Demonstration Preview Complete · Inquiry Not Transmitted
                </p>
                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#14263B]">
                  Your Quote Summary Is Ready to Share.
                </h2>
                <p className="text-sm text-[#60717B] leading-relaxed">
                  Because this is an independent redesign concept with no connected backend, your form details were
                  not transmitted automatically. You can launch your email client with the summary below or call the
                  team directly to confirm availability and pricing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={buildMailtoHref()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Open Pre-Filled Email to {COMPANY_INFO.email}</span>
                </a>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#14263B]/20 text-[#14263B] text-sm font-medium hover:bg-[#FAF9F5] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#147D68]" aria-hidden="true" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmittedDemo(false);
                  setStep(5);
                }}
                className="text-sm font-medium text-[#60717B] hover:text-[#14263B] underline underline-offset-4 cursor-pointer"
              >
                Edit summary details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* STEP 1: Customer Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-editorial text-2xl font-semibold text-[#14263B]">
                      Step 1: Who is this cleaning inquiry for?
                    </h2>
                    <p className="text-sm text-[#60717B] mt-1">
                      Selecting your role tailors the service options and property questions that follow.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {CUSTOMER_TYPES.map((option) => {
                      const selected = form.customerType === option.type;
                      return (
                        <button
                          key={option.type}
                          type="button"
                          onClick={() => {
                            const allowed = CUSTOMER_SERVICE_MAP[option.type];
                            setForm((prev) => ({
                              ...prev,
                              customerType: option.type,
                              service: allowed.includes(prev.service as ServiceOption) ? prev.service : '',
                            }));
                            setErrors({});
                          }}
                          className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-colors cursor-pointer ${
                            selected
                              ? 'bg-[#DFF2EA]/50 border-[#147D68] text-[#14263B]'
                              : 'bg-[#FAF9F5] border-[#14263B]/10 hover:border-[#14263B]/30 text-[#14263B]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-base font-semibold">{option.type}</span>
                            <span
                              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                                selected ? 'bg-[#147D68] border-[#147D68] text-white' : 'border-[#14263B]/30'
                              }`}
                            >
                              {selected && <Check className="w-3 h-3" aria-hidden="true" />}
                            </span>
                          </div>
                          <p className="text-sm text-[#60717B] mt-1">{option.description}</p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.customerType && <p className="text-sm text-red-700 font-medium">{errors.customerType}</p>}
                </div>
              )}

              {/* STEP 2: Service Selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-editorial text-2xl font-semibold text-[#14263B]">
                      Step 2: Select the service you need
                    </h2>
                    <p className="text-sm text-[#60717B] mt-1">
                      Options shown for <span className="font-semibold text-[#14263B]">{form.customerType}</span>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableServices.map((srv) => {
                      const selected = form.service === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => updateField('service', srv)}
                          className={`text-left p-4 sm:p-5 rounded-xl border transition-colors cursor-pointer ${
                            selected
                              ? 'bg-[#DFF2EA]/50 border-[#147D68] text-[#14263B]'
                              : 'bg-[#FAF9F5] border-[#14263B]/10 hover:border-[#14263B]/30 text-[#14263B]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm sm:text-base font-semibold">{srv}</span>
                            {selected && <Check className="w-4 h-4 text-[#147D68] shrink-0" aria-hidden="true" />}
                          </div>
                          {srv === 'Recurring Home Cleaning — Confirm Availability' && (
                            <p className="text-xs text-[#60717B] mt-1.5">
                              Secondary inquiry option for local households (primarily referenced for Edmond);
                              availability is confirmed individually.
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.service && <p className="text-sm text-red-700 font-medium">{errors.service}</p>}
                </div>
              )}

              {/* STEP 3: Conditional Property Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-editorial text-2xl font-semibold text-[#14263B]">
                      Step 3: Property details
                    </h2>
                    <p className="text-sm text-[#60717B] mt-1">
                      Fields marked with * are required. Approximate estimates are welcome—exact square footage is
                      never required.
                    </p>
                  </div>

                  {/* Sensitive Access Safety Notice */}
                  <div className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#14263B]/10 flex items-start gap-2.5 text-xs text-[#60717B]">
                    <ShieldAlert className="w-4 h-4 text-[#14263B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Please do not enter door codes, lockbox combinations, alarm PINs, or payment details in this
                      public form. Property access instructions are coordinated privately after confirmation.
                    </span>
                  </div>

                  {form.customerType === 'Airbnb / Short-Term Rental Host' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="sm:col-span-2">
                        <label htmlFor="q-city" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          City or ZIP code *
                        </label>
                        <input
                          id="q-city"
                          type="text"
                          value={form.cityOrZip}
                          onChange={(e) => updateField('cityOrZip', e.target.value)}
                          placeholder="e.g., Edmond, OK or 73013"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                        {errors.cityOrZip && <p className="text-xs text-red-700 mt-1">{errors.cityOrZip}</p>}
                      </div>

                      <div>
                        <label htmlFor="q-beds" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Number of bedrooms *
                        </label>
                        <select
                          id="q-beds"
                          value={form.bedrooms}
                          onChange={(e) => updateField('bedrooms', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        >
                          <option value="">Select bedrooms</option>
                          <option value="Studio / 1 Bedroom">Studio / 1 Bedroom</option>
                          <option value="2 Bedrooms">2 Bedrooms</option>
                          <option value="3 Bedrooms">3 Bedrooms</option>
                          <option value="4 Bedrooms">4 Bedrooms</option>
                          <option value="5+ Bedrooms">5+ Bedrooms</option>
                        </select>
                        {errors.bedrooms && <p className="text-xs text-red-700 mt-1">{errors.bedrooms}</p>}
                      </div>

                      <div>
                        <label htmlFor="q-baths" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Number of bathrooms *
                        </label>
                        <select
                          id="q-baths"
                          value={form.bathrooms}
                          onChange={(e) => updateField('bathrooms', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        >
                          <option value="">Select bathrooms</option>
                          <option value="1 Bathroom">1 Bathroom</option>
                          <option value="1.5 – 2 Bathrooms">1.5 – 2 Bathrooms</option>
                          <option value="2.5 – 3 Bathrooms">2.5 – 3 Bathrooms</option>
                          <option value="3.5+ Bathrooms">3.5+ Bathrooms</option>
                        </select>
                        {errors.bathrooms && <p className="text-xs text-red-700 mt-1">{errors.bathrooms}</p>}
                      </div>

                      <div>
                        <label htmlFor="q-freq" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Approximate turnover frequency *
                        </label>
                        <select
                          id="q-freq"
                          value={form.turnoverFrequency}
                          onChange={(e) => updateField('turnoverFrequency', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        >
                          <option value="">Select frequency</option>
                          <option value="1–2 turnovers per week">1–2 turnovers per week</option>
                          <option value="3+ turnovers per week">3+ turnovers per week</option>
                          <option value="2–4 turnovers per month">2–4 turnovers per month</option>
                          <option value="One-time / Initial deep clean">One-time / Initial deep clean</option>
                        </select>
                        {errors.turnoverFrequency && (
                          <p className="text-xs text-red-700 mt-1">{errors.turnoverFrequency}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="q-propcount" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Number of properties (optional)
                        </label>
                        <input
                          id="q-propcount"
                          type="text"
                          value={form.propertyCount}
                          onChange={(e) => updateField('propertyCount', e.target.value)}
                          placeholder="e.g., 1 property or 3 listings"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="q-sched" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Preferred scheduling / check-out window (optional)
                        </label>
                        <input
                          id="q-sched"
                          type="text"
                          value={form.preferredScheduling}
                          onChange={(e) => updateField('preferredScheduling', e.target.value)}
                          placeholder="e.g., Same-day turnovers 11am–3pm, weekend coverage"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>
                    </div>
                  )}

                  {form.customerType === 'Commercial Business' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-facility" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Facility type *
                        </label>
                        <input
                          id="q-facility"
                          type="text"
                          value={form.facilityType}
                          onChange={(e) => updateField('facilityType', e.target.value)}
                          placeholder="e.g., Office suite, studio, medical office"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                        {errors.facilityType && <p className="text-xs text-red-700 mt-1">{errors.facilityType}</p>}
                      </div>

                      <div>
                        <label htmlFor="q-city-comm" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          City or ZIP code *
                        </label>
                        <input
                          id="q-city-comm"
                          type="text"
                          value={form.cityOrZip}
                          onChange={(e) => updateField('cityOrZip', e.target.value)}
                          placeholder="e.g., Oklahoma City, 73102"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                        {errors.cityOrZip && <p className="text-xs text-red-700 mt-1">{errors.cityOrZip}</p>}
                      </div>

                      <div>
                        <label htmlFor="q-comm-freq" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Desired cleaning frequency *
                        </label>
                        <select
                          id="q-comm-freq"
                          value={form.commercialFrequency}
                          onChange={(e) => updateField('commercialFrequency', e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        >
                          <option value="">Select frequency</option>
                          <option value="Daily / 5x per week">Daily / 5x per week</option>
                          <option value="2–3 times per week">2–3 times per week</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Bi-weekly or Monthly">Bi-weekly or Monthly</option>
                          <option value="One-time Deep Clean">One-time Deep Clean</option>
                        </select>
                        {errors.commercialFrequency && (
                          <p className="text-xs text-red-700 mt-1">{errors.commercialFrequency}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="q-sqft" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Approximate square footage (optional)
                        </label>
                        <input
                          id="q-sqft"
                          type="text"
                          value={form.approxSqFt}
                          onChange={(e) => updateField('approxSqFt', e.target.value)}
                          placeholder="e.g., ~2,500 sq ft"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="q-hours" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Preferred cleaning hours (optional)
                        </label>
                        <input
                          id="q-hours"
                          type="text"
                          value={form.preferredHours}
                          onChange={(e) => updateField('preferredHours', e.target.value)}
                          placeholder="e.g., After 6:00 PM weekdays or weekends"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>
                    </div>
                  )}

                  {form.customerType === 'Property Manager' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-pm-types" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          General property types *
                        </label>
                        <input
                          id="q-pm-types"
                          type="text"
                          value={form.generalPropertyTypes}
                          onChange={(e) => updateField('generalPropertyTypes', e.target.value)}
                          placeholder="e.g., STR homes, multifamily units, offices"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                        {errors.generalPropertyTypes && (
                          <p className="text-xs text-red-700 mt-1">{errors.generalPropertyTypes}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="q-pm-locs" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Service locations *
                        </label>
                        <input
                          id="q-pm-locs"
                          type="text"
                          value={form.serviceLocations}
                          onChange={(e) => updateField('serviceLocations', e.target.value)}
                          placeholder="e.g., Edmond, OKC Midtown, Norman"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                        {errors.serviceLocations && (
                          <p className="text-xs text-red-700 mt-1">{errors.serviceLocations}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="q-pm-count" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Number of properties (optional)
                        </label>
                        <input
                          id="q-pm-count"
                          type="text"
                          value={form.propertyCount}
                          onChange={(e) => updateField('propertyCount', e.target.value)}
                          placeholder="e.g., 8 properties"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>

                      <div>
                        <label htmlFor="q-pm-vol" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Estimated turnover volume (optional)
                        </label>
                        <input
                          id="q-pm-vol"
                          type="text"
                          value={form.estimatedTurnoverVolume}
                          onChange={(e) => updateField('estimatedTurnoverVolume', e.target.value)}
                          placeholder="e.g., 10–15 turns per month"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="q-pm-req" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Additional requirements (optional)
                        </label>
                        <textarea
                          id="q-pm-req"
                          rows={3}
                          value={form.additionalRequirements}
                          onChange={(e) => updateField('additionalRequirements', e.target.value)}
                          placeholder="e.g., COI inquiry, consolidated Net-30 billing eligibility, standardized photo checklist notes"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>
                    </div>
                  )}

                  {(form.customerType === 'Homeowner' || form.customerType === 'Other') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="sm:col-span-2">
                        <label htmlFor="q-home-loc" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Property location (City or ZIP code) *
                        </label>
                        <input
                          id="q-home-loc"
                          type="text"
                          value={form.cityOrZip}
                          onChange={(e) => updateField('cityOrZip', e.target.value)}
                          placeholder="e.g., Edmond, OK 73013"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                        {errors.cityOrZip && <p className="text-xs text-red-700 mt-1">{errors.cityOrZip}</p>}
                      </div>

                      <div>
                        <label htmlFor="q-home-size" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Approximate home size (optional)
                        </label>
                        <input
                          id="q-home-size"
                          type="text"
                          value={form.homeSize}
                          onChange={(e) => updateField('homeSize', e.target.value)}
                          placeholder="e.g., 3 bed / 2 bath"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>

                      <div>
                        <label htmlFor="q-home-prio" className="block text-sm font-medium text-[#14263B] mb-1.5">
                          Cleaning priorities (optional)
                        </label>
                        <input
                          id="q-home-prio"
                          type="text"
                          value={form.cleaningPriorities}
                          onChange={(e) => updateField('cleaningPriorities', e.target.value)}
                          placeholder="e.g., Baseboards, kitchen cabinets, interior oven"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Contact Info */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-editorial text-2xl font-semibold text-[#14263B]">
                      Step 4: Contact information
                    </h2>
                    <p className="text-sm text-[#60717B] mt-1">
                      Tell us where Graves Cleaning should send pricing and availability confirmation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="q-name" className="block text-sm font-medium text-[#14263B] mb-1.5">
                        Full name *
                      </label>
                      <input
                        id="q-name"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                      />
                      {errors.fullName && <p className="text-xs text-red-700 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="q-email" className="block text-sm font-medium text-[#14263B] mb-1.5">
                        Email address *
                      </label>
                      <input
                        id="q-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                      />
                      {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="q-phone" className="block text-sm font-medium text-[#14263B] mb-1.5">
                        Phone number (optional)
                      </label>
                      <input
                        id="q-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="(405) 555-0199"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                      />
                    </div>

                    <div>
                      <label htmlFor="q-company" className="block text-sm font-medium text-[#14263B] mb-1.5">
                        Company or portfolio name (optional)
                      </label>
                      <input
                        id="q-company"
                        type="text"
                        value={form.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        placeholder="If applicable"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="q-notes" className="block text-sm font-medium text-[#14263B] mb-1.5">
                        Additional details (optional)
                      </label>
                      <textarea
                        id="q-notes"
                        rows={3}
                        value={form.additionalDetails}
                        onChange={(e) => updateField('additionalDetails', e.target.value)}
                        placeholder="Target start date, special surface notes, or preferred contact method (do not include lockbox or door codes)."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#14263B]/20 text-sm bg-[#FAF9F5]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Review Summary */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-editorial text-2xl font-semibold text-[#14263B]">
                      Step 5: Review your quote summary
                    </h2>
                    <p className="text-sm text-[#60717B] mt-1">
                      Graves Cleaning will review your property scope and confirm pricing and schedule availability.
                    </p>
                  </div>

                  <div className="divide-y divide-[#14263B]/10 border border-[#14263B]/12 rounded-xl bg-[#FAF9F5]">
                    <div className="p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-[#60717B]">Customer Type &amp; Service</p>
                        <p className="text-sm font-semibold text-[#14263B] mt-0.5">
                          {form.customerType} · {form.service}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-semibold text-[#147D68] hover:underline cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="p-4 flex items-start justify-between gap-4">
                      <div className="space-y-1 text-sm text-[#14263B]">
                        <p className="text-xs text-[#60717B]">Property Details</p>
                        {form.cityOrZip && <p>Location: {form.cityOrZip}</p>}
                        {form.serviceLocations && <p>Locations: {form.serviceLocations}</p>}
                        {form.bedrooms && <p>Size: {form.bedrooms} / {form.bathrooms}</p>}
                        {form.turnoverFrequency && <p>Frequency: {form.turnoverFrequency}</p>}
                        {form.facilityType && <p>Facility: {form.facilityType}</p>}
                        {form.commercialFrequency && <p>Frequency: {form.commercialFrequency}</p>}
                        {form.generalPropertyTypes && <p>Properties: {form.generalPropertyTypes}</p>}
                        {form.homeSize && <p>Home Size: {form.homeSize}</p>}
                        {form.cleaningPriorities && <p>Priorities: {form.cleaningPriorities}</p>}
                        {form.approxSqFt && <p>Approx. Sq Ft: {form.approxSqFt}</p>}
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="text-xs font-semibold text-[#147D68] hover:underline shrink-0 cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="p-4 flex items-start justify-between gap-4">
                      <div className="space-y-1 text-sm text-[#14263B]">
                        <p className="text-xs text-[#60717B]">Contact Information</p>
                        <p className="font-semibold">{form.fullName}</p>
                        <p>{form.email}{form.phone ? ` · ${form.phone}` : ''}</p>
                        {form.companyName && <p>Company: {form.companyName}</p>}
                        {form.additionalDetails && <p className="text-[#60717B]">{form.additionalDetails}</p>}
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="text-xs font-semibold text-[#147D68] hover:underline shrink-0 cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-8 pt-6 border-t border-[#14263B]/10 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#14263B]/20 text-sm font-medium text-[#14263B] hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#147D68] text-white text-sm font-medium hover:bg-[#0F6352] transition-colors cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#147D68] text-white text-sm font-semibold hover:bg-[#0F6352] transition-colors cursor-pointer"
                  >
                    <span>Request My Free Cleaning Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
