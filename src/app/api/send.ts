import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import EmailTemplate from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestBody {
    email: string;
    username: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const { email, username }: RequestBody = req.body;
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: email,
                subject: "Welcome to Next.js + Resend!",
                react: EmailTemplate({ username }),
            });

            res.status(200).json(data);
        } catch (error: unknown) {
            res.status(400).json({
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}