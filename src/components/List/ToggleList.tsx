interface props {
    title: string,
    content: string
}

const ToggleList = ({ title, content }: props) => {
    return (
        <div className="w-[331px] h-[37px] relative overflow-hidden">
            <div className="w-[331px] h-[37px] absolute left-0 top-0 overflow-hidden">
                <div className="w-[331px] h-[37px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[331px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        {title}
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
            <div className="flex justify-start items-start absolute left-[331px] top-0 overflow-hidden gap-2.5 p-2">
                <svg
                    width={19}
                    height={16}
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M16.8619 1.25049L9.50073 14.0005L2.13952 1.25049L16.8619 1.25049Z"
                        fill="#FF6000"
                        stroke="#454545"
                        strokeWidth={2}
                    />
                </svg>
            </div>
        </div>
    )
}

export default ToggleList;
