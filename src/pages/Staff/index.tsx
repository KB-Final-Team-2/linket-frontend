import { Link, useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import EventList from "../../components/List/EventList";
import NavBar from "../../components/NavBar/NavBar";
import { Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import Templete from "../Templete";
import EventDetail from "./EventDetail";

const Staff = () => {

	const event: Event = useSelector((state: any) => state.event?.data);
	const eventList: Event[] = useSelector((state: any) => state.event?.list);
	const dispatch = useDispatch();

	return (
		<Templete>
			<div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
				{event === INIT_EVENT
					?
					<>
						<IndexHeader title="User Name" />
						<div className="w-[331px] h-full">
							<div className="w-full h-[580px] flex flex-col border-y pb-5">
								<p className="w-full h-10 text-sm font-bold text-center text-secondary flex justify-start items-center px-3">
									등록 행사
								</p>
								<div className="w-[331px] h-[384px] overflow-auto flex flex-col border-t">
									{eventList.map((event, i) => (<EventList key={i} event={event} />))}
								</div>

								<div className="w-full h-[156px] flex justify-between">
									<div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-md font-bold text-center text-black flex flex-shrink-0 justify-center items-center">
										입장용 QR
									</div>
									<Link to="/staff/event/register" className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-md font-bold text-center text-black flex flex-shrink-0 justify-center items-center">
										새 행사 등록하기
									</Link>
								</div>
							</div>
						</div>
					</>
					:
					<EventDetail />
				}
				<NavBar role="staff" state="1" />
			</div>
		</Templete>
	)
}

export default Staff;