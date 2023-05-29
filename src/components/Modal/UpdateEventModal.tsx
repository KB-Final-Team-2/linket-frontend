import WebInfoInput from "../Input/WebInfoInput";
import Modal from "./Modal"
import { useRef, useState } from "react";
import WebSelectButton from "../Button/Web/WebSelectButton";
import { Event, RegistEvent } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";


const UpdateEventModal = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const event = useSelector((state: any) => state.event);
    const eventData: Event = event?.data;
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState("2021-02-03");
    const [endDate, setEndDate] = useState("2021-02-03");
    const [type, setType] = useState(event.eventType);
    const typeList = ["concert", "festival", "etc"];

    const updateEvent = () => {
        const event: RegistEvent = {
            eventName: nameRef.current?.value || eventData.eventName,
            eventType: type,
            place: placeRef.current?.value || eventData.place,
            placeId: "",
            eventImage: undefined,
            eventInq: inqRef.current?.value || eventData.eventInq,
            eventDesc: descRef.current?.innerText || eventData.eventDesc,
            startDate: startDate?.toString() || eventData.startDate,
            endDate: endDate?.toString() || eventData.endDate,
            eventCompanyId: 0
        }
    }

    return (
        <Modal>
            <div className="w-full h-[100px] overflow-hidden flex flex-shrink-0 justify-center items-center text-[40px] font-bold text-center text-white">
                행사 수정
            </div>
            <div className="w-full h-full overflow-hidden border-y border-white">
                <div className="w-full h-full overflow-hidden flex flex-col py-5 justify-between gap-3">
                    <WebInfoInput title={"행사명"} ref={nameRef} value={eventData.eventName} />
                    <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0 px-5">
                        <p className="w-48 h-fit text-[15px] font-bold text-center text-white flex justify-center items-center">
                            행사 시작일
                        </p>
                        <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target?.value)}/>
                    </div>
                    <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0 px-5">
                        <p className="w-48 h-full text-[15px] font-bold text-center text-white flex justify-center items-center">
                            행사 종료일시
                        </p>
                        <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target?.value)}/>
                    </div>
                    <WebInfoInput title={"행사 장소"} ref={placeRef} value={eventData.place} />
                    <WebInfoInput title={"행사 문의처"} ref={inqRef} value={eventData.eventInq} />
                    <WebInfoInput title={"행사 이미지"} ref={imageRef} value={eventData.eventImage} />
                    <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0 px-5">
                        <p className="w-48 h-full text-[15px] font-bold text-center text-white">
                            행사 분류
                        </p>
                        <div className="w-full h-full overflow-hidden flex items-center justify-between px-5">
                            {typeList?.map((v, i) => (<WebSelectButton key={i} title={v} state={v === type} func={() => { setType(v) }} />))}
                        </div>
                    </div>
                    <div className="w-full h-[150px] overflow-hidden flex flex-shrink-0 flex-grow-0 px-5">
                        <p className="w-48 h-full text-[15px] font-bold text-center text-white">
                            행사 설명
                        </p>
                        <textarea
                            ref={descRef}
                            className="mx-5 w-full h-full overflow-hidden rounded-[9px] text-[15px] bg-[#c4c4c4]/[0.31] focus:outline-none focus:bg-[#c4c4c4]/[0.50] px-4 py-2"
                            value={eventData.eventDesc}
                        />
                    </div>
                </div>

            </div>
            <div className="w-full h-24 overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <Button title="수정" type={"default"} func={() => { }} />
            </div>
        </Modal>
    )
}

export default UpdateEventModal;