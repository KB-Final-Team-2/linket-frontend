import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";

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
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px] overflow-hidden">
                <div className="w-[330px] h-[580px] absolute left-0 top-0 overflow-hidden border border-white">
                    <List title="행사명" content={event.eventTitle} />
                    <List title="행사 분류" content={event.startDate} />
                    <div className="w-[331px] h-[519px] absolute left-0 top-[74px] overflow-hidden">
                        <div className="w-[331px] h-9 absolute left-0 top-0 overflow-hidden">
                            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-2px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    퇴근
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-1px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    출근
                                </p>
                            </div>
                            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    이름
                                </p>
                            </div>
                            <svg
                                width={330}
                                height={3}
                                viewBox="0 0 330 3"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-[-2.5px] top-[34.5px]"
                                preserveAspectRatio="none"
                            >
                                <line y1={2} x2={331} y2={2} stroke="white" strokeWidth={4} />
                            </svg>
                        </div>
                        <div className="w-[331px] h-[37px] absolute left-0 top-9 overflow-hidden">
                            <svg
                                width={324}
                                height={1}
                                viewBox="0 0 324 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[330px] h-0 absolute left-[-6px] top-[37px]"
                                preserveAspectRatio="none"
                            >
                                <line x1={-6} y1="0.5" x2={324} y2="0.5" stroke="white" />
                            </svg>
                            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-2px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    X
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-1px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    09:41
                                </p>
                            </div>
                            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    홍길동
                                </p>
                            </div>
                        </div>
                        <div className="w-[331px] h-[37px] absolute left-0 top-[72px] overflow-hidden">
                            <svg
                                width={324}
                                height={1}
                                viewBox="0 0 324 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[330px] h-0 absolute left-[-6px] top-[37px]"
                                preserveAspectRatio="none"
                            >
                                <line x1={-6} y1="0.5" x2={324} y2="0.5" stroke="white" />
                            </svg>
                            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-2px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    12:01
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-1px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    09:52
                                </p>
                            </div>
                            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    길복순
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-2px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    12:01
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-1px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    09:52
                                </p>
                            </div>
                            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    길복순
                                </p>
                            </div>
                        </div>
                        <div className="w-[331px] h-[37px] absolute left-0 top-[72px] overflow-hidden">
                            <svg
                                width={324}
                                height={1}
                                viewBox="0 0 324 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[330px] h-0 absolute left-[-6px] top-[37px]"
                                preserveAspectRatio="none"
                            >
                                <line x1={-6} y1="0.5" x2={324} y2="0.5" stroke="white" />
                            </svg>
                            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-2px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    12:01
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-1px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    09:52
                                </p>
                            </div>
                            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    길복순
                                </p>
                            </div>
                        </div>
                        <div className="w-[331px] h-[37px] absolute left-0 top-[108px] overflow-hidden">
                            <svg
                                width={324}
                                height={1}
                                viewBox="0 0 324 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[330px] h-0 absolute left-[-6px] top-[37px]"
                                preserveAspectRatio="none"
                            >
                                <line x1={-6} y1="0.5" x2={324} y2="0.5" stroke="white" />
                            </svg>
                            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-2px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    14:03
                                </p>
                            </div>
                            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                                <svg
                                    width={1}
                                    height={36}
                                    viewBox="0 0 1 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-0 top-[-1px]"
                                    preserveAspectRatio="none"
                                >
                                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                                </svg>
                                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    10:22
                                </p>
                            </div>
                            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    박서준
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar state="1" />
        </div>
    )
}
export default AttendDetail;