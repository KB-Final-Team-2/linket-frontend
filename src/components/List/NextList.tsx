import { FuncListProps } from "../../interface/props";

const NextList = ({ title, func }: FuncListProps) => {
    return (
        <div
            className="w-full h-[45px] overflow-hidden flex flex-shrink-0 border-b justify-between"
            onClick={() => { func() }}
        >
            <div className="w-full h-full overflow-hidden text-base font-bold text-white flex justify-start items-center pl-5">
                {title}
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
    )
}

export default NextList;