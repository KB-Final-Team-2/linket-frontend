interface props {
    title: string,
    content1: string,
    content2: string
}

const Grid3Header = ({ title, content1, content2 }: props) => {
    return (
        <div className="w-[331px] h-9 relative overflow-hidden">
            <div className="w-[86px] h-9 absolute left-[245px] top-0 overflow-hidden">
                <svg
                    width={1}
                    height={36}
                    viewBox="0 0 1 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-[-2px]"
                    preserveAspectRatio="none"
                >
                    <line x1="0.5" y1={-1} x2="0.5" y2={36} stroke="white" />
                </svg>
                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                    {content2}
                </p>
            </div>
            <div className="w-[86px] h-9 absolute left-[159px] top-0 overflow-hidden">
                <svg
                    width={1}
                    height={36}
                    viewBox="0 0 1 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-[-1px]"
                    preserveAspectRatio="none"
                >
                    <line x1="0.5" x2="0.5" y2={37} stroke="white" />
                </svg>
                <p className="w-[86px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                    {content1}
                </p>
            </div>
            <div className="w-[159px] h-9 absolute left-0 top-0 overflow-hidden">
                <p className="w-[159px] h-9 absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                    {title}
                </p>
            </div>
            <svg
                width={331}
                height={3}
                viewBox="0 0 331 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-2.5px] top-[34.5px]"
                preserveAspectRatio="none"
            >
                <line y1={2} x2={331} y2={2} stroke="white" stroke-width={4} />
            </svg>
        </div>
    )
}

export default Grid3Header;