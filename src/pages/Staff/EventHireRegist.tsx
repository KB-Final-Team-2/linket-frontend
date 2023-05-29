import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import RegistInput from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interface/User";
import { Event } from "../../interface/Event";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Content from "../Templete/Content";
import { RegistHire } from "../../interface/Hire";
import moment from "moment";
import { registHire } from "../../redux/slice/hireSlice";

const EventHireRegist = () => {
    const workNameRef = useRef<HTMLInputElement>(null);
    const workHourRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const payRef = useRef<HTMLInputElement>(null);
    const eduRef = useRef<HTMLTextAreaElement>(null);
    const workStartDayRef = useRef<HTMLInputElement>(null);
    const workEndDayRef = useRef<HTMLInputElement>(null);

    const user: User = useSelector((state: any) => state.auth?.data);
    const event: Event = useSelector((state: any) => state.event?.data);
    const hire = useSelector((state: any) => state.hire);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const today = moment().format("YYYY-MM-DD");

    const [isOk, setIsOk] = useState(false);

    const handleRegist = () => {
        const hire : RegistHire = {
            hireEventId: event.eventId,
            hireCompanyId: user.userCompanyId,
            workName: workNameRef.current?.value!,
            workHour: Number.parseInt(workHourRef.current?.value!),
            workStartDay: workStartDayRef.current?.value!,
            workEndDay: workEndDayRef.current?.value!,
            pay: Number.parseInt(payRef.current?.value!),
            edu: eduRef.current?.value!,
        }
        console.log(hire);

        dispatch(registHire(hire))
        .then(unwrapResult)
        .then(()=>{
           setIsOk(true);
        }).catch((err:Error)=>{
            alert(err.message);
        })
    }

    return (
        <Templete>
            <Header title="공고 생성" />
            <Content>
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
                            <Button title="Home" type="default" func={() => { navigate(-1) }} />
                        </div>
                    </>
                    :
                    <>
                        <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                            <RegistInput title={"공고명"} ref={workNameRef} />
                            <RegistInput title="근무 시작일" ref={workStartDayRef} value={today} type="date"/>
                            <RegistInput title="근무 종료일" ref={workEndDayRef} value={today} type="date"/>
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
            </Content>
            <NavBar role="staff" state="1" />
        </Templete>
    )
}

export default EventHireRegist;