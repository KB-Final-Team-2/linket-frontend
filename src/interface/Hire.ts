export interface Hire {
    hireId : number;
    hireName: string;
    workHour: number;
    startDate: string;
    endDate: string;
    pay: number;
    edu: string;
    regDate: string;
}

export const INIT_HIRE : Hire = {
    hireId: 0,
    workHour: 0,
    startDate: "",
    endDate: "",
    pay: 0,
    edu: "",
    regDate: "",
    hireName: ""
}

export const DUMMY_HIRE1 : Hire = {
    hireId: 1,
    hireName: "Hire1",
    workHour: 4,
    startDate: "2023-04-11",
    endDate: "2023-04-21",
    pay: 20000,
    edu: "Test String",
    regDate: "2023-04-01",
}

export const DUMMY_HIRE2 : Hire = {
    hireId: 2,
    hireName: "Hire2",
    workHour: 5,
    startDate: "2023-04-31",
    endDate: "2023-04-32",
    pay: 20000,
    edu: "Test String 2",
    regDate: "2023-04-01",
}