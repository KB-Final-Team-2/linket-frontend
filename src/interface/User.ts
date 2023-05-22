export interface User {
    email: string;
    password: string;
    userName: string;
    birthDate: string;
    aggrement: boolean;
    phone: string;
    gender: string;
    role: string;
    account: string;
    regDate: string;
    withdrawDate: string;
    enable: string;
    lastUpdatedDate: string;
    companyId: number;
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
    aggrement: false,
    account: "",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
    companyId: -1
};

export const DUMMY_MEMBER : User = {
    email: "member@email.com",
    password: "1234",
    userName: "Member",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "member",
    aggrement: false,
    account: "",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
    companyId: -1
};

export const DUMMY_STAFF : User = {
    email: "staff@email.com",
    password: "1234",
    userName: "Staff",
    birthDate: "2023-05-18",
    phone: "010-1234-1234",
    gender: "M",
    role: "staff",
    aggrement: false,
    account: "",
    regDate: "",
    withdrawDate: "",
    enable: "",
    lastUpdatedDate: "",
    companyId: 1
};

export const DUMMY_PART : User = {
    email: "part@email.com",
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
    companyId: 0
};