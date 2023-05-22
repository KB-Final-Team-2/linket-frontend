import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import { Attendance } from "../../interface/Attendance";
import { useParams } from "react-router-dom";

const AttendHire = () => {
    const attendList : Attendance[] = useSelector((state:any)=>state.attend.list);

    const {hireId} = useParams();

    const list = [{ title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." }];
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="근태 관리" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[331px] h-[622px] overflow-hidden">
                    <div className="w-[330px] h-[580px] overflow-hidden border-y border-white">
                        <TableInfo title="행사명" content="KB IT’s Your Life" />
                        {attendList.map((v, i) => {
                            return (<NextList title={v.attDate} link={`/part/${hireId}/attend/${v.attId}`}/>)
                        })}
                    </div>
                </div>
            </div>
            <NavBar role="part" state="1" />

        </div>
    )
}

export default AttendHire;