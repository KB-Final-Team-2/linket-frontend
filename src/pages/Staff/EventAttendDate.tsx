import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { Attend, DUMMY_ATTD, INIT_ATTD } from "../../interface/Attendance";
import AttendDetail from "./EventAttendDetail";
import { getAttendList, setAttend, setAttendList, setDays } from "../../redux/slice/attendSlice";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

interface props{
    date: string;
}

const EventAttendDate = ({date} : props) => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const attend = useSelector((state: any) => state.attend);
    const attendData: Attend = attend.data;
    const attendList: Attend[] = attend.list;
    const dispatch: any = useDispatch();

    return (
        <>
            <Header title="근태 관리" />
            <div className="w-[331px] h-full overflow-hidden">
                <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                    <div className="w-[331px] h-[70px] overflow-hidden">
                        <TableInfo title={"행사명"} content={event.eventName} />
                        <TableInfo title={"출근일"} content={date} />
                    </div>
                    <div className="w-[331px] h-[580px] overflow-auto">
                        {attendList
                        .filter((el)=>el.attDate===date)
                        .map((attend, i) => {
                            return (<NextList key={i} title={event.eventName} func={() => { dispatch(setAttend(attend)) }} />)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default EventAttendDate;