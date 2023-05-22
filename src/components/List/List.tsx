import { ListProps } from "../../interface/ListProps";

const List = ({title, content}:ListProps) => {
    return (
        <div className="w-[331px] h-[37px] overflow-hidden border-b border-white flex flex-shrink-0">
            <p className=" w-[115px] h-[37px] text-[15px] font-bold text-center text-white flex justify-center items-center flex-shrink-0 flex-grow-0">
                {title}
            </p>
            <p className="w-[216px] h-[37px] text-[15px] font-bold text-center text-white flex justify-center items-center flex-shrink-0 flex-grow-0">
                {content}
            </p>
        </div>
    )
}

export default List;