import { SxProps, Theme } from "@mui/material";

export const rootStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  overflow: "auto",
  bgcolor: "rgb(249,249,249)",
};

export const mainSectionStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  paddingTop: "90px",
  maxWidth: "1440px",
};

export const backgroudImageContainer: SxProps<Theme> = {
  maxWidth: "1200px",
  width: "100%",
  margin: "0px 20px",
};

export const backgroundImage: SxProps<Theme> = (theme) => ({
  width: "100%",
  backgroundImage: `url("https://booking-stag.bhiveworkspace.com/assets/HeroDesktop-dd965ebf.svg")`,
  backgroundPosition: "center center", // Center the background image
  backgroundSize: "cover", // Ensure the image covers the entire container
  backgroundRepeat: "no-repeat", // Ensure the background image doesn't repeat
  position: "relative", // Set position to relative
  [theme.breakpoints.down("md")]: {
    height: "320px",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundImage: `url("https://booking-stag.bhiveworkspace.com/assets/HeroMobile-041216cf.svg")`,
    backgroundPosition: "center center", // Center the background image
    backgroundSize: "contain", // Ensure the image covers the entire container
    backgroundRepeat: "no-repeat", //
    width: "100%",
  },
});

export const mainSectionfontStyle: SxProps<Theme> = (theme) => ({
  margin: "0px",
  lineHeight: 1.5,
  width: "700px",
  padding: "80px 0px",
  fontWeight: "bold",
  color: "rgb(38, 50, 56)",
  [theme.breakpoints.down("lg")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
    width: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
});

export const mainSectionMDfontStyle: SxProps<Theme> = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    width: "350px",
    fontSize: "20px",
    fontWeight: 600,
    textAlign: "center",
    margin: "auto",
    color: "rgb(38, 50, 56)",
    display: "block",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
});

export const cardSectionFontStyle: SxProps<Theme> = (theme) => ({
  margin: "36px 0px 40px",
  lineHeight: 1.5,
  [theme.breakpoints.down(1440)]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    marginTop: "50px",
  },
});

export const cardSectionGridStyle: SxProps<Theme> = (theme) => ({
  gridTemplateColumns: {
    sm: "repeat(1, minmax(320px, 370px))", // Up to 900px
    md: "repeat(2, minmax(320px, 370px))", // 900px to 1200px
    lg: "repeat(3, minmax(320px, 370px))", // Beyond 1200px
  },
  display: "grid",
  justifyContent: "center",
});

export const cardSectionContainerStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "0.93px solid rgb(224, 224, 224)",
  borderRadius: "7.46px",
  background: "rgb(255,255,255)",
  padding: "20px 16px 16px ",
  boxShadow: "rgb(224,224,224) 0px 1px 8px 0px",
});

export const cardSectionHeaderStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const cardSectionDistanceBoxStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "44px",
  height: "44px",
  borderRadius: "6px",
  backgroundColor: "rgb(248, 248, 248)",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)", // Add shadow on hover
  },
});

export const cardSectionImgContainerStyle: SxProps<Theme> = (theme) => ({
  marginTop: "22px",
  height: "100%",
  width: "100%",
});

export const cardSectionImageStyle: SxProps<Theme> = (theme) => ({
  position: "relative",
  height: "175px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

export const cardSectionLeftButtonContainer: SxProps<Theme> = (theme) => ({
  marginTop: "21px !important",
  height: "58px",
  width: "35%",
  backgroundColor: "rgb(249, 249, 249)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 8px 7px",
  border: "0.5px solid rgb(229, 221, 221)",
  borderRadius: "5px",
  position: "relative",
  boxShadow: "none",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 2.5px 6px rgba(0, 0, 0, 0.4)", // Add shadow on hover
  },
  ".containerBox": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "80%",
    ".dayPasstext": {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "rgb(101, 98, 76)",
    },
    ".priceText": {
      fontSize: "18px",
      fontWeight: 600,
      width: "100%",
      overflow: "hidden",
      span: {
        fontSize: "12px",
        fontWeight: 500,
        color: " rgb(101, 98, 76)",
      },
    },
  },
});

export const cardSectionRightButtonContainer: SxProps<Theme> = (theme) => ({
  marginTop: "21px !important",
  height: "58px",
  width: "60%",
  backgroundColor: "rgb(255, 207, 75)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 8px 7px",
  border: "0.5px solid rgb(255, 196, 33)",
  borderRadius: "5px",
  position: "relative",
  boxShadow: "0px 2px 4px 0px rgb(224, 224, 224)",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 2.5px 6px rgba(0, 0, 0, 0.4)",
  },
  ".containerBox": {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "80%",
    ".dayPasstext": {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "rgb(101, 98, 76)",
    },
    ".priceText": {
      fontSize: "18px",
      fontWeight: 600,
      width: "100%",
      overflow: "hidden",
      s: {
        fontSize: "10px",
        fontWeight: 500,
        color: "rgb(101, 98, 76)",
      },
      span: {
        fontSize: "12px",
        fontWeight: 500,
        color: " rgb(101, 98, 76)",
      },
    },
  },
  ".discountSection": {
    position: "absolute",
    top: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center", // Equivalent to -webkit-box-pack: center
    width: "max-content",
    background: "rgb(38, 50, 56)",
    borderRadius: "3px",
    padding: "4px 6px",
    span: {
      fontSize: "8px",
      fontWeight: 500,
      color: "rgb(255, 255, 255)",
    },
  },
});

export const footerContainerStyle: SxProps<Theme> = (theme) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  backgroundColor: "rgb(38, 50, 56)",
  padding: "10px",
  fontSize: "14px",
  fontWeight: 400,
  color: "rgb(116, 116, 116)",
  ".footerContent": {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: 1.2675,
    },
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    padding: "10px 4px",
  },
});

export const choouseUsText: SxProps<Theme> = (theme) => ({
  margin: "66px 0px 0px",
  width: "100%",
  lineHeight: 1.5,
  [theme.breakpoints.down("xl")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
});

export const chooseUsGridStyle: SxProps<Theme> = (theme) => ({
  margin: "40px 0px 0px",
  display: "grid",
  color: " rgb(38, 50, 56)",
  gridTemplateColumns: {
    lg: "repeat(4, 1fr)",
    xs: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("lg")]: {
    margin: "40px auto",
    width: "850px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "30px",
    gap: "12px",
    width: "unset",
  },
});

export const chooseUsCardStyle = (theme: Theme): SxProps<Theme> => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "24px",
  gap: "16px",
  height: "80px",
  "&:hover": {
    transition: "transform 0.3s",
    transform: "translate(5px, -5px)",
    bgcolor: "rgb(255,255,255)",
  },
  ".chooseUsText": {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 1.5,
    color: " rgb(38, 50, 56)",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
});

export const downloadTextStyle = (theme: Theme): SxProps<Theme> => ({
  lineHeight: 1.5,
  margin: "120px 0px 0px",
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
    fontSize: "24px",
  },
});

export const downloadBoxStyle = (theme: Theme): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end", // Instead of -webkit-box-align, use alignItems
  borderRadius: "1rem",
  backgroundColor: "rgb(255, 255, 255)", // Use backgroundColor for CSS in JS
  padding: "70px 40px 27px 0px",
  margin: "200px 0px 40px",
  boxShadow: "rgb(224, 224, 224) 0px 1px 8px 0px",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    marginTop: "18px",
    height: "392px",
    padding: "27px 12px 12px", // Applying padding
    display: "flex", // Ensure flexbox is applied
    alignItems: "baseline", // Align items to the baseline
    justifyContent: "flex-end", // Align content to the end (bottom for flex column)
  },
  ".downloadImg": {
    left: "40px",
    bottom: "0px",
    position: "absolute",
    [theme.breakpoints.down("lg")]: {
      left: "10px",
    },
    [theme.breakpoints.down("md")]: {
      height: "300px",
      left: "50%",
      transform: "translateX(-50%)",
      top: "20px",
    },
  },
});

export const DownloadParaStyle = (theme: Theme): SxProps<Theme> => ({
  color: "rgb(101, 98, 76)",
  width: "400px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

export const DownloadStoreIconStyle = (theme: Theme): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "row",
  width: "400px",
  gap: "24px",
  marginTop: "40px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "center",
  },
});
