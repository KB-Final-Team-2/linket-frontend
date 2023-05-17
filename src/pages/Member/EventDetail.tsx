import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { Company } from "../../interface/Company";

const EventDetail = () => {
    const event1: Event = {
        eventId: "12345",
        eventName: "KB Killing Boys Concert",
        eventType: "Concert",
        place: "잠실 올림픽 경기장",
        eventInq: "02-123-456",
        eventDesc: "대세 남자 아이돌 콘서트",
        eventStatus: "Y",
        startDate: "2023.05.17",
        endDate: "2023.05.17",
        regDate: "2023.05.17",
        company: undefined
    }
    const event2: Event = {
        eventId: "12345",
        eventName: "호구와트 마술쇼",
        eventType: "Concert",
        place: "잠실 올림픽 경기장",
        eventInq: "02-123-456",
        eventDesc: "마술쇼",
        eventStatus: "Y",
        startDate: "2023.05.14",
        endDate: "2023.05.14",
        regDate: "2023.05.14",
        company: undefined
    }
    const company: Company = {
        companyId: "00001",
        companyName: "Multi"
    }
    const list = [event1, event2]

    const navigate = useNavigate();
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="이벤트 상세" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-b border-t flex flex-col">
                    <List title="행사명" content={event1.eventName} />
                    <List title="행사 분류" content={event1.eventType} />
                    <List title="행사 기간" content={`${event1.startDate} ~ ${event1.endDate}`} />
                    <List title="행사 장소" content={event1.place} />
                    <div className="w-[331px] h-full overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                        <p className="w-[115px] h-full text-[15px] font-bold text-center text-white">
                            행사 설명
                        </p>
                        <p className="w-[215px] h-full text-[15px] font-bold text-center text-white">
                            {event1.eventDesc}
                        </p>
                    </div>
                    <div onClick={()=>{navigate(`/member/event/${1234}/review`)}}>
                        <NextList title="리뷰 더보기"/>   
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}

export default EventDetail;