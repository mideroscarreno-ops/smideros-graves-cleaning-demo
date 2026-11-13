import React, { useMemo, useState } from 'react';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { SERVICE_AREAS_CITIES } from '../data/siteData';

interface ServiceAreaExplorerProps {
  onStartQuoteWithLocation: (location: string, isHomeownerInquiry?: boolean) => void;
  showFullDetails?: boolean;
}

export const ServiceAreaExplorer: React.FC<ServiceAreaExplorerProps> = ({
  onStartQuoteWithLocation,
  showFullDetails = false,
}) => {
  const [cityQuery, setCityQuery] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('Oklahoma City');
  const [addressFeedback, setAddressFeedback] = useState<string | null>(null);

  const filteredCities = useMemo(() => {
    const q = cityQuery.trim().toLowerCase();
    if (!q) return SERVICE_AREAS_CITIES;
    return SERVICE_AREAS_CITIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.note.toLowerCase().includes(q)
    );
  }, [cityQuery]);

  const activeCityData =
    SERVICE_AREAS_CITIES.find((c) => c.name === selectedCity) ?? SERVICE_AREAS_CITIES[0];

  const handleAddressCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = addressInput.trim();
    if (!cleaned) {
      setAddressFeedback('Enter a street address, city, or ZIP code to include with your availability inquiry.');
      return;
    }
    setAddressFeedback(
      `Location "${cleaned}" noted. Exact crew availability and scheduling windows are confirmed individually for each property.`
    );
  };

  return (
    <section aria-labelledby="service-areas-heading" className="py-20 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#147D68] mb-2">
                Greater Oklahoma City Coverage
              </p>
              <h2
                id="service-areas-heading"
                className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#14263B]"
              >
                Serving Edmond and the OKC Metro.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#60717B] leading-relaxed">
                Headquartered in Edmond and supporting short-term rentals, commercial spaces, and property transitions
                across 17 communities in the Oklahoma City metropolitan area. Exact availability is confirmed for each
                property address.
              </p>
            </div>

            {/* Address or ZIP code inquiry box */}
            <form
              onSubmit={handleAddressCheck}
              className="bg-white rounded-xl border border-[#14263B]/10 p-5 sm:p-6 space-y-4"
            >
              <label htmlFor="property-zip-input" className="block text-sm font-semibold text-[#14263B]">
                Check Property Address or ZIP Code
              </label>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  id="property-zip-input"
                  type="text"
                  value={addressInput}
                  onChange={(e) => {
                    setAddressInput(e.target.value);
                    setAddressFeedback(null);
                  }}
                  placeholder="e.g., 73013 or Edmond, OK"
                  className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg border border-[#14263B]/15 text-sm text-[#14263B] bg-[#FAF9F5] placeholder:text-[#60717B]/70"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[#14263B] text-white text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#1E3550] transition-colors cursor-pointer"
                >
                  Verify Inquiry
                </button>
              </div>
              {addressFeedback ? (
                <div className="space-y-3 pt-1">
                  <p className="text-xs text-[#147D68] font-medium leading-relaxed">{addressFeedback}</p>
                  <button
                    type="button"
                    onClick={() => onStartQuoteWithLocation(addressInput.trim() || selectedCity)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#147D68] hover:text-[#0F6352] cursor-pointer"
                  >
                    <span>Continue to quote with this location</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <p className="text-xs text-[#60717B]">
                  Service coverage across the OKC metro is confirmed per property based on location and turnover schedule.
                </p>
              )}
            </form>

            {/* Edmond Residential Discrepancy Compliance Box */}
            <div className="bg-[#DFF2EA]/55 rounded-xl border border-[#147D68]/20 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#147D68]">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Edmond Homeowner Inquiries</span>
              </div>
              <p className="text-sm text-[#14263B] leading-relaxed">
                Primary offerings center on Airbnb turnovers, commercial cleaning, deep cleaning, and move-out turns.
                Looking for weekly residential upkeep in Edmond?
              </p>
              <button
                type="button"
                onClick={() => onStartQuoteWithLocation('Edmond, OK', true)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14263B] underline decoration-[#147D68] underline-offset-4 hover:text-[#147D68] transition-colors cursor-pointer"
              >
                <span>Recurring Home Cleaning — Confirm Availability</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#14263B]/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#14263B]/10 pb-5">
              <div>
                <h3 className="font-editorial text-xl font-semibold text-[#14263B]">
                  Published OKC Metro Cities
                </h3>
                <p className="text-xs text-[#60717B] mt-0.5 tabular-nums">
                  {filteredCities.length} of {SERVICE_AREAS_CITIES.length} listed communities shown
                </p>
              </div>
              <div className="relative w-full sm:w-64">
                <Search
                  className="w-4 h-4 text-[#60717B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  aria-label="Filter service area cities"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  placeholder="Search city..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-[#14263B]/15 text-sm text-[#14263B] bg-[#FAF9F5] placeholder:text-[#60717B]/70"
                />
              </div>
            </div>

            {filteredCities.length === 0 ? (
              <div className="py-10 text-center space-y-3">
                <p className="text-sm font-medium text-[#14263B]">
                  No city matched “{cityQuery}” in our listed metro summary.
                </p>
                <p className="text-xs text-[#60717B] max-w-md mx-auto">
                  If your property is in the greater Oklahoma City area, submit your address in a quote inquiry to
                  confirm service availability.
                </p>
                <button
                  type="button"
                  onClick={() => onStartQuoteWithLocation(cityQuery)}
                  className="px-4 py-2 rounded-lg bg-[#147D68] text-white text-xs font-medium cursor-pointer"
                >
                  Inquire About {cityQuery}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {filteredCities.map((city) => {
                  const isSelected = city.name === selectedCity;
                  return (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => setSelectedCity(city.name)}
                      className={`px-3.5 py-2.5 rounded-lg text-left text-sm font-medium border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#14263B] text-white border-[#14263B]'
                          : 'bg-[#FAF9F5] text-[#14263B] border-[#14263B]/10 hover:border-[#147D68]/40'
                      }`}
                    >
                      {city.name}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="pt-5 border-t border-[#14263B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#147D68]">Selected Community</p>
                <h4 className="text-base font-semibold text-[#14263B] mt-0.5">{activeCityData.name}, OK</h4>
                <p className="text-sm text-[#60717B] mt-0.5">{activeCityData.note}</p>
              </div>
              <button
                type="button"
                onClick={() => onStartQuoteWithLocation(`${activeCityData.name}, OK`)}
                className="px-4 py-2.5 rounded-lg bg-[#147D68] text-white text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#0F6352] transition-colors cursor-pointer"
              >
                Request Service in {activeCityData.name}
              </button>
            </div>

            {showFullDetails && (
              <p className="text-xs text-[#60717B] pt-2">
                Note: Graves Cleaning does not publish a fixed mileage guarantee; exact scheduling and travel
                availability are confirmed upon reviewing your property address and cleaning frequency.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
