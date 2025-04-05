import { useEffect, useState } from "react";
import "./Home.css";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

export const Home = () => {
  const [courses, setCourses] = useState([
    {
      id: 0,
      courseName: "",
      length: 0,
      summary: "",
      chapters: [
        {
          chapterName: "",
          chapterLength: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("./course-data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="homeBackground">
      <Typography variant="h3">Welcome Back .... </Typography>
      <h2 className="courseType">My Courses</h2>
      <div className="cardContainer">
        {courses.map((element) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={element.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`../background-image/background-course-image-${element.id.toString()}.jpg`}
                  alt={`${element.courseName}-image`}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.courseName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {element.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
      <h2 className="courseType">Courses</h2>
      <div className="cardContainer">
        {courses.map((element) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={element.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`../background-image/background-course-image-${element.id.toString()}.jpg`}
                  alt={`${element.courseName}-image`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.courseName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {element.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
