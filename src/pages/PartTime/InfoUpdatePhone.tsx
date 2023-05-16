const InfoUpdatePhone = () => {
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
                <div className="w-[330px] h-[90px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[330px] h-10 absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        새로운 연락처를 입력해주세요.
                    </p>
                    <div className="w-[330px] h-[49px] absolute left-0 top-[41px] overflow-hidden bg-[#b1b1b1]">
                        <p className="w-[330px] h-[50px] absolute left-0 top-[-1px] text-[15px] font-bold text-center text-white/50">
                            010-1234-5678
                        </p>
                    </div>
                </div>
                <div className="w-[330px] h-[140px] absolute left-0 top-[443px] overflow-hidden">
                    <div className="w-20 h-10 absolute left-[37px] top-[50px]">
                        <div className="w-20 h-10 absolute left-[-1px] top-[-1px] rounded-[15px] bg-[#fd3030]" />
                        <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                            return
                        </p>
                    </div>
                    <div className="w-20 h-10 absolute left-52 top-[50px] overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                        <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                            send
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[375px] h-[53px] absolute left-0 top-[759px] overflow-hidden bg-[#454545]">
                <div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] bg-[#454545]" />
                <div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] rounded-tr-[20px] bg-[#d9d9d9]" />
                <div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] bg-[#d9d9d9]" />

                <div className="w-6 h-6 absolute left-[301px] top-3" />
                <svg
                    width={24}
                    height={27}
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-[25.96px] absolute left-[301px] top-[13.25px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M2.66669 23.3248H21.3334V20.4405H2.66669V23.3248ZM2.66669 17.5561H21.3334V14.6718H2.66669V17.5561ZM2.66669 3.13437V6.01872H21.3334V3.13437H2.66669ZM2.66669 11.7874H21.3334V8.90308H2.66669V11.7874Z"
                        fill="white"
                    />
                </svg>
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
                                연락처 수정
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
                                stroke-width={2}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoUpdatePhone;