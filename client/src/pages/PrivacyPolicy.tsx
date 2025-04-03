import { styled } from "@mui/material/styles";
import "./PrivacyPolicy.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <div className="background">
      <div className="header-button-container">
        <div>
          <h3>Privacy Policy for VetTech Academy</h3>
          <p>Effective Date: April 04, 2025</p>
        </div>
        <CustomButton component={Link} to="/home">
          Home
        </CustomButton>
      </div>

      <br />
      <br />
      <p>
        At VetTech Academy, accessible from [Insert Website URL], one of our
        main priorities is the privacy of our visitors. This Privacy Policy
        document outlines the types of information that is collected and
        recorded by VetTech Academy and how we use it.
      </p>
      <br />
      <ol>
        <li>
          Information
          <ul>
            <li>
              We Collect We may collect personal information in the following
              ways:
              <ul>
                <li>
                  Account Information:
                  <ul>
                    <li>
                      When you register on our platform, we may collect your
                      name, email address, and other details related to your
                      account.
                    </li>
                  </ul>
                </li>
                <li>
                  Usage Data:
                  <ul>
                    <li>
                      We collect data about how you interact with the website,
                      including page visits, IP address, browser type, and
                      device information.
                    </li>
                  </ul>
                </li>
                <li>
                  Payment Information:
                  <ul>
                    <li>
                      If you make a purchase, payment details may be collected,
                      though we do not store full credit card information.
                      Third-party payment processors may be used.
                    </li>
                  </ul>
                </li>
                <li>
                  Cookies:
                  <ul>
                    <li>
                      We may use cookies to enhance your experience on our
                      website. You can manage cookie settings through your
                      browser.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          How We Use Your Information
          <ul>
            <li>
              We use the information we collect to: Provide and maintain our
              services, including offering courses, educational content, and
              account management. Improve our website and services based on your
              interactions and feedback. Process payments and fulfill
              transactions. Send you updates, promotional content, and
              newsletters (if you have opted in).
            </li>
          </ul>
        </li>
        <li>
          Data Retention
          <ul>
            <li>
              We retain your information for as long as necessary to provide our
              services, comply with legal obligations, and resolve disputes. You
              can request deletion of your account and data by contacting us at
              contact@example.com.
            </li>
          </ul>
        </li>
        <li>
          Third-Party Services
          <ul>
            <li>
              We may use third-party services (such as payment processors or
              analytics tools) that have their own privacy policies. We are not
              responsible for the practices of these third parties. We encourage
              you to review their policies.
            </li>
          </ul>
        </li>
        <li>
          Data Security
          <ul>
            <li>
              We take the security of your personal data seriously and implement
              appropriate security measures to protect against unauthorized
              access, alteration, or destruction of your personal information.
              However, no data transmission over the internet is entirely
              secure, and we cannot guarantee the absolute security of your
              data.
            </li>
          </ul>
        </li>
        <li>
          Your Rights
          <ul>
            <li>
              Depending on your location, you may have rights to access,
              correct, or delete your personal data. You can contact us at
              contact@example.com for any requests regarding your personal
              information.
            </li>
          </ul>
        </li>
        <li>
          Children's Privacy
          <ul>
            <li>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children. If we
              become aware that a child has provided us with personal
              information, we will take steps to delete that information.
            </li>
          </ul>
        </li>
        <li>
          Changes to This Privacy Policy
          <ul>
            <li>
              VetTech Academy may update this Privacy Policy from time to time.
              We will notify you of any significant changes by posting the new
              Privacy Policy on this page. Please review this policy
              periodically for any updates.
            </li>
          </ul>
        </li>
        <li>
          Contact Us
          <ul>
            <li>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
              <ul>
                <li>Email: contact@example.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Website: [Insert Website URL]</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
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
