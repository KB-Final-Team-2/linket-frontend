import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../interface/User";
import { BsTools } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { setUpdaateUserModal } from "../../../redux/slice/modalSlice";

interface Info {
    title: string;
    content: string;
}

const WebInfoList = ({ title, content }: Info) => {
    return (
        <div className="w-[260px] h-10 relative overflow-hidden border-b border-black flex items-center text-black font-bold text-base">
            <div className="w-20 h-fit overflow-hidden border-r border-black">
                {title}
            </div>
            <div className="w-[180px] h-fit overflow-hidden">
                {content}
            </div>
        </div>
    )
}

const WebUserButton = () => {
    const [openPage, setOpenPage] = useState(false);
    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch = useDispatch();
    const infoList: Info[] = [
        { title: "이름", content: user.userName },
        { title: "이메일", content: user.email },
        { title: "생년월일", content: user.birthdate },
        { title: "성별", content: user.gender },
        { title: "연락처", content: user.phone },
        { title: "소속", content: `${user?.userCompanyId}` || "" },
    ];


    return (
        <>
            <div className="z-30 h-full w-[70px] relative">
                <div
                    className={`z-30 h-full w-[70px] relative flex flex-shrink-0 justify-center items-center text-5xl overflow-visible ${openPage && "bg-primary-100-200 text-black"}`}
                    onClick={() => { setOpenPage(!openPage) }}
                >
                    <FaRegUserCircle />
                </div>
                {openPage && (
                    <div className="absolute w-[300px] h-[400px] top-[70px] right-0 rounded-tr-none rounded-2xl bg-primary-100-200 flex flex-col justify-start items-center px-5 py-5">
                        {infoList?.map((v, i) => (
                            <WebInfoList title={v.title} content={v.content} />
                        ))}
                        <div>
                            <div
                                className="w-[260px] h-10 border-b border-black cursor-pointer hover:bg-white/20 flex items-center justify-center gap-2 text-black"
                                onClick={()=>{dispatch(setUpdaateUserModal())}}
                            >
                                <BsTools className="w-5 h-5" />
                                <div className="w-fit h-fit inline align-middle overflow-hidden text-base font-bold ">
                                    회원정보 수정
                                </div>
                            </div>
                            <div
                                className="w-[260px] h-10 border-b border-black cursor-pointer hover:bg-white/20 flex items-center justify-center gap-2 text-black"
                                onClick={()=>{}}
                            >
                                <AiOutlinePoweroff className="w-5 h-5 text-red-500" />
                                <div className="w-fit h-fit inline align-middle overflow-hidden text-base font-bold">
                                    로그아웃
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WebUserButton;