import { DOMAIN1X } from "@/app/utils/ApiRoutes";
import { Html, Button, Text } from "@react-email/components";

interface EmailTemplateProps {
  username: string; // Required prop
  message: string;
}

export default function EmailTemplate({ username, message }: EmailTemplateProps) {
  return (
    <Html>
      <Text>Hello {username},</Text>
      <Text>Welcome to our platform!</Text>
      <Button href="https://example.com/login">Click 1 | here to get started</Button>

      <Button href="https://example.com/login">Click 2 | here to get started</Button>

      <Button href="https://example.com/login">Click 3 | here to get started</Button>
      <p>
        This is the message you send;
        {username} | {message}
      </p>

      <Button href={DOMAIN1X}>Click 4 | here to get started</Button>

      <Button href={DOMAIN1X}>Click 5 | here to get started</Button>
    </Html>
  );
}
