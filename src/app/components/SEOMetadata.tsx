import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export function SEOMetadata() {
  const location = useLocation();
  
  const siteUrl = "https://apexclimatesolutions.com";
  const siteName = "Apex Climate Solutions";
  const defaultTitle = "Apex Climate Solutions - Commercial HVAC Services | NY, NJ, CT";
  const defaultDescription = "Premier commercial HVAC services in the tri-state area. Installation, maintenance, emergency repairs, and energy optimization. 26+ years of excellence. Call (888) 555-1234.";
  const defaultImage = `${siteUrl}/og-image.jpg`;

  // Page-specific metadata
  const pageMetadata: { [key: string]: { title: string; description: string } } = {
    "/": {
      title: defaultTitle,
      description: defaultDescription,
    },
    "/services": {
      title: "Commercial HVAC Services - Installation, Maintenance & Repair | Apex Climate",
      description: "Complete commercial HVAC solutions including installation, preventive maintenance, emergency repairs, indoor air quality, and energy optimization. Free consultation available.",
    },
    "/about": {
      title: "About Us - 26 Years of HVAC Excellence | Apex Climate Solutions",
      description: "Family-owned commercial HVAC company serving NY, NJ, CT since 1998. EPA certified, NATE certified technicians. 500+ satisfied commercial clients.",
    },
    "/case-studies": {
      title: "Case Studies - Proven HVAC Success Stories | Apex Climate Solutions",
      description: "Real results from our commercial HVAC projects. Energy savings, system reliability, and improved performance for facilities across the tri-state area.",
    },
    "/contact": {
      title: "Contact Us - Free HVAC Consultation | Apex Climate Solutions",
      description: "Get a free commercial HVAC consultation and quote. 24/7 emergency service. Serving NY, NJ, CT. Call (888) 555-1234 or request a quote online.",
    },
  };

  const currentPage = pageMetadata[location.pathname] || pageMetadata["/"];
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{currentPage.title}</title>
      <meta name="title" content={currentPage.title} />
      <meta name="description" content={currentPage.description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={currentPage.title} />
      <meta property="og:description" content={currentPage.description} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={currentPage.title} />
      <meta property="twitter:description" content={currentPage.description} />
      <meta property="twitter:image" content={defaultImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Apex Climate Solutions" />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          "name": "Apex Climate Solutions",
          "image": defaultImage,
          "description": defaultDescription,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "500 Commercial Dr",
            "addressLocality": "Newark",
            "addressRegion": "NJ",
            "postalCode": "07102",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7357,
            "longitude": -74.1724
          },
          "url": siteUrl,
          "telephone": "+1-888-555-1234",
          "email": "info@apexclimate.com",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "17:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247"
          },
          "areaServed": [
            {
              "@type": "State",
              "name": "New York"
            },
            {
              "@type": "State",
              "name": "New Jersey"
            },
            {
              "@type": "State",
              "name": "Connecticut"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}
