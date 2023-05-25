import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import InfoInput from "../../components/Input/InfoInput";
import Content from "../Templete/Content";
import Templete from "../Templete";

const InfoUpdatePhone = () => {
    const phoneRef = useRef<HTMLInputElement>(null);

    return (
        <Templete>
            <Header title="연락처 수정" />
            <Content>
                <div className="w-full h-full flex flex-col">
                    <InfoInput title={"새로운 연락처를 입력해주세요."} placeholder={"000-0000-0000"} ref={phoneRef} />
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

export default InfoUpdatePhone;