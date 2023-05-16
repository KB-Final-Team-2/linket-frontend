interface props {
    title: string,
    content: string
}

const ListComponent = ({title, content}:props) => {
    return (
        <div className="w-[331px] h-[37px] relative overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
            <p className="w-[115.35px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                {title}
            </p>
            <p className="w-[215.65px] h-[37px] absolute left-[115.35px] top-0 text-[15px] font-bold text-center text-white">
                {content}
            </p>
        </div>
    )
}

export default ListComponent;