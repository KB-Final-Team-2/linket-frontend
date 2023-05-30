import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { INIT_TICKET, TicketWithEvent } from "../../interface/Ticket";
import { useEffect, useState } from "react";
import { setTicket } from "../../redux/slice/ticketSlice";
import QRCode from "react-qr-code";
import { User } from "../../interface/User";
import { checkTicketReview } from "../../redux/slice/reviewSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { INIT_REVIEW, Review } from "../../interface/Review";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Content from "../Templete/Content";
import { FaMapMarkedAlt } from "react-icons/fa";

const TicketDetail = () => {
    const [isReview, setIsReview] = useState(true);
    const user: User = useSelector((state: any) => state.auth.data);
    const ticket: TicketWithEvent = useSelector((state: any) => state.ticket.data);
    const dispatch: any = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        handleReview();
    })

    const handleReview = () => {
        dispatch(checkTicketReview(ticket.ticketId))
            .then(unwrapResult)
            .then((res: string) => {
                console.log(res);
                if (res === "able") setIsReview(false);
            })
    }

    const handlePlace = () => {
        console.log(ticket);
        axios.get(`http://www.kopis.or.kr/openApi/restful/prfplc/${ticket.placeId}?service=11653933ac2447da843868e7cb625bdb`)
            .then((res) => {
                const parser = new XMLParser();
                const data = parser.parse(res.data).dbs.db;
                console.log(res.data);
                navigate(`/member/place?la=${data.la}&lo=${data.lo}`);
            })
    }

    return (
        <>
            <Header title="티켓 상세" func={() => dispatch(setTicket(INIT_TICKET))} />
            <Content>
                <div className="w-full h-full overflow-hidden flex flex-col">
                    <List title="행사명" content={ticket.eventName} />
                    <List title="행사 분류" content={ticket.eventType} />
                    <List title="행사 기간" content={`${ticket.startDate} ~ ${ticket.endDate}`} />
                    <div className="w-full h-fit overflow-hidden border-b border-white flex flex-shrink-0">
                        <p className=" w-[115px] h-[37px] text-base font-bold text-white flex justify-center items-center flex-shrink-0 flex-grow-0">
                            행사 장소
                        </p>
                        <p className="w-[180px] h-[37px] text-base font-bold text-white flex justify-start items-center flex-shrink-0 flex-grow-0">
                            {ticket.place}
                        </p>
                        <div
                            className="w-8 h-8 rounded-md text-place-center text-primary-300 hover:text-primary-200 transition-all cursor-pointer"
                            onClick={()=>{handlePlace()}}
                            >
                            <FaMapMarkedAlt />
                        </div>
                    </div>
                    <List title="좌석" content={ticket.seat} />
                    <div className="self-stretch w-full h-full overflow-hidden border-b border-white flex items-center">
                        <p className="w-[115px] h-full text-base font-bold text-center text-white flex text-place-center">
                            행사 설명
                        </p>
                        <p className="w-[215px] h-full text-base font-bold text-left text-white overflow-auto custom-toolbar">
                            {ticket.eventDesc}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full h-fit py-5 px-5">
                    <div className="overflow-hidden bg-[#d9d9d9]">
                        <QRCode
                            size={128}
                            className="w-full h-full"
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={ticket.serialNum + user.email}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                        <Button title="리뷰 작성" type={isReview ? "unable" : "default"} func={() => { navigate("/member/review") }} />
                        <Button title="티켓 삭제" type="delete" func={() => { navigate("/member/delete") }} />
                    </div>
                </div>
            </Content>
        </>
    )
}

export default TicketDetail;