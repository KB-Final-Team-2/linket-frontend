import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import RegistInput from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import { Hire } from "../../interface/Hire";
import { getHire, updateHire } from "../../redux/slice/hireSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { Event } from "../../interface/Event";
import Content from "../Templete/Content";

const EventHireUpdate = () => {
    const workNameRef = useRef<HTMLInputElement>(null);
    const workHourRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const payRef = useRef<HTMLInputElement>(null);
    const eduRef = useRef<HTMLTextAreaElement>(null);

    const event: Event = useSelector((state: any) => state.event?.data);
    const hire = useSelector((state: any) => state.hire);
    const hireData: Hire = hire?.data;
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(hireData?.workStartDay);
    const [endDate, setEndDate] = useState(hireData?.workEndDay);

    const handleUpdate = () => {
        // const hire : Hire = {
        //     hireId: hireData?.hireId,
        //     eventId: hireData?.eventId,
        //     companyId: hireData?.companyId,
        //     workName: workNameRef.current?.value || hireData?.workName,
        //     workHour: Number.parseInt(workHourRef.current?.value || `${hireData?.workHour}`),
        //     workStartDate: startDate?.toString() || hireData?.workStartDate,
        //     workEndDate: endDate?.toString() || hireData?.workEndDate,
        //     pay: Number.parseInt(payRef.current?.value || `${hireData?.pay}`),
        //     edu: eduRef.current?.value || hireData?.edu,
        //     regDate: hireData?.regDate
        // }

        // dispatch(updateHire(hire))
        // .then(unwrapResult)
        // .then(()=>{
        //     dispatch(getHire(hireData.hireId))
        //     navigate("/staff/hire");
        // })
    }

    return (
        <Templete>
            <Header title="공고 수정" />
            <Content>
                <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                    <RegistInput title={"공고명"} ref={workNameRef} value={hireData?.workName} />
                    <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0 text-base font-bold text-center text-white items-center">
                        <p className="w-fit h-fit flex-shrink-0">
                            행사 시작일시
                        </p>
                        <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target?.value)}/>
                    </div>
                    <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                        <p className="w-[115px] h-[37px] text-base font-bold text-center text-white">
                            행사 종료일시
                        </p>
                        <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target?.value)}/>
                    </div>
                    <RegistInput title={"근무 시간"} ref={workHourRef} value={`${hireData?.workHour}`} />
                    <RegistInput title={"시급"} ref={payRef} value={`${hireData?.pay}`} />
                    <RegistInput title={"대표 문의처"} ref={inqRef} value={`${event?.eventInq}`} />
                    <div className="w-[330px] h-full overflow-hidden flex">
                        <p className="w-[115px] h-[175px] text-base font-bold text-center text-white">
                            사전 교육 정보
                        </p>
                        <textarea
                            ref={eduRef}
                            className="w-[215px] h-[215px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2"
                            defaultValue={hireData?.edu}
                        />
                    </div>
                </div>
                <Button title={"Create"} type={"default"} func={() => { handleUpdate() }} loading={hire?.loading} />
            </Content>
            <NavBar role="staff" state="1" />
        </Templete>
    )
}

export default EventHireUpdate;