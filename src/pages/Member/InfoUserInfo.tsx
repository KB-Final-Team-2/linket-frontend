import Header from "../../components/Header/Header";
import LargeList from "../../components/List/LargeList";
import NavBar from "../../components/NavBar/NavBar";
import { User } from "../../interface/User";

const UserInfo = () => {
    const user : User = {
        email: "test@gmail.com",
        password: "123456",
        userName: "Tom",
        birthDate: "2022.02.02",
        phone: "01012345678",
        gender: "M",
        role: "member",
        companyId: "123456"
    }

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
            <svg
                width={375}
                height={812}
                viewBox="0 0 375 812"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[375px] h-[812px] absolute left-0 top-0"
                preserveAspectRatio="none"
            >
                <path d="M0 0H375V812H0V0Z" fill="#454545" />
            </svg>
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[582px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                <LargeList title="이름" content={user.userName}/>
                <LargeList title="이메일" content={user.email}/>
                <LargeList title="생일" content={user.birthDate}/>
                <LargeList title="성별" content={user.gender}/>
                <LargeList title="연락처" content={user.phone}/>
            </div>
            <NavBar state="3"/>
            <Header title="회원 정보"/>
        </div>
    )
}

export default UserInfo;