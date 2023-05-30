import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import Content from "../Templete/Content";

const InfoNoticeContent = () => {
    return (
        <Templete>
            <Header title="공지사항" />
            <Content>
                <div className="w-full h-[45px] overflow-hidden border-b border-white text-base font-bold flex justify-start items-center text-white px-2">
                        안녕하세요. 링켓입니다.
                </div>
                <div className="w-full h-full overflow-hidden bg-[#c4c4c4] my-5">
                    <p className="w-full h-full text-base font-bold text-left text-black p-4">
                        <span className="w-full h-full text-base font-bold text-left text-black">
                            안녕하세요, 링켓입니다.
                        </span>
                        <br />
                        <span className="w-full h-full text-base font-bold text-left text-black">
                            공지사항 테스트 중입니다.
                        </span>
                    </p>
                </div>
            </Content>
            <NavBar role="member" state="3" />
        </Templete>
    )
}

export default InfoNoticeContent;