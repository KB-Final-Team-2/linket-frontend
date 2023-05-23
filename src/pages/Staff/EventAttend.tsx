import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { Attendance, DUMMY_ATTD, INIT_ATTD } from "../../interface/Attendance";
import AttendDetail from "./EventAttendDetail";
import { getAttendList, setAttend, setAttendList } from "../../redux/slice/attendSlice";
import { useEffect } from "react";

const EventAttend = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend = useSelector((state: any) => state.attend);
    const attendData : Attendance = attend.data; 
    const attendList: Attendance[] = attend.list;
    const dispatch : any = useDispatch();

    useEffect(()=>{
        dispatch(setAttend(INIT_ATTD));
        dispatch(getAttendList());
    },[])

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {attendData === INIT_ATTD
                    ?
                    <>
                        <Header title="근태 관리" />
                        <div className="w-[331px] h-full overflow-hidden">
                            <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                                <div className="w-[331px] h-[37px] overflow-hidden">
                                    <TableInfo title={"행사명"} content={event.eventName} />
                                </div>
                                <div className="w-[331px] h-[580px] overflow-auto">
                                    {attendList.map((attend, i) => {
                                        return (<NextList key={i} title={event.eventName} func={() => { dispatch(setAttend(attend)) }} />)
                                    })}
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <AttendDetail />
                }
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}
export default EventAttend;