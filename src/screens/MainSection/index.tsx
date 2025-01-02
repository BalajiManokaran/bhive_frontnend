import { Box, Typography } from "@mui/material";
import {
  backgroundImage,
  backgroudImageContainer,
  mainSectionStyle,
  mainSectionfontStyle,
  mainSectionMDfontStyle,
} from "../../styles/styles";
import { CardSection } from "../CardSection";
import { ChooseUs } from "../ChooseUs";
import { Download } from "../Download";

export const MainSection = () => {
  return (
    <Box sx={mainSectionStyle}>
      <Box sx={backgroudImageContainer}>
        <Box sx={backgroundImage}>
          <Typography variant="h1" sx={mainSectionfontStyle}>
            Your own office with world-class amenities. Starting at{" "}
            <span>₹249/-!</span>
          </Typography>
        </Box>
        <Typography sx={mainSectionMDfontStyle}>
          Your own office with world-class amenities. Starting at{" "}
          <span>₹249/-!</span>
        </Typography>
        <CardSection />
        <ChooseUs />
        <Download />
      </Box>
    </Box>
  );
};
