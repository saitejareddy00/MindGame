import "./App.css";
import { Box, Grid } from "@mui/material";
import DisplayTable from "./components/displayTable/DisplayTable";
import MyAppBar from "./components/MyAppBar/MyAppBar";
import Trick from "./components/Trick/Trick";
import { useEffect, useState } from "react";
import GetRandomSigns from "./constants/ZodiacSigns";
function App() {
 const [chillars, setChillars] = useState();
 const [magicSign, setMagicSign] = useState();
 const [newGame, setNewGame] = useState(false);
 useEffect(() => {
  const { magicSign, chillars } = GetRandomSigns();
  setChillars(chillars);
  setMagicSign(magicSign);
 }, [newGame]);
 return (
  <Box height="100vh">
   <MyAppBar setNewGame={setNewGame} />
   <Grid container spacing={{ xs: 2, lg: 10 }}>
    <Grid item lg={6} xs={12}>
     <Trick magicSign={magicSign} setNewGame={setNewGame} />
    </Grid>
    <Grid item xs={12} lg={6} md={10}>
     <DisplayTable chillars={chillars} newGame={newGame} />
    </Grid>
   </Grid>
Designed by Teja 
  </Box>
 );
}

export default App;
