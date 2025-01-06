import { Box, Typography } from "@mui/material";
import Image from "next/image";
import korg from "../../../public/korg.png";
import roland from "../../../public/roland.png";
import ni from "../../../public/ni.png";

const brands = [korg, roland, ni];

const Featured = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.FeaturedTitle}>Featured clients</Typography>
      <Box sx={styles.featuredBrandsContainer}>
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt="featured brands"
            style={{ width: "100px", height: "100%" }}
          />
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    bgcolor: "#fff",
    color: "#000000",
    width: "100%",
    minHeight: "110vh",
    padding: { xs: "36px 40px", md: "96px 130px" },
  },
  FeaturedTitle: {
    fontWeight: 600,
    fontSize: { xs: "16px", md: "30px" },
  },
  featuredBrandsContainer: {
    display: "flex",
    alignItems: "center",
  },
};

export default Featured;
