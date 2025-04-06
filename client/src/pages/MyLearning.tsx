import "./MyLearning.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { useOutletContext } from "react-router-dom";
import {
  UserContext,
  CourseContext,
  ChapterContext,
  SectionContext,
} from "../components/DataContext";
import { Typography } from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export const MyLearning = () => {
  const [course, setCourse] = useState<CourseContext>({
    id: 0,
    courseName: "",
    length: 0,
    summary: "",
    chapters: [
      {
        chapterName: "",
        chapterLength: 0,
      },
      { chapterName: "", chapterLength: 0 },
    ],
  });
  const [chapters, setChapters] = useState<Array<ChapterContext>>([]);
  const [section, setSection] = useState([
    {
      id: 1000000,
      sectionName: "content not found",
      length: 1,
      content: [{ contentTitle: "not-found-content.png", contentType: "png" }],
    },
  ]);
  const [content, setContent] = useState([
    { contentTitle: "", contentType: "" },
  ]);
  const [mediaTitle, setMediaTitle] = useState("not-found-content.png");
  const [mediaType, setMediaType] = useState("image");
  const [mediaLength, setMediaLength] = useState(1);
  const [currentLength, setCurrentLength] = useState(1);

  const userData: UserContext = useOutletContext();

  useEffect(() => {
    fetch("./course-data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        if (userData.id > -1) {
          data.map((e: CourseContext) => {
            if (e.courseName === userData.currentCourse.courseName) {
              setCourse(e);
            }
          });
        }
      });
  }, [userData]);

  useEffect(() => {
    fetch("./course-data/chapters.json")
      .then((res) => res.json())
      .then((data) => {
        if (userData.id > -1) {
          const tempChapters: ChapterContext[] = [];
          data.map((dataElement: ChapterContext) => {
            course.chapters.map((courseElement) => {
              if (dataElement.chapterName === courseElement.chapterName) {
                tempChapters.push(dataElement);
              }
            });
          });
          setChapters(tempChapters);
        }
      });
  }, [userData, course]);

  useEffect(() => {
    fetch("./course-data/sections.json")
      .then((res) => res.json())
      .then((data) => {
        if (userData.id > -1) {
          const tempSection: SectionContext[] = [];
          chapters.map((chapterElement) => {
            chapterElement.sections.map((sectionsElement) => {
              data.map((dataElement: SectionContext) => {
                if (dataElement.sectionName === sectionsElement.sectionName) {
                  tempSection.push(dataElement);
                }
              });
            });
          });
          setSection(tempSection);
        }
      });
  }, [userData, chapters]);

  useEffect(() => {
    const sectionName = userData.currentCourse.sectionName;
    section.map((sectionElement) => {
      if (sectionElement.sectionName === sectionName) {
        setContent(sectionElement.content);
        setMediaLength(sectionElement.length);
      }
    });
  }, [userData, section]);

  useEffect(() => {
    const length = currentLength - 1;
    if (content[length].contentTitle !== "") {
      setMediaTitle(
        `${content[length].contentTitle}.${content[length].contentType}`
      );
    }

    if (content[length].contentType === "mp4") {
      setMediaType("video");
    } else if (content[length].contentType === "gif") {
      setMediaType("media");
    } else {
      setMediaType("image");
    }
  }, [content, currentLength]);

  function buttonHandler(buttonType: string) {
    if (buttonType === "nextButton") {
      setCurrentLength(currentLength + 1);
    } else {
      setCurrentLength(currentLength - 1);
    }
    console.log("course");
    console.log(course);
    console.log("chapters");
    console.log(chapters);
    console.log("section");
    console.log(section);
    console.log("content");
    console.log(content);
    console.log("mediaTitle");
    console.log(mediaTitle);
    console.log("mediaType");
    console.log(mediaType);
    console.log("mediaLength");
    console.log(mediaLength);
    console.log("currentLength");
    console.log(currentLength);
    console.log("userData");
    console.log(userData);
  }

  return (
    <div className="my-learning-background">
      <Grid
        container
        rowSpacing={1}
        sx={{
          justifyContent: "center",
          "@media screen and (min-width: 900px)": {
            justifyContent: "space-around",
          },
        }}
      >
        <Grid
          size={{ xs: 11, md: 3 }}
          sx={{
            "@media screen and (max-width: 900px)": {
              display: "none",
            },
          }}
        >
          <SimpleTreeView>
            <TreeItem itemId="grid" label="Data Grid">
              <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
              <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
              <TreeItem
                itemId="grid-premium"
                label="@mui/x-data-grid-premium"
              />
            </TreeItem>
            <TreeItem itemId="pickers" label="Date and Time Pickers">
              <TreeItem
                itemId="pickers-community"
                label="@mui/x-date-pickers"
              />
              <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
            </TreeItem>
            <TreeItem itemId="charts" label="Charts">
              <TreeItem
                itemId="charts-community"
                label="@mui/x-charts"
                disabled
              />
            </TreeItem>
            <TreeItem itemId="tree-view" label="Tree View" disabled>
              <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
            </TreeItem>
          </SimpleTreeView>
        </Grid>
        <Grid size={{ xs: 11, md: 9 }}>
          <Card
            sx={{
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "0px 1vw",
              background:
                "linear-gradient(0.25turn, #93cddc, #bdedfa, #93cddc)",
            }}
          >
            <Typography variant="h4">
              {userData.currentCourse.sectionName}
            </Typography>
            {mediaType === "image" ? (
              <CardMedia
                component="img"
                image={`./image/${mediaTitle}`}
                sx={{
                  width: "100%",
                  height: "77vh",
                  background: "#030303",
                  border: "solid #030303",
                  objectFit: "contain",
                }}
              />
            ) : mediaType === "media" ? (
              <CardMedia
                image={`./video/${mediaTitle}`}
                sx={{
                  width: "100%",
                  height: "77vh",
                  background: "#030303",
                  border: "solid #030303",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
            ) : (
              <CardMedia
                component="video"
                image={`./video/${mediaTitle}`}
                autoPlay={true}
                controls={true}
                sx={{
                  width: "100%",
                  height: "77vh",
                  background: "#030303",
                  border: "solid #030303",
                }}
              />
            )}
            <div className="my-learning-buttons">
              <CustomButton
                disabled={currentLength === 1 ? true : false}
                startIcon={<ArrowBackIosNewRoundedIcon />}
                onClick={() => {
                  buttonHandler("prevButton");
                }}
              >
                Prev
              </CustomButton>
              <div className="divider"></div>
              <CustomButton
                disabled={currentLength === mediaLength ? true : false}
                endIcon={<ArrowForwardIosRoundedIcon />}
                onClick={() => {
                  buttonHandler("nextButton");
                }}
              >
                Next
              </CustomButton>
            </div>
          </Card>
        </Grid>
        <Grid
          size={{ xs: 11, md: 3 }}
          sx={{
            "@media screen and (min-width: 900px)": {
              display: "none",
            },
          }}
        >
          test
        </Grid>
      </Grid>
    </div>
  );
};

const CustomButton = styled(Button)({
  color: "#0f0f0f",
  backgroundColor: "#F59F00",
  variant: "contained",
  fontSize: "large",
  fontFamily: "Inter, sans-serif",
  "&:hover": {
    backgroundColor: "#bd7d07",
  },
}) as typeof Button;
