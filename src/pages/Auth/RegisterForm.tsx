import { useEffect, useState } from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Button from "../../components/Button/Button";
import SelectButton from "../../components/Button/SelectButton";
import { RegistUser, User } from "../../interface/User";
import { checkDuplicate, register } from "../../redux/slice/authSilce";
import { useNavigate } from "react-router-dom";
import Templete from "../Templete";
import { unwrapResult } from "@reduxjs/toolkit";
import DatePicker from "../../components/Input/DatePicker";
import RegistInput from "../../components/Input/RegisterInput";

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
    const [birthDate, setBirthDate] = useState(new Date());

    const auth = useSelector((state: any) => state.auth?.data);
    const dispatch: any = useDispatch();

    const navigate = useNavigate();

    const sendData = () => {
        const registData: RegistUser = { email, password, userName, phone, gender, birthDate: "12345678", role: props.role, companyId };
        dispatch(register(registData));
    }

    useEffect(() => {
        if (email !== "") {
            dispatch(checkDuplicate(email))
                .then(unwrapResult)
                .then((res: any) => {
                    console.log(res);
                })
        }
    }, [email])

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden">
                <RegisterHeader />
                <div className="w-[375px] h-[662px] overflow-hidden">
                    <div className="w-[375px] h-[50px] overflow-hidden">
                        <p className="w-[373px] h-[50px] text-2xl font-bold text-center text-white">
                            회원정보를 입력해주세요.
                        </p>
                    </div>
                    <div className="w-[375px] h-[532px] overflow-hidden bg-background-dark flex flex-col justify-between items-start py-10 px-5 rounded-2xl">
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className="w-24 flex-shrink-0">
                                email
                            </div>
                            <input
                                type="text"
                                className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                            />
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className="w-24 flex-shrink-0">
                                email 확인
                            </div>
                            <input
                                type="text"
                                className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e) => { setEmailCode(e.target.value) }}
                                value={email}
                            />
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className=" w-24 flex-shrink-0">
                                비밀번호
                            </div>
                            <input
                                type="text"
                                className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e) => { setPassword(e.target.value) }}
                                value={email}
                            />
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className=" w-24 flex-shrink-0">
                                비밀번호 확인
                            </div>
                            <input
                                type="text"
                                className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e) => { setPasswordCheck(e.target.value) }}
                                value={email}
                            />
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className=" w-24 flex-shrink-0">
                                이름
                            </div>
                            <input
                                type="text"
                                className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e) => { setName(e.target.value) }}
                                value={email}
                            />
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className=" w-24 flex-shrink-0">
                                생년월일
                            </div>
                            <DatePicker title={""} date={birthDate} setDate={(date: Date) => { setBirthDate(date) }} />
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className=" w-24 flex-shrink-0">
                                성별
                            </div>
                            <div className="w-full h-[37px] relative flex justify-between px-5 overflow-hidden">
                                <SelectButton title="Man" func={() => setGender("M")} state={gender == "M"} />
                                <SelectButton title="Woman" func={() => setGender("W")} state={gender == "W"} />
                            </div>
                        </div>
                        <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                            <div className=" w-24 flex-shrink-0">
                                연락처
                            </div>
                            <input
                                type="text"
                                className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                onChange={(e) => { setPhone(e.target.value) }}
                                value={phone}
                            />
                        </div>
                        {props.role == "staff" && (
                            <div className="w-[331px] h-[37px] overflow-hidden flex text-[15px] font-bold text-center text-white">
                                <div className=" w-24 flex-shrink-0">
                                    기업 코드
                                </div>
                                <input
                                    type="text"
                                    className="
                                    w-full h-[37px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold text-center
                                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                                "
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    value={phone}
                                />
                            </div>
                        )}
                    <div className="w-full h-10 overflow-hidden flex justify-center items-center gap-10">
                        <Button title="회원가입" func={() => { navigate("/") }} type="default" />
                        <Button title="뒤로 가기" func={props.init} type="default" />
                    </div>
                </div>
            </div>
        </div>
        </Templete >
    )
}

export default RegisterForm;