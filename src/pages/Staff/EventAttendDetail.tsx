import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import Grid3Header from "../../components/Table/Grid3Header";
import Grid3Row from "../../components/Table/Grid3Row";
import TableInfo from "../../components/Table/TableInfo";
import Templete from "../Templete";

const AttendDetail = () => {
    const event = {
        eventTitle: "KB IT's Your Life",
        startDate: "2023년 03월 02일",
    }
    const gridHeader = {
        title: "이름",
        content1: "출근",
        content2: "퇴근"
    }
    const part = [
        { name: "홍길동", attStartDatetime: "09:41", attEndDatetime: "X" },
        { name: "길복순", attStartDatetime: "09:52", attEndDatetime: "12:01" },
        { name: "박서준", attStartDatetime: "10:22", attEndDatetime: "14:03" }
    ]
    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="근태 관리" />
                <div className="w-[331px] h-[622px] overflow-hidden">
                    <div className="w-[330px] h-[580px] overflow-hidden border border-white">
                        <TableInfo title="행사명" content={event.eventTitle} />
                        <TableInfo title="행사 분류" content={event.startDate} />
                        <div className="w-[331px] h-[519px] relative overflow-hidden">
                            <Grid3Header title={"이름"} content1={"출근"} content2={"퇴근"} />
                            {part.map((v, i) => (
                                <Grid3Row title={v.name} content1={v.attStartDatetime} content2={v.attEndDatetime} />
                            ))}
                        </div>
                    </div>
                </div>
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}
export default AttendDetail;