import { Event } from "./Event";
import { User } from "./User";

export interface Ticket {
    ticketId: string;
    serialNum: string;
    ticketReg: string;
    ticketStatus: string;
    regDate: string;
    user: User;
    event: Event;
}