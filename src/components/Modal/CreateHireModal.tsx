import ReactDatePicker from "react-datepicker";
import WebInfoInput from "../Input/WebInfoInput";
import Modal from "./Modal"
import { useRef, useState } from "react";
import DatePicker from "../Input/DatePicker";
import { AiOutlineClose } from "react-icons/ai";
import WebSelectButton from "../Button/WebSelectButton";
import { RegistEvent } from "../../interface/Event";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slice/modalSlice";

interface RegistHire {
    hireName: string;
    workHour: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    pay: string|number;
    edu: string;
}

const CreateHireModal = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const workHourRef = useRef<HTMLInputElement>(null);
    const payRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);
    const eduRef = useRef<HTMLTextAreaElement>(null);

    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    const registEvent = () => {
        const hire: RegistHire = {
            hireName: nameRef.current?.value || "",
            workHour: payRef.current?.value || "",
            startDate: startDate || undefined,
            endDate: endDate || undefined,
            pay: payRef.current?.value || 0,
            edu: eduRef.current?.innerText || "",
        }
    }

    const handleRegist = () => {

    }

    return (
                <Modal>
                    <div className="w-[600px] h-[800px] relative overflow-hidden rounded-[49px] bg-[#454545] border-[10px] border-white flex flex-col box-content">
                        <div className="w-full h-[100px] overflow-hidden flex flex-shrink-0 justify-center items-center text-[40px] font-bold text-center text-white">
                            공고 등록
                        </div>
                        <div className="w-full h-full overflow-hidden border-y border-white">
                            <div className="w-full h-full overflow-hidden flex flex-col py-5 justify-between gap-3">
                                <WebInfoInput title={"공고명"} ref={nameRef} />
                                <div className="w-full h-10 overflow-hidden flex items-center justify-center flex-shrink-0">
                                    <p className="w-48 h-fit text-[15px] font-bold text-center text-white">
                                        근무 시작일시
                                    </p>
                                    <DatePicker title="" date={startDate} setDate={setStartDate} />
                                </div>
                                <div className="w-full h-10 overflow-hidden flex items-center flex-shrink-0">
                                    <p className="w-48 h-full text-[15px] font-bold text-center text-white">
                                        근무 종료일시
                                    </p>
                                    <DatePicker title="" date={endDate} setDate={setEndDate} />
                                </div>
                                <WebInfoInput title={"근무 시간"} ref={workHourRef} />
                                <WebInfoInput title={"시급"} ref={payRef} type="number"/>
                                <WebInfoInput title={"대표 문의처"} ref={imgRef} />
                                <div className="w-full h-[200px] overflow-hidden flex flex-shrink-0 flex-grow-0 px-5">
                                    <p className="w-48 h-full text-[15px] font-bold text-center text-white">
                                        사전 교육 정보
                                    </p>
                                    <textarea
                                        ref={eduRef}
                                        className="mx-5 w-full h-full overflow-hidden rounded-[9px] text-[15px] bg-[#c4c4c4]/[0.31] focus:outline-none focus:bg-[#c4c4c4]/[0.50] px-4 py-2"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="w-full h-24 overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center">
                            <Button title="등록" type={"default"} func={handleRegist} />
                        </div>
                        <AiOutlineClose className="absolute right-8 top-8 text-3xl" onClick={() => { dispatch(closeModal()) }} />
                    </div>
                </Modal>
    )
}

export default CreateHireModal;