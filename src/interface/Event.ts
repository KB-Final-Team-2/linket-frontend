import { Company, DUMMY_COMPANY, INIT_COMPANY } from "./Company";

export interface Event {
    eventId: string;
    eventName: string;
    eventType: string;
    place: string;
    eventImg: string;
    eventInq: string;
    eventDesc: string;
    eventStatus: string;
    startDate: string;
    endDate: string;
    regDate: string;
    company: Company | undefined;
}

export interface RegistEvent {
    eventName: string;
    eventType: string;
    place: string;
    eventImg: File | undefined;
    eventInq: string;
    eventDesc: string;
    startDate: Date;
    endDate: Date;
    companyId: string;
}

export interface EndedEvent extends Event {
    client: number;
    part: number;
    totalFee: number;
}

export const INIT_EVENT: Event = {
    eventId: "",
    eventName: "",
    eventType: "",
    place: "",
    eventImg: "",
    eventInq: "",
    eventDesc: "",
    eventStatus: "",
    startDate: "",
    endDate: "",
    regDate: "",
    company: INIT_COMPANY
}

export const DUMMY_EVENT1: Event = {
    eventId: "12345",
    eventName: "KB Killing Boys Concert",
    eventType: "concert",
    place: "잠실 올림픽 경기장",
    eventImg: "event1.jpg",
    eventInq: "02-123-456",
    eventDesc: "대세 남자 아이돌 콘서트",
    eventStatus: "Y",
    startDate: "2023.05.17",
    endDate: "2023.05.17",
    regDate: "2023.05.17",
    company: DUMMY_COMPANY
}

export const DUMMY_EVENT2: Event = {
    eventId: "12345",
    eventName: "호구와트 마술쇼",
    eventType: "concert",
    place: "잠실 올림픽 경기장",
    eventImg: "event2.jpg",
    eventInq: "02-123-456",
    eventDesc: "마술쇼",
    eventStatus: "Y",
    startDate: "2023.05.14",
    endDate: "2023.05.14",
    regDate: "2023.05.14",
    company: DUMMY_COMPANY
}