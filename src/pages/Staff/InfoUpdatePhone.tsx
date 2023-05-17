import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import InfoInput from "../../components/Input/InfoInput";

const InfoUpdatePhone = () => {
    const phoneRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="연락처 수정" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col">
                    <div className="w-full h-full flex flex-col">
                        <InfoInput title={"새로운 연락처를 입력해주세요."} placeholder={"000-0000-0000"} ref={phoneRef} />
                    </div>
                    <div className="w-[330px] h-[140px] overflow-hidden flex justify-between px-10">
                        <Button title={"Return"} type={"delete"} func={() => { }} />
                        <Button title={"Update"} type={"default"} func={() => { }} />
                    </div>
                </div>
            </div>
            <NavBar role="staff" state="3" />
        </div>
    )
}

export default InfoUpdatePhone;