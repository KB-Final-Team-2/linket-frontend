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
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
            <svg
                width={375}
                height={812}
                viewBox="0 0 375 812"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[375px] h-[812px] absolute left-0 top-0"
                preserveAspectRatio="none"
            >
                <path d="M0 0H375V812H0V0Z" fill="#454545" />
            </svg>
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px] overflow-hidden">
                <div className="w-[330px] h-[580px] absolute left-0 top-0 overflow-hidden border border-white">
                    <TableInfo title="행사명" content="KB IT’s Your Life" />
                    <TableInfo title="행사일" content="2023년 3월 2일" />
                    {list.map((el) => {
                        return (<List title={el.title} content={el.content} />)
                    })}

                </div>
            </div>
            <NavBar state="1" />
            <Header title="근태 관리" />
        </div>
    )
}
export default AttendDetail;