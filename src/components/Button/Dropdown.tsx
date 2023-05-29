import { useState } from "react";
import { FuncListProps } from "../../interface/props";
import { BsThreeDots } from "react-icons/bs";

interface props {
    list: FuncListProps[];
}

const Dropdown = ({ list }: props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" overflow-visible w-fit h-fit relative noselect">
            <BsThreeDots className="w-10 h-10 text-primary" onClick={()=>{setIsOpen(!isOpen)}}/>
            {(isOpen && list.length !== 0) && (
                <div className="z-50 w-[100px] h-fit absolute top-7 -right-2 overflow-hidden rounded-[20px] bg-background-dark border-2 border-white box-content">
                    {list.map((v, i) => (
                        <div
                            key={i}
                            className={`
                            w-full h-9 overflow-hidden text-white text-base flex justify-center items-center cursor-pointer hover:bg-white/30
                            ${i !== 0 && "border-t"}
                        `}
                            onClick={() => { v.func() }}
                        >
                            {v.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;