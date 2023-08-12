import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import { Ticket, TicketWithEvent } from "../../interface/Ticket";
import TicketList from "../../components/List/TicketList";
import { getUserTicketList, registTicket, setTicket } from "../../redux/slice/ticketSlice";
import TicketDetail from "./TicketDetail";
import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import Content from "../Templete/Content";
import { CgSpinner } from "react-icons/cg";
import Button from "../../components/Button/Button";
import RegistTicketModal from "../../components/Modal/RegistTicketModal";

const Member = () => {
	const [isOpen, setIsOpen] = useState(false);

	const user = useSelector((state: any) => state.auth.data);
	const ticket = useSelector((state: any) => state.ticket);
	const dispatch: any = useDispatch();
	const ticketData: Ticket = ticket?.data;
	const userTicketList: TicketWithEvent[] = ticket?.userTicketList;

	useEffect(() => {
		dispatch(getUserTicketList(user.email));
	}, [user])

	return (
		<Templete>
			{ticketData.ticketId === -1
				?
				<>
					<IndexHeader title="User Name" />
					<Content>
						<div className="w-full h-[45px] text-xl font-bold text-white flex justify-between items-center px-2">
							전체 이벤트
							<HiPlus className="text-4xl cursor-pointer" onClick={() => { setIsOpen(true) }} />
						</div>
						<div className={`w-full h-full overflow-hidden relative flex flex-col gap-3 custom-toolbar px-5`}>
							{ticket.loading
								?
								<div className="flex w-full h-full text-place-center">
									<CgSpinner className="animate-spin text-4xl" />
								</div>
								:
								(userTicketList?.length === 0
									?
									<div className="w-full h-full text-center flex flex-col justify-center items-center text-2xl gap-10">
										<svg
											width={150}
											height={98}
											viewBox="0 0 150 98"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[150px] h-[98px] relative"
											preserveAspectRatio="none"
										>
											<g clipPath="url(#clip0_951_28398)">
												<path
													d="M5.00515 0.5H144.995C147.481 0.5 149.5 2.51539 149.5 5V18.3333C149.5 20.8055 147.475 22.8227 144.95 23.0702C139.059 23.6477 134.593 25.2393 131.585 27.376C128.576 29.5139 127 32.223 127 35C127 37.777 128.576 40.4862 131.585 42.624C134.593 44.7607 139.059 46.3523 144.95 46.9298C147.475 47.1773 149.5 49.1945 149.5 51.6667V65C149.5 67.4853 147.485 69.5 145 69.5H137.104C135.178 69.5 133.459 68.2392 132.652 66.426C127.891 55.7371 119.173 50.3472 110.307 50.3751C101.444 50.403 92.5442 55.8438 87.4077 66.577C86.5775 68.3118 84.8965 69.5 83.027 69.5H5C2.51472 69.5 0.5 67.4853 0.5 65V51.6667C0.5 49.1936 2.53359 47.1736 5.05454 46.9772C11.798 46.4517 16.9028 44.8719 20.3382 42.7292C23.7701 40.5887 25.5929 37.8427 25.5929 35C25.5929 32.1573 23.7701 29.4113 20.3382 27.2708C16.9028 25.1281 11.798 23.5483 5.05454 23.0228C2.53365 22.8264 0.5 20.8059 0.5 18.3329V5.00047C0.5 2.5158 2.51926 0.5 5.00515 0.5Z"
													stroke="#d9d9d9"
												/>
												<rect x="45.5" y="20.5" width={59} height={29} stroke="#d9d9d9" />
												<circle cx={110} cy={74} r="23.5" stroke="#d9d9d9" />
												<path d="M97.5 63L122 84M122 63L97.5 84" stroke="#d9d9d9" />
											</g>
										</svg>
										티켓이 존재하지 않습니다.<br />
										티켓을 등록해주세요.
										<Button title="등록" type="default" func={() => { setIsOpen(true) }} />
									</div>
									:
									<div className="overflow-auto w-full h-full flex flex-col gap-3">
										{userTicketList?.map((ticket, i) => (
											<TicketList key={i} ticket={ticket} />
										))}
									</div>
								)
							}
							<RegistTicketModal isOpen={isOpen} onRequestClose={() => { setIsOpen(false) }} />
						</div>
					</Content>
				</>
				:
				<TicketDetail />
			}
			<NavBar role="member" state="1" />
		</Templete>
	)
}

export default Member;