import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./MyNav.css";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export const MyNav = () => {
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorMenu);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorMenu(null);
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "#F59F00", color: "#030303" }}>
        <Toolbar>
          <div className="small-menu">
            <Button aria-haspopup="true" onClick={handleClick}>
              <MenuRoundedIcon style={{ fontSize: "xx-large" }} sx={{ bgcolor: "#F59F00", color: "#030303", }} />
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
                <Link className="nav-link-small" to="/courses">
                  Courses
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
              <div className="app-name-small">VTOT</div>
            </h3>
          </div>
          <div className="link-container">
            <div>
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/my-learning">
                My Learning
              </Link>
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </div>
            <h3 className="app-brand">
              <div>
                <PetsRoundedIcon
                  className="pet-icon"
                  style={{ fontSize: "xx-large" }}
                />
              </div>
              <div className="app-name">Vet Tech Online Training</div>
            </h3>
            <div>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};
