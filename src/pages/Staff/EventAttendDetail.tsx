import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Grid3Header from "../../components/Table/Grid3Header";
import Grid3Row from "../../components/Table/Grid3Row";
import TableInfo from "../../components/Table/TableInfo";
import { Event } from "../../interface/Event";
import { Attend, AttendWithUser } from "../../interface/Attendance";
import { setAttend, setDate } from "../../redux/slice/attendSlice";
import AttendToggle from "../../components/Button/AttendToggle";
import { updateStart } from "../../redux/slice/attendSlice";
import { updateEnd } from "../../redux/slice/attendSlice";
import Content from "../Templete/Content";

const AttendDetail = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend = useSelector((state: any) => state.attend)
    const attendDate: string = attend.date;
    const attendList: AttendWithUser[] = attend.list.filter((el: Attend) => el.attDate === attendDate);
    const dispatch = useDispatch();

    return (
        <>
            <Header title="근태 관리" func={() => { dispatch(setDate("")) }} />
            <Content>
                <TableInfo title="행사명" content={event.eventName} />
                <TableInfo title="출근일" content={attendDate} />
                <div className="w-[330px] h-[40px] relative overflow-hidden border-b flex items-center text-xl">
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="noselect">출근</div>
                        <AttendToggle state={attend.startState} func={() => { dispatch(updateStart(!attend.startState)) }} />
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="noselect">퇴근</div>
                        <AttendToggle state={attend.endState} func={() => { dispatch(updateEnd(!attend.endState)) }} />
                    </div>
                </div>
                <div className="w-[331px] h-[519px] relative overflow-hidden">
                    <Grid3Header title={"이름"} content1={"출근"} content2={"퇴근"} />
                    {attendList.filter((el) => el.attDate === attendDate).map((attend, i) => (
                        <Grid3Row key={i} title={attend.userName} content1={attend.attStartDatetime || "x"} content2={attend.attEndDatetime || "x"} />
                    ))}
                </div>
            </Content>
        </>
    )
}
export default AttendDetail;