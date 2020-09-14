import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import styled from "styled-components";

const Header = ({ siteTitle }) => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
