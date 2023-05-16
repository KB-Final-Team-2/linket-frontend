interface props {
    title: string,
    content: string
}

const LargeList = ({title, content} : props) => {
    return (
        <div className="w-[331px] h-[50px] relative overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
            <div className="w-[100px] h-[50px] absolute left-0 top-0 overflow-hidden">
                <p className="w-[100px] h-[50px] absolute left-0 top-0 text-[15px] font-bold text-center text-[#d9d9d9]">
                    {title}
                </p>
            </div>
            <div className="flex justify-end items-center w-[231px] h-[50px] absolute left-[100px] top-0 overflow-hidden gap-2.5 pr-2.5">
                <p className="flex-grow-0 flex-shrink-0 w-[221px] h-[52px] text-[15px] font-bold text-right text-white">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default LargeList;