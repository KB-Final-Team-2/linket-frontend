import IndexHeader from "../../components/Header/IndexHeader";
import EventList from "../../components/List/EventList";
import NavBar from "../../components/NavBar/NavBar";
import { Company } from "../../interface/Company";
import { Event } from "../../interface/Event";

const PartTime = () => {
	const company: Company = {
        companyId: "00001",
        companyName: "Multi"
    }
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
        company: company
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
        company: company
    }
    
    const eventList = [event1, event2]

	return (
		<div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
			<IndexHeader title="User name" />
			<div className="w-[331px] h-full flex flex-col">
				<div className="w-[331px] h-[580px] overflow-hidden flex flex-col flex-grow-0 flex-shrink-0">
					<p className="w-full h-10 text-sm font-bold text-left align-middle text-secondary border-b">
						등록 행사
					</p>
					<div className="w-[331px] h-full overflow-hidden">
						{eventList.map((event, i) => (
							<EventList key={i} event={event} />
						))}
					</div>
					<div className="w-full h-[156px] flex justify-between">
						<div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9]">
						</div>
						<div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9]">
							<p className="text-sm font-bold text-center text-black">
								새 행사 등록하기
							</p>
						</div>
					</div>
				</div>
			</div>
			<NavBar role="part" state="1" />
		</div>
	)
}

export default PartTime;