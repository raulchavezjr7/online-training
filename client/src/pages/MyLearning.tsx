import "./MyLearning.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Button from "@mui/material/Button";
import { Video } from "../components/video";
import { Text } from "../components/Text";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const fileArr = {
  id: 1,
  title: "Chapter 2: Learning About Dog Breeds",
  length: 4,
  content: [
    { title: "video-2.mp4", type: "video" },
    { title: "boxer.JPG", type: "text" },
    { title: "bernese-mountain-dog.JPG", type: "text" },
    { title: "video-1.mp4", type: "video" },
    { title: "pug.JPG", type: "text" },
    { title: "end", type: "end" },
  ],
};

export const MyLearning = () => {
  const [sectionCounter, setSectionCounter] = useState(0);
  const [contentTitle, setContentTitle] = useState("");
  const [contentType, setContentType] = useState("");
  const contentLength = fileArr.length
  const title = fileArr.title

  useEffect(() => {
    setContentTitle(fileArr.content[sectionCounter].title)
    setContentType(fileArr.content[sectionCounter].type)

  }, [sectionCounter]);

  function buttonHandler(buttonType: string) {
    if(buttonType === "prevButton" ){
      setSectionCounter(sectionCounter - 1);
    }
    else{
      setSectionCounter(sectionCounter + 1);
    }
    console.log(sectionCounter)
  }

  function contentHandler(type: string) {
    let content = <div></div>;
    switch (type) {
      case "video":
        content = <Video videoName={contentTitle} />;
        break;
      case "text":
        content = <Text fileName={contentTitle}></Text>;
        break;
    }
    return content;
  }
  return (
    <>
      <div className="my-learning-border">
        <h3 className="my-learning-title">{title}</h3>
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
      </div>
    </>
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
