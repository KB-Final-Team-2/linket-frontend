import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InputList from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import DatePicker from "../../components/Input/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import SelectButton from "../../components/Button/SelectButton";
import { Hire } from "../../interface/Hire";

const EventHireUpdate = () => {
    const workNameRef = useRef<HTMLInputElement>(null);
    const workHourRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const payRef = useRef<HTMLInputElement>(null);
    const eduRef = useRef<HTMLTextAreaElement>(null);

    const hire: Hire = useSelector((state: any) => state.hire?.data);
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState<Date | null>(new Date(hire?.workStartDate));
    const [endDate, setEndDate] = useState<Date | null>(new Date(hire?.workEndDate));
    const [type, setType] = useState("");
    const typeList = ["concert", "festival", "etc"];

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="공고 수정" />
                <div className="w-[331px] h-full flex flex-col">
                    <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white py-2 flex flex-col justify-center items-center">
                        <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                            <InputList title={"공고명"} ref={workNameRef} value={hire?.workName} />
                            <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0 text-[15px] font-bold text-center text-white items-center">
                                <p className="w-fit h-fit flex-shrink-0">
                                    행사 시작일시
                                </p>
                                <DatePicker title={""} date={startDate} setDate={(date: Date) => { setStartDate(date) }} />
                            </div>
                            <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                                <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                                    행사 종료일시
                                </p>
                                <DatePicker title={""} date={endDate} setDate={(date: Date) => { setEndDate(date) }} />
                            </div>
                            <InputList title={"근무 시간"} ref={workHourRef} value={`${hire?.workHour}`} />
                            <InputList title={"시급"} ref={payRef} value={`${hire?.pay}`}/>
                            <InputList title={"대표 문의처"} ref={inqRef} value={"`${hire?.workInq}`"}/>
                            <div className="w-[330px] h-full overflow-hidden flex">
                                <p className="w-[115px] h-[175px] text-[15px] font-bold text-center text-white">
                                    사전 교육 정보
                                </p>
                                <textarea ref={eduRef} className="w-[215px] h-[215px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2" >
                                    {hire?.edu}
                                </textarea>
                            </div>
                        </div>
                        <Button title={"Create"} type={"default"} func={() => { console.log(workNameRef.current?.value) }} />
                    </div>
                </div>
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}

export default EventHireUpdate;