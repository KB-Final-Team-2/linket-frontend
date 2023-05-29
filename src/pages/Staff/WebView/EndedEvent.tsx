import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "../../../redux/slice/eventSlice";
import { AiOutlinePlus } from "react-icons/ai";
import WebEventList from "../../../components/List/WebEventList";
import EventInfo from "./Ended/EventInfo";
import { Event } from "../../../interface/Event";

const EndedEvent = () => {
    const [eventIdx, setEventIdx] = useState(-1);
    const event: Event = useSelector((state: any) => state.event?.data)
    const eventList: Event[] = useSelector((state: any) => state.event.list);
    const dispatch = useDispatch();

    const handleEvent = (idx: number) => {
        const select = eventList[idx];
        dispatch(setEvent(select));
        setEventIdx(idx);
    }

    return (
        <div className="w-[1080px] h-screen relative overflow-hidden flex">
            <div id="eventList" className="w-[250px] h-[920px] overflow-hidden flex flex-col">
                <div className="w-full h-[50px] overflow-hidden border-b-[5px] border-primary flex">
                    <p className="w-[250px] h-[50px] text-2xl font-bold text-left text-white">
                        행사 목록
                    </p>
                </div>
                {eventList?.map((v, i) => (
                    <WebEventList key={i} event={v} state={eventIdx === i} func={()=>{handleEvent(i)}} />
                ))}
            </div>
            <div id="eventInfo" className="w-[830px] h-[920px] overflow-hidden">
                {eventIdx === -1
                    ? (<div className="w-full h-full flex justify-center items-center flex-grow-0">
                        목록에서 이벤트를 선택해주세여
                    </div>)
                    : <EventInfo />}
            </div>
        </div>
    )
};

export default EndedEvent;