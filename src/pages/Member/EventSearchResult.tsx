import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import EventList from "../../components/List/EventList";
import { Event } from "../../interface/Event";
import { Company } from "../../interface/Company";
import { useSelector } from "react-redux";

const EventSearchResult = () => {
    const navigate = useNavigate();
    
    const eventList : Event[] = useSelector((state:any)=>state.event.list);

    return (
        <div className="w-[375px] h-[812px] overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 검색 결과" />

            <div className="w-[331px] h-full">
                <div className="w-[330px] h-[580px] overflow-hidden border-t border-b">
                <div className="w-[330px] h-10 bg-background-light/30 rounded-lg shrink-0 mb-2 " />
                    <p className="w-[330px] h-[45px] text-xl font-bold text-center text-white">
                        다른 조건으로 검색하기
                    </p>
                    <div className="w-[330px] h-[465px] left-0 top-[115px] overflow-hidden"  onClick={()=>{navigate(`/member/event/searchResult/${1234}`)}}>
                        {eventList.map((event, i) => (<EventList key={i} event={event} />))}
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}
export default EventSearchResult;