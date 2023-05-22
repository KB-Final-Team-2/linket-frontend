import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const InfoNoticeContent = () => {
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
            <Header title="공지사항" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                    <div className="w-[331px] h-[45px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                        <p className="w-[331px] h-[45px] text-[15px] font-bold text-left text-white">
                            {" "}
                            안녕하세요. 링켓입니다.
                        </p>
                    </div>
                    <div className="w-[331px] h-[490px] overflow-hidden bg-[#c4c4c4]">
                        <p className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                            <span className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                                안녕하세요, 링켓입니다.
                            </span>
                            <br />
                            <span className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                                공지사항 테스트 중입니다.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <NavBar role="member" state="3" />
        </div>
    )
}

export default InfoNoticeContent;