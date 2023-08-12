import { AiOutlineNotification, AiOutlinePoweroff } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa"
import { IoMdHappy } from "react-icons/io"
import { MdOutlineChat } from "react-icons/md"
import IndexHeader from "../../components/Header/IndexHeader";
import InfoList from "../../components/List/InfoList";
import NavBar from "../../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSilce";
import Templete from "../Templete";
import { initAttend } from "../../redux/slice/attendSlice";
import { initHire } from "../../redux/slice/hireSlice";
import { initEvent } from "../../redux/slice/eventSlice";
import { initReview } from "../../redux/slice/reviewSlice";
import { initTicket } from "../../redux/slice/ticketSlice";
import { User } from "../../interface/User";
import { unwrapResult } from "@reduxjs/toolkit";
import Content from "../Templete/Content";

const Info = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const user: User = useSelector((state: any) => state.auth?.data);
    const handleLogout = () => {
        dispatch(logout())
            .then(unwrapResult)
            .then(() => {
                dispatch(initAttend());
                dispatch(initHire());
                dispatch(initEvent());
                dispatch(initReview());
                dispatch(initTicket());
                navigate("/login");
            })
    }

    return (
        <Templete>
            <IndexHeader title="내 정보" />
            <Content>
                <div className="w-full h-fit overflow-hidden border-y-2 border-white">
                    <Link to="/info/user">
                        <InfoList title="내 정보">
                            <IoMdHappy />
                        </InfoList>
                    </Link>

                    {user?.role === "member" &&
                        <Link to="/info/review">
                            <InfoList title="리뷰 관리">
                                <MdOutlineChat />
                            </InfoList>
                        </Link>
                    }
                </div>
                <div className="w-full h-fit overflow-hidden border-b border-white">
                    <Link to="/info/FAQ">
                        <InfoList title="FAQ">
                            <FaRegCommentDots />
                        </InfoList>
                    </Link>

                    <Link to="/info/notice">
                        <InfoList title="공지사항">
                            <AiOutlineNotification />
                        </InfoList>
                    </Link>
                </div>
                <div
                    className="w-full h-fit overflow-hidden border-y cursor-pointer"
                    onClick={() => { handleLogout() }}
                >
                    <InfoList title="로그아웃">
                        <AiOutlinePoweroff className="text-red-500" />
                    </InfoList>
                </div>
            </Content>
            <NavBar role="member" state="3" />
        </Templete>
    )
}

export default Info;