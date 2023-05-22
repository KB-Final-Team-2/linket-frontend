import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import { Attendance, INIT_ATTD } from "../../interface/Attendance";
import { useParams } from "react-router-dom";
import Templete from "../Templete";
import AttendDetail from "./AttendDetail";
import { setAttend } from "../../redux/slice/attendSlice";

const AttendHire = () => {
    const attend: Attendance = useSelector((state: any) => state.attend?.data);
    const attendList: Attendance[] = useSelector((state: any) => state.attend?.list);
    const dispatch = useDispatch();

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {attend===INIT_ATTD
                ?
                <>
                    <Header title="근태 관리" />
                    <div className="w-[331px] h-full flex flex-col">
                        <div className="w-[330px] h-[580px] overflow-hidden border-y border-white">
                            <TableInfo title="행사명" content="KB IT’s Your Life" />
                            {attendList.map((v, i) => {
                                return (<NextList title={v.attDate} func={()=>{dispatch(setAttend(v))}} />)
                            })}
                        </div>
                    </div>
                </>
                :
                <AttendDetail />
                }
                
                <NavBar role="part" state="1" />
            </div>
        </Templete>
    )
}

export default AttendHire;