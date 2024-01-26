import { TypeAnimation } from "react-type-animation";
import { text } from "../../constants/loveLetter";
import { Box } from "@mui/material";
import bg from "../../assets/background.jpeg";

const FinalPage = () => {
  const RenderTextAsTyping = () => {
    return (
      <Box>
        <img src={bg} alt="ahda" className="fixedImage" />
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
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
                height: "700px",
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
