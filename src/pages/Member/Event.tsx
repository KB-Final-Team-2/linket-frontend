import { useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { Company } from "../../interface/Company";
import Button from "../../components/Button/Button";

const EventHome = () => {
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
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <IndexHeader title="Event" />
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[330px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col relative">
                    <p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
                        전체 이벤트
                    </p>
                    <div className="w-[330px] h-full flex flex-col">
                        <div className="w-full h-full overflow-scroll flex flex-row flex-shrink-0">
                            <div className="w-[300px] h-[400px] overflow-hidden block">
                                <div
                                    className="w-[237px] h-[356px] overflow-hidden bg-white"
                                    onClick={() => { navigate(`/member/event/${1234}`) }}>
                                    <p className="w-[237px] h-[356px] text-[40px] font-bold text-center text-[#ff9f0e]">
                                        poster.jpg
                                    </p>
                                </div>
                                <div className="w-[301px] h-11 overflow-hidden">
                                    <p className="w-[301px] h-11 font-bold text-center text-white">
                                        {event1.eventName}
                                    </p>
                                </div>
                            </div>
                            <div className="w-[300px] h-[400px] overflow-hidden block">
                                <div className="w-[237px] h-[356px] overflow-hidden bg-white">
                                    <p className="w-[237px] h-[356px] text-[40px] font-bold text-center text-[#ff9f0e]">
                                        poster.jpg
                                    </p>
                                </div>
                                <div className="w-[301px] h-11 overflow-hidden">
                                    <p className="w-[301px] h-11 font-bold text-center text-white">
                                        {event2.eventName}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-10 flex flex-shrink-0 justify-center">
                        <Button title="Search" type="default" func={() => { navigate("/member/event/search") }} />
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}

export default EventHome;