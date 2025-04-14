import { useEffect, useState } from "react";
import "./Home.css";
import { Tooltip, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Link, useOutletContext } from "react-router-dom";
import { UserContext } from "../components/DataContext";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { Asset, getAllAssets } from "../api/assets";
import { Courses, getAllCourses } from "../api/content";

export const Home = ({
  setCourse,
}: {
  setCourse: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const userData: UserContext = useOutletContext();
  const [assets, setAssets] = useState<Asset[]>([
    {
      itemPathS3: "",
      imageName: "sever error",
      altName: "server error",
    },
  ]);
  const [courses, setCourses] = useState<Courses[]>([
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
    getAllAssets()
      .then((res: Asset[]) => {
        setAssets(res);
        getAllCourses()
          .then((res: Courses[]) => {
            setCourses(res);
            setIsLoading(false);
          })
          .catch((err: { message: string }) => console.error(err.message));
      })
      .catch((err: { message: string }) => console.error(err.message));
  }, []);

  function getUrl(id: number, type: string) {
    const checkValue = assets.find((element) =>
      element.imageName.includes(`background-image-${id}`)
    );
    let returnValue = "";

    if (checkValue !== undefined && type === "path") {
      returnValue = checkValue.itemPathS3;
    }
    if (checkValue !== undefined && type === "alt") {
      returnValue = checkValue.altName;
    }
    return returnValue;
  }

  return (
    <>
      {isLoading ? (
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{ width: "100vw", justifyContent: "center", height: "80vh" }}
        >
          <CircularProgress size="20rem" />
        </Stack>
      ) : (
        <div className="homeBackground">
          <h1>Welcome, {userData.name}! </h1>
          <h2 className="courseType">My Courses</h2>
          <div className="cardContainer">
            {courses.map((element) => {
              if (userData.assignedCourses.includes(element.courseName)) {
                let color = "none";
                let type = "none";
                if (element.courseName === userData.currentCourse.courseName) {
                  type = "solid";
                  color = "#f59f00";
                }
                return (
                  <Tooltip
                    key={element.id}
                    placement="top"
                    title={
                      element.courseName !== userData.currentCourse.courseName
                        ? `You must finish ${userData.currentCourse.courseName} before continuing to this course.`
                        : ""
                    }
                  >
                    <Card
                      sx={{
                        maxWidth: 350,
                        border: "var(--b)",
                        borderColor: "var(--bc)",
                      }}
                      style={
                        { "--b": type, "--bc": color } as React.CSSProperties
                      }
                    >
                      <CardActionArea
                        disabled={
                          element.courseName !==
                          userData.currentCourse.courseName
                            ? true
                            : false
                        }
                        component={Link}
                        to="/my-learning"
                        onClick={() => {
                          setCourse(element.courseName);
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={`${
                            import.meta.env.VITE_AWS_Cloudfront
                          }/${getUrl(element.id, "path")}`}
                          alt={`${getUrl(element.id, "alt")}`}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {element.courseName}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {element.summary}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Tooltip>
                );
              }
            })}
          </div>
          <h2 className="courseType">Completed Courses</h2>
          <div className="cardContainer">
            {courses.map((element) => {
              if (userData.completedCourses.includes(element.courseName)) {
                return (
                  <Card sx={{ maxWidth: 350 }} key={element.id}>
                    <CardActionArea
                      component={Link}
                      to="/my-learning"
                      onClick={() => {
                        setCourse(element.courseName);
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={`${import.meta.env.VITE_AWS_Cloudfront}/${getUrl(
                          element.id,
                          "path"
                        )}`}
                        alt={`${getUrl(element.id, "alt")}`}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {element.courseName}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {element.summary}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};
