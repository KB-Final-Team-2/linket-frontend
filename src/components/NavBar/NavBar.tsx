import logo from "../../img/logo.png"
import { HiUser } from "react-icons/hi"
import { BiCalendarEvent } from "react-icons/bi"

interface props {
    state: string
}

const NavBar = ({ state }: props) => {
    return (
        <>
            {state == '1' && (
                <div className="w-[375px] h-[53px] overflow-hidden bg-[#454545] flex flex-shrink-0">
                    <div className="w-[125px] h-[53px] bg-[#454545] text-[40px] text-white flex justify-center items-center">
                        <BiCalendarEvent />
                    </div>
                    <div className="w-[125px] h-[53px] rounded-tl-[20px] bg-[#d9d9d9] flex justify-center items-center">
                        <img
                            className="w-5 h-10"
                            src={logo}
                        />
                    </div>
                    <div className="w-[125px] h-[53px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center">
                        <HiUser />
                    </div>
                </div>
            )}
            {state == '2' && (
                <div className="w-[375px] h-[53px] overflow-hidden bg-[#454545] flex flex-shrink-0">
                    <div className="w-[125px] h-[53px] rounded-tr-[20px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center">
                        <BiCalendarEvent />
                    </div>
                    <div className="w-[125px] h-[53px] bg-[#454545] flex justify-center items-center">
                        <img
                            className="w-5 h-10"
                            src={logo}
                        />
                    </div>
                    <div className="w-[125px] h-[53px] rounded-tl-[20px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center">
                        <HiUser />
                    </div>
                </div>
            )}
            {state == '3' && (
                <div className="w-[375px] h-[53px] overflow-hidden b flex flex-shrink-0">
                    <div className="w-[125px] h-[53px] bg-[#d9d9d9] text-[40px] text-black flex justify-center items-center">
                        <BiCalendarEvent />
                    </div>
                    <div className="w-[125px] h-[53px] bg-[#d9d9d9] flex justify-center items-center rounded-tr-[20px]">
                        <img
                            className="w-5 h-10"
                            src={logo}
                        />
                    </div>
                    <div className="w-[125px] h-[53px] rounded-tl-[20px] bg-[#454545] text-[40px] text-white flex justify-center items-center">
                        <HiUser />
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar;