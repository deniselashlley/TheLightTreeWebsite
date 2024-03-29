import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({ footerData = null, navbarData = null, children }) => {
  return (
  <div>
    <Helmet>
      <html lang="en" />
      <meta name="keywords" content="montreal, javascript, programming, meetup" />
    </Helmet>
    <Navbar data={navbarData}/>
    <main>{children}</main>
    <Footer data={footerData} />
  </div>
);
  }

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            copyrightText
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
            socialLinks {
              label
              linkURL
              hiddenText
              type
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
