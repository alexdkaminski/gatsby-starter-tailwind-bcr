import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-gray-900">
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 mx-auto w-full ">
            {children}
          </main>

          <footer className="bg-blue-700">
            <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
              <p className="text-white">
                Created by{" "}
                <a
                  href="https://alexkaminski.com.au"
                  className="font-bold no-underline text-white"
                >
                  Alex Kaminski
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/alexdkaminski/"
                  className="font-bold no-underline text-white"
                >
                  GitHub
                </a>
              </p>
            </nav>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
