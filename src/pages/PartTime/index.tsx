import { useDispatch, useSelector } from "react-redux";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { DUMMY_HIRE1, DUMMY_HIRE2, Hire, INIT_HIRE } from "../../interface/Hire";
import HireList from "../../components/List/HiretList";
import Templete from "../Templete";
import { useEffect } from "react";
import { User } from "../../interface/User";
import { setHireList } from "../../redux/slice/hireSlice";
import HireDetail from "./HireDetail";

const PartTime = () => {
	const user: User = useSelector((state: any) => state.auth.data);
	const hire: Hire = useSelector((state: any) => state.hire.data);
	const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
	const dispatch = useDispatch();

	useEffect(() => {
		const list = [DUMMY_HIRE1, DUMMY_HIRE2];
		dispatch(setHireList(list));
	}, [user])

	return (
		<Templete>
			<div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
				{hire === INIT_HIRE
					?
					<>
						<IndexHeader title="User name" />
						<div className="w-[331px] h-full flex flex-col flex-grow-0">
							<div className="w-[331px] h-[580px] overflow-hidden flex flex-col flex-grow-0 flex-shrink-0">
								<p className="w-full h-10 text-sm font-bold text-left align-middle text-secondary">
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
					</>
					:
					<HireDetail />
				}
			</div>
			<NavBar role="part" state="1" />
		</Templete>
	)
}

export default PartTime;