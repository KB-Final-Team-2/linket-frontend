import { Event } from "./Event";
import { User } from "./User";

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