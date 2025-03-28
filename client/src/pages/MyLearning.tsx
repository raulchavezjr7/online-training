import { useState } from "react";
import "./MyLearning.css";

export const MyLearning = () => {
  const [controls, setControls] = useState(false);
  const video = "video-3.mp4";

  const handleControls = (control: boolean) => {
    setControls(control);
  };

  return (
    <>
      <div>MyLearning</div>
      <video
        className="learning-video"
        controls={controls}
        autoPlay={true}
        disablePictureInPicture={true}
        onMouseEnter={() => handleControls(true)}
        onMouseLeave={() => {
          handleControls(false);
        }}
      >
        <source src={`/video/${video}`} type="video/mp4" />
      </video>
    </>
  );
};
