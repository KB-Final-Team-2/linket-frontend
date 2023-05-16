import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const InfoNoticeContent = () => {
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
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                <div className="w-[331px] h-[490px] absolute left-0 top-[65px] overflow-hidden bg-[#c4c4c4]">
                    <p className="w-[331px] h-[535px] absolute left-0 top-0 text-[15px] font-bold text-left text-black">
                        <span className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                            안녕하세요, 링켓입니다.
                        </span>
                        <br />
                        <span className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                            공지사항 테스트 중입니다.
                        </span>
                    </p>
                </div>
                <div className="w-[331px] h-[45px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                    <p className="w-[331px] h-[45px] absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        {" "}
                        안녕하세요. 링켓입니다.
                    </p>
                </div>
            </div>
            <NavBar state="3" />
            <Header title="공지사항" />
        </div>
    )
}
export default InfoNoticeContent;