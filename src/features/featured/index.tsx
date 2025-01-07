import { Box } from "@mui/material";
import Image from "next/image";

// TODO: import all images in one file
import roland from "../../../public/roland.png";
import ni from "../../../public/ni.png";
// import korg from "../../../public/korg.png";
// import nord from "../../../public/node.png";
// import fl from "../../../public/fl.png";
// import ik from "../../../public/ik.png";
import ableton from "../../../public/ableton.png";
import studio1 from "../../../public/studio1.jpeg";
import arturia from "../../../public/arturia.png";

const brands = [ni, roland, ableton, studio1, arturia];

const Featured = () => {
  return (
    <Box sx={styles.container}>
      {/* <Typography sx={styles.FeaturedTitle}>Featured clients</Typography> */}
      <Box sx={styles.featuredBrandsContainer}>
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt="featured brands"
            style={{ width: "100%", height: "100%" }}
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
    // minHeight: "110vh",
    padding: { xs: "0px 40px", md: "0px 130px" },
  },
  FeaturedTitle: {
    fontWeight: 600,
    fontSize: { xs: "16px", md: "30px" },
  },
  featuredBrandsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    padding: { xs: "36px 0px", md: "64px 0px" },
    alignItems: "center",
  },
};

export default Featured;
