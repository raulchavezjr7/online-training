import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SetStateAction, useEffect, useState } from "react";
import { Asset, getAssetById } from "../api/assets";
import CircularProgress from "@mui/material/CircularProgress";

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [assets, setAssets] = useState<Asset[]>([
    {
      itemPathS3: "",
      imageName: "sever error",
      altName: "server error",
    },
  ]);

  useEffect(() => {
    const tempArr: SetStateAction<Asset[] | undefined> = [];
    getAssetById("landing-2")
      .then((res: Asset) => tempArr.push(res))
      .catch((err: { message: string }) => console.error(err.message))
      .then(() => {
        getAssetById("vet-review-1")
          .then((res: Asset) => tempArr.push(res))
          .catch((err: { message: string }) => console.error(err.message))
          .then(() => {
            getAssetById("vet-review-2")
              .then((res: Asset) => tempArr.push(res))
              .catch((err: { message: string }) => console.error(err.message))
              .then(() => {
                setAssets(tempArr);
                setIsLoading(false);
              });
          });
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{ width: "100vw", justifyContent: "center", height: "80vh" }}
        >
          <CircularProgress size="20rem" />
        </Stack>
      ) : (
        <div>
          <Box
            sx={() => ({
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(203, 77%, 46.00%), transparent)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              "@media only screen and (max-width: 900px)": {
                backgroundImage:
                  "radial-gradient(ellipse 100% 30% at 50% -15%, hsl(203, 77%, 46.00%), transparent)",
              },
            })}
          >
            <Grid
              container
              sx={{
                justifyContent: "space-around",
              }}
            >
              <Grid size={{ xs: 11, md: 7 }}>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingRight: "0px",
                    marginRight: "0px",
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                  }}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      width: { xs: "100%", sm: "fit-content" },
                    }}
                  >
                    <Typography variant="h2" align="center">
                      Training the Vet Techs/Assts Who Care for Animals Every
                      Day.
                    </Typography>
                    <Typography variant="h5" align="center">
                      The Complete Resource for Veterinary Clinics to Support
                      and Develop Their Vet Techs/Assts.
                    </Typography>
                    <CustomButton variant="contained" onClick={() => {}}>
                      Start Your Team's Training Journey
                    </CustomButton>
                  </Stack>
                </Container>
              </Grid>
              <Grid
                size={{ xs: 11, md: 5 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    marginLeft: "0px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    marginRight: "0px",
                    marginTop: "2vh",
                  }}
                >
                  <img
                    style={{ width: "inherit" }}
                    className="image"
                    src={`${import.meta.env.VITE_AWS_Cloudfront}/${
                      assets[0].itemPathS3
                    }`}
                    alt={assets[0].altName}
                  ></img>
                </Container>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              sx={{
                borderTop: "solid",
                marginTop: "5vh",
                borderColor: "#F59F00",
                paddingTop: "5vh",
                justifyContent: "center",
              }}
            >
              <Grid
                size={{ xs: 11, md: 4 }}
                sx={{
                  padding: "2vh 1vw",
                }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: "1vh" }}>
                      Why Choose VetTech Academy?
                    </Typography>
                    <Typography variant="subtitle1">
                      VetTech Academy is the go-to platform for veterinary
                      clinics that want to enhance their technicians/Assistant's
                      skills. We provide a library of practical, on-demand
                      resources designed to help your vet techs improve and
                      excel in their roles. By partnering with VetTech Academy,
                      you’ll have access to expertly curated training content,
                      designed to be used on-demand, anytime, anywhere.
                      <ul>
                        <li>
                          Comprehensive Learning Resources: Videos, articles,
                          and quizzes that cover essential skills.
                        </li>
                        <li>
                          Tailored Training for Your Team: Learn at the right
                          pace with content customized for varying experience
                          levels.
                        </li>
                        <li>
                          Support for Ongoing Development: Keep your team up to
                          date with the latest techniques, practices, and
                          veterinary knowledge.
                        </li>
                        <li>
                          Convenient and Flexible: Access content from any
                          device, whenever it’s needed.
                        </li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                size={{ xs: 11, md: 4 }}
                sx={{
                  padding: "2vh 1vw",
                }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: "1vh" }}>
                      Key Features
                    </Typography>
                    <Typography variant="subtitle1">
                      <ul>
                        <li>
                          Easy-to-Understand Content
                          <ul>
                            <li>
                              Our library covers everything from core technical
                              skills to up-to-date veterinary practices. Your
                              techs can dive into everything from patient care
                              to advanced medical procedures.
                            </li>
                          </ul>
                        </li>
                        <li>
                          On-Demand Access
                          <ul>
                            <li>
                              Your team can learn on their own schedule. Whether
                              it’s during a break or before a shift, VetTech
                              Academy allows your staff to learn at their own
                              pace.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Up-to-Date Information
                          <ul>
                            <li>
                              VetTech Academy ensures your team is always
                              informed of the latest advances in veterinary
                              medicine with regularly updated content.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Convenient Tracking for Clinics
                          <ul>
                            <li>
                              Clinic managers can easily monitor progress
                              through simple tracking tools, ensuring that your
                              team is continuously advancing their skills.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                size={{ xs: 11, md: 4 }}
                sx={{
                  padding: "2vh 1vw",
                }}
              >
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: "1vh" }}>
                      How It Works
                    </Typography>
                    <Typography variant="subtitle1"></Typography>
                    <ol>
                      <li>
                        Sign Up – Register your clinic and gain access to our
                        full range of learning materials.
                      </li>
                      <li>
                        Browse & Select Content – Choose from a wide variety of
                        topics tailored to different roles and experience
                        levels.
                      </li>
                      <li>
                        Start Learning – Your vet techs/assts access and engage
                        with content on their own time, wherever they are.
                      </li>
                      <li>
                        Monitor Progress – Track learning and ensure your team’s
                        development is on the right track.
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                <br></br>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              sx={{
                borderTop: "solid",
                marginTop: "5vh",
                borderColor: "#F59F00",
                paddingTop: "5vh",
                justifyContent: "space-around",
              }}
            >
              <Grid
                size={{ xs: 11, md: 6 }}
                sx={{
                  padding: "2vh 1vw",
                }}
              >
                <Card sx={{ height: "100%", display: "flex" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      "VetTech has been a game-changer for our clinic. It’s easy
                      to use, and the content is really relevant to our
                      day-to-day work."
                    </Typography>
                    <Typography>
                      — Dr. Lisa McKinley, Veterinary Clinic Owner
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={`${import.meta.env.VITE_AWS_Cloudfront}/${
                      assets[1].itemPathS3
                    }`}
                    alt={assets[1].altName}
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "40%",
                    }}
                  />
                </Card>
              </Grid>
              <Grid
                size={{ xs: 11, md: 6 }}
                sx={{
                  padding: "2vh 1vw",
                }}
              >
                <Card sx={{ height: "100%", display: "flex" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      "The content is so engaging! I can actually see how much
                      I’ve learned and improved in my role since I started using
                      VetTech."
                    </Typography>
                    <Typography>— John Smith, Veterinary Technician</Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    image={`${import.meta.env.VITE_AWS_Cloudfront}/${
                      assets[2].itemPathS3
                    }`}
                    alt={assets[2].altName}
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "40%",
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "solid",
              marginTop: "5vh",
              borderColor: "#F59F00",
              paddingTop: "5vh",
              marginBottom: "5vh",
              gap: "1vh",
            }}
          >
            <Typography variant="h4" align="center">
              Ready to Help Your Vet Techs/Assts Excel?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ marginBottom: "2vh" }}
            >
              Sign up for VetTech today and provide your clinic’s technicians
              with a powerful tool to enhance their knowledge and boost their
              confidence in the field.
            </Typography>
            <CustomButton>Contact Us for More Information</CustomButton>
          </Box>
        </div>
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
  "&:hover": {
    backgroundColor: "#bd7d07",
  },
}) as typeof Button;
