import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./FAQ.css";

export const FAQ = () => {
  const [faq, setFAQ] = useState([{ question: "", answer: "" }]);

  useEffect(() => {
    fetch("./course-data/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFAQ(data);
      });
  }, []);

  return (
    <div className="faqBackground">
      <div className="header-button-container">
        <div>
          <h3>Frequently Asked Questions (FAQ)</h3>
        </div>
        <CustomButton component={Link} to="/home">
          Home
        </CustomButton>
      </div>
      {faq.map((element, i) => {
        const question = element.question;
        const answer = element.answer;
        return (
          <Accordion
            key={i}
            style={{
              borderBottomColor: "#9E9E9E",
              boxShadow: "1px 3px 6px #9e9e9ebf",
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "#1b89ce82",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              key={i}
            >
              <Typography component="span">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#F59F00b4",
              }}
            >
              {answer}
            </AccordionDetails>
          </Accordion>
        );
      })}
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
