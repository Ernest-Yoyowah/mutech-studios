import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.AboutTitle}>About</Typography>
    </Box>
  );
};

const styles = {
  container: {
    bgcolor: "#fff",
    color: "#000000",
    width: "100%",
    minHeight: "100vh",
    padding: { xs: "36px 40px", md: "96px 130px" },
    // padding: { xs: "24px 20px", md: "48px 80px" },
  },
  AboutTitle: {
    fontWeight: 700,
    fontSize: { xs: "20px", md: "36px" },
    marginBottom: "24px",
  },
  gridContainer: {
    marginTop: "24px",
  },
};

export default About;
