import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { FuncListProps, ListProps } from "../../interface/props";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { setHire } from "../../redux/slice/hireSlice";
import Content from "../Templete/Content";

const EventHireDetail = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list: ListProps[] = [
        { title: "공고 번호", content: `${hire?.hireId}` },
        { title: "공고명", content: hire?.workName },
        { title: "근무 기간", content: `${hire?.workStartDate} ~ ${hire?.workEndDate}` },
        { title: "근무 시간", content: `${hire?.workHour}` },
        { title: "시급", content: `${hire?.pay}` },
        { title: "등록 코드", content: `${hire?.hireId}` },
        { title: "문의처", content: `${event?.eventInq}` },
        { title: "등록 일자", content: hire?.regDate },
    ]

    const dropdownList: FuncListProps[] = [
        { title: "공고 수정", func: () => { navigate("/staff/hire/update") } },
        { title: "공고 삭제", func: () => { navigate("/staff/hire/delete") } }
    ]

    return (
        <>
            <Header title="공고 상세" func={() => { dispatch(setHire(INIT_HIRE)) }} list={dropdownList} />
            <Content>
                <div className="w-full h-[580px] overflow-hidden flex flex-col">
                    {list.map((v, i) => {
                        return (<List key={i} title={v.title} content={v.content || ""} />)
                    })}

                    <div className="w-full h-full overflow-hidden border-b flex">
                        <p className="w-[115px] h-full text-[15px] font-bold text-center text-white text-place-center">
                            사전 교육 정보
                        </p>
                        <p className="w-[215px] h-full text-[15px] font-bold text-center text-white text-place-center">
                            {hire?.edu}
                        </p>
                    </div>
                </div>
            </Content>
        </>
    )
}
export default EventHireDetail;