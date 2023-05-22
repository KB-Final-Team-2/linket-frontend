import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import { User } from "../../interface/User";
import { Link, useNavigate } from "react-router-dom";
import { Hire } from "../../interface/Hire";
import { setHire } from "../../redux/slice/hireSlice";

interface props {
    hire: Hire
}

const HireList = ({ hire }: props) => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHire = () => {
        dispatch(setHire(hire));
    }

    return (
        <div
            className="w-[331px] h-[60px] overflow-hidden flex border-b"
            onClick={handleHire}
        >
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-[15px] font-bold text-center text-secondary flex justify-center items-center">
                {hire.hireId}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-[15px] font-bold text-center text-secondary flex justify-start items-center px-5">
                {hire?.workName}
            </div>
        </div>
    )
}

export default HireList;