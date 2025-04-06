import { Outlet, Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./MyNav.css";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { styled } from "@mui/material/styles";

export const MyNav = ({ user }: { user: number }) => {
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorMenu);
  const location = useLocation();
  const showNav =
    location.pathname === "/" || location.pathname.includes("/sign-in");
  const [userData, setUserData] = useState({
    id: -1,
    email: "",
    name: "",
    company: "",
    supervisor: false,
    assignedCourses: [""],
    completedCourses: [""],
    currentCourses: [{ courseName: "", chapterName: "", sectionName: "" }],
  });

  useEffect(() => {
    fetch("./course-data/users.json")
      .then((res) => res.json())
      .then((data) => {
        if (user !== -1) {
          setUserData(data[user]);
        }
      });
  }, [user]);

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
        {location.pathname.includes("sign-in") ? (
          <></>
        ) : (
          <CustomButton component={Link} to="/sign-in">
            Sign In
          </CustomButton>
        )}
      </div>
    ) : (
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
          {userData.supervisor ? (
            <MenuItem onClick={handleClose}>
              <Link className="nav-link-small" to="/team-dashboard">
                Team Dashboard
              </Link>
            </MenuItem>
          ) : (
            <span style={{ display: "none" }}></span>
          )}
        </Menu>
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
        {location.pathname.includes("sign-in") ? (
          <></>
        ) : (
          <CustomButton component={Link} to="/sign-in">
            Sign In
          </CustomButton>
        )}
      </div>
    ) : (
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
        <div>
          <CustomButton component={Link} to="/home">
            Home
          </CustomButton>
          <CustomButton component={Link} to="/my-learning">
            My Learning
          </CustomButton>
          <CustomButton component={Link} to="/profile">
            Profile
          </CustomButton>
          {userData.supervisor ? (
            <CustomButton component={Link} to="/team-dashboard">
              Team Dashboard
            </CustomButton>
          ) : (
            <></>
          )}
          <CustomButton component={Link} to="/sign-in">
            Sign In
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
        <Outlet context={userData} />
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
