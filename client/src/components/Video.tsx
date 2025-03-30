import { useState } from "react";
import "./Video.css";

export const Video = ({ videoName }: { videoName: string }) => {
  const [controls, setControls] = useState(false);

  const handleControls = (control: boolean) => {
    setControls(control);
  };

  return (
    <video
      className="learning-video"
      controls={controls}
      autoPlay={false}
      disablePictureInPicture={true}
      onMouseEnter={() => handleControls(true)}
      onMouseLeave={() => {
        handleControls(false);
      }}
    >
      <source src={`/video/${videoName}`} type="video/mp4" />
    </video>
  );
};
