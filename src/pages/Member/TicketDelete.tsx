import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";

const TicketDelete = () => {
    const ticket = {
        eventTitle : "KB It's your life",
        eventType : "Concert",
        startDate : "2023.03.02",
        endDate: "2023.05.31",
        place: "멀티캠퍼스 선릉",
        url: "http://linket.io/event/12345",
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
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden">
                <div className="w-[330px] h-[148px] absolute left-0 top-0 overflow-hidden">
                    <List title="행사명" content={ticket.eventTitle}/>
                    <List title="행사 분류" content={ticket.eventType}/>
                    <List title="행사 기간" content={`${ticket.startDate} ~ ${ticket.endDate}`}/>
                    <List title="행사 장소" content={ticket.place}/>
                </div>
                <div className="w-[330px] h-[445px] absolute left-0 top-[148px] overflow-hidden">
                    <div className="w-[330px] h-[244px] absolute left-0 top-[-1px] overflow-hidden">
                        <p className="w-[330px] absolute left-0 top-[60px] font-bold text-center text-[16px] text-white">
                            <p>해당 행사를 삭제하시겠습니까?</p>
                            <p>삭제된 행사는 복구할 수 없으며,</p>
                            <p>기존에 등록된 리뷰 및 이미지가 모두 삭제됩니다.</p>
                        </p>
                    </div>
                    <div className="w-[337px] h-[202px] absolute left-0 top-[243px] overflow-hidden flex justify-between items-center px-10">
                        <Button title="Delete" type="delete" func={()=>{}} />
                        <Button title="return" type="default" func={()=>{}} />
                    </div>
                </div>
            </div>
            <NavBar state="2"/>
            <Header title="티켓 삭제" />
        </div>
    )
}

export default TicketDelete;