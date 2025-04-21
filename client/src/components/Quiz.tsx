import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./Quiz.css";
import Card from "@mui/material/Card";
import { SetStateAction, useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { getQuizzesById, Quizzes } from "../api/content";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import { Loading } from "../pages/Loading";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

export const Quiz = ({
  selectedSection,
  nextSection,
}: {
  selectedSection: string;
  nextSection: () => void;
}) => {
  const auth = useAuth();
  const [formKey, setFormKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [alertUser, setAlertUser] = useState(false);
  const [quiz, setQuiz] = useState<Quizzes>({
    sectionName: "Error Loading Quiz",
    questions: [{ answer: "", options: [], question: "" }],
  });
  const [answers, setAnswers] = useState<string[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);
  const [quizStatus, setQuizStatus] = useState("retry");

  useEffect(() => {
    getQuizzesById(selectedSection, auth.user!.id_token!)
      .then((res: Quizzes) => {
        //console.log(res);
        const tempAnswers: SetStateAction<string[]> = [];
        res.questions.map((element) => {
          tempAnswers.push(element.answer);
        });
        setAnswers(tempAnswers);
        setQuiz(res);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err: { message: string }) => console.error(err.message));
  }, [auth.user, selectedSection]);

  function retryButtonHandler() {
    setFormKey((prev) => prev + 1);
    setWrongAnswers([]);
    setQuizStatus("retry");
    setAlertUser(false);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Card
          sx={{
            overflowY: "auto",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "0px 1vw",
            backgroundColor: "#1b89ce",
            boxShadow: "1px 3px 6px #9e9e9ebf",
          }}
        >
          <Typography variant="h4" sx={{ margin: "1vh" }}>
            {selectedSection}
          </Typography>
          <CardContent
            sx={{
              width: "-webkit-fill-available",
              height: "72vh",
              background: "#f7f9f6",
              boxShadow: "1px 2px 5px 1px #00000069",
              objectFit: "contain",
            }}
          >
            {
              <form
                key={formKey}
                style={{ overflowY: "scroll", height: "inherit" }}
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const unanswered = quiz.questions.filter((_, i) => {
                    return !formData.get(i.toString());
                  });

                  if (unanswered.length > 0) {
                    setAlertUser(true);
                    return;
                  } else {
                    setAlertUser(false);
                  }
                  const formJson = Object.fromEntries(formData.entries());
                  //console.log(formJson);
                  const tempWrongAnswer: SetStateAction<number[]> = [];
                  answers.map((element, i) => {
                    if (element !== formJson[i]) {
                      tempWrongAnswer.push(i);
                    }
                    setWrongAnswers(tempWrongAnswer);
                    if (tempWrongAnswer.length / answers.length <= 0.4) {
                      setQuizStatus("passed");
                    } else {
                      setQuizStatus("failed");
                    }
                  });
                }}
              >
                <Container>
                  {quiz.questions.map((element, i) => {
                    return (
                      <FormGroup key={i}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            marginTop: i === 0 ? "2vh" : "4vh",
                            color: wrongAnswers.includes(i) ? "red" : "black",
                          }}
                        >
                          {`${i + 1}. ${element.question}${
                            wrongAnswers.includes(i) ? " - X" : ""
                          }`}
                        </Typography>
                        <FormControl required>
                          <RadioGroup name={i.toString()}>
                            {element.options.map((option, j) => {
                              return (
                                <FormControlLabel
                                  key={j}
                                  sx={{ marginLeft: "1vw" }}
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                />
                              );
                            })}
                          </RadioGroup>
                        </FormControl>
                      </FormGroup>
                    );
                  })}
                  <Container className="inner-quiz-button">
                    <div className="alert">
                      <Alert
                        severity={quizStatus !== "passed" ? "error" : "success"}
                        variant="filled"
                        sx={{
                          display:
                            alertUser || quizStatus !== "retry" ? null : "none",
                        }}
                      >
                        {alertUser
                          ? "Please answer all questions before submitting."
                          : quizStatus === "failed"
                          ? `You need over 60% to pass. You got ${
                              100 - (wrongAnswers.length / answers.length) * 100
                            }%. Please try again.`
                          : quizStatus === "passed"
                          ? `Congratulation you passed with ${
                              100 - (wrongAnswers.length / answers.length) * 100
                            }%. Continue to next section.`
                          : null}
                      </Alert>
                    </div>
                    <CustomButton
                      disabled={quizStatus !== "retry" ? true : false}
                      type="submit"
                    >
                      Submit
                    </CustomButton>
                  </Container>
                </Container>
              </form>
            }
          </CardContent>
          <div className="my-buttons">
            <CustomButton
              onClick={() => {
                retryButtonHandler();
              }}
              disabled={quizStatus === "failed" ? false : true}
            >
              Retry
            </CustomButton>
            <CustomButton
              onClick={() => {
                nextSection();
              }}
              disabled={quizStatus === "passed" ? false : true}
            >
              Next Section
            </CustomButton>
          </div>
        </Card>
      )}
    </>
  );
};

const CustomButton = styled(Button)({
  color: "#0f0f0f",
  backgroundColor: "#F59F00",
  variant: "contained",
  fontSize: "large",
  fontFamily: "Inter, sans-serif",
  boxShadow: "1px 2px 1px 0px #00000069",
  "&:hover": {
    backgroundColor: "#bd7d07",
  },
}) as typeof Button;
