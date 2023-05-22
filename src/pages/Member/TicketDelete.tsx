import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";

const TicketDelete = () => {
    const ticket = {
        eventTitle: "KB Killing Boys Concert",
        eventType: "Concert",
        startDate: "2023.05.17",
        endDate: "2023.05.17",
        place: "잠실 올림픽 경기장",
        url: "http://linket.io/event/12345",
    }
    const navigate = useNavigate();
    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="티켓 삭제" />
                <div className="w-[331px] h-full">
                    <div className="w-[331px] h-[580px] overflow-hidden border-b border-t  flex flex-col">
                        <div className="w-[330px] h-[148px] overflow-hidden">
                            <List title="행사명" content={ticket.eventTitle} />
                            <List title="행사 분류" content={ticket.eventType} />
                            <List title="행사 기간" content={`${ticket.startDate} ~ ${ticket.endDate}`} />
                            <List title="행사 장소" content={ticket.place} />
                        </div>
                        <div className="w-[330px] h-full overflow-hidden">
                            <div className="w-[330px] h-full font-bold text-center text-[20px] text-white flex flex-col justify-center items-center">
                                <p>해당 행사를 삭제하시겠습니까?</p>
                                <p>삭제된 행사는 복구할 수 없으며,</p>
                                <p>기존에 등록된 리뷰 및 이미지가</p>
                                <p> 모두 삭제됩니다.</p>
                            </div>
                        </div>
                        <div className="w-[337px] h-[202px] overflow-hidden flex flex-shrink-0 justify-between items-center px-10">
                            <Button title="Delete" type="delete" func={() => { navigate("/member") }} />
                            <Button title="return" type="default" func={() => { navigate(-1) }} />
                        </div>
                    </div>
                </div>
                <NavBar role="member" state="2" />
            </div>
        </Templete>
    )
}

export default TicketDelete;