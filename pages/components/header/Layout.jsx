import React from "react";
import Header from "./Header";
import Footer from "../footer/Footer";
import Headerrrr from "./Test";
import { Box } from "@mui/material";

const Layout = (props) => {
  return (
    <Box>
      <Header />
      {props.children}
      <Footer />
    </Box>
  );
};

export default Layout;
