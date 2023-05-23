import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { DUMMY_MEMBER, DUMMY_PART, DUMMY_STAFF, INIT_USER, User } from "../../interface/User";
import { Link, useNavigate } from "react-router-dom";
import Templete from "../Templete";
import { setUser } from "../../redux/slice/authSilce";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = useSelector((state: any) => (state.auth));
	const user = auth?.data;
	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	useEffect(()=>{
		if(user!==INIT_USER) navigate(`/${user.role}`)
	}, [user])

	const handleLogin = () => {
		// axios.post("/api/auth/login",{email, password})
		// .then((res)=>{
		// 	const user : User = res.data;
		// 	dispatch(setUser(user));
		// 	navigate(`/${user.role}`);
		// }).catch((err)=>{
		// 	console.log(err)
		// })
        const staff = {
            email: "staff",
            password: "1234",
            role: "staff",
            user: DUMMY_STAFF,
        };

        const member = {
            email: "member",
            password: "1234",
            role: "member",
            user: DUMMY_MEMBER,
        }

        const part = {
            email: "part",
            password: "1234",
            role: "part",
            user: DUMMY_PART,
        }

        const userList = [staff, member, part];

        const userData = userList.filter((el)=>el.email===email&&el.password===password)[0].user;
		dispatch(setUser(userData));
		navigate(`/${userData.role}`);
	}

	const testAuth = async () => {
		// console.log(auth);
		// await dispatch(logout());
		// console.log("logout");
	}

	return (
		<Templete >
			<div className="w-[375px] h-[812px] relative overflow-hidden">
				<div className="w-[327px] h-[106px] relative left-6 top-[360px] rounded bg-[#c4c4c4]/[0.31] overflow-hidden px-3">
					<div className="w-full h-1/2 px-5">
						<input
							className="w-full h-full text-white bg-black/[0]"
							type="text"
							placeholder="이메일"
							value={email}
							onChange={(e) => { setEmail(e.target.value) }} />
					</div>
					<div className="w-[250px] h-[1px] bg-white" />
					<div className="w-full h-1/2 px-5">
						<input
							className="w-full h-full focus:outline-none text-white bg-black/[0]"
							type="text"
							placeholder="비밀번호"
							value={password}
							onChange={(e) => { setPassword(e.target.value) }} />
					</div>
				</div>
				<div
					className="w-12 h-12 rounded-full bg-primary absolute left-[297px] top-[389px] text-[24px] flex justify-center items-center text-black"
					onClick={handleLogin}
				>
					{!auth.loading && (<AiOutlineRight />)}
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
				<div className="w-[327px] h-[39px] absolute left-6 top-[505px]" onClick={() => { testAuth() }}>
					<p className="w-[327px] h-[39px] absolute left-0 top-0 text-xs font-light text-right text-[#a0a0a0]">
						로그인에 문제가 있으신가요?
					</p>
				</div>
				<div className="w-[238px] h-[58px] absolute left-[68px] top-[178px]">
					<p className="w-[238px] h-[58px] absolute left-0 top-0 text-5xl font-bold text-center text-primary">
						Linket
					</p>
				</div>
				<div className="w-[43px] h-[43px] absolute left-60 top-[623px]" />
			</div>
		</Templete>
	)
}

export default Login;