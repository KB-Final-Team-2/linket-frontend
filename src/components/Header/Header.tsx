import { BiDotsVertical } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

interface props {
    title: string,
    func?: Function
}

const Header = (props: props) => {

    const navigate = useNavigate();
    return (
        <div className="w-full h-[125px] flex flex-col justify-center items-center">
            <div className="w-[331px] h-[30px] overflow-hidden" />
            <div className="w-[331px] h-[95px] overflow-hidden flex items-center px-5 gap-5 text-[30px]">
                <div
                    className="w-10 h-10 rounded-md bg-background-light/30 flex flex-shrink-0 justify-center items-center"
                    onClick={()=>{props.func ? props.func() : navigate(-1)}}
                >
                    <BsArrowLeft />
                </div>
                <p className="w-full h-[95px] text-2xl text-center text-white flex justify-center items-center">
                    {props.title}
                </p>
                <BiDotsVertical className="w-10 h-10 text-primary" />
            </div>
        </div>
    )
}

export default Header;