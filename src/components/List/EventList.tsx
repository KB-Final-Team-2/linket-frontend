import { useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import { User } from "../../interface/User";
import { Link, useNavigate } from "react-router-dom";

interface props {
    event: Event
}

const EventList = ({event}: props) => {
    const user : User = useSelector((state:any)=>state.auth?.data);
    const navigate = useNavigate();

    return (
        <Link to={`/${user.role}/event/${event.eventId}`} className="w-[331px] h-[60px] overflow-hidden flex border-b">
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-[15px] font-bold text-center text-secondary flex justify-center items-center">
                {event.eventType}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-[15px] font-bold text-center text-secondary flex justify-start items-center px-5">
                {event.eventName}
            </div>
        </Link>
    )
}

export default EventList;