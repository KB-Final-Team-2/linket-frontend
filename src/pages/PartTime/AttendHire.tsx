import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import { Attend, DUMMY_ATTD, INIT_ATTD } from "../../interface/Attendance";
import { useNavigate, useParams } from "react-router-dom";
import Templete from "../Templete";
import AttendDetail from "./AttendDetail";
import { getAttendList, setAttend, setAttendList } from "../../redux/slice/attendSlice";
import { useEffect } from "react";
import { INIT_HIRE } from "../../interface/Hire";

const AttendHire = () => {
    const hire = useSelector((state:any)=>state.hire);
    const attend = useSelector((state: any) => state.attend);
    const attendData = attend.data;
    const attendList: Attend[] = attend?.list;
    const dispatch : any = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        // dispatch(getAttendList(eventId));
        const list = [DUMMY_ATTD,DUMMY_ATTD,DUMMY_ATTD,DUMMY_ATTD];
        dispatch(setAttendList(list));
    },[])

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {attendData===INIT_ATTD
                ? 
                <>
                    <Header title="근태 관리" />
                    <div className="w-[331px] h-full flex flex-col">
                        <div className="w-[330px] h-[580px] overflow-hidden border-y border-white">
                            <TableInfo title="행사명" content="KB IT’s Your Life" />
                            {attendList.map((v, i) => {
                                return (<NextList key={i} title={v.attDate} func={()=>{dispatch(setAttend(v))}} />)
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