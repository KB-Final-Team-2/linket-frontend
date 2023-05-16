const InfoNoticeContent = () => {
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
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                <div className="w-[331px] h-[490px] absolute left-0 top-[65px] overflow-hidden bg-[#c4c4c4]">
                    <p className="w-[331px] h-[535px] absolute left-0 top-0 text-[15px] font-bold text-left text-black">
                        <span className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                            안녕하세요, 링켓입니다.
                        </span>
                        <br />
                        <span className="w-[331px] h-[535px] text-[15px] font-bold text-left text-black">
                            공지사항 테스트 중입니다.
                        </span>
                    </p>
                </div>
                <div className="w-[331px] h-[45px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                    <p className="w-[331px] h-[45px] absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        {" "}
                        안녕하세요. 링켓입니다.
                    </p>
                </div>
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
            <div className="w-[331px] h-[125px] absolute left-[22px] top-0">
                <div className="w-[331px] h-[125px] absolute left-0 top-0 overflow-hidden">
                    <div className="w-[331px] h-[30px] absolute left-0 top-0 overflow-hidden" />
                    <div className="w-[331px] h-[95px] absolute left-0 top-[30px] overflow-hidden">
                        <svg
                            width={74}
                            height={95}
                            viewBox="0 0 74 95"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[74px] h-[95px] absolute left-[257px] top-0"
                            preserveAspectRatio="none"
                        >
                            <circle cx={37} cy={48} r={3} fill="#FF6000" />
                            <circle cx={28} cy={48} r={3} fill="#FF6000" />
                            <circle cx={46} cy={48} r={3} fill="#FF6000" />
                        </svg>
                        <div className="w-[183px] h-[95px] absolute left-[74px] top-0 overflow-hidden">
                            <p className="w-[183px] h-[95px] absolute left-0 top-0 text-[23px] text-center text-white">
                                공지사항
                            </p>
                        </div>
                        <svg
                            width={74}
                            height={95}
                            viewBox="0 0 74 95"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[74px] h-[95px] absolute left-0 top-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M35 55L28 48M28 48L35 41M28 48L46 48"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoNoticeContent;