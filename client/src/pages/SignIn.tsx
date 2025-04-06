import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const SignIn = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      SignIn
      <Button
        onClick={(e) => {
          setUser(parseInt((e.target as HTMLElement).innerText));
        }}
      >
        <Link className="nav-link-small" to="/home">
          0
        </Link>
      </Button>
      <Button
        onClick={(e) => {
          setUser(parseInt((e.target as HTMLElement).innerText));
        }}
      >
        <Link className="nav-link-small" to="/home">
          1
        </Link>
      </Button>
      <Button
        onClick={(e) => {
          setUser(parseInt((e.target as HTMLElement).innerText));
        }}
      >
        <Link className="nav-link-small" to="/home">
          2
        </Link>{" "}
      </Button>
      <Button
        onClick={(e) => {
          setUser(parseInt((e.target as HTMLElement).innerText));
        }}
      >
        <Link className="nav-link-small" to="/home">
          3
        </Link>
      </Button>
      <Button
        onClick={(e) => {
          setUser(parseInt((e.target as HTMLElement).innerText));
        }}
      >
        <Link className="nav-link-small" to="/home">
          4
        </Link>
      </Button>
    </div>
  );
};
