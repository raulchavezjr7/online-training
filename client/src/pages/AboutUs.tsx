import Card from "@mui/material/Card";
import "./AboutUs.css";
import { CardContent, CardMedia, Grid } from "@mui/material";
import { Form } from "../components/Form";

export const AboutUs = () => {
  const textCard = {
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "@media only screen and (max-width: 900px)": {
      backgroundColor: "#f7f9f6",
    },
  };
  const textCardContent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "92%",
  };
  const imageCard = {
    objectFit: "contain",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const gridText = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "2vh",
    marginBottom: "2vh",
    fontSize: "large",
    gap: "1vh",
  };

  return (
    <div className="aboutUsBackground">
      <Grid
        container
        rowSpacing={1}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid size={{ xs: 11, md: 8 }} sx={gridText}>
          <h3>Our Mission</h3>
          Our mission is to empower veterinary clinics by providing their
          technicians with the skills and expertise needed to deliver the
          highest standard of care. Whether your team is new to the field or
          already experienced, VetTech Academy offers a wide range of courses
          tailored to meet the specific needs of your clinic and staff.
        </Grid>
        <Grid size={{ xs: 11, md: 7 }}>
          <Card sx={textCard}>
            <CardContent sx={textCardContent}>
              <h3>About VetTech Academy</h3>
              <br />
              <div>
                Welcome to VetTech Academy, the leading online training platform
                designed specifically for veterinary clinics. We provide
                high-quality, flexible, and engaging courses to help your
                veterinary technicians enhance their skills, stay up-to-date
                with industry standards, and provide exceptional care to
                animals.
              </div>
              <br />
              <div>
                At VetTech Academy, we understand the demands of running a busy
                veterinary practice, which is why we’ve created a solution that
                makes training easy and effective. Our platform allows
                veterinary clinics to manage and track technician training in a
                seamless way, ensuring that your team is always equipped with
                the knowledge they need to succeed.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid className="gridImage" size={4}>
          <Card sx={{ height: "100%", boxSizing: "border-box" }}>
            <CardMedia
              component="img"
              image={`../background-image/about-us-image-2.jpg`}
              alt="Vet Tech Dog"
              sx={imageCard}
            />
          </Card>
        </Grid>
        <Grid size={3} className="gridImage">
          <Card sx={{ height: "100%", boxSizing: "border-box" }}>
            <CardMedia
              component="img"
              image={`../background-image/about-us-image-1.jpg`}
              alt="Vet Tech Dog"
              sx={imageCard}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 11, md: 7 }}>
          <Card sx={textCard}>
            <CardContent sx={textCardContent}>
              <h3>What We Offer:</h3>
              <br />
              <ul>
                <li>
                  <h4>Comprehensive Course Catalog:</h4>
                  <p>
                    Our courses cover a wide range of topics that are essential
                    for veterinary technicians, including animal care,
                    diagnostic procedures, medical techniques, and client
                    communication.
                  </p>
                </li>
                <li>
                  <h4>Customizable Training Plans:</h4>
                  <p>
                    As a clinic, you can select courses based on your team’s
                    experience levels and specific needs. Create a tailored
                    training plan that ensures your technicians are trained in
                    the areas that matter most.
                  </p>
                </li>
                <li>
                  <h4>On-Demand-Learning:</h4>
                  <p>
                    With our flexible, self-paced courses, your technicians can
                    learn whenever and wherever they have time. Whether they’re
                    in between appointments or during quieter times, they can
                    continue their professional development without disruption
                    to their daily responsibilities.
                  </p>
                </li>
                <li>
                  <h4>Progress Tracking and Reporting:</h4>
                  <p>
                    Our platform makes it easy for clinic managers to track
                    course progress, monitor completion rates, and identify any
                    gaps in knowledge. You’ll have the tools you need to ensure
                    your team is on track and continuously improving.
                  </p>
                </li>
                <li>
                  <h4>Certificates of Completion:</h4>
                  <p>
                    After finishing a course, each technician will receive a
                    certificate that can be added to their professional record
                    or displayed within your clinic. These certificates showcase
                    their newly acquired skills and dedication to their role.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 11, md: 7 }}>
          <Card sx={textCard}>
            <CardContent sx={textCardContent}>
              <h3>Why Choose VetTech Academy for Your Clinic?</h3>
              <br />

              <ul>
                <li>
                  <h4>Expert-Led Content:</h4>
                  <p>
                    Our courses are created by industry professionals with years
                    of experience in the veterinary field. They’re designed to
                    be practical and immediately applicable, giving your
                    technicians the knowledge they need to handle everyday tasks
                    and more complex procedures.
                  </p>
                </li>
                <li>
                  <h4>Cost-Effective Training:</h4>
                  <p>
                    VetTech Academy provides an affordable alternative to
                    in-person training, allowing you to train your team without
                    the costs associated with travel, lodging, or hiring
                    external trainers
                  </p>
                </li>
                <li>
                  <h4>Scalable for Any Clinic Size:</h4>
                  <p>
                    Whether you're a small practice with a few technicians or a
                    large veterinary group with multiple locations, VetTech
                    Academy offers scalable training solutions that grow with
                    your clinic.
                  </p>
                </li>
                <li>
                  <h4>Improved Care and Client Satisfaction:</h4>
                  <p>
                    Well-trained veterinary technicians are critical to
                    delivering high-quality care and ensuring client
                    satisfaction. With VetTech Academy, you’ll invest in your
                    team’s skills, helping them provide the best possible
                    service to both animals and their owners. At VetTech
                    Academy, we believe that continued education is the key to
                    success in the ever-evolving veterinary field. We’re here to
                    support your clinic’s training needs, whether you're
                    onboarding new staff or advancing the skills of your
                    experienced team members.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={4} className="gridImage">
          <Card sx={{ height: "100%", boxSizing: "border-box" }}>
            <CardMedia
              component="img"
              image={`../background-image/about-us-image-3.jpg`}
              alt="Vet Tech Dog"
              sx={imageCard}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 11, md: 7 }} sx={gridText}>
          <h3>Get Started Today!</h3>
          <p style={{marginBottom: "1vh"}}>
            Ready to take your clinic’s training program to the next level?
            Contact us today to learn more about how VetTech Academy can help
            your veterinary technicians grow and succeed.
          </p>
          <Form buttonText="Contact Us for More Information"/>
        </Grid>
      </Grid>
    </div>
  );
};
