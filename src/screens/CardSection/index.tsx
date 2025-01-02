import { Typography } from "@mui/material";
import {
  cardSectionFontStyle,
  cardSectionGridStyle,
} from "../../styles/styles";
import Grid from "@mui/material/Grid2";
import { CardComponent } from "../../components/CardComponent";
import axios from "axios";
import { useEffect, useState } from "react";

interface Location {
  id: string;
  name: string;
  images: object;
  google_maps_url: string;
  day_pass_price: number;
}

export const CardSection = () => {
  const [locationData, setLocationData] = useState<Location[]>([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      const result = await axios.get(
        "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json"
      );

      let google_maps_url = "";

      const modifiedArr = result?.data?.map((item: any) => {
        const images = item.images.map(
          (image: String) =>
            `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${image}`
        );
        google_maps_url = item.google_maps_url
          ? item.google_maps_url
          : google_maps_url;

        return { ...item, images, google_maps_url };
      });

      setLocationData(modifiedArr);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <Typography variant="h2" sx={cardSectionFontStyle}>
        Our Spaces
      </Typography>
      <Grid container spacing={5.625} sx={cardSectionGridStyle}>
        {locationData?.map((item: any, index: number) => {
          return (
            <CardComponent
              key={item?.id}
              id={item?.id}
              name={item?.name}
              images={item?.images}
              google_maps_url={item?.google_maps_url}
              day_pass_price={item?.day_pass_price}
            />
          );
        })}
      </Grid>
    </>
  );
};
