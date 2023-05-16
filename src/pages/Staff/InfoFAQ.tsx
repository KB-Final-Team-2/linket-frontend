import Header from "../../components/Header/Header";
import ToggleList from "../../components/List/ToggleList";
import NavBar from "../../components/NavBar/NavBar";

const InfoFAQ = () => {
    const toggleList = [{ title: "오늘", content: "집에 가고 싶다." }, { title: "오늘", content: "집에 가고 싶다." }, { title: "오늘", content: "집에 가고 싶다." }, { title: "오늘", content: "집에 가고 싶다." }]

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
            <Header title="FAQ" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {toggleList.map((el) => {
                    return (<ToggleList title={el.title} content={el.content}/>)
                })}
            </div>
			<NavBar state="3"/>
        </div>
    )
}
export default InfoFAQ;