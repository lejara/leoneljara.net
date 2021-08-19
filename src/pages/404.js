import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Background from "../components/Background";

// markup
const NotFoundPage = () => {
  return (
    <div>
      <Layout>
        <Background />
        <main className="sm:text-xl md:text-3xl p-5">
          <title>Not found</title>
          <h2 className="text-title">404</h2>
          <p className="text-center mt-16">
            Sorry
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>
            I have no page for that.
            <br />
            <Link className="link-primary text-center" to="/">
              Go home
            </Link>
          </p>
        </main>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
