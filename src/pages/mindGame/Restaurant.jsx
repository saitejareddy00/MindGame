import { useState } from "react";
import ifno from "../../assets/bubu/ifnogif.gif";
import eating from "../../assets/bubu/food.gif";
import bubuHappy from "../../assets/bubu/bubuhappy.jpg";
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router";
import { CustomImage } from "../../components/CustomImage";

const getRandom = () => {
  const x = Math.floor(Math.random() * 600 + 1);
  const y = Math.floor(Math.random() * 700 + 1);

  return { x, y };
};

const Restaurant = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [ordinates, setordinates] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  let image = accepted ? bubuHappy : eating;
  const [ifNo, setIfNO] = useState(false);
  if (ifNo) {
    image = ifno;
  }

  const onClickHandler = () => {
    setAccepted(true);
    setHovered(false);
    setordinates({ x: 0, y: 0 });
    setTimeout(() => navigate("/proposal"), 4000);
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
      {accepted && <h1 className="thankyouzoom">Thank you</h1>}
      <Box>
        <CustomImage imageSrc={image} />
      </Box>
      <h1>{"Eat What ever you want!"}</h1>
      <h2>{accepted ? "yayyyy" : "can i ask you something??"}</h2>
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
          onMouseLeave={() => setTimeout(() => setIfNO(false), 2000)}
        >
          No Not at all
        </button>
      </Stack>
    </Box>
  );
};

export { Restaurant };
