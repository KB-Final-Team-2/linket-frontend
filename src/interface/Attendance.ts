import { DUMMY_EVENT1, Event, INIT_EVENT } from "./Event";
import { DUMMY_MEMBER, INIT_USER, User } from "./User";

export interface Attendance {
    attId: number;
    attDate: string;
    attStartDatetime: string;
    attEndDatetime: string;
    attStartBnt: boolean;
    attEndBnt: boolean;
    user: User;
    event: Event;
}

export const INIT_ATTD : Attendance = {
    attId: 0,
    attDate: "",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    user: INIT_USER,
    event: INIT_EVENT
}

export const DUMMY_ATTD : Attendance = {
    attId: 1,
    attDate: "2023-04-01",
    attStartDatetime: "2023-04-10",
    attEndDatetime: "2023-04-14",
    attStartBnt: false,
    attEndBnt: false,
    user: DUMMY_MEMBER,
    event: DUMMY_EVENT1
}