import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Container } from "@mui/material";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default Layout;
