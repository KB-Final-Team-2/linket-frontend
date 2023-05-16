interface props {
    title:string,
    content:string
}

const TableInfo = ({title, content}:props) => {
    return (
        <div className="w-[330px] h-[37px] relative overflow-hidden">
            <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                {title}
            </p>
            <p className="w-[215px] h-[37px] absolute left-[115px] top-0 text-[15px] font-bold text-center text-white">
                {content}
            </p>
            <svg
                width={330}
                height={4}
                viewBox="0 0 330 4"
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

export default TableInfo;