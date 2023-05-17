import Header from "../../components/Header/Header";
import LargeList from "../../components/List/LargeList";
import NavBar from "../../components/NavBar/NavBar";
import { User } from "../../interface/User";

const UserInfo = () => {
    const user: User = {
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
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="회원 정보" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[582px] overflow-hidden border-y border-white">
                    <LargeList title="이름" content={user.userName} />
                    <LargeList title="이메일" content={user.email} />
                    <LargeList title="생일" content={user.birthDate} />
                    <LargeList title="성별" content={user.gender} />
                    <LargeList title="연락처" content={user.phone} />
                </div>
            </div>
            <NavBar role="staff" state="3" />
        </div>
    )
}

export default UserInfo;