import { Event, INIT_EVENT } from "./Event";
import { INIT_USER, User } from "./User";

export interface Attendance {
    attId: number;
    attDate: string;
    attStartDatetime: string;
    attEndDatetime: string;
    attStartBnt: string;
    attEndBnt: string;
    user: User;
    event: Event;
}

export const INIT_ATTD : Attendance = {
    attId: 0,
    attDate: "",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: "",
    attEndBnt: "",
    user: INIT_USER,
    event: INIT_EVENT
}