import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Hire } from "../../interface/Hire";
import { User } from "../../interface/User";
import { setHire } from "../../redux/slice/hireSlice";
import Templete from "../Templete";
import HireSearchDetail from "./HireSearchDetail";
import { CgSpinner } from "react-icons/cg";
import Content from "../Templete/Content";

interface props {
    hire: Hire;
    idx: number;
    func?: Function;
}

const HireList = ({ hire, idx, func }: props) => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch = useDispatch();

    const handleHire = (hire: Hire) => {
        dispatch(setHire(hire));
    }

    return (

        <div
            className="w-full h-[60px] overflow-hidden flex border-b"
            onClick={() => { handleHire(hire) }}
        >
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-base font-bold text-center text-primary-100-200 text-place-center">
                {idx + 1}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-base font-bold text-center text-primary-100-200 flex justify-start items-center px-5">
                {hire.workName}
            </div>
        </div>
    )
}

const HireSearchResult = () => {
    const hire = useSelector((state: any) => state.hire);
    const hireData: Hire = hire?.data;
    const hireList: Hire[] = hire?.list;

    return (
        <Templete>
            {hireData.hireId === -1
                ?

                <>
                    <Header title="공고 검색 결과" />
                    <Content>
                        <div className="w-[331px] h-10 bg-background-light/30 rounded-lg shrink-0 mb-2 " />
                        <div className="w-[331px] h-[465px] overflow-auto flex flex-col">
                            {hire?.loading
                                ?
                                <CgSpinner className="text-3xl animate-spin m-auto" />
                                :
                                <>
                                    {hireList?.map((hire, i) => (<HireList key={i} idx={i} hire={hire} />))}
                                </>
                            }
                        </div>
                    </Content>
                </>
                :
                <HireSearchDetail />
            }
            <NavBar role="member" state="1" />
        </Templete>
    )
}

export default HireSearchResult;