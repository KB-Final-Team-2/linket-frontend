interface props {
    title:string,
    content:string
}

const TableInfo = ({title, content}:props) => {
    return (
        <div className="w-full h-[50px] relative overflow-hidden border-b-4 flex flex-shrink-0 text-base">
            <p className="w-[115px] h-full font-bold text-white flex flex-shrink-0 justify-center items-center">
                {title}
            </p>
            <p className="w-[215px] h-full font-bold text-white flex flex-shrink-0 justify-start items-center">
                {content}
            </p>
        </div>
    )
}

export default TableInfo;