export default {
  title: "Marco's Property Rentals",
  description:
    "Northern Ireland letting agency connecting landlords with reliable, referenced tenants and guiding renters through a simple rental application process.",
  schemaType: "LocalBusiness",
  url:
    process.env.CF_PAGES_BRANCH === "main"
      ? "https://marcospropertyrentals.com"
      : process.env.CF_PAGES_URL || "http://localhost:8080",
  logo: "",
  image: "SEO Preview Image Card (1200 x 675 pixels)",
  phone: "+44 7783 141 269",
  whatsapp: "447783141269",
  messenger: "example",
  email: "info@marcospropertyrentals.com",
  social: {
    instagram: "https://instagram.com/example",
    facebook:
      "https://www.facebook.com/people/Marcos-Property-Rentals/61593027022929/",
    tiktok: "",
  },
};
