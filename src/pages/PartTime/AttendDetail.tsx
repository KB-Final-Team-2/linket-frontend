import Header from "../../components/Header/Header";
import TableInfo from "../../components/Table/TableInfo";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { ListProps } from "../../interface/props";
import { User } from "../../interface/User";
import { Attend, INIT_ATTD } from "../../interface/Attendance";
import Button from "../../components/Button/Button";
import { getAttend, setAttend, updatePartStart } from "../../redux/slice/attendSlice";
import Content from "../Templete/Content";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const AttendDetail = () => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const attend = useSelector((state:any)=>state.attend);
    const attendData: Attend = attend.data;
    const dispatch : any = useDispatch();

    const infoList: ListProps[] = [
        { title: "이름", content: user.userName },
        { title: "출근일시", content: attendData.attStartDatetime },
        { title: "퇴근일시", content: attendData.attEndDatetime }
    ];

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

    return (
        <>
            <Header title="근태 관리" func={() => { dispatch(setAttend(INIT_ATTD)) }} />
            <Content>
                <div className="w-full h-[500px]">
                    <TableInfo title="행사명" content="KB IT’s Your Life" />
                    <TableInfo title="행사일" content="2023년 3월 2일" />
                    {infoList?.map((v, i) => {
                        return (<List key={i} title={v.title} content={v.content || "x"} />)
                    })}
                </div>
                <div className="w-full h-20 flex justify-between px-10 items-center">
                    <Button title="출근" type={attendData.attStartBnt==="Y" ? "default" : "unable"} func={handleStart} loading={attend.loading} />
                    <Button title="퇴근" type={attendData.attEndBnt==="Y" ? "default" : "unable"} func={() => {  }} />
                </div>
            </Content>
        </>
    )
}
export default AttendDetail;