const Header = () => {
    return (
        <div className="w-[331px] h-[125px] relative">
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
                            User name
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
    )
}