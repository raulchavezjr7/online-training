import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
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
    <div className="background">
      <h3>Frequently Asked Questions (FAQ)</h3>
      {faq.map((element, i) => {
        const question = element.question;
        const answer = element.answer;
        return (
          <Accordion
          key={i}
            style={{
              borderBottomWidth: "0.5px",
              borderBottom: "Solid",
              borderBottomColor: "#9E9E9E",
              boxShadow: "1px 3px 1px #9E9E9E",
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "#C5E363e5",
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
