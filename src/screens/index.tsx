import { MainSection } from "./MainSection";
import { Navbar } from "./Navbar";
import { Box } from "@mui/material";
import { rootStyle } from "../styles/styles";
import { Footer } from "./Footer";

export const Bhive: React.FC = () => {
  return (
    <Box sx={rootStyle}>
      <Navbar />
      <MainSection />
      <Footer />
    </Box>
  );
};
