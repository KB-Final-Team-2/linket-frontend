import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interface/User";
import { Hire } from "../../interface/Hire";
import { getHire, setHire } from "../../redux/slice/hireSlice";

interface props {
    hire: Hire
}

const HireList = ({ hire }: props) => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch : any= useDispatch();

    const handleHire = () => {
        // dispatch(getHire(hire?.hireId));
        dispatch(setHire(hire));
    }

    return (
        <div
            className="w-[331px] h-[60px] overflow-hidden flex border-b"
            onClick={handleHire}
        >
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-base font-bold text-center text-primary-100-200 flex justify-center items-center">
                {hire.hireId}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-base font-bold text-center text-primary-100-200 flex justify-start items-center px-5">
                {hire?.workName}
            </div>
        </div>
    )
}

export default HireList;