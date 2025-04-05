// import { useState } from "react";
import "./Video.css";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export const Video = ({ videoName }: { videoName: string }) => {
  // const [controls, setControls] = useState(false);

  // const handleControls = (control: boolean) => {
  //   setControls(control);
  // };

  return (
    <Card sx={{ height: "100%", boxSizing: "border-box" }}>
      <CardMedia
        component="video"
        image={`./video/${videoName}`}
        autoPlay
        controls
      />
    </Card>
    // <video
    //   className="learning-video"
    //   controls={controls}
    //   autoPlay={false}
    //   disablePictureInPicture={true}
    //   onMouseEnter={() => handleControls(true)}
    //   onMouseLeave={() => {
    //     handleControls(false);
    //   }}
    // >
    //   <source src={`/video/${videoName}`} type="video/mp4" />
    // </video>
  );
};
