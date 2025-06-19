import EmailTemplate from "@/app/components/Emails/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend"; // ✅ named import

const resend = new Resend(process.env.RESEND_API_KEY!);


interface RequestBody {
    email: string;
    username: string;
}

export async function POST(request: Request) {
    try {
        const { email, username }: RequestBody = await request.json();
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: email,
            subject: "Welcome to Next.js + Resend!",
            react: EmailTemplate({ username }),
        });

        return NextResponse.json(data);
    } catch (error: unknown) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
