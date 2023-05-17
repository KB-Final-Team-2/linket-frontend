import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import IndexHeader from "../../components/Header/IndexHeader";
import ConcertList from "../../components/List/ConcertList";
import NavBar from "../../components/NavBar/NavBar";

const Staff = () => {
	const list = [{ type: "콘서트", title: "KB IT's your life1" }, { type: "콘서트", title: "KB IT's your life2" }, { type: "콘서트", title: "KB IT's your life3" }, { type: "콘서트", title: "KB IT's your life4" }];

	return (
		<div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
			<IndexHeader title="User Name" />
			<div className="w-[331px] h-full flex flex-grow-0">
				<div className="w-[331px] h-[580x] overflow-hidden flex flex-col flex-shrink-0 border-t border-b">
					<p className="w-[85px] h-[30px] text-sm font-bold text-center text-secondary">
						등록 행사
					</p>
					<div className="w-[331px] h-full overflow-hidden flex flex-col border-t">
						{list.map((v, i) => (<ConcertList key={i} title={v.title} type={v.type} id={12345} />))}
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
			<NavBar role="staff" state="1" />
		</div>
	)
}

export default Staff;