import { useEffect } from "react";

export function SEOMetadata() {
  useEffect(() => {
    // Set page title
    document.title =
      "Commercial HVAC Services | Apex Climate Solutions | NY, NJ, CT";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional commercial HVAC installation, maintenance & repair in NY, NJ, CT. 24/7 emergency service. EPA certified. 26+ years experience. Free quotes."
      );
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "HVACBusiness",
      name: "Apex Climate Solutions",
      description:
        "Premier commercial HVAC solutions serving businesses across New York, New Jersey, and Connecticut since 1998.",
      url: "https://www.apexclimate.com",
      telephone: "+1-888-555-1234",
      email: "info@apexclimate.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "500 Commercial Drive",
        addressLocality: "Newark",
        addressRegion: "NJ",
        postalCode: "07102",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.7357",
        longitude: "-74.1724",
      },
      areaServed: [
        {
          "@type": "State",
          name: "New York",
        },
        {
          "@type": "State",
          name: "New Jersey",
        },
        {
          "@type": "State",
          name: "Connecticut",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "17:00",
        },
      ],
      priceRange: "$$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "324",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HVAC Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial HVAC Installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Preventive Maintenance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency Repair Service",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Energy Optimization",
            },
          },
        ],
      },
      sameAs: [
        "https://www.facebook.com/apexclimate",
        "https://www.linkedin.com/company/apexclimate",
        "https://twitter.com/apexclimate",
      ],
    };

    // Inject structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
