interface props {
    title: string,
    content: string
}

const ToggleList = ({ title, content }: props) => {
    return (
        <div className="w-[331px] h-[35px] relative overflow-hidden flex border-b justify-between items-center">
            <div className="w-[331px] h-[35px] overflow-hidden">
                <div className="w-[331px] h-[35px] overflow-hidden text-[15px] font-bold text-white flex flex-shrink-0 justify-start items-center px-2">
                    {title}
                </div>
            </div>
            <div className="w-[35px] h-full items-center overflow-hidden p-2">
                <svg
                    width={20}
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
