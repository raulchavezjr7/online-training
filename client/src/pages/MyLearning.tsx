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
import { Typography } from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Courses,
  Chapters,
  Sections,
  getAllCourses,
  getAllChapters,
  getAllSections,
} from "../api/content";
import { Loading } from "./Loading";
import { User } from "../api/user";
import { useAuth } from "react-oidc-context";

export const MyLearning = ({ propCourse }: { propCourse: string }) => {
  const userData: User = useOutletContext();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  // const [course, setCourse] = useState<Courses>({
  //   id: 0,
  //   courseName: "",
  //   length: 0,
  //   summary: "",
  //   chapters: [
  //     {
  //       chapterName: "",
  //       chapterLength: 0,
  //     },
  //   ],
  // });
  const [chapters, setChapters] = useState<Chapters[]>([]);
  const [sections, setSections] = useState<Sections[]>([
    {
      id: 1000000,
      sectionName: "content not found",
      length: 1,
      content: [
        {
          contentTitle: "not-found-content",
          contentType: "png",
          itemPathS3: "images/not-found-content.png",
        },
      ],
    },
  ]);
  const [contents, setContents] = useState([
    { contentTitle: "", contentType: "", itemPathS3: "" },
  ]);
  const [mediaUrl, setMediaUrl] = useState("images/not-found-content.png");
  const [mediaType, setMediaType] = useState("image");

  const [currentLength, setCurrentLength] = useState(1);
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  function getSortKey(id: number, denom: number): number {
    return Math.floor(id / denom);
  }

  useEffect(() => {
    // console.log(userData);
    // console.log(propCourse);
    getAllCourses(auth.user!.id_token!)
      .then((coursesRes: Courses[]) => {
        coursesRes.map((coursesElement: Courses) => {
          const chosenCourse =
            propCourse === "" ? userData.currentCourse.courseName : propCourse;
          if (coursesElement.courseName === chosenCourse) {
            //console.log(coursesElement);
            //setCourse(coursesElement);
            getAllChapters(auth.user!.id_token!)
              .then((chapterRes: Chapters[]) => {
                const tempChapters: Chapters[] = [];
                chapterRes.map((chapterResElement: Chapters) => {
                  coursesElement.chapters.map((courseElement) => {
                    if (
                      chapterResElement.chapterName ===
                      courseElement.chapterName
                    ) {
                      tempChapters.push(chapterResElement);
                    }
                  });
                });
                const sortedChapters = tempChapters.sort(
                  (a, b) => getSortKey(a.id, 1000) - getSortKey(b.id, 1000)
                );
                //console.log(sortedChapters);
                setChapters(sortedChapters);
                getAllSections(auth.user!.id_token!)
                  .then((sectionRes: Sections[]) => {
                    const tempSection: Sections[] = [];
                    sortedChapters.map((chapterElement) => {
                      chapterElement.sections.map((sectionsElement) => {
                        sectionRes.map((sectionResElement: Sections) => {
                          if (
                            sectionResElement.sectionName ===
                            sectionsElement.sectionName
                          ) {
                            tempSection.push(sectionResElement);
                          }
                        });
                      });
                    });
                    const sortedSections = tempSection.sort(
                      (a, b) =>
                        getSortKey(a.id, 1000000) - getSortKey(b.id, 1000000)
                    );
                    //console.log(sortedSections);
                    setSections(sortedSections);
                    const sectionName =
                      userData.currentCourse.courseName === chosenCourse
                        ? userData.currentCourse.sectionName
                        : sortedChapters[sortedChapters.length - 1].sections[
                            sortedChapters[sortedChapters.length - 1].sections
                              .length - 1
                          ].sectionName;
                    // console.log(sectionName);
                    sortedSections.map((sectionElement) => {
                      if (sectionElement.sectionName === sectionName) {
                        //console.log(sectionElement);
                        setContents(sectionElement.content);
                      }
                    });
                    const selectedChapter =
                      userData.currentCourse.courseName === chosenCourse
                        ? userData.currentCourse.chapterName
                        : sortedChapters[sortedChapters.length - 1].chapterName;
                    //console.log(selectedChapter);
                    setSelectedSection(sectionName);
                    setSelectedChapter(selectedChapter);
                  })
                  .catch((err: { message: string }) =>
                    console.error(err.message)
                  )
                  .then(() => {
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 2000);
                  })
                  .catch((err: { message: string }) =>
                    console.error(err.message)
                  );
              })
              .catch((err: { message: string }) => console.error(err.message));
          }
        });
      })
      .catch((err: { message: string }) => console.error(err.message));
  }, [propCourse, userData]);

  useEffect(() => {
    const length = currentLength - 1;
    if (contents[length].contentTitle !== "") {
      setMediaUrl(contents[length].itemPathS3);
    }
    if (contents[length].contentType === "mp4") {
      setMediaType("video");
    } else if (contents[length].contentType === "gif") {
      setMediaType("media");
    } else {
      setMediaType("image");
    }
  }, [contents, currentLength]);

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
    sections.map((sectionElement) => {
      if (sectionElement.sectionName === element) {
        contentChanged = true;
        setContents(sectionElement.content);
      }
    });
    if (!contentChanged) {
      setContents([
        {
          contentTitle: "not-found-content",
          contentType: "png",
          itemPathS3: "images/not-found-content.png",
        },
      ]);
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
        <Loading />
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
                    image={`${import.meta.env.VITE_AWS_CLOUDFRONT}/${mediaUrl}`}
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
                    image={`${import.meta.env.VITE_AWS_CLOUDFRONT}/${mediaUrl}`}
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
                    image={`${import.meta.env.VITE_AWS_CLOUDFRONT}/${mediaUrl}`}
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
                    disabled={currentLength === contents.length ? true : false}
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
