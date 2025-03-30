import "./Text.css";
export const Text = ({ fileName }: { fileName: string }) => {
  return (
    <div className="learning-text">
      <img className="image" src={`/video/${fileName}`} alt={fileName}></img>
    </div>
  );
};
