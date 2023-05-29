import { DUMMY_EVENT1, Event, INIT_EVENT } from "./Event";
import { DUMMY_MEMBER, INIT_USER, User } from "./User";

export interface Ticket {
    ticketId: number;
    ticketEventId: number;
    ticketCompanyId: number;
    ticketEmail: string;
    serialNum: string;
    ticketReg: string;
    ticketStatus: string;
    regDate: string;
    lastUpdatedDate: string;
    seat: string;
}

export interface TicketWithEvent extends Ticket, Event {};

export interface TicketWithUser extends Ticket, User {};

export const DUMMY_TICKETWITHEVENT : TicketWithEvent = {
    ticketId: 1,
    ticketEventId: 1,
    ticketCompanyId: 1,
    ticketEmail: "member@test.com",
    serialNum: "123456",
    ticketReg: "Y",
    ticketStatus: "Y",
    regDate: "2023-03-01",
    lastUpdatedDate: "",
    eventName: "KB Killing Boys Concert",
    eventType: "concert",
    place: "잠실 올림픽 경기장",
    eventImage: "event1.jpg",
    eventInq: "02-123-456",
    eventDesc: "대세 남자 아이돌 콘서트",
    eventStatus: "Y",
    startDate: "2023.05.17",
    endDate: "2023.05.17",
    deletedDate: "",
    seat: "s",
    link: "",
    eventId: 1,
    eventCompanyId: 0
}

export const INIT_TICKET : Ticket = {
    ticketId: -1,
    ticketEventId: -1,
    ticketCompanyId: -1,
    ticketEmail: "",
    serialNum: "",
    ticketReg: "",
    ticketStatus: "",
    regDate: "",
    lastUpdatedDate: "",
    seat: "s"
}

export const DUMMY_TICKET1 : Ticket = {
    ticketId: 1,
    ticketEventId: 1,
    ticketCompanyId: 1,
    ticketEmail: "member@test.com",
    serialNum: "123456",
    ticketReg: "Y",
    ticketStatus: "Y",
    regDate: "2023-03-01",
    lastUpdatedDate: "",
    seat: "s"
}

export const DUMMY_TICKET2 : Ticket = {
    ticketId: 2,
    ticketEventId: 1,
    ticketCompanyId: 1,
    ticketEmail: "member2@test.com",
    serialNum: "12345678",
    ticketReg: "Y",
    ticketStatus: "Y",
    regDate: "2023-03-01",
    lastUpdatedDate: "",
    seat: "s"
}

export const DUMMY_TICKETWITHUSER : TicketWithUser = {
    ticketId: 1,
    ticketEventId: 1,
    ticketCompanyId: 1,
    ticketEmail: "member@test.com",
    serialNum: "123456",
    ticketReg: "Y",
    ticketStatus: "Y",
    regDate: "2023-03-01",
    lastUpdatedDate: "",
    password: "1234",
    userName: "Member",
    birthdate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "member",
    aggrement: false,
    account: "",
    withdrawDate: "",
    enable: "",
    seat: "s",
    email: "",
    userCompanyId: 0
}