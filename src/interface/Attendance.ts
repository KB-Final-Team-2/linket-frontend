import { User } from "./User";

export interface Attend {
    attId: number;
    attHireId: number;
    attEventId: number;
    attCompanyId: number;
    attEmail: string;
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
    attHireId: -1,
    attEventId: -1,
    attCompanyId: -1,
    attEmail: ""
}

export const DUMMY_ATTD: Attend = {
    attId: 1,
    attDate: "2023-04-01",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    attHireId: 1,
    attEventId: 1,
    attCompanyId: 1,
    attEmail: "part@test.com"
}

export const DUMMY_ATTD2: Attend = {
    attId: 2,
    attDate: "2023-04-02",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    attHireId: 2,
    attEventId: 2,
    attCompanyId: 2,
    attEmail: "part@test.com"
}

export const DUMMY_ATTDWITHUSER: AttendWithUser = {
    attId: 1,
    attDate: "2023-04-01",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    attHireId: 1,
    attEventId: 1,
    attCompanyId: 1,
    attEmail: "part@test.com",
    password: "1234",
    userName: "Part",
    birthdate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "part",
    aggrement: false,
    account: "1234-00-123456",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
    email: "",
    userCompanyId: 0
}

export const DUMMY_ATTDWITHUSER2: AttendWithUser = {
    attId: 1,
    attDate: "2023-04-02",
    attStartDatetime: "",
    attEndDatetime: "",
    attStartBnt: false,
    attEndBnt: false,
    attHireId: 1,
    attEventId: 1,
    attCompanyId: 1,
    attEmail: "part@test.com",
    password: "1234",
    userName: "Part2",
    birthdate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "part",
    aggrement: false,
    account: "1234-00-123456",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
    email: "",
    userCompanyId: 0
}