import { Helmet } from "react-helmet";

import React from "react";
const Metadata = ({ title, description, path }) => {
  const url = `https://mytwitterapp-a9860.web.app/${path}`;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:image:url",
          content: "https://img.icons8.com/color/240/000000/twitter--v1.png",
        },

        {
          property: "og:url",
          content: url,
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:description",
          content: description,
        },
      ]}
      links={[
        {
          rel: "canonical",
          href: url,
        },
      ]}
    />
  );
};
export default Metadata;
