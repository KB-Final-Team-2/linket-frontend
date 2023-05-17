interface props {
    title: string,
    type: string,
    id: number,
}

const ConcertList = (props: props) => {
    return (
        <div className="w-[331px] h-[60px] overflow-hidden flex border-b">
            <div className="w-[60px] h-[60px] overflow-hidden flex-shrink-0 border-r text-[15px] font-bold text-center text-secondary flex justify-center items-center">
                {props.type}
            </div>
            <div className="w-[260px] h-[60px] overflow-hidden flex-shrink-0 text-[15px] font-bold text-center text-secondary flex justify-start items-center px-5">
                {props.title}
            </div>
        </div>
    )
}

export default ConcertList;