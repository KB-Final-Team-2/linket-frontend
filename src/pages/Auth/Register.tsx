import { useState } from "react";
import MemberRegister from "./MemberRegiser";
import StaffRegister from "./StaffRegiser";
import logoImg from "../../img/logo_icon.png";
import PartTimeRegister from "./PartTimeRegiser";
import RegisterHeader from "../../components/Header/RegisterHeader";

const Register = () => {
    const [role, setRole] = useState("");

    return(
        <>
        {role==""&&(
            <div className="w-[375px] h-[812px] relative overflow-hidden bg-[#454545]">
                <div className="flex flex-col w-[375px] h-[662px] absolute left-0 top-[150px] overflow-hidden">
                    <div
                        className="w-[331px] h-[85px] absolute left-6 top-[225px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-red-400 text-white hover:text-black flex items-center justify-center"
                        onClick={()=>setRole("staff")}
                    >
                        <p className="w-fit h-fit text-2xl font-bold text-center">
                            직원 (Staff)
                        </p>
                    </div>
                    <div
                        className="w-[328px] h-[84px] absolute left-[23px] top-[375px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-red-400 text-white hover:text-black flex items-center justify-center"
                        onClick={()=>setRole("part")}
                    >
                        <p className="w-fit h-fit left-0 top-0 text-2xl font-bold text-center">
                            파트타임 (Part-time)
                        </p>
                    </div>
                    <div
                        className="w-[328px] h-[84px] absolute left-6 top-[75px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-red-400 text-white hover:text-black flex items-center justify-center"
                        onClick={()=>setRole("member")}
                    >
                        <p className="w-fit h-fit left-0 top-0 text-2xl font-bold text-center ">
                            고객 (Member)
                        </p>
                    </div>
                    <div className="w-[375px] h-[50px] absolute left-0 top-0 overflow-hidden text-white hover:text-black">
                        <p className="w-[373px] h-[50px] absolute left-0 top-0 text-2xl font-bold text-center">
                            계정 유형을 선택해주세요.
                        </p>
                    </div>
                </div>
                <RegisterHeader />
            </div>
        )}
        {role=="member"&&(<MemberRegister />)}
        {role=="staff"&&(<StaffRegister />)}
        {role=="part"&&(<PartTimeRegister />)}
        </>
    )
};

export default Register;