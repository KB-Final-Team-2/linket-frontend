import { DUMMY_EVENT1, Event, INIT_EVENT } from "./Event";
import { DUMMY_MEMBER, INIT_USER, User } from "./User";

export interface Ticket {
    ticketId: string;
    serialNum: string;
    ticketReg: string;
    ticketStatus: string;
    regDate: string;
    user: User;
    event: Event;
}

export const INIT_TICKET : Ticket = {
    ticketId: "",
    serialNum: "",
    ticketReg: "",
    ticketStatus: "",
    regDate: "",
    user: INIT_USER,
    event: INIT_EVENT
}

export const DUMMY_TICKET1 : Ticket = {
    ticketId: "",
    serialNum: "",
    ticketReg: "",
    ticketStatus: "",
    regDate: "",
    user: DUMMY_MEMBER,
    event: DUMMY_EVENT1
}

export const DUMMY_TICKET2 : Ticket = {
    ticketId: "",
    serialNum: "",
    ticketReg: "",
    ticketStatus: "",
    regDate: "",
    user: DUMMY_MEMBER,
    event: DUMMY_EVENT1
}