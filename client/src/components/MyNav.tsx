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
import { useAuth } from "react-oidc-context";
import { SignIn } from "../pages/SignIn";
import { getUserById, User } from "../api/user";

export const MyNav = () => {
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorMenu);
  const location = useLocation();
  const pagesAvailable =
    location.pathname === "/home" ||
    location.pathname === "/home/" ||
    location.pathname === "/my-learning" ||
    location.pathname === "/my-learning/" ||
    location.pathname === "/profile" ||
    location.pathname === "/profile/";
  const notShowSignIn =
    location.pathname === "/faq" ||
      location.pathname === "/faq/" ||
      location.pathname === "/about-us" ||
      location.pathname === "/about-us/" ||
      location.pathname === "/terms-conditions" ||
      location.pathname === "/terms-conditions/" ||
      location.pathname === "/privacy-policy" ||
      location.pathname === "/privacy-policy/" 
  const notShowNav = location.pathname === "/" || notShowSignIn ||  !pagesAvailable;
  const [userData, setUserData] = useState({
    email: "",
    company: "",
    name: "",
    supervisor: false,
    assignedCourses: [""],
    completeCourses: [""],
    currentCourse: {
      chapterName: "",
      courseName: "",
      sectionName: "",
    },
  });
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoading && auth.isAuthenticated) {
      getUserById(
        auth.user!.profile.email !== undefined ? auth.user!.profile.email : "",
        auth.user!.id_token!
      )
        .then((res: User) => {
          //console.log(res);
          setUserData(res);
        })
        .catch((err: { message: string }) => console.error(err.message));
    }
    // fetch("./course-data/users.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (user !== -1) {
    //       setUserData(data[user]);
    //     }
    //   });
  }, [auth]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorMenu(null);
  };

  const smallMenu = () => {
    return notShowNav ? (
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
        {notShowSignIn ? <></> : <SignIn />}
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
            sx={{ color: "#1b89ce" }}
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
            <Link className="nav-link-small" to={{ pathname: "/my-learning" }}>
              My Learning
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="nav-link-small" to="/profile">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="nav-link-small" to="./sign-in">
              Sign Out
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  };

  const bigMenu = () => {
    return notShowNav ? (
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
        {notShowSignIn ? <></> : <SignIn />}
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
          <SignIn />
        </div>
      </div>
    );
  };

  return (
    <>
      <AppBar sx={{ bgcolor: "#3d3d3d", color: "#030303" }}>
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
  color: "#f7f9f6",
  fontFamily: '"Inter", sans-serif',
  fontOpticalSizing: "auto",
  fontStyle: "normal",
  fontSize: "inherit",
  "&:hover": {
    backgroundColor: "#f7f9f615",
  },
}) as typeof Button;
