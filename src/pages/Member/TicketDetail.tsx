import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { useSelector } from "react-redux";
import Templete from "../Templete";
import { DUMMY_TICKET1, Ticket } from "../../interface/Ticket";
import { useState } from "react";
import TicketDelete from "./TicketDelete";

interface props {
    onRequestReturn : Function
}

const TicketDetail = ({onRequestReturn}:props) => {
    const ticket: Ticket = useSelector((state: any) => state.ticket.data);
    const [doDelete, setDoDelete] = useState(false);

    const eventList: Event[] = useSelector((state: any) => state.event.list);
    const navigate = useNavigate();
    return (
        <>
            {doDelete
                ?
                <TicketDelete onRequestReturn={()=>{setDoDelete(false)}}/>
                :
                <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center">
                    <Header title="티켓 상세" func={()=>onRequestReturn()}/>
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="w-[331px] h-[580px] overflow-hidden ">
                            <div className="w-[331px] h-[383px] overflow-hidden">
                                <List title="행사명" content={"event.eventName"} />
                                <List title="행사 분류" content={"event.eventType"} />
                                <List title="행사 기간" content={`${"event.startDate"} ~ ${"event.endDate"}`} />
                                <List title="행사 장소" content={`event.place`} />
                                <List title="좌석" content={`ticket.seat`} />
                                <List title="url" content={`event.url`} />
                                <div className="w-[330px] h-[161px] left-0 top-[185px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                    <p className="w-[115px] h-[161px] text-[15px] font-bold text-center text-white">
                                        행사 설명
                                    </p>
                                    <p className="w-[215px] h-[161px] text-[15px] font-bold text-center text-white">
                                        {`event.eventDesc`}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9]">
                                    <p className="text-[15px] font-bold text-left text-black">
                                        입장용 QR
                                    </p>
                                </div>
                                <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                                    <Button title="Review" type="default" func={() => { }} />
                                    <Button title="Notice" type="default" func={() => { }} />
                                    <Button title="Delete" type="delete" func={() => { setDoDelete(true) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default TicketDetail;