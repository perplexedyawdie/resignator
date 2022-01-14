import { SaveRequest } from "../dto/save-request.dto";

export interface SaveBody extends SaveRequest {
    id: string;
}