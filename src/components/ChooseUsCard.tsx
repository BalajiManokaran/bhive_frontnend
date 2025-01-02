import { Box, Typography, useTheme } from "@mui/material";
import { chooseUsCardStyle } from "../styles/styles";

interface BoxCard {
  id: number;
  addRightBorder: boolean;
  addBottomBorder: boolean;
  imageURL: string;
  chooseUsText: string;
}

export const ChooseUsCard: React.FC<BoxCard> = ({
  id,
  addRightBorder,
  addBottomBorder,
  imageURL,
  chooseUsText,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...chooseUsCardStyle(theme),
        ...(addRightBorder && {
          borderRight: "0.6px solid rgb(224, 224, 224)",
        }),
        ...(addBottomBorder && {
          borderBottom: "0.6px solid rgb(224, 224, 224)",
        }),
        [theme.breakpoints.down("lg")]: {
          borderRight: id % 2 === 0 ? "0.6px solid rgb(224, 224, 224)" : "none",
          borderBottom: id < 6 ? "0.6px solid rgb(224, 224, 224)" : "none",
        },
        [theme.breakpoints.down("md")]: {
          borderBottom: "0.6px solid rgb(224, 224, 224)",
          borderRight: "none",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(255, 255, 255)",
          boxShadow: "rgb(224, 224, 224) 0px 2px 4px 0px",
          borderRadius: "6px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          padding: "8px 0px 12px",
          height: "80px",
        },
      }}
    >
      <img src={imageURL} alt="CommunityIcon" />
      <Typography className="chooseUsText">{chooseUsText}</Typography>
    </Box>
  );
};
