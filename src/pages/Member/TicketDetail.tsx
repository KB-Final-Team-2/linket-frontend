import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import { useSelector } from "react-redux";

const TicketDetail = () => {
    const ticket = {
        eventTitle: "KB Killing Boys Concert",
        eventType: "Concert",
        startDate: "2023.05.17",
        endDate: "2023.05.17",
        place: "잠실 올림픽 경기장",
        url: "http://linket.io/event/12345",
    }

    const eventList : Event[] = useSelector((state:any)=>state.event.list);
	const navigate = useNavigate();
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center">
            <Header title="티켓 상세" />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-[331px] h-[580px] overflow-hidden ">
                    <div className="w-[331px] h-[383px] overflow-hidden">
                        <List title="행사명" content={ticket.eventTitle} />
                        <List title="행사 분류" content={ticket.eventType} />
                        <List title="행사 기간" content={`${ticket.startDate} ~ ${ticket.endDate}`} />
                        <List title="행사 장소" content={ticket.place} />
                        <List title="행사명" content={ticket.eventTitle} />
                        <List title="url" content={ticket.url} />
                        <div className="w-[330px] h-[161px] left-0 top-[185px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                            <p className="w-[115px] h-[161px] text-[15px] font-bold text-center text-white">
                                행사 설명
                            </p>
                            <p className="w-[215px] h-[161px] text-[15px] font-bold text-center text-white">
                                {eventList[0].eventDesc}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9]">
                            <p className="text-[15px] font-bold text-left text-black">
                                입장용 QR
                            </p>
                        </div>
                        <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                            <Button title="Review" type="default" func={() => { }} />
                            <Button title="Notice" type="default" func={() => { }} />
                            <Button title="Delete" type="delete" func={() => {navigate("/member/ticket/delete")}} />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar role="member" state="2" />
        </div>
    )
}

export default TicketDetail;