import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Auth";
import axios from "axios";
import { login, postLogin } from "../../redux/slice/authSilce";
import { AppDispatch } from "../../redux/store";

const Member = () => {
	const user = useSelector((state:any)=>(state.user.data));
	const dispatch = useDispatch<AppDispatch>();

	const doLogin = async () => {
		await dispatch(login());
		// await dispatch(postLogin());
	}

	useEffect(()=>{
		doLogin();
	},[])

	return(
		<div className="bg-red-300 text-blue-500">
			MemberPage
			{user.name&&(
				<>
					<div>email: {user.email}</div>
					<div>name: {user.name}</div>
				</>
			)}
		</div>
	)
}

export default Member;