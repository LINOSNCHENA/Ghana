import { NextApiRequest, NextApiResponse } from "next";
import { createResend } from "resend";
import EmailTemplate from "../components/Emails/EmailTemplate";

// Create the Resend client
const resend = createResend(process.env.RESEND_API_KEY!);

interface RequestBody {
    email: string;
    username: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, username }: RequestBody = req.body;

    if (!email || !username) {
        return res.status(400).json({ error: "Email and username are required." });
    }

    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>", // Replace with your verified sender
            to: email,
            subject: "Welcome to Next.js + Resend!",
            react: EmailTemplate({ username }),
        });

        return res.status(200).json(data);
    } catch (error: unknown) {
        return res.status(400).json({
            error: error instanceof Error ? error.message : "Unknown error occurred",
        });
    }
}
