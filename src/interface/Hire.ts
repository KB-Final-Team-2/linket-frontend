export interface Hire {
    hireId : number;
    eventId: number;
    companyId: number;
    workName: string;
    workHour: number;
    workStartDate: string;
    workEndDate: string;
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
    eventId: number;
    companyId: number;
    workName: string;
    workHour: number;
    workStartDate: string;
    workEndDate: string;
    pay: number;
    edu: string;
}

export const INIT_HIRE : Hire = {
    hireId: -1,
    workHour: -1,
    workStartDate: "",
    workEndDate: "",
    pay: -1,
    edu: "",
    regDate: "",
    workName: "",
    eventId: -1,
    companyId: -1
}

export const DUMMY_HIRE1 : Hire = {
    hireId: 1,
    workName: "Hire1",
    workHour: 4,
    workStartDate: "2023-04-11",
    workEndDate: "2023-04-21",
    pay: 20000,
    edu: "Test String",
    regDate: "2023-04-01",
    eventId: 0,
    companyId: 0
}

export const DUMMY_HIRE2 : Hire = {
    hireId: 2,
    workName: "Hire2",
    workHour: 5,
    workStartDate: "2023-04-31",
    workEndDate: "2023-04-32",
    pay: 20000,
    edu: "Test String 2",
    regDate: "2023-04-01",
    eventId: 0,
    companyId: 0
}