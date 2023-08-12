import { Event } from "./Event";

export interface Hire {
    hireId : number;
    hireEventId: number;
    hireCompanyId: number;
    workName: string;
    workHour: number;
    workStartDay: string;
    workEndDay: string;
    pay: number;
    edu: string;
    regDate: string;
}

export interface HireWithEvent extends Hire, Event {};

export interface HireList {
    hireId : number;
    workName: string;
    regDate: string;
}

export interface RegistHire {
    hireEventId: number;
    hireCompanyId: number;
    workName: string;
    workHour: number;
    workStartDay: string;
    workEndDay: string;
    pay: number;
    edu: string;
}

export const INIT_HIRE : Hire = {
    hireId: -1,
    workHour: -1,
    workStartDay: "",
    workEndDay: "",
    pay: -1,
    edu: "",
    regDate: "",
    workName: "",
    hireEventId: -1,
    hireCompanyId: -1
}

export const DUMMY_HIRE1 : Hire = {
    hireId: 1,
    workName: "Hire1",
    workHour: 4,
    workStartDay: "2023-04-11",
    workEndDay: "2023-04-21",
    pay: 20000,
    edu: "Test String",
    regDate: "2023-04-01",
    hireEventId: 0,
    hireCompanyId: 0
}

export const DUMMY_HIRE2 : Hire = {
    hireId: 2,
    workName: "Hire2",
    workHour: 5,
    workStartDay: "2023-04-31",
    workEndDay: "2023-04-32",
    pay: 20000,
    edu: "Test String 2",
    regDate: "2023-04-01",
    hireEventId: 0,
    hireCompanyId: 0
}