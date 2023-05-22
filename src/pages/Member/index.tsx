import { Link, useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import Ticket from "../../components/Ticket";
import Templete from "../Templete";

const Member = () => {

	const navigate = useNavigate();
	const list = ["New Ticket", "New Ticket", "New Ticket", "New Ticket", "New Ticket", "New Ticket", "New Ticket", "New Ticket", "New Ticket"]

	return (
		<Templete>
			<div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
				<IndexHeader title="User Name" />
				<div className="w-[330px] h-full overflow-hidden border-t border-b">
					<p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
						전체 이벤트
					</p>
					<div className="w-[330px] h-full overflow-scroll">
						{list.map((v, i) => (
							<Ticket key={i} title={v} func={() => { navigate(`/member/ticket/${1234}`) }} />
						))}
					</div>
				</div>
				<Link to="/member/register" className="w-full h-[156px] overflow-hidden bg-none flex flex-shrink-0 px-10 py-5">
					<p className="w-full h-full rounded-md text-3xl font-bold text-black bg-[#d9d9d9] flex justify-center items-center">
						새 티켓 등록하기
					</p>
				</Link>
				<NavBar role="member" state="2" />
			</div>
		</Templete>
	)
}

export default Member;