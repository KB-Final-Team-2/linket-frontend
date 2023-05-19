import { Company, DUMMY_COMPANY, INIT_COMPANY } from "./Company";

 export interface User {
    email: string;
    password: string;
    userName: string;
    birthDate: string;
    phone: string;
    gender: string;
    role: string;
    company: Company | undefined;
};

export interface RegistUser { 
    email: string;
    password: string;
    userName: string;
    birthDate: string;
    phone: string;
    gender: string;
    role: string;
    companyId: string;
}

export const INIT_USER : User = {
    email: "",
    password: "",
    userName: "",
    birthDate: "",
    phone: "",
    gender: "",
    role: "",
    company: INIT_COMPANY
};

export const DUMMY_MEMBER : User = {
    email: "member@email.com",
    password: "1234",
    userName: "Member",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "member",
    company: DUMMY_COMPANY
};

export const DUMMY_STAFF : User = {
    email: "staff@email.com",
    password: "1234",
    userName: "Staff",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "staff",
    company: DUMMY_COMPANY
};

export const DUMMY_PART : User = {
    email: "part@email.com",
    password: "1234",
    userName: "Part",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "part",
    company: undefined
};