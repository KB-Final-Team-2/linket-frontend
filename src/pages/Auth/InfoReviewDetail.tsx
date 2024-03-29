import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { User } from "../../interface/User";
import Button from "../../components/Button/Button";
import { IoTicketSharp } from "react-icons/io5"
import TableInfo from "../../components/Table/TableInfo";
import { Event } from "../../interface/Event";
import { FuncListProps } from "../../interface/props";
import { useState } from "react";
import { INIT_REVIEW, RegistReview, ReviewWithEvent } from "../../interface/Review";
import { Ticket } from "../../interface/Ticket";
import { setReview } from "../../redux/slice/reviewSlice";
import Content from "../Templete/Content";

interface props {
    score: number;
}

const ReviewList = ({ title, func, score }: FuncListProps & props) => {
    const scoreList = [1, 2, 3, 4, 5];
    return (
        <div className="w-[331px] h-[75px] overflow-hidden border-b border-white flex-shrink-0">
            <div className="flex justify-start items-start w-[331px] h-[30px] overflow-hidden gap-2.5 border-t-0 border-r-0 border-b border-l-0 border-white">
                <p className="self-stretch flex-grow w-[331px] h-[30px] text-base font-bold text-left text-[#d9d9d9]">
                    {title}
                </p>
            </div>
            <div className="flex justify-center items-center w-[331px] h-[45px] overflow-hidden gap-[15px]">
                {scoreList?.map((ticket, i) => (
                    <IoTicketSharp key={i} className={`${score >= ticket && "text-primary-100"} text-3xl`} onClick={() => { func(ticket) }} />
                ))}
            </div>
        </div>
    )
}

const InfoReviewDetail = () => {
    const [facilChair, setFacilChair] = useState(5);
    const [facilRest, setFacilRest] = useState(5);
    const [staffIn, setStaffIn] = useState(5);
    const [staffTicket, setStaffTicket] = useState(5);
    const [eventContent, setEventContent] = useState(5);
    const [eventGo, setEventGo] = useState(5);
    const [etc, setEtc] = useState("");
    const [viewEtc, setViewEtc] = useState(false);

    const user: User = useSelector((state: any) => state.auth.data);
    const event: Event = useSelector((state: any) => state.event?.data);
    const ticket: Ticket = useSelector((state: any) => state.ticket?.data);
    const review: ReviewWithEvent = useSelector((state: any) => state.review?.data);
    const dispatch = useDispatch();

    const handleRegist = () => {
        const review: RegistReview = {
            reviewTicketId: ticket.ticketId,
            reviewEventId: ticket.ticketEventId,
            reviewCompanyId: ticket.ticketCompanyId,
            rateFacilChair: facilChair,
            rateFacilRest: facilRest,
            rateStaffIn: staffIn,
            rateStaffTicket: staffTicket,
            rateEventContent: eventContent,
            rateEventGo: eventGo,
            reviewEtc: etc,
        }


    }

    return (
        <>
            <Header title="리뷰 작성" func={() => { dispatch(setReview(INIT_REVIEW)) }} />
            <Content>
                <TableInfo title={"행사명"} content={review.eventName} />
                {viewEtc
                    ?
                    <div className="flex flex-col justify-start items-center w-[330px] h-[543px] overflow-hidden">
                        <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative overflow-hidden gap-2.5 border-t-0 border-r-0 border-b border-l-0 border-white text-base font-bold text-left text-[#d9d9d9]">
                                추가적인 의견이 있으시다면 작성해주세요(선택)
                            </div>
                            <div className="flex justify-center items-center self-stretch flex-grow overflow-hidden gap-[15px] py-3">
                                <textarea
                                    className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5 rounded-2xl bg-[#c4c4c4]/[0.31]  text-white"
                                    defaultValue={review?.reviewEtc}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[92px] relative overflow-hidden gap-[58px] p-2.5">
                            <Button title="return" type="default" func={() => { setViewEtc(false) }} />
                        </div>
                    </div>
                    :
                    <div className="w-[331px] h-[543px] overflow-hidden flex flex-col flex-grow-0">
                        <ReviewList title="행사 좌석은 만족스러웠나요?" func={() => { }} score={review?.rateFacilChair} />
                        <ReviewList title="화장실은 깨끗했나요?" func={() => { }} score={review?.rateFacilRest} />
                        <ReviewList title="입장 안내 직원은 친절했나요?" func={() => { }} score={review?.rateStaffIn} />
                        <ReviewList title="티켓 발급 직원은 친절했나요?" func={() => { }} score={review?.rateStaffTicket} />
                        <ReviewList title="행사 구성은 만족스러웠나요?" func={() => { }} score={review?.rateEventContent} />
                        <ReviewList title="행사 진행은 매끄러웠나요?" func={() => { }} score={review?.rateEventGo} />
                        <div className="flex justify-center items-center self-stretch w-full h-full">
                            <Button title={"Next"} type={"default"} func={() => { setViewEtc(true) }} />
                        </div>
                    </div>
                }
            </Content>
        </>
    )
}

export default InfoReviewDetail;