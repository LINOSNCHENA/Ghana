import EmailTemplate from "@/app/components/Emails/TextData/EmailTemplate";
import { dataKey1, dataKey2, dataKey3, EMAIL_DEV, EMAIL_TEST } from "@/app/utils/ApiRoutes";
import type { CreateEmailResponse } from 'resend';
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(dataKey2);

interface RequestBody {
    email: string;
    username: string;
    message: string;
}
// 1. Define proper response types
type ResendSuccess = {
    id: string;
};
type ResendError = {
    name: string;
    message: string;
    statusCode: number;
};
type ResendResponse =
    | { data: ResendSuccess; error?: never }
    | { data?: never; error: ResendError };
// 2. Type-safe email sending function
async function sendEmail(params: {
    from: string;
    to: string[];
    subject: string;
    react: React.ReactElement;
}): Promise<ResendResponse> {
    try {
        const response = await resend.emails.send(params) as CreateEmailResponse;

        return {
            data: {
                id: response.id,
            },
        };
    } catch (error) {
        return {
            error: {
                name: "ResendError",
                message: error instanceof Error ? error.message : "Unknown error",
                statusCode: 500
            }
        };
    }
}

export async function POST(request: Request) {
    try {
        const { email, message, username }: RequestBody = await request.json();
        console.log("=========================|Test|============================")
        console.log(EMAIL_TEST)
        console.log("=========================|DEV|============================")
        console.log(EMAIL_DEV)
        console.log("=========================|keys|============================")
        console.log(dataKey1);
        console.log(dataKey2);
        console.log(dataKey3);
        console.log("=========================|keys|============55================")

        const result = await sendEmail({
            //  from: "Acme <onboarding@resend.dev>",
            from: 'onboarding@resend.dev',
            to: [EMAIL_TEST],
            subject: "Welcome! " + email.toUpperCase(),
            react: EmailTemplate({ username, message }),
        });
        const x = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'louisfosu@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        console.log("===========1==============|keys|============66================")
        console.log(Request)
        console.log("============2=============|keys|============66================")
        console.log(result)
        console.log("==========3===============|keys|============66================")
        console.log(x)
        console.log("========4=================|keys|============66================")

        if (result.error) {
            throw new Error(result.error.message);
        }

        return NextResponse.json(result.data);
    } catch (error: unknown) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}