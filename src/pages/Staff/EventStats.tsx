import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import Header from "../../components/Header/Header";
import TableInfo from "../../components/Table/TableInfo";
import { TicketWithUser } from "../../interface/Ticket";
import { useEffect, useState } from "react";
import { getEventTicketList } from "../../redux/slice/ticketSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Content from "../Templete/Content";

interface props {
    onRequestReturn: Function;
}

const EventStats = ({ onRequestReturn }: props) => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const ticket = useSelector((state: any) => state.ticket);
    const eventTicketList: TicketWithUser[] = ticket.eventTicketList;
    const dispatch: any = useDispatch();

    const [gender, setGender] = useState([0, 0]);
    const [age, setAge] = useState([0, 0, 0, 0, 0, 0]);

    useEffect(() => {
        const year = new Date().getFullYear();
        dispatch(getEventTicketList(event.eventId))
            .then(unwrapResult)
            .then((res: TicketWithUser[]) => {
                const tmpGender = [0, 0];
                const tmpAge = [0, 0, 0, 0, 0, 0];
                res.forEach((t) => {
                    if (t.gender === "M") tmpGender[0]++;
                    else tmpGender[1]++;

                    const birthYear = Number.parseInt(t.birthDate.split("-").at(0)!);
                    const idx = Math.floor((year - birthYear) / 10);
                    if (idx > 5) tmpAge[5]++;
                    else tmpAge[idx]++;
                })
                setAge(tmpAge);
                setGender(tmpGender);
            })
    }, [])

    return (
        <>
            <Header title="리뷰 통계" func={onRequestReturn} />
            <Content>
                <TableInfo title={"행사명"} content={event?.eventName} />
                <TableInfo title={"관람객 수"} content={`${eventTicketList.length}`} />
                <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden border-b border-white">
                        <div className="text-place-center self-stretch flex-grow-0 flex-shrink-0 w-[115px] relative overflow-hidden gap-2.5 border-r text-[15px] border-white">
                            관람객 성별
                        </div>
                        <div className="text-place-center self-stretch relative overflow-hidden gap-2.5 border-r border-white text-[15px] font-bold text-center text-white flex-grow">
                            남성 {(gender[0] / eventTicketList.length * 100).toFixed(2)}%
                        </div>
                        <div className="text-place-center self-stretch relative overflow-hidden gap-2.5 border-white text-[15px] font-bold text-center text-white flex-grow">
                            여성 {(gender[1] / eventTicketList.length * 100).toFixed(2)}%
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden">
                        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[30px] relative overflow-hidden border-b border-white text-[15px] font-bold text-left text-white">
                            <p className="self-stretch flex-grow w-[330px] h-[30px] text-[15px] font-bold text-left text-white">
                                관람객 연령별
                            </p>
                        </div>
                        <div className="flex justify-start items-start self-stretch flex-grow overflow-hidden">
                            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[60px] overflow-hidden gap-2.5 p-3">
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow relative rounded-[31px] bg-[#f7f9fb] overflow-hidden">
                                    <div className="flex-grow-0 flex-shrink-0 w-full bg-stats-1" style={{ height: `${(age[0] / eventTicketList.length) * 100}%` }} />
                                    <div className="flex-grow-0 flex-shrink-0 w-full bg-stats-2" style={{ height: `${(age[1] / eventTicketList.length) * 100}%` }} />
                                    <div className="flex-grow-0 flex-shrink-0 w-full bg-stats-3" style={{ height: `${(age[2] / eventTicketList.length) * 100}%` }} />
                                    <div className="flex-grow-0 flex-shrink-0 w-full bg-stats-4" style={{ height: `${(age[3] / eventTicketList.length) * 100}%` }} />
                                    <div className="flex-grow-0 flex-shrink-0 w-full bg-stats-5" style={{ height: `${(age[4] / eventTicketList.length) * 100}%` }} />
                                    <div className="flex-grow-0 flex-shrink-0 w-full bg-stats-6" style={{ height: `${(age[5] / eventTicketList.length) * 100}%` }} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden">
                                <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden border-b border-white h-[53.67px]">
                                    <p className="flex-grow-0 flex-shrink-0 w-[70px] h-fit text-[15px] font-bold text-center text-white">
                                        10대 이하
                                    </p>
                                    <p className="flex-grow w-full h-fit text-base font-bold text-center text-stats-1">
                                        {(age[0] / eventTicketList.length * 100).toFixed(2)}%
                                    </p>
                                </div>
                                <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden border-b border-white">
                                    <p className="flex-grow-0 flex-shrink-0 w-[70px] h-fit text-[15px] font-bold text-center text-white">
                                        20대
                                    </p>
                                    <p className="flex-grow w-full h-fit text-base font-bold text-center text-stats-2">
                                        {(age[1] / eventTicketList.length * 100).toFixed(2)}%
                                    </p>
                                </div>
                                <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden border-b border-white">
                                    <p className="flex-grow-0 flex-shrink-0 w-[70px] h-fit text-[15px] font-bold text-center text-white">
                                        30대
                                    </p>
                                    <p className="flex-grow w-full h-fit text-base font-bold text-center text-stats-3">
                                        {(age[2] / eventTicketList.length * 100).toFixed(2)}%
                                    </p>
                                </div>
                                <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden border-b border-white">
                                    <p className="flex-grow-0 flex-shrink-0 w-[70px] h-fit text-[15px] font-bold text-center text-white">
                                        40대
                                    </p>
                                    <p className="flex-grow w-full h-fit text-base font-bold text-center text-stats-4">
                                        {(age[3] / eventTicketList.length * 100).toFixed(2)}%
                                    </p>
                                </div>
                                <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden border-b border-white">
                                    <p className="flex-grow-0 flex-shrink-0 w-[70px] h-fit text-[15px] font-bold text-center text-white">
                                        50대
                                    </p>
                                    <p className="flex-grow w-full h-fit text-base font-bold text-center text-stats-5">
                                        {(age[4] / eventTicketList.length * 100).toFixed(2)}%
                                    </p>
                                </div>
                                <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden">
                                    <p className="flex-grow-0 flex-shrink-0 w-[70px] h-fit text-[15px] font-bold text-center text-white">
                                        60대 이상
                                    </p>
                                    <p className="flex-grow w-full h-fit text-base font-bold text-center text-stats-6">
                                        {(age[5] / eventTicketList.length * 100).toFixed(2)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default EventStats;