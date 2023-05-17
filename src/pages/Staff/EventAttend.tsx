import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import TableInfo from "../../components/Table/TableInfo";

const EventAttend = () => {
    const list = [{ title: "2023년 3월 2일" }, { title: "2023년 3월 3일" }, { title: "2023년 3월 4일" }, { title: "2023년 3월 5일" }, { title: "2023년 3월 6일" }, { title: "2023년 3월 7일" }, { title: "2023년 3월 8일" }]
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="근태 관리" />
            <div className="w-[331px] h-full overflow-hidden">
                <div className="w-[331px] h-[580px] overflow-hidden border border-white">
                    <div className="w-[331px] h-[37px] overflow-hidden">
                        <TableInfo title={"행사명"} content={"KB IT's Your Life"} />
                    </div>
                    <div className="w-[331px] h-[580px] overflow-hidden">
                        {list.map((el) => {
                            return (<NextList title={el.title} />)
                        })}
                    </div>
                </div>
            </div>
			<NavBar state="1"/>
        </div>
    )
}
export default EventAttend;