interface props {
    content: string
}

const ListComponent = ({ content }: props) => {
    return (
        <div className="w-[331px] h-[37px] relative overflow-hidden">
            <div className="w-[331px] h-[37px] absolute left-0 top-0 overflow-hidden">
                <div className="w-[331px] h-[37px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[331px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        {content}
                    </p>
                </div>
                <svg
                    width={331}
                    height={1}
                    viewBox="0 0 331 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[-1px] top-9"
                    preserveAspectRatio="none"
                >
                    <line y1="0.5" x2={332} y2="0.5" stroke="white" />
                </svg>
            </div>
            <div className="flex justify-start items-start absolute left-[291px] top-[-0.5px] overflow-hidden gap-2.5 p-2">
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
    )
}

export default ListComponent;