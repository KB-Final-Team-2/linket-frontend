import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";

const EventDetail = () => {
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
            <div className="w-[153px] h-[156px] absolute left-[200px] top-[560px] overflow-hidden">
                <div className="w-20 h-10 absolute left-[37px] top-[91px]">
                    <div className="w-20 h-10 absolute left-[-1px] top-[-1px] rounded-[15px] bg-[#fd3030]" />
                    <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                        Delete
                    </p>
                </div>
                <div className="w-20 h-10 absolute left-[37px] top-6 overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                    <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                        Review
                    </p>
                </div>
            </div>

            <div className="w-[331px] h-[430px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {list.map((el) => {
                    return (<List title={el.title} content={el.content}/>)
                })}
            </div>

            <div className="w-[153px] h-[156px] absolute left-[22px] top-[560px] overflow-hidden">
                <div className="w-[152px] h-[156px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
                <p className="absolute left-[43px] top-[51px] text-[15px] font-bold text-left text-black">
                    근태 관리
                </p>
            </div>
            <div className="w-[100px] h-[30px] absolute left-[260px] top-[89px] overflow-hidden rounded-[15px] bg-[#c4c4c4]/[0.31] border-[3px] border-white">
                <p className="w-[100px] h-[30px] absolute left-0 top-0 text-[15px] font-medium text-center text-white">
                    행사 삭제
                </p>
            </div>
            <Header title="행사 상세" />
            <NavBar state="1" />
        </div>
    )

}
export default EventDetail;