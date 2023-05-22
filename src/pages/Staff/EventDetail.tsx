import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { useSelector } from "react-redux";
import { ListProps } from "../../interface/ListProps";

const EventDetail = () => {
    const event: Event = useSelector((state:any)=>state.event.event);
    const list : ListProps[] = [
        { title: "행사명", content: event.eventName },
        {title: "행사 분류", content: event.eventType },
        { title: "행사 기간", content: `${event.startDate} ~ ${event.endDate}` },
        { title: "행사장소", content: event.place },
        { title: "행사 코드", content: `${event.eventId}` },
        { title: "행사 포스터", content: "event_poster.jpg" },
        { title: "행사 정보 이미지", content: "event_info.jpg" }
    ]

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 상세" />
            <div className="w-[331px] h-full flex">
                <div className="w-full h-[580px] flex flex-col border-t border-b pb-5">
                    <div className="w-[331px] h-[580px] overflow-hidden">
                        {list.map((v, i) => {
                            return (<List key={i} title={v.title} content={v.content || ""} />)
                        })}

                        <div className="w-[330px] h-[207px] overflow-hidden border-b flex">
                            <p className="w-[115px] h-[207px] text-[15px] font-bold text-center text-white">
                                행사 설명
                            </p>
                            <p className="w-[215px] h-[207px] text-[15px] font-bold text-center text-white">
                                신비한 동물 사전에 의하면 스코틀랜드에 있으며, 킹스 크로스 역 9와 3/4 승강장에서 호그와트 급행열차를 타고 갈 수 있다. 학기는 매년 9월 1일에 시작된다.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[158px] flex flex-shrink-0 justify-between">
                        <Link to="/staff/event/attend" className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                            출결 관리
                        </Link>
                        <Link to="#" className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                            리뷰 보기
                        </Link>
                    </div>
                </div>
            </div>
            <NavBar role="staff" state="1" />
        </div>
    )
}
export default EventDetail;