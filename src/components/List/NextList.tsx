interface props {
    title: string
}

const NextList = ({ title }: props) => {
    return (
        <div className="w-[331px] h-[37px] overflow-hidden flex flex-shrink-0 border-b">
            <div className="w-[331px] h-[37px] overflow-hidden relative flex justify-between">
                <div className="w-[331px] h-[37px] overflow-hidden">
                    <p className="w-full h-[37px] text-[15px] font-bold text-left text-white flex justify-start items-center pl-5">
                        {title}
                    </p>
                </div>
                <div className="w-10 h-full flex flex-shrink-0 justify-center items-center">
                    <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1.25 2.63878L14 10L1.25 17.3612L1.25 2.63878Z"
                            fill="#FF6000"
                            stroke="#454545"
                            strokeWidth={2}
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NextList;