// types/resend.d.ts
// declare module 'resend' {
//     export interface CreateEmailResponse {
//         id: string;
//     }

//     export class Resend {
//         constructor(apiKey: string);
//         emails: {
//             send(params: unknown): Promise<CreateEmailResponse>; // Now typed
//         };
//     }
// }



declare module 'resend' {
    export interface CreateEmailResponse {
        id: string;
    }

    export class Resend {
        constructor(apiKey: string);
        emails: {
            send(params: unknown): Promise<CreateEmailResponse>;
        };
    }
}
