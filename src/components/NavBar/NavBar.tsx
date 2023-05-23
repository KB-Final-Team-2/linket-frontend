import logo from "../../img/logo.png"
import { HiUser } from "react-icons/hi"
import { BiCalendarEvent } from "react-icons/bi"
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interface/User";
import { initAttend } from "../../redux/slice/attendSlice";
import { initHire } from "../../redux/slice/hireSlice";
import { initEvent } from "../../redux/slice/eventSlice";
import { initReview } from "../../redux/slice/reviewSlice";
import { initTicket } from "../../redux/slice/ticketSlice";

interface props {
    state: string,
    role: string,
}


const NavBar = (props: props) => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleInit = () => {
        dispatch(initAttend());
		dispatch(initHire());
		dispatch(initEvent());
		dispatch(initReview());
		dispatch(initTicket());
    }

    const handleLeft = () => {
        const url = `/${user.role}`;
        if(location.pathname !== url) handleInit();
        navigate(url);
    }

    const handleRight = () => {
        const url = `/info`;
        navigate(url);
    }


    return (
        <>
            <div
                className="w-[375px] h-[53px] overflow-hidden bg-none flex flex-shrink-0"
            >
                <div
                    className={`
                        w-[125px] h-[53px] text-[40px] flex justify-center items-center
                        ${props.state === '1' 
                            ? "bg-none text-white" 
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
                            ? "bg-none text-white"
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
                            ? "bg-none text-white" 
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