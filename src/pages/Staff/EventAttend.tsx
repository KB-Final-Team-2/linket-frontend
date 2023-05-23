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
import { getAttendList, setAttend, setAttendList, setDate, setDays } from "../../redux/slice/attendSlice";
import { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import EventAttendDate from "./EventAttendDate";

const EventAttend = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend = useSelector((state: any) => state.attend);
    const attendData: Attendance = attend.data;
    const attendList: Attendance[] = attend.list;
    const attendDays: string[] = attend.days;
    const attendDate: string = attend.date;
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(setAttend(INIT_ATTD));
        dispatch(getAttendList());
    }, [])

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {attendDate === ""
                    ?
                    <>
                        <Header title="근태 관리" />
                        <div className="w-[331px] h-full overflow-hidden">
                            <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                                <div className="w-[331px] h-[37px] overflow-hidden">
                                    <TableInfo title={"행사명"} content={event.eventName} />
                                </div>
                                <div className="w-[331px] h-[580px] overflow-auto">
                                    {attendDays.map((day, i) => {
                                        return (<NextList key={i} title={day} func={() => { dispatch(setDate((day))) }} />)
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