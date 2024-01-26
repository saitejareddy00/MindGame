import { useState } from "react";
import ifno from "../../assets/bubu/ifnogif.gif";
import date from "../../assets/bubu/shallwegoonadate.gif";
import bubuHappy from "../../assets/bubu/bubuhappy.jpg";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import ReactConfetti from "react-confetti";
import { CustomImage } from "../../components/CustomImage";
const getRandom = () => {
  const x = Math.floor(Math.random() * 600 + 1);
  const y = Math.floor(Math.random() * 700 + 1);

  return { x, y };
};

const DatePage = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [ordinates, setordinates] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  let image = accepted ? bubuHappy : date;
  const [ifNo, setIfNO] = useState(false);
  if (ifNo) {
    image = ifno;
  }

  const onClickHandler = () => {
    setAccepted(true);
    setHovered(false);
    setordinates({ x: 0, y: 0 });
    setTimeout(() => navigate("/restaurant"), 4000);
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
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
      <h1>{accepted ? "yayyyy" : "Hey Srihitha Can we go on a Date??"}</h1>
      <Stack direction="row" gap={2} justifyContent="center">
        <button onClick={onClickHandler}>yes Obviously</button>
        <button
          className="random"
          style={{
            position: hovered ? "absolute" : "relative",
            top: ordinates.x,
            left: ordinates.y,
          }}
          onMouseEnter={onMouseEntered}
          onClick={onMouseEntered}
          onMouseLeave={() => setTimeout(() => setIfNO(false), 1000)}
        >
          No Not at all
        </button>
      </Stack>
    </Box>
  );
};

export { DatePage };
