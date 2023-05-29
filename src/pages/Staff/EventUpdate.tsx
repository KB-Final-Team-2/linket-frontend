import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import RegistInput from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import SelectButton from "../../components/Button/SelectButton";
import { Event } from "../../interface/Event";
import { getEvent, updateEvent } from "../../redux/slice/eventSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Content from "../Templete/Content";

const EventRegister = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const event = useSelector((state: any) => state.event);
    const eventData: Event = event.data;
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(eventData.startDate);
    const [endDate, setEndDate] = useState(eventData.endDate);
    const [type, setType] = useState(eventData.eventType);
    const typeList = ["concert", "festival", "etc"];

    const handleUpdate = () => {
        // const event : Event = {
        //     eventId: eventData.eventId,
        //     companyId: eventData.companyId,
        //     eventName: nameRef.current?.value || eventData.eventName,
        //     eventType: type,
        //     place: placeRef.current?.value || eventData.place,
        //     eventImage: imageRef.current?.value || eventData.eventImage,
        //     eventInq: inqRef.current?.value || eventData.eventInq,
        //     eventDesc: descRef.current?.value || eventData.eventDesc,
        //     eventStatus: eventData.eventStatus,
        //     startDate: startDate?.toString() || eventData.startDate,
        //     endDate: endDate?.toString() || eventData.endDate,
        //     regDate: eventData.regDate,
        //     lastUpdatedDate: eventData.lastUpdatedDate,
        //     deletedDate: eventData.deletedDate
        // }

        // dispatch(updateEvent(event))
        // .then(unwrapResult)
        // .then(()=>{
        //     dispatch(getEvent(eventData.eventId));
        //     navigate("/staff");
        // })
        // .catch((err:Error)=>{
        //     console.log(err);
        // })
    }

    return (
        <Templete>
            <Header title="행사 생성" />
            <Content>
                <RegistInput title={"행사명"} ref={nameRef} value={eventData.eventName} />
                <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                    <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                        행사 분류
                    </p>
                    <div className="w-[215px] h-[37px] overflow-hidden flex gap-1">
                        {typeList.map((v, i) => (
                            <SelectButton key={i} state={v === type} title={v} func={() => { setType(v) }} />
                        ))}
                    </div>
                </div>
                <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0 text-[15px] font-bold text-center text-white items-center">
                    <p className="w-fit h-fit flex-shrink-0">
                        행사 시작일시
                    </p>
                    <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target?.value)}/>
                </div>
                <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                    <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                        행사 종료일시
                    </p>
                    <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target?.value)}/>
                </div>
                <RegistInput title={"행사 장소"} ref={placeRef} value={eventData.place} />
                <RegistInput title={"행사 정보 이미지"} ref={imageRef} value={eventData.eventImage} />
                <RegistInput title={"행사 문의처"} ref={inqRef} value={eventData.eventInq} />
                <div className="w-[330px] h-full overflow-hidden flex">
                    <p className="w-[115px] h-[175px] text-[15px] font-bold text-center text-white">
                        행사 설명
                    </p>
                    <textarea
                        ref={descRef}
                        className="w-[215px] h-[175px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2"
                        defaultValue={eventData.eventDesc}
                    />
                </div>
                <Button title={"Create"} type={"default"} func={() => { console.log(nameRef.current?.value) }} loading={event.loading} />
            </Content>
            <NavBar role="staff" state="1" />
        </Templete>
    )
}

export default EventRegister;