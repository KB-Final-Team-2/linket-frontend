import { Link, useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import EventList from "../../components/List/EventList";
import NavBar from "../../components/NavBar/NavBar";
import { DUMMY_EVENT1, DUMMY_EVENT2, Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import Templete from "../Templete";
import EventDetail from "./EventDetail";
import { useEffect } from "react";
import { getEventList, setEvent, setEventList } from "../../redux/slice/eventSlice";
import { User } from "../../interface/User";
import { CgSpinner } from "react-icons/cg";

const Staff = () => {
	const user: User = useSelector((state: any) => state.auth.data);
	const event = useSelector((state: any) => state.event);
	const eventData: Event = event.data;
	const eventList: Event[] = event.list;
	const dispatch: any = useDispatch();

	useEffect(() => {
		// dispatch(getEventList(user.companyId))
		const list = [DUMMY_EVENT1, DUMMY_EVENT2];
		dispatch(setEventList(list));
	}, [])

	return (
		<Templete>
			<div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
				{eventData === INIT_EVENT
					?
					<>
						<IndexHeader title="User Name" />
						<div className="w-[331px] h-full">
							<div className="w-full h-[580px] flex flex-col border-y pb-5">
								<p className="w-full h-10 text-sm font-bold text-center text-secondary flex justify-start items-center px-3">
									등록 행사
								</p>
								<div className="w-[331px] h-[384px] overflow-auto flex flex-col border-t">
									{event.loading
										?
										<CgSpinner className=" animate-spin m-auto" />
										:
										eventList?.map((event, i) => (<EventList key={i} event={event} />))
									}
								</div>

								<div className="w-full h-[156px] flex justify-between">
									<div className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-md font-bold text-center text-black flex flex-shrink-0 justify-center items-center">
										입장용 QR
									</div>
									<Link to="/staff/register" className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-md font-bold text-center text-black flex flex-shrink-0 justify-center items-center">
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