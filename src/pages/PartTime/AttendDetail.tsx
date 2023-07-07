import Header from "../../components/Header/Header";
import TableInfo from "../../components/Table/TableInfo";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { ListProps } from "../../interface/props";
import { User } from "../../interface/User";
import { Attend, INIT_ATTD } from "../../interface/Attendance";
import Button from "../../components/Button/Button";
import { getAttend, setAttend, updatePartEnd, updatePartStart } from "../../redux/slice/attendSlice";
import Content from "../Templete/Content";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { HireWithEvent } from "../../interface/Hire";
import { useState } from "react";
import { TbReload } from "react-icons/tb";

const AttendDetail = () => {
    const [isReload, setIsReload] = useState(false);

    const user: User = useSelector((state: any) => state.auth?.data);
    const hire: HireWithEvent = useSelector((state:any)=>state.hire?.data);
    const attend = useSelector((state:any)=>state.attend);
    const attendData: Attend = attend.data;
    const dispatch : any = useDispatch();

    const infoList: ListProps[] = [
        { title: "이름", content: user.userName },
        { title: "출근일시", content: attendData.attStartDatetime },
        { title: "퇴근일시", content: attendData.attEndDatetime }
    ];

    console.log(attend.Data)

    const handleStart = () => {
        dispatch(updatePartStart(attendData.attId))
        .then(unwrapResult)
        .then((res:any)=>{
            console.log(res);
            dispatch(getAttend({attEmail:attendData.attEmail, attHireId:attendData.attHireId, attDate:attendData.attDate}));
        }).catch((err:Error)=>{
            alert(err.message);
        })
    }

    const handleEnd = () => {
        dispatch(updatePartEnd(attendData.attId))
        .then(unwrapResult)
        .then((res:any)=>{
            console.log(res);
            dispatch(getAttend({attEmail:attendData.attEmail, attHireId:attendData.attHireId, attDate:attendData.attDate}));
        }).catch((err:Error)=>{
            alert(err.message);
        })
    }

    const handleReload = () => {
        setIsReload(true);
        dispatch(getAttend({attEmail:attendData.attEmail, attHireId:attendData.attHireId, attDate:attendData.attDate}))
        .then(unwrapResult)
        .then(()=>{
            setIsReload(false);
        });
    };

    return (
        <>
            <Header title="근태 관리" func={() => { dispatch(setAttend(INIT_ATTD)) }} />
            <Content>
                <div className="w-full h-[500px]">
                    <TableInfo title="행사명" content={hire.workName}/>
                    <TableInfo title="행사일" content={attendData.attDate?.slice(0,10)} />
                    {infoList?.map((v, i) => {
                        return (<List key={i} title={v.title} content={v.content || "x"} />)
                    })}
                </div>
                <div className="w-full h-fit flex justify-evenly px-10 items-center py-10">
                    <Button title="출근" type={attendData.attStartBnt==="Y" ? "default" : "unable"} func={handleStart} loading={attend.loading} />
                    <Button title="퇴근" type={attendData.attEndBnt==="Y" ? "default" : "unable"} func={handleEnd} loading={attend.loading}/>
                    <div className="bg-accent-200 p-1 rounded-lg">
                        <TbReload className={`${isReload&&"animate-spin"} cursor-pointer`} onClick={handleReload}/>
                    </div>
                </div>
            </Content>
        </>
    )
}
export default AttendDetail;