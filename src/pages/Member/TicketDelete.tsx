import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { Ticket } from "../../interface/Ticket";
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
    const ticket: Ticket = useSelector((state: any) => state.ticket?.data);
    const event: Event = useSelector((state: any) => state.event?.data);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        // dispatch(deleteTicket(ticket.ticketId))
        //     .then(unwrapResult)
        //     .then(() => {
        //         dispatch(getTicketList(user.email));
        //         setIsOk(true);
        //     })
        setIsOk(true);
    }

    return (
        <Templete>
                <Header title="티켓 삭제" func={() => { navigate("/member") }} />
                <Content>
                    {isOk
                        ?
                        <>
                            <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                                <p className="inline w-fit h-fit justify-center items-center text-lg">
                                    티켓 삭제가 완료되었습니다.<br />
                                    삭제된 티켓은 복구할 수 없으며,<br />
                                    재등록하여 사용할 수 없습니다.<br />
                                </p>
                            </div>
                            <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                                <Button title="Home" type="default" func={() => { navigate("/member") }} />
                            </div>
                        </>
                        :
                        <>
                            <div className="w-[330px] h-[400px] overflow-hidden">
                                <List title="행사명" content={event.eventName} />
                                <List title="행사 분류" content={event.eventType} />
                                <List title="행사 기간" content={`${event.startDate} ~ ${event.endDate}`} />
                                <List title="행사 장소" content={event.place} />
                            </div>
                            <div className="w-[330px] h-full overflow-hidden">
                                <div className="w-[330px] h-full font-bold text-center text-[20px] text-white flex flex-col justify-center items-center">
                                    <p>해당 티켓을 삭제하시겠습니까?</p>
                                    <p>삭제된 티켓은 복구할 수 없으며,</p>
                                    <p>재등록하여 사용할 수 없습니다.</p>
                                </div>
                            </div>
                            <div className="w-[337px] h-[202px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                                <Button title="Delete" type="delete" func={() => { handleDelete() }} />
                            </div>
                        </>
                    }
                </Content>
                <NavBar state={"1"} role={"member"}  />
        </Templete>
    )
}

export default TicketDelete;