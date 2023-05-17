import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ConcertList from "../../components/List/ConcertList";
import { Event } from "../../interface/Event";
import { Company } from "../../interface/Company";

const EventSearchResult = () => {
    const navigate = useNavigate();
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
                        {list.map((v, i) => (<ConcertList key={i} title={v.eventName} type={v.eventType} id={12345} />))}
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}
export default EventSearchResult;