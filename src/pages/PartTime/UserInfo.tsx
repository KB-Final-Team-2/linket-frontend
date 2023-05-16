import Header from "../../components/Header/Header";
import LargeList from "../../components/List/LargeList";
import NavBar from "../../components/NavBar/NavBar";

const UserInfo = () => {
    const list = [{ title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." },
    { title: "안녕하세요", content: "반갑습니다." }];
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
            <div className="w-[331px] h-[582px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {list.map((el) => {
                    return (<LargeList title={el.title} content={el.content} />)
                })}
            </div>
            <NavBar state="3" />
            <Header title="내 정보" />
        </div>
    )
}
export default UserInfo;