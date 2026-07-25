export default {
  title: "Marco's Property Rentals",
  description: "Website Description",
  schemaType: "LocalBusiness",
  url: process.env.CF_PAGES_BRANCH === 'main'
    ? "https://marcospropertyrentals.com"
    : process.env.CF_PAGES_URL || "http://localhost:8080",
  logo: "",
  image: "SEO Preview Image Card (1200 x 675 pixels)",
  phone: "+44 000 000 000",
  email: "info@marcospropertyrentals.com",
  social: {
    instagram: "https://instagram.com/example",
    facebook: "https://facebook.com/example",
    tiktok: ""
  }
};