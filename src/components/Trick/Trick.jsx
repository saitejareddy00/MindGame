import {
 Button,
 Typography,
 Stack,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogContentText,
 DialogActions,
} from "@mui/material";
import { useState } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box } from "@mui/system";

const Trick = (props) => {
 const [open, setOpen] = useState(false);

 const handleClose = () => {
  setOpen(false);
  setTimeout(() => props.setNewGame((prev) => !prev), 100);
 };
 return (
  <>
   <Stack
    sx={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    }}
    spacing={2}
   >
    <Typography pt={5} px={5}>
     Choose any two digit Number from the shown chart, add together both digits and then substract
     the number from your original Number and remember the symbol beside it. Then click on reveal button to see the magic
    </Typography>

    <Typography px={5}>
     For Example if you choose 32: 3+2 = 5 and 32-5 = 27 remember the sign beside it and click on reveal 
    </Typography>
    <Button
     onClick={() => setOpen(true)}
     variant="contained"
     sx={{
      width: 100,
      mb: 5,
     }}
    >
     Reveal
    </Button>
   </Stack>
   <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
   >
    <DialogTitle id="alert-dialog-title">
     {"Sorry Got Your Mind!!!!"}
    </DialogTitle>

    <DialogContent>
     <Box
      sx={{
       padding: { xs: "0px", lg: "20px" },
       width: { xs: "250px", lg: "350px", md: "350px" },
      }}
     >
      <img
       src={props.magicSign}
       alt="answe here"
       style={{ width: "100%", filter: "drop-shadow(0 0 0.5rem gray)" }}
      />
     </Box>
     <DialogContentText id="alert-dialog-description">
      Can't believe it? Click the button below to try again.<br></br> Or close
      the dialog to start a new Game
     </DialogContentText>
    </DialogContent>
    <DialogActions>
     <Button
      variant="outlined"
      onClick={handleClose}
      startIcon={<ReplayIcon />}
     >
      Try Again
     </Button>
    </DialogActions>
   </Dialog>
  </>
 );
};

export default Trick;
