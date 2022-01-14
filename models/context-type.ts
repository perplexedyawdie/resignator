import { Dispatch, SetStateAction } from "react";

export type ResignerDetailsType = {
    recipient: string | undefined;
    setRecipient: Dispatch<SetStateAction<string>>;
    weeksNotice: number | undefined;
    setWeeksNotice: Dispatch<SetStateAction<number>>;
    jobTitle: string | undefined;
    setJobTitle: Dispatch<SetStateAction<string>>;
    sender: string | undefined;
    setSender: Dispatch<SetStateAction<string>>;
    company: string | undefined;
    setCompany: Dispatch<SetStateAction<string>>;
    resignationDate: Date | undefined;
    setResignationDate: Dispatch<SetStateAction<Date>>;
} | null