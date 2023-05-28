interface props {
    state: boolean;
    func: Function;
}

const AttendToggle = ({ state, func }: props) => {
    return (
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
            <rect x={15} y={10} width={60} height={30} rx={15} fill={`${state ? "#ff9f0e" :"#D9D9D9"}`} className="transition-all ease-in-out"/>
            <circle cx={30} cy={25} r={15} fill={`${state ? "#fff" : "#FF9F0E"}`} className={`transition-all ease-in-out ${state&&"translate-x-[30px]"}`} />
            <line x1={31} y1={18} x2={31} y2={33} stroke={state ? "white" : "#ff9f0e"} strokeWidth={2} className="transition-all ease-in-out"/>
            <circle cx="60.5" cy="25.5" r={7} stroke={state ? "white" : "#ff9f0e"}  className="transition-all ease-in-out"/>
        </svg>
    )
};

export default AttendToggle;