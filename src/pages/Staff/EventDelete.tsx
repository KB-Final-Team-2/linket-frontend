import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import NavBar from "../../components/NavBar/NavBar";
import { Event } from "../../interface/Event";
import Templete from "../Templete";
import { deleteEvent } from "../../redux/slice/eventSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const EventDelete = () => {
    const event = useSelector((state:any)=>state.event);
    const eventData : Event = event?.data;
    const dispatch : any = useDispatch();
    const navigate = useNavigate();

    const list = [
        { title: "행사명", content: eventData.eventName },
        { title: "행사 분류", content: eventData.eventType },
        { title: "행사 기간", content: `${eventData.startDate} ~ ${eventData.endDate}` },
        { title: "행사 장소", content: eventData.place }
    ]

    const handleDelete = () => {
        dispatch(deleteEvent(event.eventId))
        .then(unwrapResult)
        .then(()=>{
            navigate("/staff");
        })
        .catch((err:Error)=>{
            console.log(err);
        })
    }

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="행사 삭제" />
                <div className="w-[331px] h-full">
                    <div className="w-[331px] h-[580px] border-y overflow-hidden">
                        <div className="w-[331px] h-fit overflow-hidden border-white">
                            {list.map((v, i) => {
                                return (<List key={i} title={v.title} content={v.content} />)
                            })}
                        </div>
                        <div className="w-[331px] h-full top-[177px] overflow-hidden">
                            <div className="w-[331px] h-[244px] overflow-hidden flex flex-col justify-center items-center">
                                <p className="w-[331px] text-xl font-bold text-center text-white flex flex-col gap-3">
                                    <span className="w-[330px] text-xl font-bold text-center text-white">
                                        해당 행사를 삭제하시겠습니까?
                                    </span>
                                    <br />
                                    <span className="w-[331px] text-[16px] font-bold text-center text-white">
                                        삭제된 행사는 복구할 수 없으며,
                                    </span>
                                    <span className="w-[331px] text-[16px] font-bold text-center text-white">
                                        기존에 등록된 리뷰 및 이미지가 모두 삭제됩니다.
                                    </span>
                                </p>
                            </div>
                            <div className="w-[331px] h-[202px] overflow-hidden flex justify-center items-center px-10">
                                <Button title={"Delete"} type={"delete"} func={() => { handleDelete() }} loading={event.loading} />
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}
export default EventDelete; 