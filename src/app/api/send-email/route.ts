import EmailTemplate from "@/app/components/Emails/TextData/EmailTemplate";
import { dataKey3, EMAIL_TEST } from "@/app/utils/ApiRoutes";
import type { CreateEmailResponse } from 'resend';
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(dataKey3);

interface RequestBody {
    email: string;
    username: string;
    message: string;
}
// 1. Define proper response types
type ResendSuccess = {
    id: string;
    from?: string;
    to?: string[];
    subject?: string;
    created_at?: string;
    html?: string
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
        console.log("=========================|Test|========38====================")
        console.log(response)
        console.log("=========================|Test|=========40===================")
        console.log(params)
        console.log("=========================|Test|=========42===================")
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
console.log('dddddddddddddddddddddddd')
async function send2Email(params: {
    from: string;
    to: string[];
    subject: string;
    react: React.ReactElement;
}): Promise<ResendResponse> {
    try {
        const response = await resend.emails.send(params);

        console.log("=========================|Email Response|=========70===========");
        console.log(response);
        console.log("=========================|Email Params|=============72=========");
        console.log(params);
        console.log("==================================================74===========");
        console.log(params.react.props);
        console.log("==================================================74===========");
        console.log(params.react);
        console.log("==================================================74===========");

        // Retain complete response data
        return {
            data: {
                id: response.id,
                from: params.from,
                to: params.to,
                subject: params.subject,
                created_at: new Date().toISOString(), // Add timestamp
                // Add any other fields you want to track
            },
        };
    } catch (error) {
        console.error("Email sending failed:", error);

        return {
            error: {
                name: "ResendError",
                message: error instanceof Error ? error.message : "Unknown error",
                //  statusCode: (error as any)?.statusCode || 500,
                statusCode: (error as ResendError).statusCode ?? 500,
            },
        };
    }
}

export async function POST(request: Request) {
    try {
        const { email, message, username }: RequestBody = await request.json();
        console.log("=========================|Test|============108================")
        console.log(EMAIL_TEST)
        const emailResponse = await send2Email({
            from: 'onboarding@resend.dev',
            to: ['recipient@example.com'],
            subject: 'Test Email',
            react: EmailTemplate({ username, message }),
        });
        // Store the response in a variable
        const savedEmailData = emailResponse.data;
        console.log(emailResponse);
        console.log("=========================|keys|============112================")
        console.log(savedEmailData);
        console.log("=========================|keys|============115================")
        const result = await sendEmail({
            //  from: "Acme <onboarding@resend.dev>",
            from: 'onboarding@resend.dev',
            to: [EMAIL_TEST],
            subject: "One + Welcome! " + email.toUpperCase(),
            react: EmailTemplate({ username, message }),
        });
        const x = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'louisfosu@gmail.com',
            subject: 'Two + Hello World!',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        console.log("===========1==============|keys|=====================136=======")
        console.log(Request)
        console.log("============2=============|keys|==================138==========")
        console.log(result)
        console.log("==========3===============|keys|===================140=========")
        console.log(x)
        console.log("========4=================|keys|===================142=======")

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