import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";

const EventDetail = () => {
    const event: Event = {
        eventName: "KB It's your life",
        eventType: "Concert",
        startDate: "2023.03.02",
        endDate: "2023.05.31",
        place: "멀티캠퍼스 선릉",
        eventId: "1234",
        eventInq: "1234",
        eventDesc: "1234",
        eventStatus: "do",
        regDate: "1234",
        company: undefined
    }

    const navigate = useNavigate();
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="이벤트 상세" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-b border-t flex flex-col">
                    <List title="행사명" content={event.eventName} />
                    <List title="행사 분류" content={event.eventType} />
                    <List title="행사 기간" content={`${event.startDate} ~ ${event.endDate}`} />
                    <List title="행사 장소" content={event.place} />
                    <div className="w-[331px] h-full overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                        <p className="w-[115px] h-full text-[15px] font-bold text-center text-white">
                            행사 설명
                        </p>
                        <p className="w-[215px] h-full text-[15px] font-bold text-center text-white">
                            주니어 개발자들의 실력 행사가 시작된다! 새로 개발자가 되고 싶은 꿈나무부터 숨겨진 고인물까지
                            모두 모이는 이 곳!
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