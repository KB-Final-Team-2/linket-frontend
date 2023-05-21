import { useSelector } from "react-redux";
import IndexHeader from "../../components/Header/IndexHeader";
import EventList from "../../components/List/EventList";
import NavBar from "../../components/NavBar/NavBar";
import { Company } from "../../interface/Company";
import { Event } from "../../interface/Event";
import { Link } from "react-router-dom";
import { Hire } from "../../interface/Hire";
import HireList from "../../components/List/HiretList";

const PartTime = () => {
	const hireList : Hire[] = useSelector((state:any)=>state.hire.hireList);

	return (
		<div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
			<IndexHeader title="User name" />
			<div className="w-[331px] h-full flex flex-col">
				<div className="w-[331px] h-[580px] overflow-hidden flex flex-col flex-grow-0 flex-shrink-0">
					<p className="w-full h-10 text-sm font-bold text-left align-middle text-secondary border-b">
						등록 공고
					</p>
					<div className="w-[331px] h-full overflow-hidden">
						{hireList.map((hire, i) => (
							<HireList key={i} hire={hire} />
						))}
					</div>
					<div className="w-full h-[156px] flex justify-between">
						<Link to={`/part/search`} className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] flex justify-center items-center text-lg font-bold text-black">
							공고 검색
						</Link>
						<Link to={`/part/register`} className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] flex justify-center items-center text-lg font-bold text-black">
							새 공고 등록하기
						</Link>
					</div>
				</div>
			</div>
			<NavBar role="part" state="1" />
		</div>
	)
}

export default PartTime;