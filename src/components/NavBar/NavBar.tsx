import logo from "../../img/logo.png"
import { HiUser } from "react-icons/hi"
import { BiCalendarEvent } from "react-icons/bi"
import { useNavigate } from "react-router-dom";

interface props {
    state: string,
    role: string,
}

const NavBar = (props: props) => {
    const navigate = useNavigate();
    return (
        <>
            {props.state == '1' && (
                <div className="w-[375px] h-[53px] overflow-hidden bg-[#454545] flex flex-shrink-0">
                    <div
                        className="w-[125px] h-[53px] bg-[#454545] text-[40px] text-white flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}/event`) }}
                    >
                        <BiCalendarEvent />
                    </div>
                    <div
                        className="w-[125px] h-[53px] rounded-tl-[20px] bg-[#d9d9d9] flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}`) }}
                    >
                        <img
                            className="w-5 h-10"
                            src={logo}
                        />
                    </div>
                    <div
                        className="w-[125px] h-[53px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}/info`) }}
                    >
                        <HiUser />
                    </div>
                </div>
            )}
            {props.state == '2' && (
                <div className="w-[375px] h-[53px] overflow-hidden bg-[#454545] flex flex-shrink-0">
                    <div
                        className="w-[125px] h-[53px] rounded-tr-[20px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}/event`) }}
                    >
                        <BiCalendarEvent />
                    </div>
                    <div
                        className="w-[125px] h-[53px] bg-[#454545] flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}`) }}
                    >
                        <img
                            className="w-5 h-10"
                            src={logo}
                        />
                    </div>
                    <div
                        className="w-[125px] h-[53px] rounded-tl-[20px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}/info`) }}
                    >
                        <HiUser />
                    </div>
                </div>
            )}
            {props.state == '3' && (
                <div className="w-[375px] h-[53px] overflow-hidden b flex flex-shrink-0">
                    <div
                        className="w-[125px] h-[53px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}/event`) }}
                    >
                        <BiCalendarEvent />
                    </div>
                    <div
                        className="w-[125px] h-[53px] bg-[#d9d9d9] flex justify-center items-center rounded-tr-[20px]"
                        onClick={() => { navigate(`/${props.role}`) }}
                    >
                        <img
                            className="w-5 h-10"
                            src={logo}
                        />
                    </div>
                    <div
                        className="w-[125px] h-[53px] rounded-tl-[20px] bg-[#454545] text-[40px] text-white flex justify-center items-center"
                        onClick={() => { navigate(`/${props.role}/info`) }}
                    >
                        <HiUser />
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar;