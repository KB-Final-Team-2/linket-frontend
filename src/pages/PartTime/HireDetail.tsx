import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { ListProps } from "../../interface/props";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { Link, useNavigate } from "react-router-dom";
import { setHire } from "../../redux/slice/hireSlice";
import Content from "../Templete/Content";
import { useEffect, useState } from "react";
import { _db, db } from "../../firebase";

const HireDetail = () => {
    const [isChat, setIsChat] = useState(false);
    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const infoList: ListProps[] = [
        { title: "공고명", content: hire?.workName },
        { title: "근무일", content: `${hire?.workStartDay.slice(0,10)} ~ ${hire?.workEndDay.slice(0,10)}` },
        { title: "근무 시간", content: `${hire?.workHour}시간(일)` },
        { title: "시급", content: `${hire?.pay}원` },
    ];

    useEffect(()=>{
        const handleChat = () => {
            const queryRef = _db.query(_db.collection(db, "chat"), _db.where("hireId", "==", hire?.hireId));
    
            _db.getDocs(queryRef)
                .then((query) => {
                    const chatData = query.docs.at(0);
                    console.log(query.docs.at(0));
                    if (!chatData)  setIsChat(false);
                    else            setIsChat(true);
                })
    
            // navigate("/staff/hire/chat")
        }

        handleChat();
    },[])

    return (
        <>
            <Header title="공고 상세" func={() => { dispatch(setHire(INIT_HIRE)) }} />
            <Content>
                <div className="w-[331px] h-full overflow-hidden border-white flex flex-col">
                    {infoList?.map((v, i) => {
                        return (<List key={i} title={v.title} content={v.content!} />)
                    })}
                    <div className="w-[330px] h-full overflow-auto border-b flex">
                        <p className="w-[115px] h-full text-[15px] font-bold text-center text-white text-place-center">
                            사전 교육
                        </p>
                        <p className="w-[215px] h-full text-[15px] font-bold text-center text-white text-place-center">
                            {hire.edu}
                        </p>
                    </div>
                </div>
                <div className="w-full h-[156px] flex flex-shrink-0 flex-grow-0">
                    <Link to={`/part/attend`} className="w-[153px] h-[156px] overflow-hidden bg-[#d9d9d9] text-[15px] font-bold text-left text-black text-place-center flex-shrink-0">
                        근태 관리
                    </Link>
                    <div className="w-[153px] h-[156px] overflow-hidden flex flex-col justify-center items-center gap-5">
                        <Button title={"Delete"} type={"delete"} func={() => { }} />
                        <Button title={"chat"} type={isChat?"default":"unable"} func={() => { navigate("/part/chat") }} />
                    </div>
                </div>
            </Content>
        </>
    )
}
export default HireDetail;