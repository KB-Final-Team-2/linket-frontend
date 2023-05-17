interface props {
    title: string,
    content: string
}

const List = ({title, content}:props) => {
    return (
        <div className="w-[331px] h-[37px] overflow-hidden border-b border-white flex flex-shrink-0">
            <p className=" w-[115px] h-[37px] text-[15px] font-bold text-center text-white mx-3 flex justify-center items-center">
                {title}
            </p>
            <p className="w-full h-[37px] text-[15px] font-bold text-center text-white">
                {content}
            </p>
        </div>
    )
}

export default List;