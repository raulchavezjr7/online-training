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
import { UserContext } from "../components/DataContext";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { Courses, Chapters, Sections, getAllCourses } from "../api/content";

export const MyLearning = ({ propCourse }: { propCourse: "" }) => {
  const userData: UserContext = useOutletContext();
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState<Courses>({
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
  });
  const [chapters, setChapters] = useState<Chapters[]>([]);
  const [section, setSection] = useState<Sections[]>([
    {
      id: 1000000,
      sectionName: "content not found",
      length: 1,
      content: [
        {
          contentTitle: "not-found-content.png",
          contentType: "png",
          itemPathS3: "images/not-found-content.png",
        },
      ],
    },
  ]);
  const [content, setContent] = useState([
    { contentTitle: "", contentType: "" },
  ]);
  const [mediaTitle, setMediaTitle] = useState("not-found-content.png");
  const [mediaType, setMediaType] = useState("image");
  const [mediaLength, setMediaLength] = useState(1);
  const [currentLength, setCurrentLength] = useState(1);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  useEffect(() => {
    console.log(propCourse)
    // getAllCourses()
    //   .then((res: Courses[]) => {
    //     setCourse(res);
    //     setIsLoading(false);
    //   })
    //   .catch((err: { message: string }) => console.error(err.message));

    fetch("./course-data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        if (userData.id > -1) {
          data.map((e: Courses) => {
            const chosenCourse = propCourse === "" ? userData.currentCourse.courseName : propCourse
            console.log(chosenCourse)
            if (e.courseName === chosenCourse) {
              setCourse(e);
            }
          });
        }
      });
  }, [propCourse, userData]);

  useEffect(() => {
    fetch("./course-data/chapters.json")
      .then((res) => res.json())
      .then((data) => {
        if (userData.id > -1) {
          const tempChapters: Chapters[] = [];
          data.map((dataElement: Chapters) => {
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
          const tempSection: Sections[] = [];
          chapters.map((chapterElement) => {
            chapterElement.sections.map((sectionsElement) => {
              data.map((dataElement: Sections) => {
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

  useEffect(() => {
    setSelectedSection(userData.currentCourse.sectionName);
    setSelectedChapter(userData.currentCourse.chapterName);
  }, [userData]);

  function buttonHandler(buttonType: string) {
    if (buttonType === "nextButton") {
      setCurrentLength(currentLength + 1);
    } else {
      setCurrentLength(currentLength - 1);
    }
  }

  function handleTreeClickChapter(element: string) {
    setSelectedChapter(element);
  }

  function handleTreeClick(element: string) {
    setSelectedSection(element);
    let contentChanged = false;
    setCurrentLength(1);
    chapters.map((chapterElement) => {
      chapterElement.sections.map((sectionElement) => {
        if (sectionElement.sectionName === element) {
          setSelectedChapter(chapterElement.chapterName);
        }
      });
    });
    section.map((sectionElement) => {
      if (sectionElement.sectionName === element) {
        contentChanged = true;
        setContent(sectionElement.content);
        setMediaLength(sectionElement.length);
      }
    });
    if (!contentChanged) {
      setContent([{ contentTitle: "not-found-content", contentType: "png" }]);
      setMediaLength(1);
    }
  }

  function treeView() {
    let chapterIsDisabled = false;
    const disableChapters = [];
    let sectionIsDisabled = false;
    const disableSection = [];

    return chapters.map((chapterElement) => {
      if (chapterIsDisabled) {
        disableChapters.push(chapterElement.chapterName);
      }
      if (chapterElement.chapterName === userData.currentCourse.chapterName) {
        chapterIsDisabled = true;
      }
      return (
        <TreeItem
          key={chapterElement.id}
          disabled={disableChapters.length !== 0 ? true : false}
          itemId={chapterElement.chapterName}
          label={chapterElement.chapterName}
          onClick={
            disableChapters.length !== 0
              ? () => {}
              : (e) => {
                  const element = e.target as HTMLElement;
                  handleTreeClickChapter(element.innerText);
                }
          }
        >
          {chapterElement.sections.map((sectionElement) => {
            if (sectionIsDisabled) {
              disableSection.push(sectionElement.sectionName);
            }
            if (
              sectionElement.sectionName === userData.currentCourse.sectionName
            ) {
              sectionIsDisabled = true;
            }
            return (
              <TreeItem
                disabled={disableSection.length !== 0 ? true : false}
                onClick={
                  disableSection.length !== 0
                    ? () => {}
                    : (e) => {
                        const element = e.target as HTMLElement;
                        handleTreeClick(element.innerText);
                      }
                }
                id={chapterElement.chapterName}
                key={sectionElement.sectionName}
                itemId={sectionElement.sectionName}
                label={sectionElement.sectionName}
              />
            );
          })}
        </TreeItem>
      );
    });
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
        <div className="my-learning-background">
          <Grid
            container
            rowSpacing={1}
            sx={{
              justifyContent: "center",
              "@media only screen and (min-width: 900px)": {
                justifyContent: "space-around",
              },
            }}
          >
            <Grid
              size={{ xs: 11, md: 3 }}
              sx={{
                "@media only screen and (max-width: 900px)": {
                  display: "none",
                },
              }}
            >
              <SimpleTreeView
                expandedItems={[selectedChapter]}
                selectedItems={selectedSection}
                disableSelection
                slots={{
                  expandIcon: AddCircleOutlineIcon,
                  collapseIcon: RemoveCircleOutlineIcon,
                  endIcon: RemoveIcon,
                }}
                sx={{
                  paddingRight: "1vw",
                  "& .MuiTreeItem-content.Mui-selected ": {
                    backgroundColor: "rgb(197 227 99 / 50%)",
                  },
                }}
              >
                {treeView()}
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
                  backgroundColor: "#1b89ce",
                  boxShadow: "1px 3px 6px #9e9e9ebf",
                }}
              >
                <Typography variant="h4">{selectedSection}</Typography>
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
                "@media only screen and (min-width: 900px)": {
                  display: "none",
                },
              }}
            >
              <SimpleTreeView
                expandedItems={[selectedChapter]}
                selectedItems={selectedSection}
                disableSelection
                slots={{
                  expandIcon: AddCircleOutlineIcon,
                  collapseIcon: RemoveCircleOutlineIcon,
                  endIcon: RemoveIcon,
                }}
                sx={{
                  paddingRight: "1vw",
                  "& .MuiTreeItem-content.Mui-selected ": {
                    backgroundColor: "rgb(197 227 99 / 50%)",
                  },
                }}
              >
                {treeView()}
              </SimpleTreeView>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

const CustomButton = styled(Button)({
  color: "#0f0f0f",
  backgroundColor: "#F59F00",
  variant: "contained",
  fontSize: "large",
  fontFamily: "Inter, sans-serif",
  boxShadow: "1px 2px 1px 0px #00000069",
  "&:hover": {
    backgroundColor: "#bd7d07",
  },
}) as typeof Button;
