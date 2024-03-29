import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { User } from "../../interface/User";
import Button from "../../components/Button/Button";
import { IoTicketSharp } from "react-icons/io5"
import TableInfo from "../../components/Table/TableInfo";
import { FuncListProps } from "../../interface/props";
import { useState } from "react";
import { RegistReview, Review } from "../../interface/Review";
import { TicketWithEvent } from "../../interface/Ticket";
import { registReview } from "../../redux/slice/reviewSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Content from "../Templete/Content";

interface props {
    score: number;
}

const ReviewList = ({ title, func, score }: FuncListProps & props) => {
    const scoreList = [1, 2, 3, 4, 5];
    return (
        <div className="w-full h-fit overflow-hidden border-b border-white flex-shrink-0">
            <div className="flex justify-start items-center w-full h-fit overflow-hidden gap-2.5 border-b border-white text-base font-bold text-left text-white px-3 py-1">
                {title}
            </div>
            <div className="flex justify-center items-center w-full h-fit overflow-hidden gap-4 py-2">
                {scoreList?.map((num, i) => (
                    <IoTicketSharp key={i} className={`${score >= num ? "text-primary-100" : "text-primary-300"} cursor-pointer text-3xl`} onClick={() => { func(num) }} />
                ))}
            </div>
        </div>
    )
}

const TicketReview = () => {
    const [facilChair, setFacilChair] = useState(5);
    const [facilRest, setFacilRest] = useState(5);
    const [staffIn, setStaffIn] = useState(5);
    const [staffTicket, setStaffTicket] = useState(5);
    const [eventContent, setEventContent] = useState(5);
    const [eventGo, setEventGo] = useState(5);
    const [etc, setEtc] = useState("");
    const [viewEtc, setViewEtc] = useState(false);
    const [isOk, setIsOk] = useState(false);

    const user: User = useSelector((state: any) => state.auth.data);
    const ticket = useSelector((state: any) => state.ticket);
    const ticketData: TicketWithEvent = ticket.data;
    const review: Review = useSelector((state: any) => state.review?.data);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const handleRegist = () => {
        const review: RegistReview = {
            reviewTicketId: ticketData.ticketId,
            reviewEventId: ticketData.ticketEventId,
            reviewCompanyId: ticketData.ticketCompanyId,
            rateFacilChair: facilChair,
            rateFacilRest: facilRest,
            rateStaffIn: staffIn,
            rateStaffTicket: staffTicket,
            rateEventContent: eventContent,
            rateEventGo: eventGo,
            reviewEtc: etc,
        }

        console.log(review);

        dispatch(registReview(review))
            .then(unwrapResult)
            .then((res: string) => {
                setIsOk(true);
            }).catch((err: Error) => {
                alert(err.message);
            })
    }

    return (
        <Templete>
            <Header title="리뷰 작성" />
            <Content>
                {
                    isOk
                        ?
                        <>
                            <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                                <p className="inline w-fit h-fit justify-center items-center text-lg">
                                    리뷰 등록이 완료되었습니다.<br />
                                    내 정보 - 리뷰 리스트에서 확인할 수 있습니다.
                                </p>
                            </div>
                            <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                                <Button title="Home" type="default" func={() => { navigate("/member") }} />
                            </div>
                        </>
                        :
                        <>
                            <TableInfo title={"행사명"} content={ticketData.eventName} />
                            {viewEtc
                                ?
                                <div className="flex flex-col justify-start items-center w-[330px] h-[543px] overflow-hidden">
                                    <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                                        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative overflow-hidden gap-2.5 border-t-0 border-r-0 border-b border-l-0 border-white text-base font-bold text-left text-[#d9d9d9]">
                                            추가적인 의견이 있으시다면 작성해주세요(선택)
                                        </div>
                                        <div className="flex justify-center items-center self-stretch flex-grow overflow-hidden gap-[15px] py-3">
                                            <textarea
                                                className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5 rounded-2xl bg-[#c4c4c4]/[0.31] text-white text-xl"
                                                defaultValue={etc}
                                                onChange={(e) => { setEtc(e.target.value) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[92px] relative overflow-hidden gap-[58px] p-2.5">
                                        <Button title="이전" type="default" func={() => { setViewEtc(false) }} />
                                        <Button title="리뷰 등록" type="default" func={() => { handleRegist() }} loading={ticket.loading} />
                                    </div>
                                </div>
                                :
                                <div className="w-[331px] h-[543px] overflow-hidden flex flex-col flex-grow-0">
                                    <ReviewList title="행사 좌석은 만족스러웠나요?" func={(score: number) => { setFacilChair(score) }} score={facilChair} />
                                    <ReviewList title="화장실은 깨끗했나요?" func={(score: number) => { setFacilRest(score) }} score={facilRest} />
                                    <ReviewList title="입장 안내 직원은 친절했나요?" func={(score: number) => { setStaffIn(score) }} score={staffIn} />
                                    <ReviewList title="티켓 발급 직원은 친절했나요?" func={(score: number) => { setStaffTicket(score) }} score={staffTicket} />
                                    <ReviewList title="행사 구성은 만족스러웠나요?" func={(score: number) => { setEventContent(score) }} score={eventContent} />
                                    <ReviewList title="행사 진행은 매끄러웠나요?" func={(score: number) => { setEventGo(score) }} score={eventGo} />
                                    <div className="flex justify-center items-center self-stretch w-full h-full">
                                        <Button title={"다음"} type={"default"} func={() => { setViewEtc(true) }} />
                                    </div>
                                </div>
                            }
                        </>
                }
            </Content>
            <NavBar state={"1"} role={user.role} />
        </Templete>
    )
}

export default TicketReview;