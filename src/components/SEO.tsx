import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
}

const SITE_NAME = "Bassh";
const SITE_URL = "https://bassh.in";
const DEFAULT_DESCRIPTION =
  "India's #1 real-time nightlife platform. Discover the best clubs, get on guest lists, and enjoy VIP experiences — all in one app.";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bassh",
  url: "https://bassh.in",
  logo: `${SITE_URL}/og-image.png`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    "https://x.com/BasshApp",
    "https://www.linkedin.com/company/bassh/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@bassh.in",
    contactType: "customer support",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bassh",
  url: "https://bassh.in",
};

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  type = "website",
}: SEOProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — India's #1 Real-Time Nightlife OS`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BasshApp" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};
