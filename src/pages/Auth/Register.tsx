import { useState } from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";
import RegisterForm from "./RegisterForm";
import Templete from "../Templete";
import { ListProps } from "../../interface/props";

const RoleList = ({ title, content, func }: ListProps) => {
    return (
        <div
            className="w-[331px] h-[85px] overflow-hidden bg-[#c4c4c4]/[0.31] hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all"
            onClick={() => { func && func(content) }}
        >
            <p className="w-fit h-fit text-2xl font-bold text-center">
                {title}
            </p>
        </div>
    )
}

const Register = () => {
    const [role, setRole] = useState("");
    const roleList: ListProps[] = [
        { title: "일반(Member)", content: "member" },
        { title: "직원(Staff)", content: "staff" },
        { title: "파트타임(Part-time)", content: "part" },
    ];

    return (
        <Templete>
            {role == "" && (
                <>
                    <RegisterHeader />
                    <div className="w-[375px] h-[50px] overflow-hidden text-white">
                        <p className="w-[373px] h-[50px] text-2xl font-bold text-center">
                            계정 유형을 선택해주세요.
                        </p>
                    </div>
                    <div className="flex flex-col w-[375px] h-[662px] overflow-hidden justify-evenly">
                        {roleList.map((v, i) => (<RoleList key={i} title={v.title} content={v.content} func={(role: string) => { setRole(role) }} />))}
                    </div>
                </>
            )}
            {role != "" && (<RegisterForm role={role} init={() => setRole("")} />)}
        </Templete>
    )
};

export default Register;