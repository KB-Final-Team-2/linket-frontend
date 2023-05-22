export interface Attendance {
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

export const INIT_ATTD : Attendance = {
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

export const DUMMY_ATTD : Attendance = {
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