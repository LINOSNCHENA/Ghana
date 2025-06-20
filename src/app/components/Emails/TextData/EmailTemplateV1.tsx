import * as React from "react";

type EmailTemplateProps = {
  username: string;
  message: string;
};

export default function EmailTemplate1({ username, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", color: "#333" }}>
      <h2 style={{ color: "#0070f3" }}>Welcome, {username}!</h2>
      <p>We&apos;re excited to have you here. Below is your welcome message:</p>
      <blockquote style={{ backgroundColor: "#f9f9f9", padding: "1rem", borderLeft: "4px solid #0070f3" }}>{message}</blockquote>
      <p>Thank you for joining us!</p>
      <p style={{ fontSize: "0.9rem", color: "#888" }}>— The Team</p>
    </div>
  );
}
