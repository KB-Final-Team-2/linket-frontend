import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../../interface/Event";
import { AiOutlinePlus } from "react-icons/ai";
import { setEvent } from "../../../redux/slice/eventSlice";
import WebEventList from "../../../components/List/WebEventList";
import EventInfo from "./Continue/EventInfo";
import Modal from "../../../components/Modal/Modal";
import CreateEventModal from "../../../components/Modal/CreateEventModal";
import { setCreateEventModal } from "../../../redux/slice/modalSlice";

const ContinueEvent = () => {
    const [eventIdx, setEventIdx] = useState(-1);
    const event: Event = useSelector((state: any) => state.event.event)
    const eventList: Event[] = useSelector((state: any) => state.event.eventList);
    const dispatch = useDispatch();

    const handleEvent = (idx: number) => {
        const select = eventList[idx];
        dispatch(setEvent(select));
        setEventIdx(idx);
    }

    return (
        <>
            <div className="w-[1080px] h-full overflow-hidden flex">
                <div id="eventList" className="w-[250px] h-[920px] overflow-hidden flex flex-col">
                    <div className="w-full h-[50px] overflow-hidden border-b-[5px] border-primary flex items-center">
                        <p className="w-[250px] h-fit text-2xl font-bold text-left text-white">
                            행사 목록
                        </p>
                        <AiOutlinePlus onClick={()=>{dispatch(setCreateEventModal())}} className="cursor-pointer"/>
                    </div>
                    {eventList.map((v, i) => (
                        <WebEventList key={i} event={v} state={eventIdx === i} func={() => { handleEvent(i) }} />
                    ))}
                </div>
                <div id="eventInfo" className="w-[830px] h-full overflow-hidden">
                    {eventIdx === -1
                        ? (<div className="w-full h-full flex justify-center items-center flex-grow-0">
                            목록에서 이벤트를 선택해주세여
                        </div>)
                        : <EventInfo />}
                </div>
            </div>
        </>
    )
}

export default ContinueEvent;