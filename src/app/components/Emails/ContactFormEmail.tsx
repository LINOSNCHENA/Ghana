// emails/ContactFormEmail.tsx
import { COMP_SITE } from "@/app/utils/ApiRoutes";
import { COMP_EMAIL, COMP_ICON_URL, COMP_NAME } from "@/app/utils/constants";
import { Html, Head, Preview, Body, Container, Section, Img, Text } from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail = ({ name, email, subject, message }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Watermark / Logo */}
          <Section style={logoSection}>
            <Img src={COMP_ICON_URL} width="150" alt="Company Logo" style={logo} />
          </Section>

          {/* Title */}
          <Section>
            <Text style={heading}>📩 New Contact Form Submission</Text>
            <Text style={paragraph}>
              <strong>From:</strong> {name} ({email})
            </Text>
            <Text style={paragraph}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={paragraph}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>{COMP_NAME}</Text>
            <Text style={footerText}>
              {COMP_EMAIL} • {COMP_SITE}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

// ========== STYLES ==========
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  width: "75vw",
};

const container = {
  borderRadius: "8px",
  margin: "20px auto",
  padding: "20px",
  maxWidth: "80vw",
  width: "70vw",
  minWidth: "40vw",
  border: "1px solid #e1e1e1",
  backgroundColor: "pink",
};

const logoSection = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const logo = {
  opacity: 0.3,
};

const heading = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
};

const paragraph = {
  fontSize: "14px",
  color: "#555",
  marginBottom: "8px",
};

const messageBox = {
  backgroundColor: "#f1f1f1",
  padding: "12px",
  borderRadius: "6px",
  fontSize: "14px",
  color: "#333",
};

const footer = {
  marginTop: "30px",
  borderTop: "1px solid #ddd",
  paddingTop: "15px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "12px",
  color: "#999",
};
