import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Templete = ({children} : any) => {
    const user = useSelector((state:any)=>state.auth.data);
    const navigate = useNavigate();

    return (
        <div className="w-full h-full relative overflow-hidden templete flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default Templete;