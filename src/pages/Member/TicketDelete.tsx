import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { Ticket, TicketWithEvent } from "../../interface/Ticket";
import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import { deleteTicket, getTicketList } from "../../redux/slice/ticketSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { User } from "../../interface/User";
import { useState } from "react";
import Content from "../Templete/Content";

const TicketDelete = () => {
    const [isOk, setIsOk] = useState(false);
    const user: User = useSelector((state: any) => state.auth?.data);
    const ticket = useSelector((state: any) => state.ticket);
    const ticketData: TicketWithEvent = ticket.data;
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteTicket(ticketData.ticketId))
            .then(unwrapResult)
            .then((res: number) => {
                setIsOk(true);
            }).catch((err: Error) => {
                alert(err.message);
            })
        setIsOk(true);
    }

    return (
        <Templete>
            <Header title="티켓 삭제" func={() => { navigate("/member") }} />
            <Content>
                {isOk
                    ?
                    <>
                        <div className="w-full h-full overflow-hidden flex flex-col gap-4 place-content-center">
                            <p className="inline w-full h-fit justify-center items-center text-2xl font-bold">
                                티켓 삭제가 완료되었습니다.
                            </p>
                            <p className="inline w-full h-fit justify-center items-center text-lg font-bold">
                                삭제된 티켓은 재등록/복구할 수 없습니다.
                            </p>
                        </div>
                        <div className="w-full h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Home" type="default" func={() => { navigate("/member") }} />
                        </div>
                    </>
                    :
                    <>
                        <div className="w-full h-[400px] overflow-hidden">
                            <List title="행사명" content={ticketData.eventName} />
                            <List title="행사 분류" content={ticketData.eventType} />
                            <List title="행사 기간" content={`${ticketData.startDate} ~ ${ticketData.endDate}`} />
                            <List title="행사 장소" content={ticketData.place} />
                        </div>
                        <div className="w-full h-full overflow-hidden font-bold text-center text-[20px] text-white flex flex-col text-place-center">
                            <p className="text-2xl mb-10">해당 티켓을 삭제하시겠습니까?</p>
                            <p>삭제된 티켓은 재등록/복구할 수 없으며,</p>
                            <p>등록된 리뷰는 삭제되지 않습니다.</p>
                        </div>
                        <div className="w-full h-[202px] overflow-hidden flex flex-shrink-0 justify-evenly items-center">
                            <Button title="뒤로가기" type="default" func={() => { navigate(-1) }} />
                            <Button title="티켓 삭제" type="delete" func={() => { handleDelete() }} />
                        </div>
                    </>
                }
            </Content>
            <NavBar state={"1"} role={"member"} />
        </Templete>
    )
}

export default TicketDelete;