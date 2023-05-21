import logo from "../../img/logo.png"
import { HiUser } from "react-icons/hi"
import { BiCalendarEvent } from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User } from "../../interface/User";

interface props {
    state: string,
    role: string,
}

const NavBar = (props: props) => {
    const user: User = useSelector((state: any) => state.auth.data);
    const navigate = useNavigate();

    const handleLeft = () => {
        const url = user.role === "part" ? `/part` : `/${user.role}/event`;
        navigate(url);
    }

    const handleRight = () => {
        const url = `/${user.role}/info`;
        navigate(url);
    }


    return (
        <>
            <div className="w-[375px] h-[53px] overflow-hidden bg-[#454545] flex flex-shrink-0">
                <div
                    className={`
                        w-[125px] h-[53px] text-[40px] flex justify-center items-center
                        ${props.state === '1' 
                            ? "bg-[#454545] text-white" 
                            : `bg-[#d9d9d9] text-black ${props.state === '2' && "rounded-tr-[20px]"}`
                        }
                        `}
                    onClick={()=>{handleLeft()}}
                >
                    <BiCalendarEvent />
                </div>
                <div
                    className={`
                        w-[125px] h-[53px] flex justify-center items-center
                        ${props.state === '2'
                            ? "bg-[#454545] text-white"
                            : `bg-[#d9d9d9] ${props.state === '1' ? "rounded-tl-[20px]" : "rounded-tr-[20px]"}`
                        }
                        `}
                    onClick={() => { navigate(`/${props.role}`) }}
                >
                    <img
                        className="w-5 h-10"
                        src={logo}
                    />
                </div>
                <div
                    className={`
                        w-[125px] h-[53px] text-[40px] flex justify-center items-center
                        ${props.state === '3' 
                            ? "bg-[#454545] text-white" 
                            : `bg-[#d9d9d9] text-black ${props.state === '2' && "rounded-tl-[20px]"}`
                        }
                    `}
                    onClick={()=>{handleRight()}}
                >
                    <HiUser />
                </div>
            </div>
        </>
    )
}

export default NavBar;