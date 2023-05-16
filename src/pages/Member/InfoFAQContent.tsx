import Header from "../../components/Header/Header";
import ToggleList from "../../components/List/ToggleList";
import NavBar from "../../components/NavBar/NavBar";

const InfoFAQContent = () => {
    const list = ["오늘 열심히 하면 내일 안해도 되나요?", "처음 일정을 잡은 사람이 누군가요?", "5월 31일까지 마무리할 수 있을까요?", "안되면 되게 하라고 하면 어떡하죠"];

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
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {list.map((v,i)=>(<ToggleList key={i} title={v} content="i"/>))}
            </div>
            <NavBar state="3"/>
            <Header title="FAQ"/>
        </div>
    )
}

export default InfoFAQContent;