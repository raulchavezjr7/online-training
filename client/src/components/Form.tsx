import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FormControlLabel, styled } from "@mui/material";
import { postForm } from "../api/form";

export const Form = ({ buttonText }: { buttonText: string }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CustomButton variant="outlined" onClick={handleClickOpen}>
        {buttonText}
      </CustomButton>
      <Dialog
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        closeAfterTransition={false}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              console.log(formJson);
              postForm(formJson);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle variant="h4">
          Get Your Veterinary Team Started with Better Training
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below and we'll reach out with everything you need
            to know — pricing, features, and how to get your team enrolled.
          </DialogContentText>
          <Typography variant="subtitle2" sx={{ marginTop: "4vh" }}>
            Contact Information
          </Typography>
          <Grid container rowSpacing={3} columnSpacing={3} sx={{}}>
            <Grid size={{ xs: 11, md: 6 }}>
              <TextField
                required
                margin="dense"
                name="fullName"
                label="Full Name"
                type="text"
                fullWidth
                variant="standard"
                placeholder="e.g., Dr. Jane Smith or John - Practice Manager"
              />
              <TextField
                required
                margin="dense"
                name="clinicName"
                label="Clinic Name"
                type="text"
                fullWidth
                variant="standard"
                placeholder="e.g., Paws & Claws Animal Hospital"
              />
            </Grid>
            <Grid size={{ xs: 11, md: 6 }}>
              <TextField
                required
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                placeholder="e.g., emily@vettech.com"
              />
              <TextField
                margin="dense"
                name="phoneNumber"
                label="Phone Number"
                type="tel"
                fullWidth
                variant="standard"
                placeholder="We'll only use this if you'd prefer a quick call."
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle2" sx={{ marginTop: "4vh" }}>
            About Your Clinic
          </Typography>
          <Grid container rowSpacing={3} columnSpacing={3} sx={{}}>
            <Grid size={{ xs: 11, md: 6 }}>
              <TextField
                required
                margin="dense"
                name="clinicLocation"
                label="Clinic Location"
                type="text"
                fullWidth
                variant="standard"
                placeholder="City, State"
              />
            </Grid>
            <Grid size={{ xs: 11, md: 6 }}>
              <TextField
                required
                margin="dense"
                name="sizeOfTeam"
                label="Number of Team Members to Train"
                type="number"
                fullWidth
                variant="standard"
                placeholder="Rough estimate is totally fine."
              />
            </Grid>
            <Grid size={{ xs: 11, md: 12 }}>
              <TextField
                multiline
                margin="dense"
                name="trainingGoals"
                label="Current Training Challenges or Goals"
                type="text"
                fullWidth
                variant="standard"
                placeholder="What are you hoping to improve with your team?"
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle2" sx={{ marginTop: "4vh" }}>
            What Are You Interested In?
          </Typography>
          <Grid container rowSpacing={3} columnSpacing={3} sx={{}}>
            <Grid size={{ xs: 11, md: 12 }}>
              <FormControlLabel
                sx={{ color: "#6e6e6e" }}
                name="demoTour"
                control={<Checkbox sx={{ color: "#6e6e6e" }} />}
                label="Getting a demo/tour of the platform"
              />
              <FormControlLabel
                sx={{ color: "#6e6e6e" }}
                name="pricingOptions"
                control={<Checkbox sx={{ color: "#6e6e6e" }} />}
                label="Pricing & plan options"
              />
              <FormControlLabel
                sx={{ color: "#6e6e6e" }}
                name="signUp"
                control={<Checkbox sx={{ color: "#6e6e6e" }} />}
                label="Ready to get started/sign up"
              />
              <FormControlLabel
                sx={{ color: "#6e6e6e" }}
                name="customTraining"
                control={<Checkbox sx={{ color: "#6e6e6e" }} />}
                label="Custom training solutions"
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle2" sx={{ marginTop: "4vh" }}>
            Anything else you'd like us to know?
          </Typography>
          <Grid container rowSpacing={3} columnSpacing={3} sx={{}}>
            <Grid size={{ xs: 11, md: 12 }}>
              <TextField
                multiline
                margin="dense"
                name="anythingElse"
                label="Current Training Challenges or Goals"
                type="text"
                fullWidth
                variant="standard"
                placeholder="Share anything else that would help us tailor the right solution for your team."
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export interface formDataInterface {
  anythingElse?: string;
  clinicLocation: string;
  clinicName: string;
  customTraining?: string;
  demoTour?: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  pricingOptions?: string;
  signUp?: string;
  sizeOfTeam: string;
  trainingGoals?: string;
}

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
