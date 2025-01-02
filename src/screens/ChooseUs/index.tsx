import { Box, Typography } from "@mui/material";
import { chooseUsGridStyle, choouseUsText } from "../../styles/styles";
import { ChooseUsCard } from "../../components/ChooseUsCard";

// Card Data Array
const chooseUsData = [
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/CommunityIcon-2cc31015.svg",
    chooseUsText: "Community Events",
    addRightBorder: true,
    addBottomBorder: true,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/GymIcon-3f889a31.svg",
    chooseUsText: "Gym Facilities",
    addRightBorder: true,
    addBottomBorder: true,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/WifiIcon-7c9e5728.svg",
    chooseUsText: "High-Speed WiFi",
    addRightBorder: true,
    addBottomBorder: true,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/CupIcon-d454ab41.svg",
    chooseUsText: "Cafe & Tea Bar",
    addRightBorder: false,
    addBottomBorder: true,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/AffordableIcon-2f9a51d1.svg",
    chooseUsText: "Affordable",
    addRightBorder: true,
    addBottomBorder: false,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/LoungeIcon-b3c787b9.svg",
    chooseUsText: "Comfort Lounges",
    addRightBorder: true,
    addBottomBorder: false,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/ClockIcon-fe81004c.svg",
    chooseUsText: "Quick Booking",
    addRightBorder: true,
    addBottomBorder: false,
  },
  {
    imageURL:
      "https://booking-stag.bhiveworkspace.com/assets/SportsIcon-c40ed066.svg",
    chooseUsText: "Sports Area",
    addRightBorder: false,
    addBottomBorder: false,
  },
];

export const ChooseUs = () => {
  return (
    <>
      <Typography variant="h2" sx={choouseUsText}>
        Why Choose us?
      </Typography>
      <Box sx={chooseUsGridStyle}>
        {chooseUsData.map((card, index) => (
          <ChooseUsCard
            key={index}
            id={index}
            addRightBorder={card.addRightBorder}
            addBottomBorder={card.addBottomBorder}
            imageURL={card.imageURL}
            chooseUsText={card.chooseUsText}
          />
        ))}
      </Box>
    </>
  );
};
