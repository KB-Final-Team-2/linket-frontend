import { useSelector } from "react-redux";
import { Event } from "../../../../interface/Event";
import { useEffect, useState } from "react";
import EventDetail from "./EventDetail";
import StatsMember from "./StatsMember";
import StatsReview from "./StatsReview";


interface NavProps {
    title: string;
    state: boolean;
    func: Function;
}

const NavButton = ({ title, state, func }: NavProps) => {
    return (
        <div
            className={`w-[150px] h-[50px] overflow-hidden flex flex-shrink-0 justify-center items-center text-2xl font-bold text-center text-white ${state && "bg-primary-100"}`}
            onClick={() => { func() }}
        >
            {title}
        </div>
    )
}

const EventInfo = () => {
    const [state, setState] = useState(0);
    const navList = ["행사 상세", "관람객 통계", "리뷰 통계"];

    const event: Event = useSelector((state: any) => state.event?.data)

    useEffect(() => {
        setState(0);

    }, [event]);

    return (
        <div className="w-[830px] h-[920px] overflow-hidden bg-black/25 flex flex-col flex-shrink-0 flex-grow-0 justify-start">
            <div className="w-[830px] h-[100px] overflow-hidden border-t-0 border-r-0 border-b-2 border-l-0 border-white">
                <div className="w-[830px] h-[35px] overflow-hidden">
                    <p className="text-3xl font-bold text-left text-primary-100-200">
                        {event.eventType}
                    </p>
                </div>
                <div className="w-[830px] h-[65px] overflow-hidden">
                    <p className=" text-[40px] font-bold text-left text-white">
                        {event.eventName}
                    </p>
                    <div className="w-[200px] h-[65px] overflow-hidden" />
                </div>
            </div>
            <div className="w-[830px] h-[50px] overflow-hidden border-t-0 border-r-0 border-b-[5px] border-l-0 border-primary-100 flex justify-between">
                <div className="w-fit h-full flex justify-start items-center">
                    {navList?.map((v, i) => (<NavButton key={i} title={v} state={i === state} func={() => { setState(i) }} />))}
                </div>
                {state === 0 &&
                <div className="w-[140px] h-[50px] overflow-hidden flex justify-end items-center">
                    <div className="w-[70px] h-10 overflow-hidden">
                        <p className="text-xl font-bold text-center text-white">
                            삭제
                        </p>
                    </div>
                </div>}
            </div>
                {state===0&&<EventDetail />}
                {state===1&&<StatsMember />}
                {state===2&&<StatsReview />}
        </div>
    )
}

export default EventInfo;