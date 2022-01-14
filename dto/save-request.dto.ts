export interface SaveRequest {
    recipient: string;
    weeksNotice: number;
    jobTitle: string;
    sender: string;
    company: string;
    resignationDate: string | Date;
}