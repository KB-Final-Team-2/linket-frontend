import { AiOutlineNotification, AiOutlinePoweroff } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa"
import { IoMdHappy } from "react-icons/io"
import { MdOutlineChat } from "react-icons/md"
import IndexHeader from "../../components/Header/IndexHeader";
import InfoList from "../../components/List/InfoList";
import NavBar from "../../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSilce";

const Info = () => {
    const dispatch:any = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center flex-grow-0 flex-shrink-0">
            <IndexHeader title="내 정보" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white">
                    <div className="w-[331px] h-[100px] overflow-hidden border-y-2 border-white">
                        <Link to="/info/user">
                            <InfoList title="내 정보">
                                <IoMdHappy />
                            </InfoList>
                        </Link>

                        <InfoList title="리뷰 관리">
                            <MdOutlineChat />
                        </InfoList>
                    </div>
                    <div className="w-[331px] h-[100px] overflow-hidden border-b border-white">
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
                        className="w-[331px] h-[50px] overflow-hidden border-y cursor-pointer"
                        onClick={()=>{handleLogout()}}
                    >
                        <InfoList title="로그아웃">
                            <AiOutlinePoweroff  className="text-red-500"/>
                        </InfoList>
                    </div>
                </div>
            </div>
            <NavBar role="member" state="3" />
        </div>
    )
}

export default Info;