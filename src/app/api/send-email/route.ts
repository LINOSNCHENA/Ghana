// 
// Data
//

import { dataKey3, EMAIL_MASTER } from "@/app/utils/ApiRoutes";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailResponse } from "./types";
import EmailTemplate from "@/app/components/Emails/TemplateTexts/EmailTemplate";
import EmailTemplate0 from "@/app/components/Emails/TemplateTexts/EmailTemplate0";
// import EmailTemplate from "@/app/components/Emails/TextData/EmailTemplate";
// import EmailTemplate0 from "@/app/components/Emails/TextData/EmailTemplate0";
const email = EMAIL_MASTER
const key = dataKey3
// ==================================================
const idData = { email, key }
const resend = new Resend(idData.key);

export async function POST(request: Request) {
    try {
        const { username, message, email, email: senderEmail } = await request.json();
        const react = EmailTemplate({ username, message });
        const react1 = EmailTemplate0({ username, message, senderEmail });
        const x = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [idData.email],
            subject: String('Welcome Package : ' + email),
            react: react1,// EmailTemplate({ username, message }),
        });
        const emailData: EmailResponse = {
            id: String(x.id),
            from: 'onboarding@resend.dev',
            to: [idData.email],
            subject: String('Welcome Package : ' + email),
            html: String(react),
        };
        console.log("=========================|keys|============77================")
        console.log(emailData);
        console.log(x);
        console.log("=========================|keys|============85================")
        return NextResponse.json(emailData);
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}