import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Hire } from "../../interface/Hire";
import { User } from "../../interface/User";
import { Link } from "react-router-dom";
import { setHire } from "../../redux/slice/hireSlice";

interface props {
    hire: Hire;
    idx: number;
    func?: Function;
}

const HireList = ({ hire, idx, func }: props) => {
    const user: User = useSelector((state: any) => state.auth.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHire = (hire: Hire) => {
        dispatch(setHire(hire));
        navigate(`/part/search/${hire.hireId}`);
    }

    return (
        <div
            className="w-[331px] h-[60px] overflow-hidden flex border-b"
            onClick={() => { handleHire(hire) }}
        >
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-[15px] font-bold text-center text-secondary flex justify-center items-center">
                {idx + 1}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-[15px] font-bold text-center text-secondary flex justify-start items-center px-5">
                {hire.hireName}
            </div>
        </div>
    )
}

const HireSearchResult = () => {
    const navigate = useNavigate();

    const hireList: Hire[] = useSelector((state: any) => state.hire.hireList);

    return (
        <div className="w-[375px] h-[812px] overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="공고 검색 결과" />

            <div className="w-[331px] h-full">
                <div className="w-[330px] h-[580px] overflow-hidden border-t border-b">
                    <div className="w-[330px] h-10 bg-background-light/30 rounded-lg shrink-0 mb-2 " />

                    <div className="w-[330px] h-[465px] left-0 top-[115px] overflow-hidden">
                        {hireList.map((hire, i) => (<HireList key={i} idx={i} hire={hire} />))}
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}
export default HireSearchResult;