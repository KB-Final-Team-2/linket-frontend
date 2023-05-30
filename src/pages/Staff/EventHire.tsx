import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { DUMMY_HIRE1, DUMMY_HIRE2, Hire } from "../../interface/Hire";
import { getHire, getHireList, setHire, setHireList } from "../../redux/slice/hireSlice";
import EventHireDetail from "./EventHireDetail";
import { useEffect } from "react";
import Content from "../Templete/Content";

const EventHire = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getHireList(event.eventId));
    }, [])

    const handleHire = (hire: Hire) => {
        dispatch(getHire(hire.hireId));
    }

    return (
        <Templete>
            {hire.hireId === -1
                ?
                <>
                    <Header title="공고 관리" list={[{ title: "공고 등록", func: () => { navigate("/staff/hire/regist") } }]} />
                    <Content>
                        <TableInfo title={"행사명"} content={"KB IT's Your Life"} />
                        <div className="w-[331px] h-[580px] overflow-hidden">
                            {hireList?.map((hire, i) => {
                                return (<NextList key={i} title={`${hire.workName}`} func={() => { handleHire(hire) }} />)
                            })}
                        </div>
                    </Content>
                </>
                :
                <EventHireDetail />
            }
            <NavBar role="staff" state="1" />
        </Templete>
    )
}
export default EventHire;