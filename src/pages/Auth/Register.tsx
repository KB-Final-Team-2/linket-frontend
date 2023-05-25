import { useState } from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";
import RegisterForm from "./RegisterForm";
import Templete from "../Templete";

const Register = () => {
    const [role, setRole] = useState("");

    return (
        <Templete>
            {role == "" && (
                <div className="w-[375px] h-[812px] relative overflow-hidden">
                    <div className="w-[375px] h-[50px] overflow-hidden text-white">
                        <p className="w-[373px] h-[50px] text-2xl font-bold text-center">
                            계정 유형을 선택해주세요.
                        </p>
                    </div>
                    <div className="flex flex-col w-[375px] h-[662px] overflow-hidden">
                        <div
                            className="w-[331px] h-[85px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all"
                            onClick={() => setRole("staff")}
                        >
                            <p className="w-fit h-fit text-2xl font-bold text-center">
                                직원 (Staff)
                            </p>
                        </div>
                        <div
                            className="w-[328px] h-[84px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-primary text-white hover:text-black flex items-center justify-center"
                            onClick={() => setRole("part")}
                        >
                            <p className="w-fit h-fit text-2xl font-bold text-center">
                                파트타임 (Part-time)
                            </p>
                        </div>
                        <div
                            className="w-[328px] h-[84px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-primary text-white hover:text-black flex items-center justify-center"
                            onClick={() => setRole("member")}
                        >
                            <p className="w-fit h-fit text-2xl font-bold text-center ">
                                고객 (Member)
                            </p>
                        </div>
                    </div>
                    <RegisterHeader />
                </div>
            )}
            {role != "" && (<RegisterForm role={role} init={() => setRole("")} />)}
        </Templete>
    )
};

export default Register;