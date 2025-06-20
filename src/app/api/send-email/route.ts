import EmailTemplate from "@/app/components/Emails/TextData/EmailTemplate";
import { EMAIL_DEV, EMAIL_TEST } from "@/app/utils/ApiRoutes";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { CreateEmailResponse } from 'resend';


const dataKey = process.env.RESEND_API_KEZ1 ?? 'XX';
const dataKey1 = process.env.RESEND_API_KEZ2 ?? 'XX';
const dataKey2 = process.env.RESEND_API_KEZ3 ?? 'XX';
console.log(dataKey);
console.log(dataKey1);
console.log(dataKey2);
const resend = new Resend(dataKey);

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
// async function sendEmail(params: {
//     from: string;
//     to: string[];
//     subject: string;
//     react: React.ReactElement;
// }): Promise<ResendResponse> {
//     try {
//         const response = await resend.emails.send(params);
//         return response as ResendResponse;
//     } catch (error) {
//         return {
//             error: {
//                 name: "ResendError",
//                 message: error instanceof Error ? error.message : "Unknown error",
//                 statusCode: 500
//             }
//         };
//     }
// }



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
        console.log(dataKey);
        console.log(dataKey1);
        console.log(dataKey2);
        console.log("=========================|keys|============55================")

        const result = await sendEmail({
            from: "Acme <onboarding@resend.dev>",
            to: [EMAIL_TEST],
            subject: "Welcome! " + email.toUpperCase(),
            react: EmailTemplate({ username, message }),
        });


        console.log(Request)
        console.log(result)

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