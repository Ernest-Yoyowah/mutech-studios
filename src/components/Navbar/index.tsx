"use client";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Button,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import bgImage from "../../../public/bg1.png";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NavbarAndHero = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        bgcolor: "#083C4C",
        color: "white",
        width: "100%",
        minHeight: "110vh",
        padding: { xs: "36px 40px", md: "32px 130px" },
        fontWeight: "bold",
        display: "flex",
        justifyContent: { md: "space-between", xs: "flex-start" },
        flexDirection: "column",
      }}
    >
      {/* Navbar Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Company Name */}
          <Link href="/" passHref>
            <Typography
              sx={{ fontWeight: 1000, fontSize: { xs: "40px", md: "60px" } }}
            >
              mtech.std
            </Typography>
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon
              sx={{
                width: "50px",
                height: "50px",
                padding: 0,
                margin: 0,
              }}
            />
          </IconButton>
        </Box>

        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "40px",
            width: "60%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {["Home", "About", "Services", "Blog", "Contact"].map(
            (item, index) => (
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                key={index}
                passHref
              >
                <Typography
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 700,
                    ...(item === "Contact" && {
                      padding: "12px 42px",
                      bgcolor: "#02AA69",
                      // width: "100%",
                      borderRadius: "60px",
                    }),
                  }}
                >
                  {item}
                </Typography>
              </Link>
            )
          )}
        </Box>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List
            sx={{
              width: "100%",
              bgcolor: "#083C4C",
              height: "100%",
              padding: "1rem 0",
              // boxShadow: "200px", add some cool shadow
              // borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  width: "28%",
                  height: "8px",
                  borderRadius: "10px",
                }}
              />
            </Box>
            {["Home", "About", "Services", "Blog"].map((item, index) => (
              <Link
                href={`/${item.toLowerCase().replace(" ", "")}`}
                key={index}
                passHref
                style={{ textDecoration: "none" }}
              >
                <ListItemButton
                  component="a"
                  onClick={toggleDrawer(false)}
                  sx={{
                    textAlign: "center",
                    margin: "0.5rem 0",
                    textTransform: "none",
                    "&:hover": {
                      transition: "background-color 0.3s ease",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      color: "white",
                      fontSize: "208px",
                      letterSpacing: "0.1rem",
                      fontWeight: 1000,
                    }}
                  />
                </ListItemButton>
              </Link>
            ))}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Change order for mobile
                justifyContent: { md: "flex-end" },
                width: "100%",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                sx={{
                  textAlign: "center",
                  bgcolor: "#02C96A",
                  width: "50%",
                  padding: "8px 0",
                  borderRadius: "28px",
                  color: "#fff",
                  fontWeight: 1000,
                  fontSize: "20px",
                  textTransform: "none",
                }}
              >
                Contact
              </Button>
            </Box>
          </List>
        </Drawer>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          // justifyContent: { md: "flex-end" },
          width: "100%",
          alignItems: { xs: "center", md: "flex-start" },
          height: "80vh",
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "left", md: "left" },
            padding: { xs: "40px 0", md: "80px 0" },
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Typography
            sx={{ fontWeight: 1000, fontSize: { xs: "40px", md: "60px" } }}
          >
            Yo, Musicians...
            <br /> Ready to level sound?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#02AA69",
              fontWeight: 700,
              fontSize: { xs: "24px", md: "inherit" },
            }}
          >
            mutech studios empowers musicians with vst & daws into their music.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row-reverse", xs: "column" },
              alignItems: { xs: "left", md: "center" },
              justifyContent: "left",
              width: { xs: "100%", md: "100%" },
              padding: { xs: "50px 0", md: "20px 0" },
              textAlign: "left",
              gap: { md: 5, xs: 0 },
            }}
          >
            {/* <Image src="/bg-icon.png" width={300} height={300} alt="logo" /> */}
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "20px", md: "20px" },
              }}
            >
              View our products
            </Typography>
            <Button
              sx={{
                textAlign: "center",
                bgcolor: "#02C96A",
                width: { xs: "60%", md: "30%" },
                padding: { xs: "10px 0", md: "8px 0" },
                borderRadius: "28px",
                color: "#fff",
                fontWeight: 1000,
                fontSize: "20px",
                mt: { xs: 4, md: 0 },
                textTransform: "none",
              }}
            >
              Request a quote
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stacks vertically on small screens, horizontally on medium+
            justifyContent: { md: "flex-end", xs: "center" }, // Align right on medium screens, center on small
            alignItems: "flex-end", // Ensures the content is centered vertically
            // bgcolor: "red", // Add background color for testing
            width: "30%", // Ensure it takes full width of its container
            height: "80%",
          }}
        >
          <Image
            src={bgImage}
            width={300} // Adjust image size
            height={300}
            alt="bg image"
            style={{ objectFit: "contain" }} // Adjust image display within container
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarAndHero;
