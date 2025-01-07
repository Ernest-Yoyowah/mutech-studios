import React from "react";
import { Box, Typography, Grid } from "@mui/material";

interface Plugin {
  id: number;
  title: string;
  image: string;
}

interface PluginCardProps {
  plugin: Plugin;
  large?: boolean;
}

const FeaturedPlugins: React.FC = () => {
  const plugins: Plugin[] = [
    {
      id: 1,
      title: "Synthage",
      image: "https://i.ytimg.com/vi/ZUvTZlsJdmM/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Nord Stage 2",
      image: "https://i.ytimg.com/vi/QDOlkirhboo/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Plugin 3",
      image:
        "https://media.istockphoto.com/id/1459417682/photo/music-background-with-keys-and-computer-mouse-flat-lay-copy-space.jpg?s=612x612&w=0&k=20&c=Ha0EGP4P4IzHah5onONSxuDn4SwF0zLHts0padyRE2U=",
    },
    {
      id: 4,
      title: "Ableton Live 11",
      image:
        "https://www.attackmagazine.com/wp-content/uploads/2023/04/Cover-Images-1-1.jpg",
    },
    {
      id: 5,
      title: "Plugin 5",
      image:
        "https://splice.com/blog/wp-content/uploads/2022/05/4_Free_VSTs_Syndication_BlogPost-1200x750@2x.jpg",
    },
  ];

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.FeaturedTitle}>Top Plugins</Typography>
      <Grid container spacing={3} sx={styles.gridContainer}>
        {/* First Row */}
        {plugins.slice(0, 3).map((plugin) => (
          <Grid item xs={12} md={4} key={plugin.id}>
            <PluginCard plugin={plugin} />
          </Grid>
        ))}

        {/* Second Row */}
        <Grid item xs={12} md={8}>
          <PluginCard plugin={plugins[3]} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PluginCard plugin={plugins[4]} />
        </Grid>
      </Grid>
    </Box>
  );
};

const PluginCard: React.FC<PluginCardProps> = ({ plugin, large }) => {
  return (
    <Box sx={{ ...styles.card, ...(large ? styles.largeCard : {}) }}>
      <Box
        sx={{
          ...styles.imageContainer,
          backgroundImage: `url(${plugin.image})`,
        }}
      >
        <Typography sx={styles.cardText}>{plugin.title}</Typography>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    bgcolor: "#F9F9F9",
    color: "#000000",
    width: "100%",
    minHeight: "100vh",
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
  card: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      transform: "scale(1.03)",
      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
    },
  },
  largeCard: {
    height: "400px", // Increased height for the large card
  },
  imageContainer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px", // Increased height for small cards
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "16px",
    color: "#FFFFFF",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fallback color
  },
  cardText: {
    fontWeight: 600,
    fontSize: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "8px 12px",
    borderRadius: "8px",
    textAlign: "center",
  },
};

export default FeaturedPlugins;
