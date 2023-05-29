interface props {
    title: string,
    content1: string,
    content2: string
}

const Grid3Header = ({ title, content1, content2 }: props) => {
    return (
        <div className="w-[331px] h-9 overflow-hidden flex border-b">
            <div className="w-[159px] h-9 overflow-hidden">
                <p className="w-[159px] h-9 text-[15px] font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                    {title}
                </p>
            </div>
            <div className="w-[86px] h-9 overflow-hidden border-x">
                <p className="w-[86px] h-9 text-[15px] font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                    {content1}
                </p>
            </div>
            <div className="w-[86px] h-9 overflow-hidden">
                <p className="w-[86px] h-9 text-[15px] font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                    {content2}
                </p>
            </div>
        </div>
    )
}

export default Grid3Header;