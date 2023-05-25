import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { ListProps } from "../../interface/props";
import Templete from "../Templete";
import { setHire } from "../../redux/slice/hireSlice";
import Content from "../Templete/Content";

const HireSearchDetail = () => {
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
        <Templete>
            <Header title="공고 상세" func={() => { dispatch(setHire(INIT_HIRE)) }} />
            <Content>
                <div className="w-[331px] h-full overflow-hidden border-white flex flex-col">
                    {infoList.map((v, i) => {
                        return (<List key={i} title={v.title} content={v.content!} />)
                    })}
                </div>
            </Content>
        </Templete>
    )
}

export default HireSearchDetail;