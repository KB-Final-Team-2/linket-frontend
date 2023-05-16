import Header from "../../components/Header/Header";
import LargeList from "../../components/List/LargeList";

const InfoUserInfo = () => {
    const list = [{ title: "이름", content: "김고객" }, { title: "이메일", content: "qwer123@gmail.com" }, { title: "생일", content: "1999.01.01" }, { title: "성별", content: "남자" }, { title: "연락처", content: "010-1234-4567" }]
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
            <Header title="내 정보" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[582px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {list.map((el) => {
                    return (<LargeList title={el.title} content={el.content} />)
                })}
            </div>
            <div className="w-[375px] h-[53px] absolute left-0 top-[759px] overflow-hidden bg-[#454545]">
                <div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] bg-[#454545]" />
                <div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] rounded-tr-[20px] bg-[#d9d9d9]" />
                <div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] bg-[#d9d9d9]" />
                <div className="w-6 h-6 absolute left-[301px] top-3" />
                <div className="w-[23px] h-[39.26px]">
                    <div className="absolute left-[198.5px] top-[5.5px]" />
                    <img
                        className="w-[23.82px] h-[39px] absolute left-[198.5px] top-[5.5px]"
                        src="small_logo.png"
                    />
                </div>
            </div>
        </div>
    )
}
export default InfoUserInfo;