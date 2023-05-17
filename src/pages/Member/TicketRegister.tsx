import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const TicketRegister = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="티켓 등록" />
            <div className="w-[331px] h-full left-[22px] top-[125px]">
                <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col">
                    <div className="w-[330px] h-full overflow-hidden px-5">
                        <p className="w-full h-10 text-[15px] font-bold text-left text-white flex items-center my-3 border-b">
                            티켓 일련번호를 입력해주세요
                        </p>
                        <div className="w-full h-[49px] overflow-hidden bg-[#b1b1b1] flex">
                            <p className="w-[330px] h-[50px] text-[15px] font-bold text-center text-white/[0.72]">
                                0000000000
                            </p>
                        </div>
                    </div>
                    <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-between items-center px-10">
                        <Button title="Return" type="delete" func={() => {navigate("/member")}} />
                        <Button title="Send" type="default" func={() => {navigate(`/member/ticket/${1234}`)}} />
                    </div>
                </div>
            </div>
            <NavBar role="member" state="2" />
        </div>
    )
}

export default TicketRegister;