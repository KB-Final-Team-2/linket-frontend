import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import RegistInput from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import DatePicker from "../../components/Input/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import SelectButton from "../../components/Button/SelectButton";
import { RegistHire } from "../../interface/Hire";
import { User } from "../../interface/User";
import { Event } from "../../interface/Event";
import { registHire } from "../../redux/slice/hireSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const EventHireRegist = () => {
    const workNameRef = useRef<HTMLInputElement>(null);
    const workHourRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const payRef = useRef<HTMLInputElement>(null);
    const eduRef = useRef<HTMLTextAreaElement>(null);

    const user: User = useSelector((state: any) => state.auth?.data);
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire = useSelector((state: any) => state.hire);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [isOk, setIsOk] = useState(false);

    const handleRegist = () => {
        // const hire : RegistHire = {
        //     eventId: event.eventId,
        //     companyId: user.companyId,
        //     workName: workNameRef.current?.value || "",
        //     workHour: Number.parseInt(workHourRef.current?.value || "0"),
        //     workStartDate: startDate?.toString() || new Date().toString(),
        //     workEndDate: endDate?.toString() || new Date().toString(),
        //     pay: Number.parseInt(payRef.current?.value || "0"),
        //     edu: eduRef.current?.value || "",
        // }

        // dispatch(registHire(hire))
        // .then(unwrapResult)
        // .then(()=>{
        //    dispatch(setHire(INIT_HIRE));
        //    setIsOk(true);
        // })
        setIsOk(true);
    }

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="공고 생성" />
                <div className="w-[331px] h-full flex flex-col">
                    <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white py-2 flex flex-col justify-center items-center">
                        {isOk
                            ?
                            <>
                                <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                                    <p className="inline w-fit h-fit justify-center items-center text-lg">
                                        공고 등록이 완료되었습니다.<br />
                                        행사 공고 리스트에서 확인할 수 있습니다.
                                    </p>
                                </div>
                                <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                                    <Button title="Home" type="default" func={() => { navigate("/staff/hire") }} />
                                </div>
                            </>
                            :
                            <>
                                <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                                    <RegistInput title={"공고명"} ref={workNameRef} />
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
                                    <RegistInput title={"근무 시간"} ref={workHourRef} />
                                    <RegistInput title={"시급"} ref={payRef} />
                                    <RegistInput title={"대표 문의처"} ref={inqRef} />
                                    <div className="w-[330px] h-full overflow-hidden flex">
                                        <p className="w-[115px] h-[175px] text-[15px] font-bold text-center text-white">
                                            사전 교육 정보
                                        </p>
                                        <textarea ref={eduRef} className="w-[215px] h-[215px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2" />
                                    </div>
                                </div>
                                <Button title={"Create"} type={"default"} func={() => { handleRegist() }} loading={hire?.loading} />
                            </>
                        }
                    </div>
                </div>
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}

export default EventHireRegist;