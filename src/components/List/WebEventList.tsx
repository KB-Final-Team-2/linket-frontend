import { Event } from "../../interface/Event";

interface props {
    event: Event;
    state: boolean;
    func: Function;
}

const WebEventList = ({ event, state, func }: props) => {
    return (
        <div
            className={`w-[300px] h-[100px] overflow-hidden flex flex-col flex-shrink-0 border-b cursor-pointer ${state && "bg-black/25"}`}
            onClick={() => { func() }}
        >
            <div className={`w-[250px] h-[35px] overflow-hidden`}>
                <p className="w-[300px] text-2xl font-bold text-left text-primary-100-200 truncate">
                    {event.eventType}
                </p>
            </div>
            <div className="w-[300px] h-[65px] flex flex-shrink-0 flex-grow-0 justify-start items-center">
                <p className="text-4xl font-bold text-left text-white truncate">
                    {event.eventName}
                </p>
            </div>
        </div>
    )
}

export default WebEventList;