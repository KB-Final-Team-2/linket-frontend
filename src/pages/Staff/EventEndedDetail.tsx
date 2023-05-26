import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { FuncListProps, ListProps } from "../../interface/props";
import { setEvent } from "../../redux/slice/eventSlice";
import { useState } from "react";
import EventReview from "./EventReview";
import EventStats from "./EventStats";
import Content from "../Templete/Content";

const EventEndedDetail = () => {
    const [page, setPage] = useState('');

    const event = useSelector((state: any) => state.event);
    const eventData: Event = event?.data;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list: ListProps[] = [
        { title: "행사명", content: eventData.eventName },
        { title: "행사 분류", content: eventData.eventType },
        { title: "행사 기간", content: `${eventData.startDate} ~ ${eventData.endDate}` },
        { title: "행사장소", content: eventData.place },
        { title: "행사 코드", content: `${eventData.eventId}` },
        { title: "행사 정보 이미지", content: eventData.eventImage },
    ]

    const dropdownList: FuncListProps[] = [
        { title: "행사 삭제", func: () => { navigate("/staff/delete") } },
    ]

    return (
        <>
            {page === "" &&
                <>
                    <Header title="행사 상세" func={() => { dispatch(setEvent(INIT_EVENT)) }} list={dropdownList} />
                    <Content>
                        <div className="w-[331px] h-[580px] overflow-hidden">
                            {list.map((v, i) => {
                                return (<List key={i} title={v.title} content={v.content || ""} />)
                            })}

                            <div className="w-[330px] h-[207px] overflow-hidden border-b flex">
                                <p className="w-[115px] h-[207px] text-[15px] font-bold text-center text-white">
                                    행사 설명
                                </p>
                                <p className="w-[215px] h-[207px] text-[15px] font-bold text-center text-white">
                                    {event.eventDesc}
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[158px] flex flex-col flex-shrink-0 justify-between">
                            <div
                                className="w-full h-16 text-place-center bg-black/30 text-white hover:bg-white/20 border-primary border-4 rounded-2xl shadow-md"
                                onClick={() => { setPage("tickets") }}
                            >
                                관람객 통계
                            </div>
                            <div
                                className="w-full h-16 text-place-center bg-black/30 text-white hover:bg-white/20 border-primary border-4 rounded-2xl shadow-md"
                                onClick={() => { setPage("review") }}
                            >
                                리뷰 통계
                            </div>
                        </div>
                    </Content>
                </>
            }
            {page === "review" && <EventReview onRequestReturn={() => { setPage("") }} />}
            {page === "tickets" && <EventStats onRequestReturn={() => { setPage("") }} />}
        </>
    )
}
export default EventEndedDetail;