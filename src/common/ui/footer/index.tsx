import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return <Box sx={styles.container}>Footer</Box>;
};

const styles = {
  container: {
    bgcolor: "#2E2C2C",
    color: "#fff",
    width: "100%",
    minHeight: "70vh",
    padding: { xs: "36px 40px", md: "96px 130px" },
    // padding: { xs: "24px 20px", md: "48px 80px" },
  },
  FeaturedTitle: {
    fontWeight: 700,
    fontSize: { xs: "20px", md: "36px" },
    marginBottom: "24px",
  },
  gridContainer: {
    marginTop: "24px",
  },
};
export default Footer;
