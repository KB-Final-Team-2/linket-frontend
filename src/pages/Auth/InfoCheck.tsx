import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InfoInput from "../../components/Input/InfoInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import Content from "../Templete/Content";

const InfoCheck = () => {
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <Templete>
            <Header title="비밀번호 확인" />
            <Content>
                <div className="w-full h-full flex flex-col">
                    <InfoInput title={"비밀번호를 입력해주세요."} placeholder={"******"} ref={passwordRef} />
                </div>
                <div className="w-[330px] h-[140px] overflow-hidden flex justify-between px-10">
                    <Button title={"Return"} type={"delete"} func={() => { }} />
                    <Button title={"Update"} type={"default"} func={() => { }} />
                </div>
            </Content>
            <NavBar role="member" state="3" />
        </Templete>
    )
}

export default InfoCheck;