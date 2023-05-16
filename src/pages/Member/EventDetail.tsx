import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";

const EventDetail = () => {
    const event : Event = {
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

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white flex justify-center">
            <svg
                width={375}
                height={812}
                viewBox="0 0 375 812"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[375px] h-[812px] absolute left-0 top-0"
                preserveAspectRatio="none"
            >
                <path d="M0 0H375V812H0V0Z" fill="#454545" />
            </svg>
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[580px] absolute left-[21px] top-[125px] overflow-hidden">
                <List title="행사명" content={event.eventName}/>
                <List title="행사 분류" content={event.eventType}/>
                <List title="행사 기간" content={`${event.startDate} ~ ${event.endDate}`}/>
                <List title="행사 장소" content={event.place}/>
                <NextList title="리뷰 더보기"  />
                <div className="w-[331px] h-[259px] absolute left-0 top-[321px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                    <p className="w-[115.35px] h-[259px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                        행사 설명
                    </p>
                    <p className="w-[215.65px] h-[259px] absolute left-[115.35px] top-0 text-[15px] font-bold text-center text-white">
                        주니어 개발자들의 실력 행사가 시작된다! 새로 개발자가 되고 싶은 꿈나무부터 숨겨진 고인물까지
                        모두 모이는 이 곳!
                    </p>
                </div>
            </div>
            <NavBar state="1"/>
            <Header title="이벤트 상세" />
        </div>
    )
}

export default EventDetail;