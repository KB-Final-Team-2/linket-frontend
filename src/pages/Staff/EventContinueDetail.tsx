import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { Event, INIT_EVENT } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import { FuncListProps, ListProps } from "../../interface/props";
import { setEvent } from "../../redux/slice/eventSlice";
import Content from "../Templete/Content";
import BigButton from "../../components/Button/BigButton";

const EventContinueDetail = () => {
    const event = useSelector((state: any) => state.event);
    const eventData: Event = event?.data;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list: ListProps[] = [
        { title: "행사명", content: eventData.eventName },
        { title: "행사 분류", content: eventData.eventType },
        { title: "행사 기간", content: `${eventData.startDate} ~ ${eventData.endDate}` },
        { title: "행사 장소", content: eventData.place },
        { title: "행사 코드", content: `${eventData.eventId}` },
        { title: "행사 이미지", content: eventData.eventImage },
    ]

    const dropdownList: FuncListProps[] = [
        { title: "행사 수정", func: () => { navigate("/staff/update") } },
        { title: "행사 삭제", func: () => { navigate("/staff/delete") } },
    ]

    return (
        <>
            <Header title="행사 상세" func={() => { dispatch(setEvent(INIT_EVENT)) }} list={dropdownList} />
            <Content>
                {list?.map((v, i) => {
                    return (<List key={i} title={v.title} content={v.content || ""} />)
                })}

                <div className="w-[330px] h-full overflow-auto border-b flex">
                    <p className="w-[115px] h-full text-base font-bold text-center text-white text-place-center">
                        행사 설명
                    </p>
                    <p className="w-[215px] h-full text-base font-bold text-white py-2 text-start overflow-auto custom-toolbar">
                        {eventData.eventDesc}
                    </p>
                </div>
                <div className="w-full h-fit flex flex-col flex-shrink-0 justify-between px-4 py-2 gap-5">
                    <BigButton title={"모집 공고 관리"} type={"default"} func={()=>{navigate("/staff/hire")}} />
                    <BigButton title={"행사 근태 관리"} type={"default"} func={()=>{navigate("/staff/attend")}} />
                </div>
            </Content>
        </>
    )
}
export default EventContinueDetail;