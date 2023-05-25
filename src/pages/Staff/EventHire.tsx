import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { Attend } from "../../interface/Attendance";
import { DUMMY_HIRE1, DUMMY_HIRE2, Hire, INIT_HIRE } from "../../interface/Hire";
import { getHire, getHireList, setHire, setHireList } from "../../redux/slice/hireSlice";
import EventHireDetail from "./EventHireDetail";
import { useEffect } from "react";

const EventHire = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
    const dispatch : any = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        // dispatch(getHireList(event.eventId));
        const list = [DUMMY_HIRE1, DUMMY_HIRE2];
        dispatch(setHireList(list));
    },[])

    const handleHire = (hire: Hire) => {
        // dispatch(getHire(hire.hireId));
        dispatch(setHire(hire));
    }

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {hire.hireId === -1
                    ?
                    <>
                        <Header title="공고 관리" list={[{title:"공고 등록", func:()=>{navigate("/staff/hire/regist")}}]}/>
                        <div className="w-[331px] h-full overflow-hidden">
                            <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                                <div className="w-[331px] h-[37px] overflow-hidden">
                                    <TableInfo title={"행사명"} content={"KB IT's Your Life"} />
                                </div>
                                <div className="w-[331px] h-[580px] overflow-hidden">
                                    {hireList.map((hire, i) => {
                                        return (<NextList key={i} title={`${hire.workName}`} func={() => { handleHire(hire) }} />)
                                    })}
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <EventHireDetail />
                }
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}
export default EventHire;