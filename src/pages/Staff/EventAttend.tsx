import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";
import { Event } from "../../interface/Event";
import { useSelector } from "react-redux";
import { Attendance } from "../../interface/Attendance";

const EventAttend = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend: Attendance = useSelector((state: any) => state.attend?.data);
    const attendList: Attendance[] = useSelector((state: any) => state.attend?.list);

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="근태 관리" />
                <div className="w-[331px] h-full overflow-hidden">
                    <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                        <div className="w-[331px] h-[37px] overflow-hidden">
                            <TableInfo title={"행사명"} content={"KB IT's Your Life"} />
                        </div>
                        <div className="w-[331px] h-[580px] overflow-hidden">
                            {attendList.map((v, i) => {
                                return (<NextList title={event.eventName} func={() => {}} />)
                            })}
                        </div>
                    </div>
                </div>
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}
export default EventAttend;