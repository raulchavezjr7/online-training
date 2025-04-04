import "./MyLearning.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Button from "@mui/material/Button";
// import { Video } from "../components/Video";
// import { Text } from "../components/Text";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const fileArr = {
  id: 1,
  sectionName: "Identifying Small Dog Breeds",
  length: 4,
  content: [
    { contentTitle: "working-group-boxer-vid.mp4", contentType: "video" },
    { contentTitle: "working-group-boxer-image.JPG", contentType: "text" },
    { contentTitle: "bernese-mountain-dog.JPG", contentType: "text" },
    { contentTitle: "working-group-rottweiler-vid.mp4", contentType: "video" },
    { contentTitle: "pug.JPG", contentType: "text" },
    { contentTitle: "end", contentType: "end" },
  ],
};

export const MyLearning = () => {
  const [sectionCounter, setSectionCounter] = useState(0);
  const [contentTitle, setContentTitle] = useState("");
  // const [contentType, setContentType] = useState("");
  const contentLength = fileArr.length;
  // const title = fileArr.sectionName;

  useEffect(() => {
    setContentTitle(fileArr.content[sectionCounter].contentTitle);
    // setContentType(fileArr.content[sectionCounter].contentType);
  }, [sectionCounter]);

  function buttonHandler(buttonType: string) {
    if (buttonType === "prevButton") {
      setSectionCounter(sectionCounter - 1);
    } else {
      setSectionCounter(sectionCounter + 1);
    }
    console.log(sectionCounter);
  }

  // function contentHandler(type: string) {
  //   let content = <div></div>;
  //   switch (type) {
  //     case "video":
  //       content = <Video videoName={contentTitle} />;
  //       break;
  //     case "text":
  //       content = <Text fileName={contentTitle}></Text>;
  //       break;
  //   }
  //   return content;
  // }
  return (
    <div className="my-learning-background">
      {/* <div className="my-learning-courses-list">
        <h2>Learning Dog Breeds</h2>
      </div> */}
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
          test
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
              background:
                "linear-gradient(0.25turn, #93cddc, #bdedfa, #93cddc)",
            }}
          >
            <CardMedia
              component="video"
              image={`./video/${contentTitle}`}
              autoPlay
              controls
              sx={{
                width: "100%",
                height: "83vh",
                background: "#030303",
                border: "solid #030303",
              }}
            />
            <div className="my-learning-buttons">
              <CustomButton
                disabled={sectionCounter === 0 ? true : false}
                startIcon={<ArrowBackIosNewRoundedIcon />}
                onClick={() => {
                  buttonHandler("prevButton");
                }}
              >
                Prev
              </CustomButton>
              <div className="divider"></div>
              <CustomButton
                disabled={contentLength === sectionCounter ? true : false}
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
      {/* <div className="my-learning-border"> */}
      {/* <h3 className="my-learning-title">{title}</h3>
            {contentHandler(contentType)}
            <div className="my-learning-buttons">
              <CustomButton
                disabled={sectionCounter === 0 ? true : false}
                startIcon={<ArrowBackIosNewRoundedIcon />}
                onClick={() => {
                  buttonHandler("prevButton");
                }}
              >
                Prev
              </CustomButton>
              <div className="divider"></div>
              <CustomButton
                disabled={contentLength === sectionCounter ? true : false}
                endIcon={<ArrowForwardIosRoundedIcon />}
                onClick={() => {
                  buttonHandler("nextButton");
                }}
              >
                Next
              </CustomButton>
            </div>
          </div> */}
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
