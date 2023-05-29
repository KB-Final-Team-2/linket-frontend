import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { Attend, INIT_ATTD } from "../../interface/Attendance";
import AttendDetail from "./EventAttendDetail";
import { getEventAttendList, setAttend, setDate } from "../../redux/slice/attendSlice";
import { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import Content from "../Templete/Content";

const EventAttend = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend = useSelector((state: any) => state.attend);
    const attendData: Attend = attend.data;
    const attendList: Attend[] = attend.list;
    const attendDays: string[] = attend.days;
    const attendDate: string = attend.date;
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(getEventAttendList(event.eventId))
        .then(unwrapResult)
        .then((res:any)=>{
            console.log(res);
        }).catch((err:Error)=>{
            alert(err.message);
        });
    }, [])

    return (
        <Templete>
            {attendDate === ""
                ?
                <>
                    <Header title="근태 관리" />
                    <Content>
                        <div className="w-[331px] h-[37px] overflow-hidden">
                            <TableInfo title={"행사명"} content={event.eventName} />
                        </div>
                        <div className="w-[331px] h-[580px] overflow-auto">
                            {attendDays?.map((day, i) => {
                                return (<NextList key={i} title={day.slice(0,10)} func={() => { dispatch(setDate((day))) }} />)
                            })}
                        </div>
                    </Content>
                </>
                :
                <AttendDetail />
            }
            <NavBar role="staff" state="1" />
        </Templete>
    )
}
export default EventAttend;