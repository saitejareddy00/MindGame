import { useMediaQuery, useTheme } from "@mui/material";

const CustomImage = ({ imageSrc }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <img
      src={imageSrc}
      className="logo"
      alt="Vite logo"
      height={smallScreen ? "300px" : "600px"}
    />
  );
};

export { CustomImage };
