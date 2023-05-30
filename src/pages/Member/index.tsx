import { useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import { Ticket, TicketWithEvent } from "../../interface/Ticket";
import TicketList from "../../components/List/TicketList";
import { getUserTicketList, registTicket, setTicket } from "../../redux/slice/ticketSlice";
import TicketDetail from "./TicketDetail";
import { useEffect, useState } from "react";
import { getEvent, setEvent } from "../../redux/slice/eventSlice";
import { DUMMY_EVENT1 } from "../../interface/Event";
import { HiPlus } from "react-icons/hi";
import Content from "../Templete/Content";
import { CgSpinner } from "react-icons/cg";
import Button from "../../components/Button/Button";
import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx"
import logo_origin_dark from "../../img/logo_origin_dark.png";
import { unwrapResult } from "@reduxjs/toolkit";
import logo_shadow from "../../img/logo_shadow.png"

const Member = () => {
	const [isOpen, setIsOpen] = useState(false);

	const user = useSelector((state: any) => state.auth.data);
	const ticket = useSelector((state: any) => state.ticket);
	const dispatch: any = useDispatch();
	const navigate = useNavigate();
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
									<div className="overflow-auto w-full h-full flex flex-col">
										{userTicketList?.map((ticket, i) => (
											<TicketList key={i} ticket={ticket} />
										))}
									</div>
								)
							}
							<RegisterTicket isOpen={isOpen} onRequestClose={() => { setIsOpen(false) }} />
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

interface ticketModalProps {
	isOpen: boolean;
	onRequestClose: Function;
}

const RegisterTicket = ({ isOpen, onRequestClose }: ticketModalProps) => {
	const [serialNum, setSerialNum] = useState("");

	const user = useSelector((state: any) => state.auth.data);
	const ticket = useSelector((state: any) => state.ticket);
	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	const handleRegist = () => {
		dispatch(registTicket(Number.parseInt(serialNum)))
			.then(unwrapResult)
			.then(() => {
				dispatch(getUserTicketList(user.email))
					.then(unwrapResult)
					.then(() => { onRequestClose() })
			}).catch((err: Error) => {
				alert(err.message);
			})
	}
	return (
		<div className={`absolute transition-all duration-300 ${!isOpen && "translate-y-[100vh]"} self-center`}>
			<div className="absolute w-full h-full flex flex-col items-center">
				<RxCross2 className="absolute right-5 top-5 cursor-pointer" onClick={() => { onRequestClose() }} />
				<div className="w-full h-[172.5px] text-place-center flex-shrink-0 flex-grow-0">
					<img src={logo_shadow} />
				</div>
				<div className="w-full h-full px-5 flex flex-col justify-center gap-4">
					<div className="w-full h-fit text-start">일련번호 입력</div>
					<input value={serialNum} onChange={(e) => { setSerialNum(e.target?.value) }} />
				</div>
				<Button title="등록" type="default" func={() => { handleRegist() }} loading={ticket.loading} />
			</div>
			<svg
				width={255}
				height={454}
				viewBox="0 0 255 454"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
			>
				<path
					d="M255 428.7L255 192.525C255.001 191.036 254.427 189.584 253.359 188.37C252.291 187.157 250.781 186.242 249.039 185.752C245.48 184.752 242.396 182.882 240.213 180.402C238.03 177.923 236.857 174.957 236.857 171.915C236.857 168.873 238.03 165.907 240.213 163.428C242.396 160.948 245.48 159.079 249.039 158.078C250.78 157.587 252.289 156.672 253.357 155.458C254.425 154.245 254.999 152.794 255 151.305L255 0L-5.96037e-08 0L-5.96038e-08 151.305C-0.00193212 152.794 0.570491 154.246 1.63776 155.459C2.70502 156.673 4.21412 157.588 5.95543 158.078C9.51674 159.076 12.6044 160.945 14.7894 163.425C16.9745 165.905 18.1486 168.872 18.1486 171.915C18.1486 174.958 16.9745 177.925 14.7894 180.405C12.6044 182.885 9.51674 184.754 5.95543 185.752C4.21501 186.243 2.7068 187.159 1.63976 188.372C0.572711 189.585 -0.000324139 191.037 -5.96038e-08 192.525L-5.96038e-08 428.7C4.11622 428.7 8.19216 429.355 11.995 430.626C15.7978 431.898 19.253 433.761 22.1634 436.111C25.0737 438.46 27.3822 441.249 28.9569 444.319C30.5316 447.388 31.3418 450.678 31.341 454L223.659 454C223.658 450.678 224.468 447.388 226.043 444.319C227.618 441.249 229.926 438.46 232.837 436.111C235.747 433.761 239.202 431.898 243.005 430.626C246.808 429.355 250.884 428.7 255 428.7ZM228.459 170.695C229.505 171.425 229.402 172.304 228.808 172.779C228.666 172.896 228.496 172.988 228.309 173.05C228.122 173.112 227.921 173.142 227.718 173.14H209.427C208.381 172.405 208.49 171.53 209.078 171.051C209.221 170.936 209.391 170.845 209.578 170.784C209.766 170.723 209.966 170.693 210.168 170.695H228.459ZM198.377 170.695C199.418 171.425 199.32 172.304 198.726 172.779C198.584 172.896 198.414 172.988 198.227 173.05C198.039 173.112 197.838 173.142 197.636 173.14H179.345C178.304 172.405 178.407 171.53 179.001 171.051C179.144 170.936 179.314 170.845 179.502 170.784C179.689 170.723 179.889 170.693 180.091 170.695H198.377ZM168.289 170.695C169.341 171.425 169.232 172.304 168.643 172.779C168.501 172.895 168.331 172.987 168.144 173.049C167.957 173.111 167.756 173.142 167.554 173.14H149.268C148.216 172.405 148.325 171.53 148.919 171.051C149.062 170.936 149.232 170.845 149.419 170.784C149.606 170.723 149.807 170.693 150.009 170.695H168.289ZM138.212 170.695C139.253 171.425 139.155 172.304 138.555 172.779C138.414 172.896 138.244 172.988 138.057 173.05C137.869 173.112 137.668 173.143 137.466 173.14H119.174C118.134 172.405 118.232 171.53 118.831 171.051C118.974 170.935 119.144 170.845 119.331 170.783C119.518 170.722 119.719 170.692 119.921 170.695H138.212ZM108.119 170.695C109.17 171.425 109.062 172.304 108.473 172.779C108.331 172.896 108.161 172.988 107.974 173.05C107.787 173.112 107.586 173.142 107.383 173.14H89.092C88.0513 172.405 88.1548 171.53 88.7487 171.051C88.8918 170.936 89.0619 170.845 89.249 170.784C89.4362 170.723 89.6366 170.693 89.8385 170.695H108.119ZM28.9436 173.14C27.9029 172.405 28.001 171.53 28.6003 171.051C28.743 170.935 28.9131 170.845 29.1003 170.783C29.2875 170.722 29.4881 170.692 29.6901 170.695H47.9814C49.0221 171.425 48.924 172.304 48.3247 172.779C48.183 172.896 48.0133 172.988 47.8259 173.05C47.6386 173.112 47.4374 173.143 47.2349 173.14H28.9436ZM59.0314 173.14C57.9798 172.405 58.0888 171.53 58.6772 171.051L58.7263 171.02C59.0048 170.811 59.3706 170.695 59.7507 170.695H78.0365C79.0881 171.425 78.9792 172.304 78.3907 172.779C78.1271 172.991 77.7762 173.118 77.4045 173.135C77.3755 173.138 77.3463 173.138 77.3173 173.135L59.0314 173.14Z"
					fill="url(#paint0_linear_1057_21246)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_1057_21246"
						x1="128.052"
						y1={454}
						x2="127.362"
						y2="0.00102816"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#FA913C" />
						<stop offset={1} stop-color="#FFC369" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default Member;