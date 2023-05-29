import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import { Attend } from "../../interface/Attendance";
import { useNavigate } from "react-router-dom";
import Templete from "../Templete";
import AttendDetail from "./AttendDetail";
import { getAttendList, setAttend, setAttendList } from "../../redux/slice/attendSlice";
import { useEffect } from "react";
import Content from "../Templete/Content";

const AttendHire = () => {
    const hire = useSelector((state: any) => state.hire);
    const attend = useSelector((state: any) => state.attend);
    const attendData: Attend = attend.data;
    const attendList: Attend[] = attend?.list;
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAttendList(hire.hireId));
    }, [])

    return (
        <Templete>
            {attendData.attId === -1
                ?
                <>
                    <Header title="근태 관리" />
                    <Content>
                        <TableInfo title="행사명" content="KB IT’s Your Life" />
                        {attendList?.map((attend, i) => {
                            return (<NextList key={i} title={attend.attDate} func={() => { dispatch(setAttend(attend)) }} />)
                        })}
                    </Content>
                </>
                :
                <AttendDetail />
            }

            <NavBar role="part" state="1" />
        </Templete>
    )
}

export default AttendHire;