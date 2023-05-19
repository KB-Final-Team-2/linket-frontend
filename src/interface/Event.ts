import { Company, DUMMY_COMPANY, INIT_COMPANY } from "./Company";

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
    company: Company | undefined;
}

export const INIT_EVENT: Event = {
    eventId: "",
    eventName: "",
    eventType: "",
    place: "",
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
    eventType: "Concert",
    place: "잠실 올림픽 경기장",
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
    eventType: "Concert",
    place: "잠실 올림픽 경기장",
    eventInq: "02-123-456",
    eventDesc: "마술쇼",
    eventStatus: "Y",
    startDate: "2023.05.14",
    endDate: "2023.05.14",
    regDate: "2023.05.14",
    company: DUMMY_COMPANY
}