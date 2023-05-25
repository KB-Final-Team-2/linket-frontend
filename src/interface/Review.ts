import { Event } from "./Event";
import { User } from "./User";

export interface Review {
    reviewId: number;
    ticketId: number;
    eventId: number;
    conpanyId: number;
    rateFacilChair: number;
    rateFacilRest: number;
    rateStaffIn: number;
    rateStaffTicket: number;
    rateEventContent: number;
    rateEventGo: number;
    reviewEtc: string;
    regDate: string;
};

export interface RegistReview {
    ticketId: number;
    eventId: number;
    conpanyId: number;
    rateFacilChair: number;
    rateFacilRest: number;
    rateStaffIn: number;
    rateStaffTicket: number;
    rateEventContent: number;
    rateEventGo: number;
    reviewEtc: string;
}

export interface ReviewWithUser extends Review, User {}

export interface ReviewWithEvent extends Review, Event {};

export const INIT_REVIEW : Review = {
    reviewId: -1,
    ticketId: -1,
    eventId: -1,
    conpanyId: -1,
    rateFacilChair: -1,
    rateFacilRest: -1,
    rateStaffIn: -1,
    rateStaffTicket: -1,
    rateEventContent: -1,
    rateEventGo: -1,
    reviewEtc: "",
    regDate: ""
}

export const DUMMY_REVIEW : Review = {
    reviewId: 1,
    ticketId: 1,
    eventId: 1,
    conpanyId: 1,
    rateFacilChair: 5,
    rateFacilRest: 5,
    rateStaffIn: 5,
    rateStaffTicket: 5,
    rateEventContent: 5,
    rateEventGo: 5,
    reviewEtc: "밥이 맛있으면 좋겠어요",
    regDate: "2023-03-01"
}

export const DUMMY_EVENT_REVIEW : ReviewWithUser = {
    reviewId: 1,
    ticketId: 1,
    eventId: 1,
    conpanyId: 1,
    rateFacilChair: 5,
    rateFacilRest: 5,
    rateStaffIn: 5,
    rateStaffTicket: 5,
    rateEventContent: 5,
    rateEventGo: 5,
    reviewEtc: "밥이 맛있으면 좋겠어요",
    regDate: "2023-03-01",
    email: "member@email.com",
    password: "1234",
    userName: "Member",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "member",
    aggrement: false,
    account: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
    companyId: -1
}

export const DUMMY_REVIEWWITHEVENT : ReviewWithEvent = {
    reviewId: 1,
    ticketId: 1,
    eventId: 1,
    conpanyId: 1,
    rateFacilChair: 5,
    rateFacilRest: 5,
    rateStaffIn: 5,
    rateStaffTicket: 5,
    rateEventContent: 5,
    rateEventGo: 5,
    reviewEtc: "밥이 맛있으면 좋겠어요",
    regDate: "2023-03-01",
    eventName: "KB Killing Boys Concert",
    eventType: "concert",
    place: "잠실 올림픽 경기장",
    eventImage: "event1.jpg",
    eventInq: "02-123-456",
    eventDesc: "대세 남자 아이돌 콘서트",
    eventStatus: "Y",
    startDate: "2023.05.17",
    endDate: "2023.05.17",
    companyId: 0,
    lastUpdatedDate: "",
    deletedDate: "",
    link: ""
}