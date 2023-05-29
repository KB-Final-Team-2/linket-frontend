import { BsArrowLeft, BsThreeDots } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { FuncListProps } from "../../interface/props";
import Dropdown from "../Button/Dropdown";

interface props {
    title: string,
    func?: Function,
    list? : FuncListProps[];
}

const Header = ({title, func, list}: props) => {

    const navigate = useNavigate();
    return (
        <div className="w-full h-[125px] flex flex-col justify-center items-center">
            <div className="w-[331px] h-[30px] overflow-hidden" />
            <div className="w-[331px] h-[95px] overflow-visible flex items-center px-5 gap-5 text-[30px]">
                <div
                    className="w-10 h-10 rounded-md bg-background-light/30 flex flex-shrink-0 justify-center items-center"
                    onClick={()=>{func===undefined ? navigate(-1) :func()}}
                >
                    <BsArrowLeft />
                </div>
                <p className="w-full h-[95px] text-2xl text-center text-white flex justify-center items-center">
                    {title}
                </p>
                <Dropdown list={list || []}/>
            </div>
        </div>
    )
}

export default Header;