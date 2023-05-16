interface props {
    title: string
}

const IndexHeader = ({title}:props) => {
    return (
        <div className="w-[331px] h-[125px] relative overflow-hidden">
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
                    <circle cx={37} cy={48} r={3} fill="#FF9F0E" />
                    <circle cx={28} cy={48} r={3} fill="#FF9F0E" />
                    <circle cx={46} cy={48} r={3} fill="#FF9F0E" />
                </svg>
                <div className="w-[257px] h-[95px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[257px] h-[95px] absolute left-0 top-0 text-[40px] font-medium text-left text-white">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IndexHeader;