import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";

const InfoNotice = () => {
    const list = [{ title: "안녕하세요", content: "반갑습니다." }, { title: "안녕하세요", content: "반갑습니다." }, { title: "안녕하세요", content: "반갑습니다." }, { title: "안녕하세요", content: "반갑습니다." }];

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="공지사항" />
                <div className="w-[331px] h-full flex flex-col">
                    <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                        {list.map((v, i) => {
                            return (<NextList key={i} title={v.content} link={`/member/info/notice/${1234}`} />)
                        })}
                    </div>
                </div>
                <NavBar role="member" state="3" />
            </div>
        </Templete>
    )
}

export default InfoNotice;