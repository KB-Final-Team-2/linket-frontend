import { useDispatch, useSelector } from "react-redux";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { DUMMY_HIRE1, DUMMY_HIRE2, Hire, INIT_HIRE } from "../../interface/Hire";
import HireList from "../../components/List/HiretList";
import Templete from "../Templete";
import { useEffect, useState } from "react";
import { User } from "../../interface/User";
import { getHire, getPartHireList, setHireList } from "../../redux/slice/hireSlice";
import HireDetail from "./HireDetail";
import HireSearch from "./HireSearch";
import { unwrapResult } from "@reduxjs/toolkit";

const PartTime = () => {
	const [doSearch, setDoSearch] = useState(false);

	const user: User = useSelector((state: any) => state.auth.data);
	const hire: Hire = useSelector((state: any) => state.hire.data);
	const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
	const dispatch :any = useDispatch();

	useEffect(() => {
		// dispatch(getPartHireList(user.email))
		const list = [DUMMY_HIRE1, DUMMY_HIRE2];
		dispatch(setHireList(list));
	}, [user])

	return (
		<Templete>
			<div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
				{hire === INIT_HIRE
					?
					(doSearch
						?
						<HireSearch onRequestReturn={()=>{setDoSearch(false)}}/>
						:
						<>
							<IndexHeader title="User name" />
							<div className="w-[331px] h-full">
								<div className="w-[330px] h-[580px] overflow-hidden border-t border-b">
									<p className="w-full h-10 text-sm font-bold text-left align-middle text-secondary">
										등록 공고
									</p>
									<div className="w-[331px] h-[384px] overflow-hidden">
										{hireList.map((hire, i) => (
											<HireList key={i} hire={hire} />
										))}
									</div>
									<div className="w-full h-[156px] flex justify-between items-center mb-5">
										<div
											className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] flex justify-center items-center text-lg font-bold text-black"
											onClick={()=>{setDoSearch(true)}}
											>
											공고 검색
										</div>
										<Link to={`/part/register`} className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] flex justify-center items-center text-lg font-bold text-black">
											새 공고 등록하기
										</Link>
									</div>
								</div>
							</div>
						</>
					)

					:
					<HireDetail />
				}
				<NavBar role="part" state="1" />
			</div>
		</Templete>
	)
}

export default PartTime;