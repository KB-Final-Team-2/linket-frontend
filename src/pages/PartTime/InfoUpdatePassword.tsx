import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InfoInput from "../../components/Input/InfoInput";
import NavBar from "../../components/NavBar/NavBar";

const InfoUpdatePassword = () => {
    const oldRef = useRef<HTMLInputElement>(null);
    const newRef = useRef<HTMLInputElement>(null);
    const checkRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="연락처 수정" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col">
                    <div className="w-full h-full flex flex-col gap-2">
                        <InfoInput title={"기존 비밀번호"} placeholder={"******"} ref={oldRef} />
                        <InfoInput title={"새 비밀번호"} placeholder={"******"} ref={newRef} />
                        <InfoInput title={"비밀번호 확인"} placeholder={"******"} ref={checkRef} />
                    </div>
                    <div className="w-[330px] h-[140px] overflow-hidden flex justify-between px-10">
                        <Button title={"Return"} type={"delete"} func={() => { }} />
                        <Button title={"Update"} type={"default"} func={() => { }} />
                    </div>
                </div>
            </div>
            <NavBar state="3" />
        </div>
    )
}

export default InfoUpdatePassword;