import WebInfoInput from "../Input/WebInfoInput";
import Modal from "./Modal"
import { useRef, useState } from "react";
import WebSelectButton from "../Button/Web/WebSelectButton";
import { RegistEvent } from "../../interface/Event";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import moment from "moment";

const CreateEventModal = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
    const [type, setType] = useState("");
    const typeList = ["concert", "festival", "etc"];

    const registEvent = () => {
        const event: RegistEvent = {
            eventName: nameRef.current?.value || "",
            eventType: type,
            place: placeRef.current?.value || "",
            placeId: "",
            eventImage: undefined,
            eventInq: inqRef.current?.value || "",
            eventDesc: descRef.current?.innerText || "",
            startDate: startDate?.toString() || "",
            endDate: endDate?.toString() || "",
            eventCompanyId: 0,
            link:"",
        }
    }

    const handleRegist = () => {

    }

    return (
        <Modal>
            <div className="w-full h-[100px] overflow-hidden flex flex-shrink-0 justify-center items-center text-[40px] font-bold text-center text-white">
                행사 등록
            </div>
            <div className="w-full h-full overflow-hidden border-y border-white">
                <div className="w-full h-full overflow-hidden flex flex-col py-5 justify-between gap-3">
                    <WebInfoInput title={"행사명"} ref={nameRef} />
                    <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0 px-5">
                        <p className="w-48 h-fit text-base font-bold text-center text-white flex justify-center items-center">
                            행사 시작일
                        </p>
                        <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target?.value)}/>
                    </div>
                    <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0 px-5">
                        <p className="w-48 h-full text-base font-bold text-center text-white flex justify-center items-center">
                            행사 종료일시
                        </p>
                        <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target?.value)}/>
                    </div>
                    <WebInfoInput title={"행사 장소"} ref={placeRef} />
                    <WebInfoInput title={"행사 문의처"} ref={inqRef} />
                    <WebInfoInput title={"행사 이미지"} ref={imageRef} />
                    <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0 px-5">
                        <p className="w-48 h-full text-base font-bold text-center text-white">
                            행사 분류
                        </p>
                        <div className="w-full h-full overflow-hidden flex items-center justify-between px-5">
                            {typeList?.map((v, i) => (<WebSelectButton key={i} title={v} state={v === type} func={() => { setType(v) }} />))}
                        </div>
                    </div>
                    <div className="w-full h-[150px] overflow-hidden flex flex-shrink-0 flex-grow-0 px-5">
                        <p className="w-48 h-full text-base font-bold text-center text-white">
                            행사 설명
                        </p>
                        <textarea
                            ref={descRef}
                            className="mx-5 w-full h-full overflow-hidden rounded-[9px] text-base bg-[#c4c4c4]/[0.31] focus:outline-none focus:bg-[#c4c4c4]/[0.50] px-4 py-2"
                        />
                    </div>
                </div>

            </div>
            <div className="w-full h-24 overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <Button title="등록" type={"default"} func={handleRegist} />
            </div>
        </Modal>
    )
}

export default CreateEventModal;