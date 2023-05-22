import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { ListProps } from "../../interface/ListProps";
import Templete from "../Templete";
import { setEvent } from "../../redux/slice/eventSlice";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { setHire } from "../../redux/slice/hireSlice";

const EventHireDetail = () => {
    const hire : Hire = useSelector((state:any)=>state.hire?.data);
    const hireList : Hire[] = useSelector((state:any)=>state.hire?.list);
    const dispatch = useDispatch();
    const list: ListProps[] = [
        { title: "공고 번호", content: `${hireList.indexOf(hire)}` },
        { title: "공고명", content: hire?.workName },
        { title: "근무 기간", content: `${hire?.workStartDate} ~ ${hire?.workEndDate}` },
        { title: "근무 시간", content: `${hire?.workHour}`},
        { title: "시급", content: `${hire?.pay}` },
        { title: "등록 코드", content: `${hire?.hireId}` },
        { title: "등록 일자", content: hire?.regDate },
    ]

    return (
        <>
            <Header title="공고 상세" func={() => { dispatch(setHire(INIT_HIRE)) }} />
            <div className="w-[331px] h-full flex">
                <div className="w-full h-[580px] flex flex-col border-y pb-5">
                    <div className="w-[331px] h-[580px] overflow-hidden">
                        {list.map((v, i) => {
                            return (<List key={i} title={v.title} content={v.content || ""} />)
                        })}

                        <div className="w-[330px] h-[207px] overflow-hidden border-b flex">
                            <p className="w-[115px] h-[207px] text-[15px] font-bold text-center text-white">
                                사전 교육 정보
                            </p>
                            <p className="w-[215px] h-[207px] text-[15px] font-bold text-center text-white">
                                {hire?.edu}
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[158px] flex flex-shrink-0 justify-between">
                        <Link to="/staff/hire" className="w-[153px] h-full flex justify-center items-center bg-[#d9d9d9] text-black">
                            공고 관리
                        </Link>
                        <div className="w-[153px] h-full flex flex-col justify-between">
                            <Link to="/staff/attend" className="w-[153px] h-[60px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                                출결 관리
                            </Link>
                            <Link to="/staff/review" className="w-[153px] h-[60px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex flex-shrink-0 justify-center items-center">
                                리뷰 보기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EventHireDetail;