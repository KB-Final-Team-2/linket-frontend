import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { ListProps } from "../../interface/props";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { Link } from "react-router-dom";
import { setHire } from "../../redux/slice/hireSlice";
import Content from "../Templete/Content";

const HireDetail = () => {
    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const dispatch = useDispatch();

    const infoList: ListProps[] = [
        { title: "공고명", content: hire?.workName },
        { title: "근무일", content: `${hire?.workStartDate} ~ ${hire?.workEndDate}` },
        { title: "근무 시간", content: `${hire?.workHour}` },
        { title: "시급", content: `${hire?.pay}` },
        { title: "문의처", content: hire?.edu },
    ];
    return (
        <>
            <Header title="공고 상세" func={() => { dispatch(setHire(INIT_HIRE)) }} />
            <Content>
                <div className="w-[331px] h-full overflow-hidden border-white flex flex-col">
                    {infoList.map((v, i) => {
                        return (<List key={i} title={v.title} content={v.content!} />)
                    })}
                </div>
                <div className="w-full h-[156px] flex flex-shrink-0 flex-grow-0">
                    <Link to={`/part/attend`} className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black text-place-center flex-shrink-0">
                        근태 관리
                    </Link>
                    <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                        <Button title={"Delete"} type={"delete"} func={() => { }} />
                        <Button title={"Review"} type={"default"} func={() => { }} />
                    </div>
                </div>
            </Content>
        </>
    )
}
export default HireDetail;