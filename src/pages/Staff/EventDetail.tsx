import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { FuncListProps, ListProps } from "../../interface/props";
import Templete from "../Templete";
import { setEvent } from "../../redux/slice/eventSlice";

const EventDetail = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list: ListProps[] = [
        { title: "행사명", content: event.eventName },
        { title: "행사 분류", content: event.eventType },
        { title: "행사 기간", content: `${event.startDate} ~ ${event.endDate}` },
        { title: "행사장소", content: event.place },
        { title: "행사 코드", content: `${event.eventId}` },
        { title: "행사 정보 이미지", content: event.eventImage },
    ]

    const moveUpdate = () => {
        navigate("/staff/update");
    }

    const dropdownList : FuncListProps[] = [
        {title:"행사 수정", func:()=>{navigate("/staff/update")}},  
        {title:"행사 삭제", func:()=>{navigate("/staff/delete")}},  
    ]

    return (
        <>
            <Header title="행사 상세" func={() => { dispatch(setEvent(INIT_EVENT)) }} list={dropdownList}/>
            <div className="w-[331px] h-full flex">
                <div className="w-full h-[580px] flex flex-col border-y pb-5">
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
                    <div className="w-full h-[158px] flex flex-shrink-0 justify-between">
                        <Link to="/staff/hire" className="w-[153px] h-full flex justify-center items-center bg-[#d9d9d9] text-black">
                            공고 관리
                        </Link>
                        <div className="w-[153px] h-full flex flex-col justify-between">
                            <Link to="/staff/attend" className="w-[153px] h-[60px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                                근태 관리
                            </Link>
                            <Link to="/staff/review" className="w-[153px] h-[60px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                                리뷰 보기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EventDetail;