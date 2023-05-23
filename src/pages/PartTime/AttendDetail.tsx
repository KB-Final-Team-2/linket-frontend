import { BsList } from "react-icons/bs";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import List from "../../components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { ListProps } from "../../interface/props";
import { User } from "../../interface/User";
import { Attendance, INIT_ATTD } from "../../interface/Attendance";
import Button from "../../components/Button/Button";
import Templete from "../Templete";
import { setAttend } from "../../redux/slice/attendSlice";

const AttendDetail = () => {
    const user: User = useSelector((state: any) => state.auth?.data);
    const attend: Attendance = useSelector((state: any) => state.attend?.data);
    const dispatch = useDispatch();

    const infoList: ListProps[] = [
        { title: "안녕하세요", content: "반갑습니다." },
        { title: "이름", content: user.userName },
        { title: "출근일시", content: attend.attStartDatetime },
        { title: "퇴근일시", content: attend.attEndDatetime }
    ];

    return (
        <>
            <Header title="근태 관리" func={() => { dispatch(setAttend(INIT_ATTD)) }} />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[330px] h-[580px] overflow-hidden border-y border-white">
                    <div className="w-full h-[500px]">
                        <TableInfo title="행사명" content="KB IT’s Your Life" />
                        <TableInfo title="행사일" content="2023년 3월 2일" />
                        {infoList.map((v, i) => {
                            return (<List key={i} title={v.title} content={v.content || "x"} />)
                        })}
                    </div>
                    <div className="w-full h-20 flex justify-between px-10 items-center">
                        <Button title="출근" type={attend.attStartBnt ? "default" : "unable"} func={() => { }} />
                        <Button title="퇴근" type={attend.attStartBnt ? "default" : "unable"} func={() => { }} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AttendDetail;