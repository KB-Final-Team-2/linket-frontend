import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Login";
import axios from "axios";
import { login } from "../../redux/slice/userSilce";
import { AppDispatch } from "../../redux/store";

const Member = () => {
	const user = useSelector((state:any)=>(state.user.data));
	const dispatch = useDispatch<AppDispatch>();

	const doLogin = async () => {
		await dispatch(login());
	}

	useEffect(()=>{

	},[])

	return(
		<div>
			MemberPage
		</div>
	)
}

export default Member;