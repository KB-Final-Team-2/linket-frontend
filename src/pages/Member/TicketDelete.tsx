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

interface props {
    onRequestReturn : Function;
}

const TicketDelete = ({onRequestReturn}:props) => {
    const user : User = useSelector((state:any)=>state.auth?.data);
    const ticket : Ticket = useSelector((state:any)=>state.ticket?.data);
    const event : Event = useSelector((state:any)=>state.event?.data);
    const dispatch : any = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteTicket(ticket.ticketId))
        .then(unwrapResult)
        .then(()=>{
            dispatch(getTicketList(user.email));
            navigate("/member");
        })
    }

    return (
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="티켓 삭제" func={()=>{onRequestReturn()}} />
                <div className="w-[331px] h-full">
                    <div className="w-[331px] h-[580px] overflow-hidden border-b border-t  flex flex-col">
                        <div className="w-[330px] h-[400px] overflow-hidden">
                            <List title="행사명" content={event.eventName} />
                            <List title="행사 분류" content={event.eventType} />
                            <List title="행사 기간" content={`${event.startDate} ~ ${event.endDate}`} />
                            <List title="행사 장소" content={event.place} />
                        </div>
                        <div className="w-[330px] h-full overflow-hidden">
                            <div className="w-[330px] h-full font-bold text-center text-[20px] text-white flex flex-col justify-center items-center">
                                <p>해당 행사를 삭제하시겠습니까?</p>
                                <p>삭제된 행사는 복구할 수 없으며,</p>
                                <p>기존에 등록된 리뷰 및 이미지가</p>
                                <p> 모두 삭제됩니다.</p>
                            </div>
                        </div>
                        <div className="w-[337px] h-[202px] overflow-hidden flex flex-shrink-0 justify-between items-center px-10">
                            <Button title="Delete" type="delete" func={() => { handleDelete() }} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TicketDelete;