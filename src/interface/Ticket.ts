import { DUMMY_EVENT1, Event, INIT_EVENT } from "./Event";
import { DUMMY_MEMBER, INIT_USER, User } from "./User";

export interface Ticket {
    ticketId: number;
    eventId: number;
    companyId: number;
    email: string;
    serialNum: string;
    ticketReg: string;
    ticketStatus: string;
    regDate: string;
    lastUpdatedDate: string;
}

export const INIT_TICKET : Ticket = {
    ticketId: -1,
    eventId: -1,
    companyId: -1,
    email: "",
    serialNum: "",
    ticketReg: "",
    ticketStatus: "",
    regDate: "",
    lastUpdatedDate: ""
}

export const DUMMY_TICKET1 : Ticket = {
    ticketId: 1,
    eventId: 1,
    companyId: 1,
    email: "member@test.com",
    serialNum: "123456",
    ticketReg: "Y",
    ticketStatus: "Y",
    regDate: "2023-03-01",
    lastUpdatedDate: ""
}

export const DUMMY_TICKET2 : Ticket = {
    ticketId: 2,
    eventId: 1,
    companyId: 1,
    email: "member2@test.com",
    serialNum: "12345678",
    ticketReg: "Y",
    ticketStatus: "Y",
    regDate: "2023-03-01",
    lastUpdatedDate: ""
}