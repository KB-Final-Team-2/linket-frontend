import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import Templete from "../Templete";
import { DUMMY_TICKET1, INIT_TICKET, Ticket, TicketWithEvent } from "../../interface/Ticket";
import { useEffect, useState } from "react";
import TicketDelete from "./TicketDelete";
import { setTicket } from "../../redux/slice/ticketSlice";
import QRCode from "react-qr-code";
import { User } from "../../interface/User";
import { getEventReview } from "../../redux/slice/reviewSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { INIT_REVIEW, Review } from "../../interface/Review";

const TicketDetail = () => {
    const [doDelete, setDoDelete] = useState(false);
    const [isReview, setIsReview] = useState(true);
    const user: User = useSelector((state: any) => state.auth.data);
    const ticket: TicketWithEvent = useSelector((state: any) => state.ticket.data);
    const dispatch: any = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        handleReview();
    })

    const handleReview = () => {
        dispatch(getEventReview(ticket.eventId))
            .then(unwrapResult)
            .then((res: Review) => {
                setIsReview(res === INIT_REVIEW ? false : true)
            })
    }

    return (
        <>
            <Header title="티켓 상세" func={() => dispatch(setTicket(INIT_TICKET))} />
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-[331px] h-[580px] overflow-hidden border-y flex flex-col">
                    <div className="w-[331px] h-full overflow-hidden flex flex-col">
                        <List title="행사명" content={ticket.eventName} />
                        <List title="행사 분류" content={ticket.eventType} />
                        <List title="행사 기간" content={`${ticket.startDate} ~ ${ticket.endDate}`} />
                        <List title="행사 장소" content={ticket.place} />
                        <List title="좌석" content={ticket.seat} />
                        <List title="url" content={ticket.link} />
                        <div className="self-stretch w-[330px] h-full overflow-hidden border-b border-white flex items-center">
                            <p className="w-[115px] h-fit text-[15px] font-bold text-center text-white">
                                행사 설명
                            </p>
                            <p className="w-[215px] h-fit text-[15px] font-bold text-center text-white">
                                {ticket.eventDesc}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full h-[156px]">
                        <div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9]">
                            <QRCode
                                size={128}
                                className="w-full h-full"
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={ticket.serialNum + user.email}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                        <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                            <Button title="Review" type={isReview ? "unable" : "default"} func={() => { navigate("/member/review") }} />
                            <Button title="Delete" type="delete" func={() => { navigate("/member/delete") }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketDetail;