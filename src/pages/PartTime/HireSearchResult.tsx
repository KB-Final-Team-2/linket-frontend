import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { User } from "../../interface/User";
import { Link } from "react-router-dom";
import { setHire } from "../../redux/slice/hireSlice";
import Templete from "../Templete";
import HireSearchDetail from "./HireSearchDetail";
import { CgSpinner } from "react-icons/cg";

interface props {
    hire: Hire;
    idx: number;
    func?: Function;
}

const HireList = ({ hire, idx, func }: props) => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHire = (hire: Hire) => {
        dispatch(setHire(hire));
    }

    return (

        <div
            className="w-full h-[60px] overflow-hidden flex border-b"
            onClick={() => { handleHire(hire) }}
        >
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-[15px] font-bold text-center text-secondary flex justify-center items-center">
                {idx + 1}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-[15px] font-bold text-center text-secondary flex justify-start items-center px-5">
                {hire.workName}
            </div>
        </div>
    )
}

const HireSearchResult = () => {
    const navigate = useNavigate();

    const hire = useSelector((state: any) => state.hire);
    const hireData: Hire = hire?.data;
    const hireList: Hire[] = hire?.list;

    return (
        <Templete>
            <div className="w-[375px] h-[812px] overflow-hidden flex flex-col justify-center items-center">
                {hireData.hireId === -1
                    ?

                    <>
                        <Header title="공고 검색 결과" />
                        <div className="w-[331px] h-full">
                            <div className="w-[331px] h-[580px] overflow-hidden border-y py-5">
                                <div className="w-[331px] h-10 bg-background-light/30 rounded-lg shrink-0 mb-2 " />
                                <div className="w-[331px] h-[465px] overflow-auto flex flex-col">
                                    {hire?.loading
                                        ?
                                        <CgSpinner className="text-3xl animate-spin m-auto" />
                                        :
                                        <>
                                            {hireList.map((hire, i) => (<HireList key={i} idx={i} hire={hire} />))}
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <HireSearchDetail />
                }
                <NavBar role="member" state="1" />
            </div>
        </Templete>
    )
}

export default HireSearchResult;