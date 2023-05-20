interface props {
    state: boolean;
    func: Function;
}

const AttendToggle = ({ state, func }: props) => {
    return (
        <>
            {
                state
                    ? (
                        <svg
                            width={90}
                            height={50}
                            viewBox="0 0 90 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[90px] h-[50px] relative"
                            preserveAspectRatio="none"
                            onClick={() => { func() }}
                        >
                            <rect x={15} y={10} width={60} height={30} rx={15} fill="#FF9F0E" />
                            <line x1={31} y1={18} x2={31} y2={33} stroke="white" stroke-width={2} />
                            <path
                                d="M75 25C75 33.2843 68.2843 40 60 40C51.7157 40 45 33.2843 45 25C45 16.7157 51.7157 10 60 10C68.2843 10 75 16.7157 75 25Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        <svg
                            width={90}
                            height={50}
                            viewBox="0 0 90 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[90px] h-[50px] relative"
                            preserveAspectRatio="none"
                            onClick={()=>{func()}}
                        >
                            <rect x={15} y={10} width={60} height={30} rx={15} fill="#D9D9D9" />
                            <circle cx={30} cy={25} r={15} fill="#FF9F0E" />
                            <circle cx="60.5" cy="25.5" r={7} stroke="#FF9F0E" />
                        </svg>
                    )}
        </>
    )
};

export default AttendToggle;