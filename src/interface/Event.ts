import { Company } from "./Company";

export interface Event {
    eventId: string;
    eventName: string;
    eventType: string;
    place: string;
    eventInq: string;
    eventDesc: string;
    eventStatus: string;
    startDate: string;
    endDate: string;
    regDate: string;
    company: Company;
}