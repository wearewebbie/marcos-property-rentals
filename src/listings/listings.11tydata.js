export default {
    tags: "listings",
    layout: "listing/listing.njk",
    eleventyComputed: {
        permalink: (data) => `/listings/${data.page.fileSlug}/`,
        title: (data) => `${data.address.street}, ${data.address.city}`,
        description: (data) => data.description,
    },
};
