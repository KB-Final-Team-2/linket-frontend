import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";

const EventAttend = () => {
    const list = [{ title: "2023년 3월 2일" }, { title: "2023년 3월 3일" }, { title: "2023년 3월 4일" }, { title: "2023년 3월 5일" }, { title: "2023년 3월 6일" }, { title: "2023년 3월 7일" }, { title: "2023년 3월 8일" }]
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
            <Header title="근태 관리" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px] overflow-hidden">
                <div className="w-[330px] h-[580px] absolute left-0 top-0 overflow-hidden border border-white">
                    <div className="w-[330px] h-[37px] absolute left-0 top-0 overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            행사명
                        </p>
                        <p className="w-[215px] h-[37px] absolute left-[115px] top-0 text-[15px] font-bold text-center text-white">
                            KB IT’s Your Life
                        </p>
                        <svg
                            width={330}
                            height={4}
                            viewBox="0 0 330 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[-2.5px] top-[34.5px]"
                            preserveAspectRatio="none"
                        >
                            <line y1={2} x2={331} y2={2} stroke="white" strokeWidth={4} />
                        </svg>
                    </div>
                    <div className="w-[331px] h-[580px] absolute left-0 top-[37px] overflow-hidden">
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