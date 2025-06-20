// 
// Data
//

import { dataKey1, EMAIL_DEV } from "@/app/utils/ApiRoutes";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailResponse } from "./types";
import EmailTemplate from "@/app/components/Emails/TextData/EmailTemplate";
const email = EMAIL_DEV
const key = dataKey1
// ==================================================
const idData = { email, key }
const resend = new Resend(idData.key);

export async function POST(request: Request) {
    try {
        const { username, message, email } = await request.json();
        const react = EmailTemplate({ username, message });
        const x = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [idData.email],
            subject: String('Welcome Package : ' + email),
            react: EmailTemplate({ username, message }),
        });
        // const x = await resend.emails.send({
        //     from: 'onboarding@resend.dev',
        //     to: [EMAIL_TEST],
        //     subject: String('Welcome Package : By Email : ' + email),
        //     html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        // });
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