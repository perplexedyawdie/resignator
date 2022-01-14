import { SaveRequest } from "../dto/save-request.dto";

export interface ApiResponse {
    success: boolean;
    message?: SaveRequest;
    error?: any;
    axiosResponse?: any;
    saveId?: string;
}

export interface DocumentBody {
    "_id": string;
    "recipient": string;
    "weeksNotice": number;
    "jobTitle": string;
    "sender": string;
    "company": string;
    "resignationDate": Date | string;
  }