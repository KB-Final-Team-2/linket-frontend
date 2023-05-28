import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicketList, registTicket } from "../../redux/slice/ticketSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { User } from "../../interface/User";
import Content from "../Templete/Content";

const TicketRegister = () => {
    const [isOk, setIsOk] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const user: User = useSelector((state: any) => state.auth?.data);
    const ticket = useSelector((state:any)=>state.ticket);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const handleRegist = () => {
        dispatch(registTicket(Number.parseInt(inputRef.current?.value!)))
            .then(unwrapResult)
            .then(() => {
                setIsOk(true);
            }).catch((err:Error)=>{
                alert(err.message);
            })
        setIsOk(true);
    }

    return (
        <Templete>
            <Header title="티켓 등록" />
            <Content>
                {isOk
                    ?
                    <>
                        <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                            <p className="inline w-fit h-fit justify-center items-center text-lg">
                                티켓 등록이 완료되었습니다.<br />
                                티켓 리스트에서 확인할 수 있습니다.
                            </p>
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Home" type="default" func={() => { navigate("/member") }} />
                        </div>
                    </>
                    :
                    <>
                        <div className="w-[330px] h-full overflow-hidden px-5">
                            <p className="w-full h-10 text-[15px] font-bold text-left text-white flex items-center my-3 border-b">
                                티켓 일련번호를 입력해주세요
                            </p>
                            <input ref={inputRef} className="w-full h-[49px] overflow-hidden rounded-lg flex" placeholder="000000" />
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Send" type="default" func={() => { handleRegist() }} loading={ticket.loading} />
                        </div>
                    </>
                }
            </Content>
            <NavBar role="member" state="1" />
        </Templete>
    )
}

export default TicketRegister;