import { Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../../app/store/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
  };

  return (
    <Stack
      justifyContent={"center"}
      sx={{ borderBottom: "1px solid gray", height: 64 }}
    >
      <Container sx={{ display: "flex" }}>
        <Stack direction="row" spacing={2} width={"100%"}>
          <Button onClick={() => navigate("/blogs")}>Blogs</Button>
          <Button onClick={() => navigate("/counter")}>Counter</Button>
          <Button onClick={() => navigate("/fakeApi")}>FakeApi</Button>
        </Stack>
        <Button onClick={handleLogout} variant="outlined" size="small">
          Выйти
        </Button>
      </Container>
    </Stack>
  );
};

export default Header;
