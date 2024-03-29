import { useState } from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import SelectButton from "../../components/Button/SelectButton";
import { RegistUser } from "../../interface/User";
import { register } from "../../redux/slice/authSilce";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import logo_shadow from "../../img/logo_shadow.png"
import BigButton from "../../components/Button/BigButton";

interface props {
    role: string,
    init: Function
}

interface listProps {
    title: string;
    data: string;
    setFunc: Function;
}

const RegistList = ({ title, data, setFunc }: listProps) => {
    return (
        <div className="w-full h-fit overflow-hidden flex flex-col text-base font-bold text-center text-white">
            <div className="w-full h-fit flex-shrink-0 text-start px-4 py-1">
                {title}
            </div>
            <input
                type="text"
                className="
                    w-full h-[30px] rounded-[9px] bg-[#c4c4c4]/[0.31] font-bold 
                    focus:outline-none focus:bg-[#c4c4c4]/[0.80] focus:caret-black/[0]
                "
                onChange={(e) => { setFunc(e.target.value) }}
                value={data}
            />
        </div>
    )
}

const RegisterForm = (props: props) => {
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [userName, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("1990-01-01");
    const [isOk, setIsOk] = useState(false);
    const [viewInfo, setViewInfo] = useState(false);

    const auth = useSelector((state: any) => state.auth?.data);
    const dispatch: any = useDispatch();

    const navigate = useNavigate();

    const handleRegist = () => {
        const registData: RegistUser = { email, password, userName, phone, gender, birthdate, role: props.role, companyId };
        console.log(registData);
        dispatch(register(registData))
            .then(unwrapResult)
            .then(() => {
                setIsOk(true);
            }).catch((err: Error) => {
                alert(err.message);
            })
    }

    return (
        <>
            <RegisterHeader />
            <div className="w-[375px] h-[540px] overflow-hidden flex flex-col">
                {isOk
                    ?
                    <>
                        <div className="w-full h-full overflow-hidden flex flex-col gap-16 place-content-center">
                            <img src={logo_shadow}/>
                            <p className="w-full h-fit flex flex-col justify-center items-center text-2xl">
                                회원 가입이 완료되었습니다.<br />
                                가입한 계정으로 로그인하시기 바랍니다.
                            </p>
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <BigButton title="LINKET 시작하기" type="default" func={() => { navigate("/") }} />
                        </div>
                    </>
                    :
                    <>
                        <div className="w-full h-fit text-2xl font-bold text-center text-white">
                            {props.role} 회원가입을 진행합니다.<br />
                            회원정보를 입력해주세요.
                        </div>
                        <div className="w-full h-full overflow-hidden bg-background-dark flex flex-col justify-between items-start py-10 px-10 rounded-2xl">
                            {viewInfo
                                ?
                                <>
                                    <RegistList title="이름" data={userName} setFunc={(data: string) => { setName(data) }} />
                                    <div className="w-full h-fit overflow-hidden flex flex-col text-base font-bold text-center text-white">
                                        <div className="w-full flex-shrink-0 text-start px-4 py-1">
                                            생년월일
                                        </div>
                                        <input type="date" value={birthdate} onChange={(e) => { setBirthdate(e.target.value) }} />
                                    </div>
                                    <div className="w-full h-fit overflow-hidden flex text-base font-bold text-center text-white">
                                        <div className="w-fit px-4 py-1 flex-shrink-0">
                                            성별
                                        </div>
                                        <div className="w-full h-[37px] relative flex justify-evenly overflow-hidden">
                                            <SelectButton title="Man" func={() => setGender("M")} state={gender == "M"} />
                                            <SelectButton title="Woman" func={() => setGender("W")} state={gender == "W"} />
                                        </div>
                                    </div>
                                    <RegistList title="연락처" data={phone} setFunc={(data: string) => { setPhone(data) }} />
                                    {props.role == "staff" && (<RegistList title="기업 코드" data={companyId} setFunc={(data: string) => { setCompanyId(data) }} />)}
                                </>
                                :
                                <>
                                    <RegistList title="email" data={email} setFunc={(data: string) => { setEmail(data) }} />
                                    <div
                                        className=" w-full h-[30px] bg-black/30 hover:bg-white/10 border border-primary-100 rounded-sm flex justify-center items-center text-sm"
                                    >
                                        email 인증
                                    </div>
                                    <RegistList title="email 확인" data={emailCode} setFunc={(data: string) => { setEmailCode(data) }} />
                                    <div className=" w-full h-[30px] bg-black/30 hover:bg-white/10 border border-primary-100 rounded-sm flex justify-center items-center text-sm">코드 인증</div>
                                    <RegistList title="비밀번호" data={password} setFunc={(data: string) => { setPassword(data) }} />
                                    <RegistList title="비밀번호 확인" data={passwordCheck} setFunc={(data: string) => { setPasswordCheck(data) }} />
                                </>
                            }
                            <div className="w-full h-10 overflow-hidden flex justify-center items-center gap-10">
                                <Button title={viewInfo ? "회원가입" : "다음"} func={viewInfo ? () => { handleRegist() } : () => { setViewInfo(true) }} type="default" />
                                <Button title="뒤로 가기" func={viewInfo ? () => { setViewInfo(false) } : props.init} type="default" />
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default RegisterForm;