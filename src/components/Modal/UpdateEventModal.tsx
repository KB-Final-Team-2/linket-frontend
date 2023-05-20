import WebInfoInput from "../Input/WebInfoInput";
import Modal from "./Modal"
import { useRef, useState } from "react";
import DatePicker from "../Input/DatePicker";
import { AiOutlineClose } from "react-icons/ai";
import WebSelectButton from "../Button/WebSelectButton";
import { Event, RegistEvent } from "../../interface/Event";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { closeModal } from "../../redux/slice/modalSlice";


const UpdateEventModal = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const event: Event = useSelector((state: any) => state.event.event);
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState<Date | null>(new Date("2021-02-03"));
    const [endDate, setEndDate] = useState<Date | null>(new Date("2021-02-03"));
    const [type, setType] = useState(event.eventType);
    const typeList = ["concert", "festival", "etc"];

    const updateEvent = () => {
        const event: RegistEvent = {
            eventName: nameRef.current?.value|| "",
            eventType: type,
            place: placeRef.current?.value || "",
            eventImg: undefined,
            eventInq: inqRef.current?.value || "",
            eventDesc: descRef.current?.innerText || "",
            startDate: startDate!,
            endDate: endDate!,
            companyId: ""
        }
    }

    return (
        <>
                <Modal>
                    <div className="w-[600px] h-[800px] relaitve overflow-hidden rounded-[49px] bg-[#454545] border-[10px] border-white flex flex-col">
                        <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 justify-center items-center text-[40px] font-bold text-center text-white">
                            행사 등록
                        </div>
                        <div className="w-[600px] h-[600px] overflow-hidden border-y border-white">
                            <div className="w-[560px] h-[562.75px] overflow-hidden flex flex-col py-5 justify-between">
                                <WebInfoInput title={"행사명"} ref={nameRef} value={event.eventName} />
                                <div className="w-[558.31px] h-[39.14px] overflow-hidden flex items-center">
                                    <p className="w-[194.56px] h-[39.14px] text-[15px] font-bold text-center text-white">
                                        행사 기간
                                    </p>
                                    <DatePicker title="" date={startDate} setDate={setStartDate} />
                                </div>
                                <div className="w-[558.31px] h-[39.14px] overflow-hidden flex items-center">
                                    <p className="w-[194.56px] h-[39.14px] text-[15px] font-bold text-center text-white">
                                        행사 종료일시
                                    </p>
                                    <DatePicker title="" date={endDate} setDate={setEndDate} />
                                </div>
                                <WebInfoInput title={"행사 장소"} ref={placeRef} value={event.place} />
                                <WebInfoInput title={"행사 문의처"} ref={inqRef} value={event.eventInq} />
                                <WebInfoInput title={"행사 이미지"} ref={imgRef} value={event.eventImg} />
                                <div className="w-[558.31px] h-[39.14px] overflow-hidden flex items-center">
                                    <p className="w-[194.56px] h-[39.14px] text-[15px] font-bold text-center text-white">
                                        행사 분류
                                    </p>
                                    <div className="w-[363.75px] h-[39.14px] overflow-hidden flex items-center justify-between px-10">
                                        {typeList.map((v, i) => (<WebSelectButton key={i} title={v} state={v === type} func={() => { setType(v) }} />))}
                                    </div>
                                </div>
                                <div className="w-[558.31px] h-[185.11px] overflow-hidden flex flex-shrink-0 flex-grow-0">
                                    <p className="w-[194.56px] h-[185.11px] text-[15px] font-bold text-center text-white">
                                        행사 설명
                                    </p>
                                    <textarea
                                        ref={descRef}
                                        className="w-[363.75px] h-[185.11px] overflow-hidden rounded-[9px] text-lg font-bold bg-[#c4c4c4]/[0.31] focus:outline-none focus:bg-[#c4c4c4]/[0.50] px-4 py-2"
                                    >
                                        {event.eventDesc}
                                    </textarea>
                                </div>
                            </div>

                        </div>
                        <div className="w-[600px] h-[100px] overflow-hidden flex justify-center items-center flex-shrink-0">
                            <Button title="수정" type="default" func={()=>{}}/>
                        </div>
                        <AiOutlineClose className="absolute right-8 top-8 text-3xl" onClick={() => {dispatch(closeModal()) }} />
                    </div>
                </Modal>
        </>
    )
}

export default UpdateEventModal;