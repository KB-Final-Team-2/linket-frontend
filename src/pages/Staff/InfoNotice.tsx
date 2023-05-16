import Header from "../../components/Header/Header";
import NextList from "../../components/List/NextList";

const InfoNotice = () => {
    const list = [{ title: "안녕하세요. 링켓 공지사항입니다.", content: "반갑습니다. 링켓 공지사항 내용입니다." },{ title: "안녕하세요. 링켓 공지사항입니다.", content: "반갑습니다. 링켓 공지사항 내용입니다." },{ title: "안녕하세요. 링켓 공지사항입니다.", content: "반갑습니다. 링켓 공지사항 내용입니다." },{ title: "안녕하세요. 링켓 공지사항입니다.", content: "반갑습니다. 링켓 공지사항 내용입니다." },{ title: "안녕하세요. 링켓 공지사항입니다.", content: "반갑습니다. 링켓 공지사항 내용입니다." }];

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
            <Header title="공지사항"/>
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {list.map((el) => {
                    return (<NextList title={el.content} />)
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
export default InfoNotice;