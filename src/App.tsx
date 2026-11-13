import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { PhotoChecklistDemo } from './components/PhotoChecklistDemo';
import { PropertyManagersPage } from './components/PropertyManagersPage';
import { QuoteFlow } from './components/QuoteFlow';
import {
  AboutPage,
  ContactPage,
  FAQsPage,
  OurStandardsPage,
  PrivacyPage,
  ReviewsPage,
} from './components/SecondaryPages';
import { ServiceAreaExplorer } from './components/ServiceAreaExplorer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PRIMARY_SERVICES, ROUTE_TITLES } from './data/siteData';
import { CustomerType, RouteId, ServiceOption } from './types';

function getRouteFromHash(): RouteId {
  const raw = window.location.hash.replace(/^#\/?/, '').trim() as RouteId;
  if (raw && raw in ROUTE_TITLES) {
    return raw;
  }
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState<RouteId>(() => getRouteFromHash());
  const [quotePrefill, setQuotePrefill] = useState<{
    customerType?: CustomerType | '';
    service?: ServiceOption | '';
    location?: string;
  }>({});

  const navigate = useCallback((nextRoute: RouteId) => {
    setRoute(nextRoute);
    window.location.hash = nextRoute === 'home' ? '' : nextRoute;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const startQuote = useCallback(
    (customerType?: CustomerType, service?: ServiceOption, location?: string) => {
      setQuotePrefill({
        customerType: customerType ?? '',
        service: service ?? '',
        location: location ?? '',
      });
      navigate('quote');
    },
    [navigate]
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const pageTitle = ROUTE_TITLES[route] || 'Home';
    document.title =
      route === 'home'
        ? 'Graves Cleaning & Property Management | Hospitality & Commercial Cleaning in OKC'
        : `${pageTitle} | Graves Cleaning & Property Management`;
  }, [route]);

  const activeService = PRIMARY_SERVICES.find((s) => s.id === route);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#14263B]">
      <Header currentRoute={route} onNavigate={navigate} />

      <main className="flex-1">
        {route === 'home' && <HomePage onNavigate={navigate} onStartQuote={startQuote} />}

        {activeService && (
          <ServiceDetailPage
            service={activeService}
            onRequestQuote={(ct, srv) => startQuote(ct, srv)}
            onNavigate={navigate}
          />
        )}

        {route === 'property-managers' && (
          <PropertyManagersPage onRequestQuote={(ct, srv) => startQuote(ct, srv)} onNavigate={navigate} />
        )}

        {route === 'our-standards' && <OurStandardsPage onNavigate={navigate} />}

        {route === 'photo-checklist' && (
          <PhotoChecklistDemo onRequestQuote={() => startQuote('Airbnb / Short-Term Rental Host', 'Airbnb Turnover Cleaning')} />
        )}

        {route === 'service-areas' && (
          <ServiceAreaExplorer
            showFullDetails
            onStartQuoteWithLocation={(location, isHomeownerInquiry) =>
              startQuote(
                isHomeownerInquiry ? 'Homeowner' : undefined,
                isHomeownerInquiry ? 'Recurring Home Cleaning — Confirm Availability' : undefined,
                location
              )
            }
          />
        )}

        {route === 'reviews' && <ReviewsPage onNavigate={navigate} />}

        {route === 'faqs' && <FAQsPage onNavigate={navigate} />}

        {route === 'quote' && (
          <QuoteFlow
            initialCustomerType={quotePrefill.customerType}
            initialService={quotePrefill.service}
            initialLocation={quotePrefill.location}
          />
        )}

        {route === 'contact' && <ContactPage onNavigate={navigate} />}

        {route === 'about' && <AboutPage onNavigate={navigate} />}

        {route === 'privacy' && <PrivacyPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
