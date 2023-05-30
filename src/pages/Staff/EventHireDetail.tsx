import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { Event } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { FuncListProps, ListProps } from "../../interface/props";
import { Hire, INIT_HIRE } from "../../interface/Hire";
import { setHire } from "../../redux/slice/hireSlice";
import Content from "../Templete/Content";
import Button from "../../components/Button/Button";
import { _db, db } from "../../firebase";
import { setDoc } from "firebase/firestore";
import BigButton from "../../components/Button/BigButton";

const EventHireDetail = () => {
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const hireList: Hire[] = useSelector((state: any) => state.hire?.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list: ListProps[] = [
        { title: "공고번호", content: `${hire?.hireId}` },
        { title: "공고명", content: hire?.workName },
        { title: "근무기간", content: `${hire.workStartDay.split("-").slice(0, 3).join("-")} ~ ${hire.workStartDay.split("-").slice(0, 3).join("-")}` },
        { title: "근무시간", content: `${hire?.workHour}시간(일)` },
        { title: "시급", content: `${hire?.pay}만원` },
        { title: "등록코드", content: `${hire?.hireId}` },
        { title: "문의처", content: `${event?.eventInq}` },
        { title: "등록일자", content: hire?.regDate },
    ]

    const dropdownList: FuncListProps[] = [
        { title: "공고 수정", func: () => { navigate("/staff/hire/update") } },
        { title: "공고 삭제", func: () => { navigate("/staff/hire/delete") } }
    ]

    const handleChat = () => {
        const queryRef = _db.query(_db.collection(db, "chat"), _db.where("hireId", "==", hire.hireId));

        _db.getDocs(queryRef)
            .then((query) => {
                const chatData = query.docs.at(0);
                console.log(query.docs.at(0));
                if (!chatData) {
                    const newRef = _db.doc(_db.collection(db, "chat"));
                    const initChat = { hireId: hire.hireId, eventId: event.eventId, chat: [] }

                    _db.setDoc(newRef, initChat).then(() => { navigate("/staff/hire/chat") })
                } else navigate("/staff/hire/chat");
            })

        // navigate("/staff/hire/chat")
    }

    return (
        <>
            <Header title="공고 상세" func={() => { dispatch(setHire(INIT_HIRE)) }} list={dropdownList} />
            <Content>
                {list?.map((v, i) => {
                    return (<List key={i} title={v.title} content={v.content || ""} />)
                })}

                <div className="w-full h-full overflow-hidden border-b flex">
                    <p className="w-[115px] h-full text-base font-bold text-center text-white text-place-center">
                        사전 교육 정보
                    </p>
                    <p className="w-[215px] h-full text-base font-bold text-center text-white text-place-center">
                        {hire?.edu}
                    </p>
                </div>
                <div className="w-full h-fit text-place-center py-2 px-4">
                    
                    <BigButton title="채팅" type="default" func={handleChat} />
                </div>

            </Content>
        </>
    )
}
export default EventHireDetail;