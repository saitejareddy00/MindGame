import { Link, Stack } from "@mui/material";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Stack>
        <Link
          onClick={() => navigate("mindgame")}
          sx={{ fontSize: "100px", textDecoration: "none", color: "white" }}
        >
          Game
        </Link>
      </Stack>
    </Stack>
  );
};

export { HomePage };
