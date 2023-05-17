interface props {
    title: string,
    content: string
}

const LargeList = ({ title, content }: props) => {
    return (
        <div className="w-[331px] h-[50px] relative overflow-hidden border-b border-white flex">
            <div className="w-[100px] h-[50px] overflow-hidden text-[15px] font-bold text-center text-[#d9d9d9] flex flex-shrink-0 justify-center items-center">
                {title}
            </div>
            <div className="flex justify-end items-center w-[231px] h-[50px] overflow-hidden gap-2.5 pr-2.5 text-[15px] font-bold text-right text-white">
                {content}
            </div>
        </div>
    )
}

export default LargeList;