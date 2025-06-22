// emails/ContactFormEmail.tsx
import { COMP_ICON_URL } from "@/app/utils/constants";
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
            <Text style={footerText}>Sir Louis & Gao Co. Ltd.</Text>
            <Text style={footerText}>info@sirlouisgao.com • www.sirlouisgao.com</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

// ========== STYLES ==========
const main = {
  //   backgroundColor: "#f6f9fc",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#009688",
};

const container = {
  //   backgroundColor: "#ffffff",
  borderRadius: "8px",
  margin: "20px auto",
  padding: "20px",
  maxWidth: "1100px",
  width: "900px",
  minWidth: "600px",
  border: "1px solid #e1e1e1",
  backgroundColor: "#FFF176",
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
