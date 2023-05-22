import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { ListProps } from "../../interface/ListProps";
import { Hire } from "../../interface/Hire";
import { Link } from "react-router-dom";

const HireDetail = () => {
    const hire : Hire = useSelector((state:any)=>state.hire.hire);

    const infoList : ListProps[] = [
        {title:"공고명", content:hire?.workName},
        {title:"근무일", content:`${hire?.workStartDate} ~ ${hire?.workEndDate}`},
        {title:"근무 시간", content:`${hire?.workHour}`},
        {title:"시급", content:`${hire?.pay}`},
        {title:"문의처", content:hire?.edu},
    ];
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="공고 상세" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[331px] h-[580px] flex flex-col border-y">
                    <div className="w-[331px] h-full overflow-hidden border-y border-white flex flex-col">
                        {infoList.map((v,i) => {
                            return (<List key={i} title={v.title} content={v.content!} />)
                        })}
                    </div>
                    <div className="w-full h-[156px] flex flex-shrink-0 flex-grow-0">
                        <Link to={`/part/${hire.hireId}/attend`} className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black flex justify-center items-center flex-shrink-0">
                            근태 관리
                        </Link>
                        <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                            <Button title={"Delete"} type={"delete"} func={()=>{}} />
                            <Button title={"Review"} type={"default"} func={()=>{}} />
                        </div>
                    </div>
                </div>
            </div>
            <NavBar role="part" state="1" />
        </div>
    )

}
export default HireDetail;