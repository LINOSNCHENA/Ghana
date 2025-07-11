// app/api/contact/route.ts

import ContactFormEmail from '@/app/components/Emails/ContactFormEmail';
import { EMAIL_MASTER, dataKey3 } from '@/app/utils/ApiRoutes';
import { Resend } from 'resend';
const email = EMAIL_MASTER
const key = dataKey3
// ==================================================
const idData = { email, key }
const resend = new Resend(idData.key);
export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, subject, message } = body;
    console.log(body)

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [idData.email],
            subject: `New Contact Form: ${subject}`,
            reply_to: email,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}
      `,

            react: ContactFormEmail({ name, email, subject, message }),
        }


        );

        return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }
}
