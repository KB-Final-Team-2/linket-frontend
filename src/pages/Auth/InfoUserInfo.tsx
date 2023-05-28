import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import LargeList from "../../components/List/LargeList";
import NavBar from "../../components/NavBar/NavBar";
import { User } from "../../interface/User";
import Templete from "../Templete";
import Content from "../Templete/Content";

const UserInfo = () => {
    const user: User = useSelector((state: any) => state.auth?.data);

    return (
        <Templete>
            <Header title="회원 정보" />
            <Content>
                <LargeList title="이름" content={user.userName} />
                <LargeList title="이메일" content={user.email} />
                <LargeList title="생일" content={user.birthdate} />
                <LargeList title="성별" content={user.gender} />
                <LargeList title="연락처" content={user.phone} />
            </Content>
            <NavBar role="member" state="3" />
        </Templete>
    )
}

export default UserInfo;