import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Grid3Header from "../../components/Table/Grid3Header";
import Grid3Row from "../../components/Table/Grid3Row";
import TableInfo from "../../components/Table/TableInfo";
import { Event } from "../../interface/Event";
import { Attend, AttendWithUser } from "../../interface/Attendance";
import { getEventAttendList, setAttend, setDate, updateStaffEnd, updateStaffStart } from "../../redux/slice/attendSlice";
import AttendToggle from "../../components/Button/AttendToggle";
import Content from "../Templete/Content";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import {TbReload} from "react-icons/tb"

const AttendDetail = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend = useSelector((state: any) => state.attend)
    const attendDate: string = attend.date;
    const attendList: Attend[] = attend.list.filter((el: Attend) => el.attDate === attendDate);
    const dispatch : any = useDispatch();
    console.log(attendList);

    const [startState, setStartState] = useState(false);
    const [endState, setEndState] = useState(false);
    const [isReload, setIsReload] = useState(false);

    const handleUpdateStart = () => {
        dispatch(updateStaffStart({attDate:attendDate, attEventId:event?.eventId, attStartBnt:startState?"N":"Y"}))
        .then(unwrapResult)
        .then((res:any)=>{
            console.log(res);
            setStartState(!startState);
            dispatch(getEventAttendList(event.eventId))
        }).catch((err:Error)=>{
            alert(err.message);
        })
    }

    const handleUpdateEnd = () => {
        dispatch(updateStaffEnd({attDate:attendDate, attEventId:event?.eventId, attEndBnt:endState?"N":"Y"}))
        .then(unwrapResult)
        .then((res:any)=>{
            console.log(res);
            setEndState(!endState);
            dispatch(getEventAttendList(event.eventId))
        }).catch((err:Error)=>{
            alert(err.message);
        })
    }

    const handleReload = () => {
        setIsReload(true);
        dispatch(getEventAttendList(event.eventId))
        .then(unwrapResult)
        .then(()=>{
            setIsReload(false);
        });
    };

    useEffect(()=>{
        let tmpStartState = false;
        let tmpEndState = false;
        attendList.forEach((att:Attend)=>{
            if(att.attstartbnt)     tmpStartState=true;
            if(att.attendbnt)       tmpEndState=true;
        })

        setStartState(tmpStartState);
        setEndState(tmpEndState);
    },[event])

    return (
        <>
            <Header title="근태 관리" func={() => { dispatch(setDate("")) }} />
            <Content>
                <TableInfo title="행사명" content={event.eventName} />
                <TableInfo title="출근일" content={attendDate.slice(0,10)} />
                <div className="w-[330px] h-[40px] relative overflow-hidden border-b flex items-center text-xl">
                    <div className="w-fit h-full flex items-center justify-center px-2">
                        <div className="noselect">출근</div>
                        <AttendToggle state={startState} func={() => { handleUpdateStart() }} />
                    </div>
                    <div className="w-fit h-full flex items-center justify-center px-2">
                        <div className="noselect">퇴근</div>
                        <AttendToggle state={endState} func={() => { handleUpdateEnd() }} />
                    </div>
                    <div className="bg-accent-200 p-1 rounded-lg">
                        <TbReload className={`${isReload&&"animate-spin"} cursor-pointer`} onClick={handleReload}/>
                    </div>
                </div>
                <div className="w-[331px] h-[519px] relative overflow-hidden">
                    <Grid3Header title={"이름"} content1={"출근"} content2={"퇴근"} />
                    {attendList.filter((el) => el.attDate === attendDate)?.map((attend, i) => (
                        <Grid3Row key={i} title={attend.attEmail} content1={attend.attStartDatetime?.slice(11) || "x"} content2={attend.attEndDatetime?.slice(11) || "x"} />
                    ))}
                </div>
            </Content>
        </>
    )
}
export default AttendDetail;