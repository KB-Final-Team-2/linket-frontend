import {BiDotsVertical} from "react-icons/bi"

interface props {
    title: string
}

const IndexHeader = ({title}:props) => {
    return (
        <div className="w-full h-[125px] relative overflow-hidden flex flex-col justify-center items-center flex-shrink-0">
            <div className="w-[331px] h-[30px] overflow-hidden" />
            <div className="w-[331px] h-[95px] overflow-hidden flex justify-between items-center">
                <p className="w-[257px] h-[95px] text-[40px] font-medium text-left text-white flex items-center">
                    {title}
                </p>
                <BiDotsVertical className="w-10 h-10 text-primary-200"/>
            </div>
        </div>
    )
}

export default IndexHeader;