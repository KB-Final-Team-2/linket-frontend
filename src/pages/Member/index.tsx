import { Link, useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import { DUMMY_TICKET1, DUMMY_TICKET2, INIT_TICKET, Ticket } from "../../interface/Ticket";
import TicketList from "../../components/List/TicketList";
import { getTicket, getTicketList, setTicket, setTicketList } from "../../redux/slice/ticketSlice";
import TicketDetail from "./TicketDetail";
import { useEffect } from "react";
import { getEvent, setEvent } from "../../redux/slice/eventSlice";
import { DUMMY_EVENT1 } from "../../interface/Event";

const Member = () => {
	const user = useSelector((state: any) => state.auth.data);
	const ticket = useSelector((state: any) => state.ticket);
	const dispatch: any = useDispatch();
	const navigate = useNavigate();
	const ticketData: Ticket = ticket.data;
	const ticketList: Ticket[] = ticket.list;

	useEffect(() => {
		// dispatch(getTicketList(user.email));
		const list = [DUMMY_TICKET1, DUMMY_TICKET2];
		dispatch(setTicketList(list));
	}, [user])

	const handleTicket = (ticket: Ticket) => {
		// dispatch(getTicket(ticket.ticketId));
		// dispatch(getEvent(ticket.eventId));
		dispatch(setTicket(ticket));
		dispatch(setEvent(DUMMY_EVENT1));
	}

	return (
		<Templete>
			<div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
				{ticketData === INIT_TICKET ?
					<>
						<IndexHeader title="User Name" />
						<div className="w-[330px] h-full overflow-hidden border-t border-b">
							<p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
								전체 이벤트
							</p>
							<div className="w-[330px] h-full overflow-auto">
								{ticketList.map((ticket, i) => (
									<TicketList key={i} title={`${ticket.eventId}`} func={() => { handleTicket(ticket) }} />
								))}
							</div>
						</div>
						<Link to="/member/register" className="w-full h-[156px] overflow-hidden bg-none flex flex-shrink-0 px-10 py-5">
							<p className="w-full h-full rounded-md text-3xl font-bold text-black bg-[#d9d9d9] flex justify-center items-center">
								새 티켓 등록하기
							</p>
						</Link>
					</>
					:
					<TicketDetail />
				}

				<NavBar role="member" state="2" />
			</div>
		</Templete>
	)
}

export default Member;