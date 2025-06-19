import { DOMAIN1X } from "@/app/utils/ApiRoutes";
import { COMP_ADDRESS, COMP_LOGO_BIG, COMP_NAME } from "@/app/utils/constants";
import { Html, Button, Text, Head, Body, Container, Section, Row, Column, Img, Hr } from "@react-email/components";

interface EmailTemplateProps {
  username: string;
  message: string;
  senderEmail?: string;
}

export default function EmailTemplate({ username, message, senderEmail }: EmailTemplateProps) {
  return (
    <Html>
      <Head>
        <title>Thank You For Contacting Us</title>
      </Head>
      <Body style={body}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <Img
                  src={COMP_LOGO_BIG} // Replace with your logo URL
                  width="120"
                  height="auto"
                  alt="Company Logo"
                  style={logo}
                />
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={main}>
            <Text style={greeting}>Hello {username},</Text>

            <Text style={paragraph}>Thank you for reaching out to us! We&apos;ve received your message and our team will get back to you shortly.</Text>

            <Section style={messageBox}>
              <Text style={messageLabel}>Your Message:</Text>
              <Text style={messageContent}>{message}</Text>
              {senderEmail && (
                <Text style={contactInfo}>
                  We&apos;ll respond to: <strong>{senderEmail}</strong>
                </Text>
              )}
            </Section>

            <Text style={paragraph}>In the meantime, you might find these resources helpful:</Text>

            {/* Action Buttons */}
            <Section style={buttonContainer}>
              <Button href={`${DOMAIN1X}/resources`} style={primaryButton}>
                Explore Resources
              </Button>
              <Button href={`${DOMAIN1X}/support`} style={secondaryButton}>
                Visit Support Center
              </Button>
              <Button href={`${DOMAIN1X}/contact`} style={secondaryButton}>
                Contact Us Again
              </Button>
            </Section>

            <Hr style={divider} />

            <Text style={paragraph}>If you didn&apos;t initiate this contact, please ignore this email.</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} {COMP_NAME}. All rights reserved.
            </Text>
            <Text style={footerLinks}>
              <a href={`${DOMAIN1X}/privacy`} style={link}>
                Privacy Policy
              </a>{" "}
              |
              <a href={`${DOMAIN1X}/terms`} style={link}>
                Terms of Service
              </a>{" "}
              |
              <a href={`${DOMAIN1X}/unsubscribe`} style={link}>
                Unsubscribe
              </a>
            </Text>
            <Text style={footerAddress}>{COMP_ADDRESS}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const body = {
  backgroundColor: "#f7fafc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: "1200px",
  width: "900px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const header = {
  padding: "24px 0",
  backgroundColor: "#2563eb",
};

const logo = {
  margin: "0 auto",
};

const main = {
  padding: "32px",
};

const greeting = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1a202c",
  marginBottom: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#4a5568",
  margin: "0 0 24px 0",
};

const messageBox = {
  backgroundColor: "#edf2f7",
  padding: "16px",
  borderRadius: "6px",
  marginBottom: "24px",
};

const messageLabel = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#4a5568",
  marginBottom: "8px",
};

const messageContent = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#2d3748",
  fontStyle: "italic",
};

const contactInfo = {
  fontSize: "14px",
  color: "#4a5568",
  marginTop: "12px",
};

const buttonContainer = {
  margin: "24px 0",
  textAlign: "center" as const,
};

const primaryButton = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
  margin: "0 8px 12px 0",
};

const secondaryButton = {
  backgroundColor: "#e2e8f0",
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
  margin: "0 8px 12px 0",
};

const divider = {
  border: "none",
  borderTop: "1px solid #e2e8f0",
  margin: "24px 0",
};

const footer = {
  padding: "24px",
  backgroundColor: "#f7fafc",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "12px",
  color: "#718096",
  margin: "0 0 8px 0",
};

const footerLinks = {
  fontSize: "12px",
  color: "#718096",
  margin: "0 0 8px 0",
};

const link = {
  color: "#4299e1",
  textDecoration: "underline",
  margin: "0 4px",
};

const footerAddress = {
  fontSize: "12px",
  color: "#718096",
  margin: 0,
};
