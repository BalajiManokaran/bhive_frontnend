import { AppBar } from "@mui/material";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <AppBar>
      <img
        src="https://booking-stag.bhiveworkspace.com/assets/BhiveLogo-7ed85fe7.svg"
        alt="Bhive Group Logo"
        style={{ height: "40px", width: "125px", cursor: "pointer" }}
        onClick={() => (window.location.href = "/")}
      />
      <img
        src="https://booking-stag.bhiveworkspace.com/assets/CallRectangle-0c6a4526.svg"
        alt="Bhive Group Contact Logo"
        style={{ cursor: "pointer" }}
      />
    </AppBar>
  );
};
