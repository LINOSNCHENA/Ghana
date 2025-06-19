"use client";
import { useState, FormEvent } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username }),
      });

      const result = await response.json();
      alert(result.id ? "Email sent!" : `Error: ${result.error}`);
    } catch (error) {
      alert("Failed to send email. Please try again.");
      console.error(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Recipient email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Email"}
      </button>
    </form>
  );
}
