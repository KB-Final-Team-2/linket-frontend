import { Company } from "./Company";

export interface User {
    email: string;
    password: string;
    userName: string;
    birthDate: string;
    phone: string;
    gender: string;
    role: string;
}

export interface Staff {
    email: string;
    password: string;
    userName: string;
    birthDate: string;
    phone: string;
    gender: string;
    role: string;
    company: Company;
}