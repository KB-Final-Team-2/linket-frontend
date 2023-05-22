import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Hire } from "../../interface/Hire";
import { ListProps } from "../../interface/ListProps";

const HireSearchDetail = () => {
    const hire : Hire = useSelector((state:any)=>state.hire?.data);
    
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
                </div>
            </div>
            <NavBar role="part" state="1" />
        </div>
    )
}
export default HireSearchDetail;