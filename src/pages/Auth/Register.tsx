import { useState } from "react";
import RegisterHeader from "../../components/Header/RegisterHeader";
import RegisterForm from "./RegisterForm";
import Templete from "../Templete";
import { ListProps } from "../../interface/props";
import Content from "../Templete/Content";

const RoleList = ({ title, content, func }: ListProps) => {
    return (
        <div
            className="
            w-full h-[85px] overflow-hidden flex items-center justify-center transition-all duration-100 cursor-pointer
            bg-[#c4c4c4]/[0.31] hover:bg-primary-100 text-white hover:text-black
             rounded-tl-[30px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[10px] shadow-md shadow-white hover:shadow-primary-300
            "
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
                    <div className="w-[375px] h-[540px] overflow-hidden flex flex-col">
                        <div className="w-full h-full flex flex-col py-4 gap-4">
                            <div className="w-full h-fit overflow-hidden text-white text-2xl font-bold text-place-center">
                                LINKET에 오신 것을 환영합니다!<br />
                                계정 유형을 선택해주세요.
                            </div>
                            <div className="flex flex-col w-full h-full overflow-hidden justify-evenly bg-background-dark rounded-2xl px-2">
                                {roleList?.map((v, i) => (<RoleList key={i} title={v.title} content={v.content} func={(role: string) => { setRole(role) }} />))}
                            </div>
                        </div>
                    </div>
                </>
            )}
            {role != "" && (<RegisterForm role={role} init={() => setRole("")} />)}
        </Templete>
    )
};

export default Register;