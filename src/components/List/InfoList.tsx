import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EnumType } from "typescript";

interface props {
    title: string,
    children: any,
}


const InfoList = ({ title, children }: props) => {
    return (
        <div
            className="w-full h-[50px] overflow-hidden border-b border-white flex"
        >
            <div className="w-[50px] h-[50px] flex flex-shrink-0 items-center justify-center text-2xl">
                {children}
            </div>
            <div className="w-[278px] h-[50px] overflow-hidden flex flex-shrink-0 items-center justify-start text-md font-bold text-left text-white px-5">
                {title}
            </div>
        </div>)
}

export default InfoList;