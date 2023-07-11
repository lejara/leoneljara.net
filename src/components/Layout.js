import * as React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import title_image from "../images/logo_title.png";

const Layout = ({
  children,
  title = "leoneljara.net",
  description = "Leonel Jara web / game developer, love creating website and games",
  url = "https://leoneljara.net/",
  image = title_image,
}) => {
  return (
    <>
      <Helmet defer={false} htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
        <meta name="image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
      </Helmet>

      <main style={{ minWidth: "267px" }}>{children}</main>
    </>
  );
};

export default Layout;
