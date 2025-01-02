import { Box, Typography } from "@mui/material";
import { footerContainerStyle } from "../../styles/styles";

export const Footer = () => {
  return (
    <Box sx={footerContainerStyle}>
      <Typography className="footerContent">
        © 2014 – 2024{" "}
        <span style={{ color: "rgb(255, 207, 75)" }}>
          Tusker Workspace Pvt. Ltd.
        </span>{" "}
        | All Rights Reserved
      </Typography>
      <Typography className="footerContent">
        Privacy Policy | Terms and Conditions | Refund Policy
      </Typography>
    </Box>
  );
};
