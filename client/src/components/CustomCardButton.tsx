import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const CustomCardButton = ({
  text,
  image = "background-course-image-1.jpg",
}: {
  text: string;
  image?: string;
}) => {

  const CardButton = styled(ButtonBase)(() => ({
    position: "relative",
    padding: "1rem",
    borderRadius: "30px",
    margin: "1vh",
    flexBasis: "30%",
    height: "15vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.7)),
          url("../background-image/background-course-image-${image}.jpg")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&:hover": {
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)),
        url("../background-image/background-course-image-${image}.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
  }));

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <CardButton focusRipple>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" gutterBottom style={{ color: "#f7f9f6" }}>
          {text}
        </Typography>
      </ThemeProvider>
    </CardButton>
  );
};
