import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./header";

const theme = {
  black: "#000",
};
const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
      box-sizing: inherit;
      margin: 0px;
      padding: 0px;
      -webkit-font-smoothing: antialiased;
    }
    body {
      margin: 0;
      padding: 0;
      font-size: 1.25rem; 
    }
    a:visited {
      color: inherit;
    }
    a {
      color: inherit!important;
    }
    a:-webkit-any-link {
      text-decoration: none!important;
    }
 

`;
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer></footer>
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
