import { BsList } from "react-icons/bs";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";
import List from "../../components/List/List";

const AttendDetail = () => {
    const list = [{ title: "안녕하세요", content: "반갑습니다." },
    { title: "이름", content: "김근태" },
    { title: "출근일시", content: "12:00:00" },
    { title: "퇴근일시", content: "18:30:00" }];

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="근태 관리" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[330px] h-[580px] overflow-hidden border-y border-white">
                    <TableInfo title="행사명" content="KB IT’s Your Life" />
                    <TableInfo title="행사일" content="2023년 3월 2일" />
                    {list.map((el) => {
                        return (<List title={el.title} content={el.content} />)
                    })}

                </div>
            </div>
            <NavBar role="part" state="1" />
        </div>
    )
}
export default AttendDetail;