import {BiDotsVertical} from "react-icons/bi"
import { User } from "../../interface/User"
import { useSelector } from "react-redux"

interface props {
    title: string
}

const IndexHeader = ({title}:props) => {
    const user : User = useSelector((state:any)=>state.auth?.data);
    return (
        <div className="w-full h-[125px] relative overflow-hidden flex flex-col justify-center items-center flex-shrink-0">
            <div className="w-[331px] h-[30px] overflow-hidden" />
            <div className="w-[331px] h-[95px] overflow-hidden flex justify-between items-center">
                <p className="w-[257px] h-[95px] text-3xl font-medium text-left text-white flex items-center">
                    {user.role==="member"&&"김세건님, 반갑습니다."}
                    {user.role==="staff"&&"문석진님, 반갑습니다."}
                    {user.role==="part"&&"박도연님, 반갑습니다."}
                </p>
                <BiDotsVertical className="w-10 h-10 text-primary-100-200"/>
            </div>
        </div>
    )
}

export default IndexHeader;