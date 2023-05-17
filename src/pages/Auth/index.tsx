import axios from "axios";
import { useState } from "react";
import {AiOutlineRight} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interface/User";
import { logout, setUser } from "../../redux/slice/authSilce";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = useSelector((state:any)=>(state.auth.data));
	const dispatch : any = useDispatch();
	const navigate = useNavigate();

	const staff = {
		email: "staff",
		password: "1234",
		role: "staff"
	};

	const member = {
		email: "member",
		password: "1234",
		role: "member"
	}

	const user = [staff, member];

	const handleLogin = () => {
		user.map((v,i)=>{
			if(email===v.email&&password===v.password) navigate(`/${v.role}`)
		})
		// axios.post("/api/auth/login",{email:email, password:password})
		// .then((res)=>{
		// 	const userData : User = res.data;
		// 	if(userData.email) {
		// 		console.log(userData);
		// 		dispatch(setUser(userData));
		// 	} else {
		// 		console.log("wrong");
		// 	}
		// })
	}

	const testAuth = async () => {
		// console.log(auth);
		// await dispatch(logout());
		// console.log("logout");
	}

	return(
		<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#454545]">
			<div className="w-[327px] h-[106px] relative left-6 top-[360px] rounded bg-[#c4c4c4]/[0.31] overflow-hidden px-3">
				<div className="w-full h-1/2 px-5">
					<input
						className="w-full h-full focus:outline-none text-white bg-black/[0]"
						type="text"
						placeholder="이메일"
						value={email}
						onChange={(e)=>{setEmail(e.target.value)}}/>
				</div>
				<div className="w-[250px] h-[1px] bg-white"/>
				<div className="w-full h-1/2 px-5">
					<input
						className="w-full h-full focus:outline-none text-white bg-black/[0]"
						type="text"
						placeholder="비밀번호"
						value={password}
						onChange={(e)=>{setPassword(e.target.value)}}/>
				</div>
			</div>
			<div
				className="w-12 h-12 rounded-full bg-[#FF6000] absolute left-[297px] top-[389px] text-[24px] flex justify-center items-center text-black"
				onClick={handleLogin}
			>
				<AiOutlineRight/>
			</div>
			<div className="w-[185px] h-8 absolute left-[27px] top-[315px]">
				<p className="w-[185px] h-8 absolute left-0 top-0 text-2xl font-light text-left text-white">
					로그인
				</p>
			</div>
			<div className="
				w-[327px] h-[39px] absolute left-[23px] top-[466px] flex justify-end items-center
			">
				<Link className="w-fit h-fit text-[#a0a0a0] hover:text-white text-xs font-light text-right" to={"/register"} >
					아직 회원이 아니신가요?
				</Link>
			</div>
			<div className="w-[327px] h-[39px] absolute left-6 top-[505px]" onClick={()=>{testAuth()}}>
				<p className="w-[327px] h-[39px] absolute left-0 top-0 text-xs font-light text-right text-[#a0a0a0]">
				로그인에 문제가 있으신가요?
				</p>
			</div>
			<div className="w-[238px] h-[58px] absolute left-[68px] top-[178px]">
				<p className="w-[238px] h-[58px] absolute left-0 top-0 text-5xl font-bold text-center text-[#ff6000]">
				Linket
				</p>
			</div>
			<div className="w-[43px] h-[43px] absolute left-60 top-[623px]" />
		</div>
	)
}

export default Login;