import { ListProps } from "../../interface/props";

const List = ({ title, content }: ListProps) => {
    return (
        <div className="w-[331px] h-[37px] overflow-hidden border-b border-white flex flex-shrink-0 text-base ">
            <p className=" w-[115px] h-[37px] font-bold text-white flex justify-center items-center flex-shrink-0 flex-grow-0">
                {title}
            </p>
            <p className="w-full h-[37px] font-bold text-white flex justify-start items-center flex-shrink-0 flex-grow-0">
                {content}
            </p>
        </div>
    )
}

export default List;