interface props {
    title:string,
    content:string
}

const TableInfo = ({title, content}:props) => {
    return (
        <div className="w-[330px] h-[37px] relative overflow-hidden border-b flex flex-shrink-0">
            <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white border-r flex flex-shrink-0 justify-center items-center">
                {title}
            </p>
            <p className="w-[215px] h-[37px] text-[15px] font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                {content}
            </p>
        </div>
    )
}

export default TableInfo;