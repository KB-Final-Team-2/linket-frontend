import { Company } from "./Company";

export interface User {
    email: string;
    password: string;
    userName: string;
    birthDate: string;
    phone: string;
    gender: string;
    role: string;
    companyId: String;
}