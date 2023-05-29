interface props {
    content: string
}

const PointList = ({ content }: props) => {
    return (
        <div className="w-[331px] h-[37px] relative overflow-hidden">
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
    )
}

export default PointList;