import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import "./Profile.css";
import { useOutletContext } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { User } from "../api/user";

export const Profile = () => {
  const userData: User = useOutletContext();
  //console.log(userData);
  return (
    <div className="profileBackground">
      <Card
        sx={{
          boxShadow: "1px 3px 6px #9e9e9ebf",
          height: "fit-content",
          width: "50vw",
          backgroundColor: "#1b89ce82",
          padding: "2vh 1vw",
          "@media only screen and (max-width: 1300px)": {
            width: "65vw",
          },
          "@media only screen and (max-width: 900px)": {
            width: "80vw",
          },
        }}
      >
        <CardContent>
          <Grid container rowSpacing={3} columnSpacing={3} sx={{}}>
            <Grid size={{ xs: 11, md: 6 }}>
              <CustomTextField
                id="Name"
                label="Name"
                defaultValue={userData.name}
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 11, md: 6 }}>
              <TextField
                id="email"
                label="Email"
                defaultValue={userData.email}
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 11, md: 6 }}>
              <TextField
                id="company"
                label="Company"
                defaultValue={userData.company}
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                id="currentCourse"
                label="Current Course"
                defaultValue={userData.currentCourse.courseName}
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                id="currentChapter"
                label="Current Chapter"
                defaultValue={userData.currentCourse.chapterName}
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                id="currentSection"
                label="Current Section"
                defaultValue={userData.currentCourse.sectionName}
                variant="standard"
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const CustomTextField = styled(TextField)({
  label: {
    color: "#212121",
  },
  "& label.Mui-focused": {
    color: "green",
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "green",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
}) as typeof TextField;
