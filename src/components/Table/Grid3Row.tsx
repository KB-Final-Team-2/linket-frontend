interface props {
    title: string,
    content1: string,
    content2: string
}

const Grid3Row = ({ title, content1, content2 }: props) => {
    return (
        <div className="w-[331px] h-[37px] relative overflow-hidden border-b border-white flex">
            <div className="w-[159px] h-9 overflow-hidden flex flex-shrink-0 justify-center items-center text-[15px] font-bold text-center text-white">
                {title}
            </div>
            <div className="w-[86px] h-9 overflow-hidden flex flex-shrink-0 justify-center items-center text-[15px] font-bold text-center text-white">
                {content1}
            </div>
            <div className="w-[86px] h-9 overflow-hidden flex flex-shrink-0 justify-center items-center text-[15px] font-bold text-center text-white">
                {content2}
            </div>
        </div>
    )
}

export default Grid3Row;