import { styled } from "@mui/material/styles";
import "./TermsConditions.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const TermsConditions = () => {
  return (
    <div className="termsBackground">
      <div className="header-button-container">
        <div>
          <h3>Terms and Conditions for VetTech Academy</h3>
          <p>Effective Date: April 04, 2025</p>
        </div>

        <CustomButton component={Link} to="/home">
          Home
        </CustomButton>
      </div>
      <br />
      <br />
      <h4>Welcome to VetTech Academy!</h4>
      <p>
        By using our website and services, you agree to comply with and be bound
        by the following terms and conditions. If you disagree with any part of
        these terms, you must not use our services.
      </p>
      <br />
      <ol>
        <li>
          Acceptance of Terms
          <ul>
            <li>
              By accessing or using the services provided by VetTech Academy,
              you agree to comply with these Terms and Conditions and our
              Privacy Policy.
            </li>
            <li>
              We reserve the right to update or modify these terms at any time,
              and any changes will be effective immediately upon posting on this
              page. You are encouraged to review these terms periodically for
              any updates.
            </li>
          </ul>
        </li>
        <li>
          Use of Services
          <ul>
            <li>
              VetTech Academy provides online education for veterinary
              technicians through courses, learning materials, and other
              resources. You agree to use our services solely for personal,
              educational purposes and in accordance with applicable laws.
            </li>
          </ul>
        </li>
        <li>
          Account Registration
          <ul>
            <li>
              To access certain features of VetTech Academy, you may need to
              create an account. You agree to provide accurate, complete, and
              up-to-date information during the registration process.
            </li>
            <li>
              You are responsible for all activities that occur under your
              account.
            </li>
            <li>
              {" "}
              If you provide any information that is inaccurate, not current, or
              incomplete, or if we have reasonable grounds to suspect such, we
              may suspend or terminate your account.
            </li>
          </ul>
        </li>
        <li>
          Payment and Subscriptions
          <ul>
            <li>
              Some courses and content on VetTech Academy may require a payment
              or subscription. All payments are processed through a third-party
              payment provider.
            </li>
            <li>
              You agree to provide valid payment information, and by submitting
              such information, you authorize VetTech Academy to charge for the
              services or subscriptions you select.
            </li>
            <li>All fees are non-refundable except as required by law.</li>
          </ul>
        </li>
        <li>
          Intellectual Property
          <ul>
            <li>
              All content on VetTech Academy, including but not limited to
              course materials, logos, graphics, text, images, videos, and other
              materials, are the property of VetTech Academy or its licensors
              and are protected by intellectual property laws.
            </li>
            <li>
              You may not copy, modify, distribute, or otherwise use any content
              without express written consent from VetTech Academy.
            </li>
          </ul>
        </li>
        <li>
          User Conduct
          <ul>
            <li>
              By using our website and services, you agree not to:
              <ul>
                <li>Violate any laws, regulations, or third-party rights.</li>
                <li>Harass, abuse, or harm others.</li>
                <li>Distribute any harmful software or viruses.</li>
                <li>
                  Attempt to access restricted areas of the site or compromise
                  the security of the website.
                </li>
                <li>
                  Upload or post any content that is illegal, offensive, or
                  violates the rights of others.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Termination of Account
          <ul>
            <li>
              We reserve the right to suspend or terminate your access to
              VetTech Academy if we believe you have violated these Terms and
              Conditions.
            </li>
            <li>
              Upon termination, you will no longer have access to any course
              materials or content on the platform.
            </li>
          </ul>
        </li>
        <li>
          Disclaimers and Limitation of Liability
          <ul>
            <li>
              VetTech Academy provides educational content "as is" without any
              warranties or guarantees, either express or implied.
            </li>
            <li>
              We do not guarantee that our website or services will be
              error-free, uninterrupted, or free from defects.
            </li>
            <li>
              In no event shall VetTech Academy, its affiliates, employees, or
              partners be liable for any indirect, incidental, special, or
              consequential damages arising from your use of the site or
              services.
            </li>
          </ul>
        </li>
        <li>
          Privacy
          <ul>
            <li>
              Your use of our website is also governed by our [Privacy
              Policy](insert link). Please review our Privacy Policy to
              understand how we collect, use, and protect your personal data.
            </li>
          </ul>
        </li>
        <li>
          Third-Party Links
          <ul>
            <li>
              Our website may contain links to third-party websites or services
              that are not operated or controlled by VetTech Academy. We are not
              responsible for the content, privacy policies, or practices of any
              third-party websites.
            </li>
          </ul>
        </li>
        <li>
          Governing Law
          <ul>
            <li>
              These Terms and Conditions are governed by the laws of [Insert
              Jurisdiction, e.g., the state of California, USA] without regard
              to its conflict of law principles. Any legal action or proceeding
              related to these Terms will be brought in the courts located in
              [Insert Jurisdiction].
            </li>
          </ul>
        </li>
        <li>
          Dispute Resolution
          <ul>
            <li>
              Any disputes arising out of or in connection with these Terms and
              Conditions shall be resolved through binding arbitration or
              mediation, as determined by VetTech Academy.
            </li>
          </ul>
        </li>
        <li>
          Severability
          <ul>
            <li>
              If any provision of these Terms and Conditions is found to be
              unlawful, void, or unenforceable, the remaining provisions shall
              remain in full force and effect.
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
