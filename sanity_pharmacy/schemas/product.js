export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      name: "name",

      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 90 },
    },
    { name: "price", type: "number", title: "Price" },
    { name: "details", title: "Details", type: "string" },
  ],
};
