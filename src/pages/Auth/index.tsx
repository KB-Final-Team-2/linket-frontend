import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DUMMY_MEMBER, DUMMY_PART, DUMMY_STAFF, INIT_USER, User } from "../../interface/User";
import { Link, useNavigate } from "react-router-dom";
import Templete from "../Templete";
import { setUser } from "../../redux/slice/authSilce";
import Button from "../../components/Button/Button";

import logo_origin_dark from "../../img/logo_origin_dark.png";
import team_logo from "../../img/team_logo.png";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const auth = useSelector((state: any) => (state.auth));
	const user = auth?.data;
	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (user !== INIT_USER) navigate(`/${user.role}`)
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

		const userData = userList.filter((el) => el.email === email && el.password === password)[0];
		if (userData !== undefined) {
			dispatch(setUser(userData.user));
			navigate(`/${userData.role}`);
		}
	}

	const testAuth = async () => {
		// console.log(auth);
		// await dispatch(logout());
		// console.log("logout");
	}

	return (
		<Templete >
			<div className=" box-content w-fit h-fit flex flex-col md:bg-background-dark p-10 rounded-3xl items-center gap-5">
				<img src={logo_origin_dark} />
				<div className="w-[292px] h-[106px] ">
					<p className="w-[292px] h-[106px] flex flex-col gap-2">
						<input className="w-full h-fit text-lg font-semibold text-left px-3 py-1 rounded-md" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
						<input className="w-full h-fit text-lg font-semibold text-left  px-3 py-1 rounded-md" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
					</p>
				</div>
				<Button title="Login" type="default" func={handleLogin} />
				<div className="w-full h-fit flex flex-col gap-2">
					<Link to="/register" className="w-full h-fit text-xs font-light text-right text-[#a0a0a0]">
						아직 회원이 아니신가요?
					</Link>
					<div className="w-full h-fit text-xs font-light text-right text-[#a0a0a0]">
						로그인에 문제가 있으신가요?
					</div>
				</div>
			</div>
			<img src={team_logo} className="absolute bottom-32" />
		</Templete>
	)
}

export default Login;