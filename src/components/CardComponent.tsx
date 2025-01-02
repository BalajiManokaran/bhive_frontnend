import { Box, Stack, Typography } from "@mui/material";
import {
  cardSectionContainerStyle,
  cardSectionDistanceBoxStyle,
  cardSectionHeaderStyle,
  cardSectionImageStyle,
  cardSectionImgContainerStyle,
  cardSectionLeftButtonContainer,
  cardSectionRightButtonContainer,
} from "../styles/styles";

interface CardProps {
  id: string;
  name: string;
  images: any;
  google_maps_url: string;
  day_pass_price: number;
}

export const CardComponent: React.FC<CardProps> = ({
  id,
  name,
  images,
  google_maps_url,
  day_pass_price,
}) => {
  return (
    <Box sx={cardSectionContainerStyle}>
      <Box sx={cardSectionHeaderStyle}>
        <Typography variant="h5">{name}</Typography>
        <Box sx={cardSectionDistanceBoxStyle}>
          <img
            src="https://booking-stag.bhiveworkspace.com/assets/DistanceIcon-9a31ee6d.svg"
            alt="Distance Icon"
            onClick={() => window.open(google_maps_url, "_blank")}
          />
        </Box>
      </Box>
      <Box sx={cardSectionImgContainerStyle}>
        <Box sx={cardSectionImageStyle}>
          {images?.map((item: string, index: number) => {
            return <img src={item} alt="test-img" key={index} />;
          })}
        </Box>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={cardSectionLeftButtonContainer}>
            <Box className="containerBox">
              <Typography className="dayPasstext">Daypass</Typography>
              <Typography className="priceText">
                ₹{day_pass_price}
                <span>/Day</span>
              </Typography>
            </Box>
            <img
              src="https://booking-stag.bhiveworkspace.com/assets/PassIcon-ef7c1df3.svg"
              alt="arrow-Image"
            />
          </Box>
          <Box sx={cardSectionRightButtonContainer}>
            <Box className="containerBox">
              <Typography className="dayPasstext">Bulk Day Pass</Typography>
              <Typography className="priceText">
                <s>₹4990</s> ₹3992<span>/Day</span>
              </Typography>
            </Box>
            <Box>
              <img
                src="https://booking-stag.bhiveworkspace.com/assets/PassIcon-ef7c1df3.svg"
                alt="arrow-Image"
              />
              <Box className="discountSection">
                <span>20% Discount</span>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
