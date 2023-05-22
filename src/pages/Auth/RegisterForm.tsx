import { useState } from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from "../../components/Button/Button";
import SelectButton from "../../components/Button/SelectButton";
import { RegistUser, User } from "../../interface/User";
import { register } from "../../redux/slice/authSilce";
import { useNavigate } from "react-router-dom";

interface props {
    role: string,
    init: Function
}

const RegisterForm = (props: props) => {
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [duplicate, setDuplicate] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [userName, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [gender, setGender] = useState("");

    const auth = useSelector((state:any)=> state.auth?.data);
    const dispatch : any = useDispatch();

    const navigate = useNavigate();

    const sendData = () => {
        const registData : RegistUser = {email, password, userName, phone, gender, birthDate:"12345678", role:props.role, companyId};
        dispatch(register(registData));
    }

    return(
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
            <svg
                width={375}
                height={812}
                viewBox="0 0 375 812"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[375px] h-[812px] absolute left-0 top-0"
                preserveAspectRatio="none"
            >
                <path d="M0 0H375V812H0V0Z" fill="#454545" />
            </svg>
            <div className="w-[375px] h-[662px] absolute left-0 top-[150px] overflow-hidden">
                <div className="w-[375px] h-[50px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[373px] h-[50px] absolute left-0 top-0 text-2xl font-bold text-center text-white">
                        회원정보를 입력해주세요.
                    </p>
                </div>
                <div className="w-[375px] h-[532px] absolute left-0 top-[50px] overflow-hidden">
                    <div className="w-[331px] h-[37px] absolute left-[23px] top-[25px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            email
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                            onChange={(e)=>{setEmail(e.target.value)}}
                            value={email}
                        />
                    </div>
                    <div className="w-[331px] h-[37px] absolute left-[23px] top-[76px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            email 인증
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                            onChange={(e)=>{setEmailCode(e.target.value)}}
                            value={emailCode}
                        />
                    </div>
                    <div className="w-[331px] h-[37px] absolute left-[23px] top-[127px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            비밀번호
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                        />
                    </div>
                    <div className="w-[331px] h-[37px] absolute left-[23px] top-[178px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            비밀번호 확인
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                            onChange={(e)=>{setPasswordCheck(e.target.value)}}
                            value={passwordCheck}
                        />
                    </div>
                    <div className="w-[331px] h-[37px] absolute left-[23px] top-[229px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            이름
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                            onChange={(e)=>{setName(e.target.value)}}
                            value={userName}
                        />
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[280px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                        생년월일
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[20px]">
                            <div className="w-[71px] h-[37px] absolute left-36 top-0 overflow-hidden bg-[#c4c4c4]/[0.31]">
                                <p className="w-[71px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                01.
                                </p>
                            </div>
                            <div className="w-[71px] h-[37px] absolute left-[72px] top-0 overflow-hidden bg-[#c4c4c4]/[0.31]">
                                <p className="w-[71px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                01.
                                </p>
                            </div>
                            <div className="w-[71px] h-[37px] absolute left-0 top-0 overflow-hidden bg-[#c4c4c4]/[0.31]">
                                <p className="w-[71px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                2023.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[331px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                        성별
                        </p>
                        <div className="w-[215px] h-[37px] relative flex justify-between px-5 left-[115px] top-0 overflow-hidden">
                            {/* <div className="w-[70px] h-[30px] absolute left-[120px] top-1 overflow-hidden rounded-[15px] bg-secondary">
                                <p className="w-20 h-10 absolute left-[-5px] top-[-5px] text-[15px] font-bold text-center text-black">
                                Woman
                                </p>
                            </div> */}
                            <SelectButton title="Man" func={()=>setGender("M")} state={gender=="M"} />
                            <SelectButton title="Woman" func={()=>setGender("W")} state={gender=="W"}/>
                        </div>
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[382px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                        연락처
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                            onChange={(e)=>{setPhone(e.target.value)}}
                            value={phone}
                        />
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[433px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                        개인정보동의
                        </p>
                        <input
                            type="text"
                            className="
                                w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                            "
                        />
                    </div>
                    {props.role=="staff"&&(
                        <div className="w-[330px] h-[37px] absolute left-[23px] top-[484px] overflow-hidden">
                            <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                기업 코드
                            </p>
                            <input
                                type="text"
                                className="
                                    w-[215px] h-[37px] absolute left-[115px] top-0 rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e)=>{setCompanyId(e.target.value)}}
                                value={companyId}
                            />
                        </div>
                    )}
                </div>
                <div className="w-full h-20 relative left-0 top-[582px] overflow-hidden flex justify-between items-center px-16">
                    <Button title="회원가입" func={()=>{navigate("/")}} type="default"/>
                    <Button title="뒤로 가기" func={props.init} type="default"/>
                </div>
            </div>
            <RegisterHeader />
        </div>
    )
}

export default RegisterForm;