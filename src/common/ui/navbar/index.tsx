"use client";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import bgImage from "../../../../public/bg1.png";

// Constants for menu items
const menuItems = ["Home", "About", "Services", "Blog", "Contact"];

const NavbarAndHero = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle Drawer
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={styles.container}>
      {/* Navbar Section */}
      <Box sx={styles.navbarContainer}>
        <Box sx={styles.navbarLeft}>
          {/* Company Name */}
          <Link href="/" passHref>
            <Typography sx={styles.companyName}>wintect</Typography>
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <IconButton sx={styles.menuIcon} onClick={toggleDrawer(true)}>
            <MenuIcon sx={styles.menuIconSvg} />
          </IconButton>
        </Box>

        {/* Navigation Links for Larger Screens */}
        <Box sx={styles.navbarLinks}>
          {menuItems.map((item) => (
            <NavLink key={item} label={item} />
          ))}
        </Box>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={styles.drawerList}>
            <Box sx={styles.drawerHeader}>
              <Box sx={styles.drawerHeaderLine} />
            </Box>
            <Box sx={styles.drawerListWrapper}>
              {menuItems.map((item) => (
                <NavLink
                  key={item}
                  label={item}
                  drawer
                  onClick={toggleDrawer(false)}
                />
              ))}
            </Box>
          </List>
        </Drawer>
      </Box>

      {/* Hero Section */}
      <Box sx={styles.heroContainer}>
        <Box sx={styles.heroTextContainer}>
          <Typography sx={styles.heroTitle}>
            Yo, musicians
            <br />
            ready to level up?
          </Typography>
          <Typography sx={styles.heroSubtitle}>
            mutech studios empowers musicians with vst & daws into their music.
          </Typography>
          <Box sx={styles.heroButtonContainer}>
            <Typography sx={styles.viewProductsText}>
              View our products
            </Typography>
            <Button sx={styles.heroButton}>Request a quote</Button>
          </Box>
        </Box>
        <Box sx={styles.heroImageContainer}>
          <Image
            src={bgImage}
            width={300}
            height={300}
            alt="bg image"
            // style={styles.heroImage}
          />
        </Box>
      </Box>
    </Box>
  );
};

// Reusable NavLink component
const NavLink = ({
  label,
  // drawer = false,
  onClick,
}: {
  label: string;
  drawer?: boolean;
  onClick?: () => void;
}) => (
  <Link href={`/${label.toLowerCase().replace(" ", "")}`} passHref>
    <Typography
      sx={{ ...styles.navLink, ...(label === "Contact" && styles.contactLink) }}
      onClick={onClick}
    >
      {label}
    </Typography>
  </Link>
);

const styles = {
  container: {
    bgcolor: "#083C4C",
    color: "white",
    width: "100%",
    minHeight: "110vh",
    padding: { xs: "36px 40px", md: "32px 130px" },
    fontWeight: "bold",
    display: "flex",
    justifyContent: { md: "space-between", xs: "flex-start" },
    flexDirection: "column",
  },
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  navbarLeft: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  companyName: {
    fontWeight: 1000,
    fontSize: { xs: "40px", md: "60px" },
  },
  menuIcon: {
    display: { xs: "block", md: "none" },
    color: "white",
  },
  menuIconSvg: {
    width: "50px",
    height: "50px",
    padding: 0,
    margin: 0,
  },
  navbarLinks: {
    display: { xs: "none", md: "flex" },
    gap: "40px",
    width: "60%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  drawerList: {
    width: "100%",
    bgcolor: "#083C4C",
    height: "100%",
    padding: "0.5rem 2rem 2rem",
  },
  drawerListWrapper: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    my: 2,
  },
  drawerHeaderLine: {
    bgcolor: "white",
    width: "28%",
    height: "8px",
    borderRadius: "10px",
  },
  contactButtonWrapper: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "flex-end" },
    width: "100%",
    alignItems: { xs: "center", md: "flex-start" },
  },
  contactButton: {
    textAlign: "center",
    bgcolor: "#02C96A",
    width: "50%",
    padding: "8px 0",
    borderRadius: "28px",
    color: "#fff",
    fontWeight: 1000,
    fontSize: "20px",
    textTransform: "none",
  },
  heroContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    alignItems: { xs: "center", md: "flex-start" },
    height: "80vh",
    mt: 5,
  },
  heroTextContainer: {
    textAlign: { xs: "left", md: "left" },
    padding: { xs: "0 40px 0 0", md: "80px 0" },
    width: { xs: "100%", md: "60%" },
    // bgcolor: "red",
  },
  heroTitle: {
    fontWeight: 1000,
    fontSize: { xs: "40px", md: "60px" },
  },
  heroSubtitle: {
    marginTop: "20px",
    color: "#02AA69",
    fontWeight: 700,
    fontSize: { xs: "24px", md: "inherit" },
  },
  heroButtonContainer: {
    display: "flex",
    flexDirection: { md: "row-reverse", xs: "column", sm: "row-reverse" },
    alignItems: { xs: "left", md: "center", sm: "center" },
    justifyContent: "left",
    width: { xs: "100%", md: "100%", sm: "100%" },
    padding: { xs: "50px 0", md: "20px 0" },
    textAlign: "left",
    gap: 5,
  },
  viewProductsText: {
    fontWeight: 700,
    fontSize: { xs: "20px", md: "20px" },
  },
  heroButton: {
    textAlign: "center",
    bgcolor: "#02C96A",
    width: { xs: "225px", md: "30%" },
    padding: { xs: "10px 0", md: "8px 0" },
    borderRadius: "28px",
    color: "#fff",
    fontWeight: 1000,
    fontSize: "20px",
    // mt: { xs: 4, md: 0 },
    textTransform: "none",
  },
  heroImageContainer: {
    display: { md: "flex", xs: "none" },
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "flex-end", xs: "flex-start" },
    alignItems: "flex-end",
    width: { md: "40%", xs: "70%" },
    height: "80%",
    // bgcolor: "red",
  },
  heroImage: {
    objectFit: "contain",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: 700,
  },
  contactLink: {
    padding: { xs: "12px 140pxxs", md: "12px 40px" },
    bgcolor: "#02AA69",
    borderRadius: "60px",
    width: "100%",
  },
};

export default NavbarAndHero;
