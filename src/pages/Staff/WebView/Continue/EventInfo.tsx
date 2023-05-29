import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../../../interface/Event";
import { useEffect, useState } from "react";
import EventDetail from "./EventDetail";
import EventHire from "./EventHire";
import EventAttend from "./EventAttend";
import { setDeleteEventModal, setUpdateEventModal } from "../../../../redux/slice/modalSlice";

interface NavProps {
    title: string;
    state: boolean;
    func: Function;
}

const NavButton = ({ title, state, func }: NavProps) => {
    return (
        <div
            className={`w-[150px] h-[50px] overflow-hidden flex flex-shrink-0 justify-center items-center text-2xl font-bold text-center text-white ${state && "bg-primary"}`}
            onClick={() => { func() }}
        >
            {title}
        </div>
    )
}

const EventInfo = () => {
    const [state, setState] = useState(0);
    const dispatch = useDispatch();
    const navList = ["행사 상세", "공고 관리", "근태 관리"];

    const event: Event = useSelector((state: any) => state.event?.data)
    const eventList: Event[] = useSelector((state: any) => state.event?.list);

    useEffect(() => {
        setState(0);
    }, [event]);

    return (
        <div className="w-[830px] h-full bg-black/25 inline-flex flex-col flex-shrink-0 flex-grow-0 justify-start">
            <div className="w-[830px] h-[100px] border-b-2 border-white flex flex-col flex-shrink-0 px-5">
                <div className="w-full h-[35px] overflow-hidden">
                    <p className="text-3xl font-bold text-left text-primary-200">
                        {event?.eventType}
                    </p>
                </div>
                <div className="w-full h-[65px] overflow-hidden">
                    <p className=" text-[40px] font-bold text-left text-white">
                        {event?.eventName}
                    </p>
                    <div className="w-[200px] h-[65px] overflow-hidden" />
                </div>
            </div>
            <div className="w-[830px] h-[50px] overflow-hidden border-b-[5px] border-primary flex justify-between flex-shrink-0">
                <div className="w-fit h-full flex justify-start items-center">
                    {navList?.map((v, i) => (<NavButton key={i} title={v} state={i === state} func={() => { setState(i) }} />))}
                </div>
                {state === 0 && <div className="w-[140px] h-[50px] overflow-hidden flex">
                    <div
                        className="
                            w-[70px] h-full overflow-hidden text-xl font-bold text-center text-white cursor-pointer flex justify-center items-center
                            hover:bg-primary-200
                        "
                        onClick={() => { dispatch(setUpdateEventModal()) }}
                    >
                        수정
                    </div>
                    <div
                        className="
                            w-[70px] h-full overflow-hidden text-xl font-bold text-center text-white cursor-pointer flex justify-center items-center
                            hover:bg-red-600
                        "
                        onClick={()=>{dispatch(setDeleteEventModal())}}
                    >
                        삭제
                    </div>
                </div>}
            </div>
            <div className="w-[830px] h-full flex flex-shrink flex-grow-0 justify-center items-center">
                {state === 0 && <EventDetail />}
                {state === 1 && <EventHire />}
                {state === 2 && <EventAttend />}
            </div>
        </div>
    )
}

export default EventInfo;