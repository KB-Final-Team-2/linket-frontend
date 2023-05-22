export interface Event {
    eventId: number;
    companyId: number;
    eventName: string;
    eventType: string;
    place: string;
    eventImage: string;
    eventInq: string;
    eventDesc: string;
    eventStatus: string;
    startDate: string;
    endDate: string;
    regDate: string;
    lastUpdatedDate: string;
    deletedDate: string;
}

export interface RegistEvent {
    companyId: string;
    eventName: string;
    eventType: string;
    place: string;
    eventImage: File | undefined;
    eventInq: string;
    eventDesc: string;
    startDate: Date;
    endDate: Date;
}

export interface EndedEvent extends Event {
    client: number;
    part: number;
    totalFee: number;
}

export const INIT_EVENT: Event = {
    eventId: 1,
    eventName: "",
    eventType: "",
    place: "",
    eventImage: "",
    eventInq: "",
    eventDesc: "",
    eventStatus: "",
    startDate: "",
    endDate: "",
    regDate: "",
    companyId: 0,
    lastUpdatedDate: "",
    deletedDate: ""
}

export const DUMMY_EVENT1: Event = {
    eventId: 2,
    eventName: "KB Killing Boys Concert",
    eventType: "concert",
    place: "잠실 올림픽 경기장",
    eventImage: "event1.jpg",
    eventInq: "02-123-456",
    eventDesc: "대세 남자 아이돌 콘서트",
    eventStatus: "Y",
    startDate: "2023.05.17",
    endDate: "2023.05.17",
    regDate: "2023.05.17",
    companyId: 0,
    lastUpdatedDate: "",
    deletedDate: ""
}

export const DUMMY_EVENT2: Event = {
    eventId: 3,
    eventName: "호구와트 마술쇼",
    eventType: "concert",
    place: "잠실 올림픽 경기장",
    eventImage: "event2.jpg",
    eventInq: "02-123-456",
    eventDesc: "마술쇼",
    eventStatus: "Y",
    startDate: "2023.05.14",
    endDate: "2023.05.14",
    regDate: "2023.05.14",
    companyId: 0,
    lastUpdatedDate: "",
    deletedDate: ""
}