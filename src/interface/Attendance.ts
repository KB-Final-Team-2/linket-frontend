import { User } from "./User";

export interface Attend {
    attId: number;
    hireId: number;
    eventId: number;
    companyId: number;
    email: string;
    attDate: string;
    attStartDatetime: string;
    attEndDatetime: string;
    attStartBnt: boolean;
    attEndBnt: boolean;
}

export interface AttendWithUser extends Attend, User {
}

export interface AttendList {
    attId: number;
    hireId: number;
    eventId: number;
    email: string;
    attDate: string;
}

export const INIT_ATTD: Attend = {
    attId: -1,
    attDate: "",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    hireId: -1,
    eventId: -1,
    companyId: -1,
    email: ""
}

export const DUMMY_ATTD: Attend = {
    attId: 1,
    attDate: "2023-04-01",
    attStartDatetime: "2023-04-10",
    attEndDatetime: "2023-04-14",
    attStartBnt: false,
    attEndBnt: false,
    hireId: 1,
    eventId: 1,
    companyId: 1,
    email: "part@test.com"
}