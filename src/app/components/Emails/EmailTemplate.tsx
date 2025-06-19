import { Html, Button, Text } from "@react-email/components";

interface EmailTemplateProps {
  username: string;
}

export default function EmailTemplate({ username }: EmailTemplateProps) {
  return (
    <Html>
      <Text>Hello {username},</Text>
      <Text>Welcome to our platform!</Text>
      <Button href="https://example.com/login">Click here to get started</Button>
    </Html>
  );
}
