import { Box, Paper, Typography, Stack } from "@mui/material";

const DisplayTable = (props) => {
 const chillars = props.chillars;

 return (
  <div>
   {props.newGame ? (
    <div className="styleSigns">
     <Paper
      elevation={10}
      sx={{
       py: 3,
       mt: 3,
       display: "flex",
       justifyContent: "center",
      }}
     >
      <Stack direction="row" spacing={{ xs: 2, sm: 5, lg: 10 }}>
       {chillars &&
        chillars.length > 0 &&
        chillars.map((item, index) => (
         <Box key={index}>
          {item.map((sign, index1) => (
           <Stack
            key={index1}
            direction="row"
            spacing={{ xs: 1, sm: 1.5, lg: 3 }}
            alignItems="center"
            justifyContent="flex-end"
           >
            <Typography fontSize={25}>{sign.number}</Typography>
            <Box
             sx={{
              width: { xs: "18px", sm: "18px", lg: "25px" },
             }}
            >
             <img
              src={sign.value}
              alt="loading"
              style={{
               width: "100%",
              }}
             />
            </Box>
           </Stack>
          ))}
         </Box>
        ))}
      </Stack>
     </Paper>
    </div>
   ) : (
    <div className="styleSign">
     <Paper
      elevation={10}
      sx={{
       py: 3,
       mt: 3,
       display: "flex",
       justifyContent: "center",
      }}
     >
      <Stack direction="row" spacing={{ xs: 2, sm: 5, lg: 10 }}>
       {chillars &&
        chillars.length > 0 &&
        chillars.map((item, index) => (
         <Box key={index}>
          {item.map((sign, index1) => (
           <Stack
            key={index1}
            direction="row"
            spacing={{ xs: 1, sm: 1.5, lg: 3 }}
            alignItems="center"
            justifyContent="flex-end"
           >
            <Typography fontSize={25}>{sign.number}</Typography>
            <Box
             sx={{
              width: { xs: "18px", sm: "18px", lg: "25px" },
             }}
            >
             <img
              src={sign.value}
              alt="loading"
              style={{
               width: "100%",
              }}
             />
            </Box>
           </Stack>
          ))}
         </Box>
        ))}
      </Stack>
     </Paper>
    </div>
   )}
  </div>
 );
};

export default DisplayTable;
