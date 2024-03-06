// types/next.d.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';

declare module 'next' {
    interface NextApiRequest {
        files?: IncomingForm['files'];
    }
}
