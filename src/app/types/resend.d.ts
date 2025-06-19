// types/resend.d.ts
declare module 'resend' {
    export class Resend {
        constructor(apiKey: string);
        emails: {
            send(params: unknown): Promise<unknown>;
        };
    }
}