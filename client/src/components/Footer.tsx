import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="sections">
        <CustomButton variant="text" component={Link} to="/home">
          Home
        </CustomButton>
        {" | "}
        <CustomButton variant="text" component={Link} to="/about-us">
          About Us
        </CustomButton>
        {" | "}
        <CustomButton variant="text" component={Link} to="/privacy-policy">
          Privacy Policy
        </CustomButton>
        {" | "}
        <CustomButton variant="text" component={Link} to="/terms-conditions">
          Terms & Conditions
        </CustomButton>
        {" | "}
        <CustomButton variant="text" component={Link} to="/faq">
          FAQ
        </CustomButton>
      </div>
      <div className="icons">
        <CustomIconButton
          onClick={() => window.open("https://www.facebook.com")}
        >
          <FacebookIcon />
        </CustomIconButton>
        <CustomIconButton
          onClick={() => window.open("https://www.instagram.com")}
        >
          <InstagramIcon />
        </CustomIconButton>
        <CustomIconButton onClick={() => window.open("https://www.x.com")}>
          <XIcon />
        </CustomIconButton>
        <CustomIconButton
          onClick={() => window.open("https://www.Linkedin.com")}
        >
          <LinkedInIcon />
        </CustomIconButton>
      </div>
      <div className="contact-info">
        <div>Email: contact@example.com</div>
        {" | "}
        <div>Phone: (555) 123-4567</div>
      </div>
    </div>
  );
};

const CustomButton = styled(Button)({
  color: "#f7f9f6",
  "&:hover": {
    backgroundColor: "#f7f9f620",
  },
}) as typeof Button;

const CustomIconButton = styled(IconButton)({
  color: "#f7f9f6",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#f7f9f620",
  },
}) as typeof Button;
