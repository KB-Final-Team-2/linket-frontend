import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const EventDetail = () => {
    const list = [{ title: "행사명", content: "KB IT's Your Life" }, { title: "행사 분류", content: "Concert" }, { title: "행사 기간", content: "2023.03.02 ~ 2023.05.31" }, { title: "행사명", content: "멀티캠퍼스 선롱" }, { title: "행사 코드", content: "1234567890" }, { title: "행사 포스터", content: "event_poster.jpg" }, { title: "행사 정보 이미지", content: "event_info.jpg" }]
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
            <Header title="행사 상세" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[153px] h-[92px] absolute left-[23px] top-[624px] overflow-hidden">
                <div className="w-[152px] h-[156px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
                <p className="absolute left-[43px] top-[19px] text-[15px] font-bold text-left text-black">
                    출결 관리
                </p>
            </div>
            <div className="w-[153px] h-[92px] absolute left-[200px] top-[624px] overflow-hidden">
                <div className="w-[152px] h-[92px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
                <p className="absolute left-[47px] top-5 text-[15px] font-bold text-left text-black">
                    리뷰 보기
                </p>
            </div>
            <div className="w-[331px] h-[466px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                {list.map((el) => {
                    return (<List title={el.title} content={el.content} />)
                })}
                <div className="w-[330px] h-[207px] absolute left-0 top-[259px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                    <p className="w-[115px] h-[207px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                        행사 설명
                    </p>
                    <p className="w-[215px] h-[207px] absolute left-[115px] top-0 text-[15px] font-bold text-center text-white">
                        주니어 개발자들의 실력 행사가 시작된다! 새로 개발자가 되고 싶은 꿈나무부터 숨겨진 고인물까지
                        모두 모이는 이 곳!
                    </p>
                </div>

            </div>
            <div className="w-[375px] h-[53px] absolute left-0 top-[759px] overflow-hidden bg-[#454545]">
                <div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] rounded-tl-[20px] bg-[#d9d9d9]" />
                <div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] bg-[#454545]" />
                <div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] rounded-tr-[20px] bg-[#d9d9d9]" />
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
export default EventDetail;