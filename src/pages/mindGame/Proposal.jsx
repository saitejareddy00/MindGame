import { useState } from "react";
import ifno from "../../assets/bubu/ifnogif.gif";
import rose from "../../assets/bubu/roseflower.gif";
import happymeandyou from "../../assets/bubu/bubushowinglove.gif";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import ReactConfetti from "react-confetti";
import { CustomImage } from "../../components/CustomImage";
const getRandom = () => {
  const x = Math.floor(Math.random() * 600 + 1);
  const y = Math.floor(Math.random() * 700 + 1);

  return { x, y };
};

const ProposalPage = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [ordinates, setordinates] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  let image = accepted ? happymeandyou : rose;
  const [ifNo, setIfNO] = useState(false);
  if (ifNo) {
    image = ifno;
  }

  const onClickHandler = () => {
    setAccepted(true);
    setHovered(false);
    setordinates({ x: 0, y: 0 });
    setTimeout(() => navigate("/finalPage"), 4000);
  };

  const onMouseEntered = () => {
    if (!accepted) {
      setHovered(true);
      setIfNO(true);
      setordinates(getRandom());
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {accepted && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
        />
      )}
      <Box>
        <CustomImage imageSrc={image} />
      </Box>
      <h1>{accepted ? "yayyyy" : "Take this Rose and accept my Love??"}</h1>
      <Stack direction="row" gap={2} justifyContent="center">
        <button onClick={onClickHandler}>yes Obviously</button>
        <button
          className="random"
          style={{
            position: hovered ? "absolute" : "relative",
            top: ordinates.x,
            left: ordinates.y,
          }}
          onClick={onMouseEntered}
          onMouseEnter={onMouseEntered}
          onMouseLeave={() => setTimeout(() => setIfNO(false), 1000)}
        >
          No Not at all
        </button>
      </Stack>
    </Box>
  );
};

export { ProposalPage };
