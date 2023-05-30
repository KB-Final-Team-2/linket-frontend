import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import Content from "../Templete/Content";

const InfoNotice = () => {
    const list = [{ title: "안녕하세요", content: "반갑습니다." }, { title: "안녕하세요", content: "반갑습니다." }, { title: "안녕하세요", content: "반갑습니다." }, { title: "안녕하세요", content: "반갑습니다." }];
    const navigate = useNavigate();

    return (
        <Templete>
                <Header title="공지사항" />
                <Content>
                    {list?.map((v, i) => {
                        return (<NextList key={i} title={v.content} func={() => { navigate(`/info/notice/${1234}`) }} />)
                    })}
                </Content>
                <NavBar role="member" state="3" />
        </Templete>
    )
}

export default InfoNotice;