import { TypeAnimation } from "react-type-animation";
import { text } from "../../constants/loveLetter";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import bg from "../../assets/background.jpeg";

const FinalPage = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const RenderTextAsTyping = () => {
    return (
      <Box>
        <img
          src={bg}
          alt="ahda"
          className={smallScreen ? "fixedImage-small" : "fixedImage"}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="glassBox">
            <TypeAnimation
              style={{
                padding: "15px",
                whiteSpace: "pre-line",
                height: "100%",
                display: "block",
                fontFamily: "monospace",
                fontSize: "20px",
              }}
              sequence={[text, 1000, ""]}
              repeat={Infinity}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return <RenderTextAsTyping />;
};

export { FinalPage };
