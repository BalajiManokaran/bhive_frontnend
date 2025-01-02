import { Box, Typography } from "@mui/material";
import {
  downloadBoxStyle,
  DownloadParaStyle,
  DownloadStoreIconStyle,
  downloadTextStyle,
} from "../../styles/styles";

export const Download = () => {
  return (
    <>
      <Typography variant="h2" sx={downloadTextStyle}>
        Download our app now
      </Typography>
      <Box sx={downloadBoxStyle}>
        <img
          src="https://booking-stag.bhiveworkspace.com/assets/DownloadSection-5c250488.svg"
          alt="download-placeholders"
          className="downloadImg"
        />
        <Typography variant="h4" sx={DownloadParaStyle}>
          Boost your productivity with the BHIVE Workspace app. Elevate your
          workspace, collaborate efficiently, and unlock exclusive perks.
        </Typography>
        <Box sx={DownloadStoreIconStyle}>
          <img
            src="https://booking-stag.bhiveworkspace.com/assets/PlaystoreIcon-5dc60923.svg"
            alt="play-store-icon"
            height={"45px"}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.bhive.workspace",
                "_blank"
              )
            }
          />
          <img
            src="https://booking-stag.bhiveworkspace.com/assets/AppStoreIcon-ba29aff2.svg"
            alt="app-store-icon"
            height={"45px"}
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/bhive-workspace/id6463923684",
                "_blank"
              )
            }
          />
        </Box>
      </Box>
    </>
  );
};
