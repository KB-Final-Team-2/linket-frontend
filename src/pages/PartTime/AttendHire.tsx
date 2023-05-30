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
import { unwrapResult } from "@reduxjs/toolkit";
import { Hire } from "../../interface/Hire";

const AttendHire = () => {
    const hire = useSelector((state: any) => state.hire);
    const attend = useSelector((state: any) => state.attend);
    const hireData : Hire = hire.data;
    const attendData: Attend = attend.data;
    const attendList: Attend[] = attend?.list;
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAttendList(hireData.hireId))
        .then(unwrapResult)
        .then((res:any)=>{
            console.log(res);
        }).catch((err:Error)=>{
            alert(err.message);
        })
    }, [attendData])

    return (
        <Templete>
            {attendData.attId === -1
                ?
                <>
                    <Header title="근태 관리" />
                    <Content>
                        <TableInfo title="공고명" content={hireData.workName} />
                        {attendList?.map((attend, i) => {
                            return (<NextList key={i} title={attend.attDate.slice(0,10)} func={() => { dispatch(setAttend(attend)) }} />)
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