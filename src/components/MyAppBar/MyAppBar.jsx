import {
 Box,
 IconButton,
 Toolbar,
 Typography,
 AppBar,
 Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ReplayIcon from "@mui/icons-material/Replay";

const MyAppBar = (props) => {
 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
    <Toolbar>
     <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
     >
      <MenuIcon />
     </IconButton>
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Guessing Your Mind!!
     </Typography>
     <Button
      color="inherit"
      onClick={() => {
       props.setNewGame((prev) => !prev);
      }}
      startIcon={<ReplayIcon />}
     >
      Restart
     </Button>
    </Toolbar>
   </AppBar>
  </Box>
 );
};

export default MyAppBar;
