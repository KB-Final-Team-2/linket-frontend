import { useEffect, useRef, useState } from "react";
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
import { closeModal, setSelectPlaceModal } from "../../redux/slice/modalSlice";
import SelectPlaceModal from "../../components/Modal/SelectPlaceModal";

const EventRegister = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

    const event = useSelector((state: any) => state.event);
    const eventData: Event = event.data;
    const modal = useSelector((state:any)=>state.modal);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const [place, setPlace] = useState({ id: eventData.placeId, content: eventData.place });
    const [type, setType] = useState(eventData.eventType);
    const typeList = ["concert", "festival", "etc"];

    useEffect(() => {
        console.log(eventData);
    }, [])

    const handleUpdate = () => {
        const event: Event = {
            eventId: eventData.eventId,
            eventCompanyId: eventData.eventCompanyId,
            eventName: nameRef.current?.value || eventData.eventName,
            eventType: type,
            place: place.content|| eventData.place,
            placeId: place.id || eventData.placeId,
            eventImage: eventData.eventImage,
            eventInq: inqRef.current?.value || eventData.eventInq,
            eventDesc: descRef.current?.value || eventData.eventDesc,
            eventStatus: eventData.eventStatus,
            startDate: startDateRef.current?.value || eventData.startDate,
            endDate: endDateRef.current?.value || eventData.endDate,
            regDate: eventData.regDate,
            lastUpdatedDate: eventData.lastUpdatedDate,
            deletedDate: eventData.deletedDate,
            link: eventData.link
        }

        dispatch(updateEvent(event))
            .then(unwrapResult)
            .then(() => {
                dispatch(getEvent(eventData.eventId));
                navigate(-1);
            })
            .catch((err: Error) => {
                console.log(err);
            })
    }

    return (
        <>
        <Templete>
            <Header title="행사 수정" />
            <Content>
                <RegistInput title={"행사명"} ref={nameRef} value={eventData.eventName} />
                <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                    <p className="w-[115px] h-[37px] text-base font-bold text-center text-white">
                        행사 분류
                    </p>
                    <div className="w-[215px] h-[37px] overflow-hidden flex gap-1">
                        {typeList?.map((v, i) => (
                            <SelectButton key={i} state={v === type} title={v} func={() => { setType(v) }} />
                        ))}
                    </div>
                </div>
                <RegistInput ref={startDateRef} title="행사 시작일" type="date" value={eventData.startDate} />
                <RegistInput ref={endDateRef} title="행사 종료일" type="date" value={eventData.endDate} />
                <div className="w-full h-fit flex flex-grow-0">
                    <div className="w-[250px] h-[37px] overflow-hidden flex flex-shrink-0 self-stretch">
                        <p className="w-[115px] h-[37px] text-base font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                            행사 장소
                        </p>
                        <input type={type} ref={placeRef} className="w-full h-[37px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" value={place.content} readOnly />
                    </div>
                    <Button title={"검색"} type={"default"} func={() => { dispatch(setSelectPlaceModal()) }} />
                </div>
                <RegistInput title={"행사 문의처"} ref={inqRef} value={eventData.eventInq} />
                <div className="w-[330px] h-full overflow-hidden flex">
                    <p className="w-[115px] h-[175px] text-base font-bold text-center text-white">
                        행사 설명
                    </p>
                    <textarea
                        ref={descRef}
                        className="w-[215px] h-[175px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2"
                        defaultValue={eventData.eventDesc}
                    />
                </div>
                <Button title={"Create"} type={"default"} func={() => { handleUpdate() }} loading={event.loading} />
            </Content>
            <NavBar role="staff" state="1" />
        </Templete>
        {modal.current === "selectPlace" && <SelectPlaceModal onSelect={(place: any) => { setPlace(place); dispatch(closeModal()); }} />}
        </>
    )
}

export default EventRegister;