import { Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [users, setUsers] = useState([{}]);
  useEffect(() => {
    fetch("/course-data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(users);

  const CardButton = styled(ButtonBase)(() => ({
    position: "relative",
    padding: "1rem",
    backgroundColor: "#F59F00",
    borderRadius: "30px",
    border: "solid",
    margin: "1vh",
    "&:hover": {
      backgroundColor: "#bd7d07",
    },
  }));

  return (
    <div className="background">
      <h1>hello</h1>
      <CardButton
        focusRipple
        style={{
          width: "10vw",
        }}
      >
        <Typography>asd</Typography>
      </CardButton>
    </div>
  );
};
