import Header from "../../components/Header/Header";
import ToggleList from "../../components/List/ToggleList";
import NavBar from "../../components/NavBar/NavBar";

const InfoFAQ = () => {
    const list = ["오늘 열심히 하면 내일 안해도 되나요?", "처음 일정을 잡은 사람이 누군가요?", "5월 31일까지 마무리할 수 있을까요?", "안되면 되게 하라고 하면 어떡하죠"];
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="FAQ" />
            <div className="w-[331px] h-full">
                <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                    {list.map((v, i) => (<ToggleList key={i} title={v} content="" />))}
                </div>
            </div>
            <NavBar role="member" state="3" />
        </div>
    )
}

export default InfoFAQ;