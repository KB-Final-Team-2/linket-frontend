import { useDispatch, useSelector } from "react-redux";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { Hire } from "../../interface/Hire";
import HireList from "../../components/List/HiretList";
import Templete from "../Templete";
import { useEffect, useState } from "react";
import { User } from "../../interface/User";
import { getPartHireList } from "../../redux/slice/hireSlice";
import HireDetail from "./HireDetail";
import HireSearch from "./HireSearch";
import { unwrapResult } from "@reduxjs/toolkit";
import Content from "../Templete/Content";
import BigButton from "../../components/Button/BigButton";

const PartTime = () => {
	const [doSearch, setDoSearch] = useState(false);

	const user: User = useSelector((state: any) => state.auth.data);
	const hire: Hire = useSelector((state: any) => state.hire.data);
	const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getPartHireList(user.email))
		.then(unwrapResult)
		.then((res:any)=>{
			console.log(res);
		});
	}, [user])

	return (
		<Templete>
			{hire.hireId === -1
				?
				(doSearch
					?
					<HireSearch onRequestReturn={() => { setDoSearch(false) }} />
					:
					<>
						<IndexHeader title="User name" />
						<Content>
							<p className="w-full h-10 text-sm font-bold text-left align-middle text-primary-200 flex items-center border-b pl-3">
								등록 공고
							</p>
							<div className="w-full h-full overflow-hidden">
								{hireList?.map((hire, i) => (
									<HireList key={i} hire={hire} />
								))}
							</div>
							<div className="w-full h-fit flex justify-between items-center py-5">
								<BigButton title="공고 등록" type="default" func={()=>{navigate("/part/register")}}/>
							</div>
						</Content>
					</>
				)

				:
				<HireDetail />
			}
			<NavBar role="part" state="1" />
		</Templete>
	)
}

export default PartTime;