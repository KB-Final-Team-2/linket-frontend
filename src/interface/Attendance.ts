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

export interface AttendWithUser extends Attend, User {}

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
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    hireId: 1,
    eventId: 1,
    companyId: 1,
    email: "part@test.com"
}

export const DUMMY_ATTD2: Attend = {
    attId: 2,
    attDate: "2023-04-02",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    hireId: 2,
    eventId: 2,
    companyId: 2,
    email: "part@test.com"
}

export const DUMMY_ATTDWITHUSER: AttendWithUser = {
    attId: 1,
    attDate: "2023-04-01",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    hireId: 1,
    eventId: 1,
    companyId: 1,
    email: "part@test.com",
    password: "1234",
    userName: "Part",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "part",
    aggrement: false,
    account: "1234-00-123456",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
}

export const DUMMY_ATTDWITHUSER2: AttendWithUser = {
    attId: 1,
    attDate: "2023-04-02",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    hireId: 1,
    eventId: 1,
    companyId: 1,
    email: "part@test.com",
    password: "1234",
    userName: "Part2",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "part",
    aggrement: false,
    account: "1234-00-123456",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
}