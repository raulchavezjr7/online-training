import { Outlet, Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./MyNav.css";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { styled } from "@mui/material/styles";

export const MyNav = () => {
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorMenu);
  const location = useLocation();
  const showNav = location.pathname === "/" || location.pathname === "/sign-in";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorMenu(null);
  };

  const smallMenu = () => {
    return showNav ? (
      <div className="small-menu">
        <h3 className="app-brand">
          <div>
            <PetsRoundedIcon
              className="pet-icon"
              style={{ fontSize: "xx-large" }}
            />
          </div>
          <div className="app-name-small">
            <Link className="nav-link" to="./home">
              VTA
            </Link>
          </div>
        </h3>
      </div>
    ) : (
      <div className="small-menu">
        <Button aria-haspopup="true" onClick={handleClick}>
          <MenuRoundedIcon
            style={{ fontSize: "xx-large" }}
            sx={{ bgcolor: "#F59F00", color: "#030303" }}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorMenu}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link className="nav-link-small" to="/home">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="nav-link-small" to="/my-learning">
              My Learning
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="nav-link-small" to="/profile">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="nav-link-small" to="/admin">
              Admin
            </Link>
          </MenuItem>
        </Menu>
        <h3 className="app-brand">
          <div>
            <PetsRoundedIcon
              className="pet-icon"
              style={{ fontSize: "xx-large" }}
            />
          </div>
          <div className="app-name-small">
            <Link className="nav-link" to="./home">
              VTA
            </Link>
          </div>
        </h3>
      </div>
    );
  };

  const bigMenu = () => {
    return showNav ? (
      <div className="link-container">
        <h3 className="app-brand">
          <div>
            <PetsRoundedIcon
              className="pet-icon"
              style={{ fontSize: "xx-large" }}
            />
          </div>
          <div className="app-name">
            <Link className="nav-link" to="./home">
              VetTech Academy
            </Link>
          </div>
        </h3>
      </div>
    ) : (
      <div className="link-container">
        <div>
          <CustomButton component={Link} to="/home">
            Home
          </CustomButton>
          <CustomButton component={Link} to="/my-learning">
            My Learning
          </CustomButton>
        </div>
        <h3 className="app-brand">
          <div>
            <PetsRoundedIcon
              className="pet-icon"
              style={{ fontSize: "xx-large" }}
            />
          </div>
          <div className="app-name">
            <Link className="nav-link" to="./home">
              VetTech Academy
            </Link>
          </div>
        </h3>
        <div>
          <CustomButton component={Link} to="/profile">
            Profile
          </CustomButton>
          <CustomButton component={Link} to="/admin">
            Admin
          </CustomButton>
        </div>
      </div>
    );
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "#F59F00", color: "#030303" }}>
        <Toolbar>
          {smallMenu()}
          {bigMenu()}
        </Toolbar>
      </AppBar>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

const CustomButton = styled(Button)({
  color: "#0f0f0f",
  fontFamily: '"Inter", sans-serif',
  fontOpticalSizing: "auto",
  fontStyle: "normal",
  fontSize: "inherit",
  "&:hover": {
    backgroundColor: "#0f0f0f15",
  },
}) as typeof Button;
