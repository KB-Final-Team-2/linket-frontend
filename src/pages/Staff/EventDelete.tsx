import Header from "../../components/Header/Header";
import List from "../../components/List/List";

const EventDelete = () => {
    const list = [{ title: "행사명", content: "KB IT's Your Life" }, { title: "행사분류", content: "Concert" }, { title: "행사 기간", content: "2023.03.02~2023.05.31" }, { title: "행사 장소", content: "멀티캠퍼스 선릉" }]
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
            <Header title="행사 삭제" />
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[330px] h-[622px] absolute left-[22px] top-[125px] overflow-hidden">
                <div className="w-[330px] h-[148px] absolute left-0 top-0 overflow-hidden border border-white">
                    {list.map((el) => {
                        return (<List title={el.title} content={el.content} />)
                    })}
                </div>
                <div className="w-[330px] h-[445px] absolute left-0 top-[177px] overflow-hidden">
                    <div className="w-[330px] h-[244px] absolute left-0 top-[-1px] overflow-hidden">
                        <p className="w-[330px] absolute left-0 top-[60px] font-bold text-center text-white">
                            <span className="w-[330px] text-xl font-bold text-center text-white">
                                해당 행사를 삭제하시겠습니까?
                            </span>
                            <br />
                            <span className="w-[330px] text-[15px] font-bold text-center text-white">
                                삭제된 행사는 복구할 수 없으며,
                            </span>
                            <br />
                            <span className="w-[330px] text-[15px] font-bold text-center text-white">
                                기존에 등록된 리뷰 및 이미지가 모두 삭제됩니다.
                            </span>
                        </p>
                    </div>
                    <div className="w-[337px] h-[202px] absolute left-0 top-[243px] overflow-hidden">
                        <div className="w-20 h-10 absolute left-[204px] top-[81px] overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                            <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                                return
                            </p>
                        </div>
                        <div className="w-20 h-10 absolute left-[53px] top-[81px]">
                            <div className="w-20 h-10 absolute left-[-1px] top-[-1px] rounded-[15px] bg-[#fd3030]" />
                            <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                                Delete
                            </p>
                        </div>
                    </div>
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
export default EventDelete; 