import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InfoInput from "../../components/Input/InfoInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";

const InfoCheck = () => {
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="비밀번호 확인" />
                <div className="w-[331px] h-full">
                    <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col">
                        <div className="w-full h-full flex flex-col">
                            <InfoInput title={"비밀번호를 입력해주세요."} placeholder={"******"} ref={passwordRef} />
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex justify-between px-10">
                            <Button title={"Return"} type={"delete"} func={() => { }} />
                            <Button title={"Update"} type={"default"} func={() => { }} />
                        </div>
                    </div>
                </div>
                <NavBar role="member" state="3" />
            </div>
        </Templete>
    )
}

export default InfoCheck;