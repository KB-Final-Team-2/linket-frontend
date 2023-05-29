import { Link } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import EventList from "../../components/List/EventList";
import NavBar from "../../components/NavBar/NavBar";
import { DUMMY_EVENT1, DUMMY_EVENT2, Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import Templete from "../Templete";
import EventContinueDetail from "./EventContinueDetail";
import { useEffect } from "react";
import { getEventList, setEvent, setEventList } from "../../redux/slice/eventSlice";
import { User } from "../../interface/User";
import { CgSpinner } from "react-icons/cg";
import EventEndedDetail from "./EventEndedDetail";
import Content from "../Templete/Content";
import { unwrapResult } from "@reduxjs/toolkit";

const Staff = () => {
	const user: User = useSelector((state: any) => state.auth.data);
	const event = useSelector((state: any) => state.event);
	const eventData: Event = event.data;
	const eventList: Event[] = event.list;
	const dispatch: any = useDispatch();

	useEffect(() => {
		console.log(user);
		dispatch(getEventList(user.userCompanyId))
		.then(unwrapResult)
		.then((res:any[])=>{
			console.log(res);
		}).catch((err:Error)=>{
			alert(err.message)
		});
	}, [])

	return (
		<Templete>
				{eventData.eventId === -1
					?
					<>
						<IndexHeader title="User Name" />
						<Content>
							<p className="w-full h-10 text-sm font-bold text-center text-primary-200 flex justify-start items-center px-3">
								등록 행사
							</p>
							<div className="w-[331px] h-full overflow-auto flex flex-col border-t">
								{event.loading
									?
									<CgSpinner className=" animate-spin m-auto" />
									:
									eventList?.map((event, i) => (<EventList key={i} event={event} />))
								}
							</div>

							<div className="w-full h-[156px] flex justify-between items-center">
								<Link to="/staff/register" className="w-full h-16 flex justify-center items-center bg-black/30 text-white hover:bg-white/20 border-primary border-4 rounded-2xl shadow-md">
									행사 등록
								</Link>
							</div>
						</Content>
					</>
					:
					(eventData.eventStatus === "Y" ? <EventContinueDetail /> : <EventEndedDetail />)
				}
				<NavBar role="staff" state="1" />
		</Templete>
	)
}

export default Staff;