import { AiOutlineNotification, AiOutlinePoweroff } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa"
import { IoMdHappy } from "react-icons/io"
import { MdOutlineChat } from "react-icons/md"
import IndexHeader from "../../components/Header/IndexHeader";
import InfoList from "../../components/List/InfoList";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const Info = () => {
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <IndexHeader title="내 정보" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white">
                    <div className="w-[331px] h-[100px] overflow-hidden border-b border-white">
                        <InfoList title="FAQ">
                            <FaRegCommentDots />
                        </InfoList>
                        <InfoList title="공지사항">
                            <AiOutlineNotification />
                        </InfoList>
                    </div>
                    <div className="w-[331px] h-[100px] overflow-hidden border-y-2 border-white">
                        <Link to="/staff/info/userinfo">
                            <InfoList title="내 정보">
                                <IoMdHappy />
                            </InfoList>
                        </Link>
                        <InfoList title="리뷰 관리">
                            <MdOutlineChat />
                        </InfoList>
                    </div>
                    <div className="w-[331px] h-[50px] overflow-hidden border-y">
                        <InfoList title="리뷰 관리">
                            <AiOutlinePoweroff />
                        </InfoList>
                    </div>
                </div>
            </div>
            <NavBar role="staff" state="3" />
        </div>
    )
}

export default Info;