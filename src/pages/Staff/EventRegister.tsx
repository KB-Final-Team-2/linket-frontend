import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InputList from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import DatePicker from "../../components/Input/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import SelectButton from "../../components/Button/SelectButton";
import { registEvent } from "../../redux/slice/eventSlice";
import { RegistEvent } from "../../interface/Event";
import { User } from "../../interface/User";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const EventRegister = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);

    const user : User = useSelector((state:any)=>state.auth?.data);
    const event = useSelector((state:any)=>state.event);
    const dispatch : any = useDispatch();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [type, setType] = useState("");
    const typeList = ["concert", "festival", "etc"];

    const handleRegist = () => {
        // const event : RegistEvent = {
        //     companyId: user.companyId,
        //     eventName: nameRef.current?.value || "",
        //     eventType: type,
        //     place: placeRef.current?.value || "",
        //     eventImage: imageRef.current?.value,
        //     eventInq: inqRef.current?.value || "",
        //     eventDesc: descRef.current?.innerText || "",
        //     startDate: startDate || new Date(),
        //     endDate: endDate || new Date()
        // }

        // dispatch(registEvent(event))
        // .then(unwrapResult)
        // .then(()=>{
        //     navigate("/staff")
        // })
        // .catch((err:Error)=>{
        //     console.log(err);
        // })
    }

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="행사 생성" />
                <div className="w-[331px] h-full flex flex-col">
                    <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white py-2 flex flex-col justify-center items-center">
                        <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                            <InputList title={"행사명"} ref={nameRef} />
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
                                <DatePicker title={""} date={startDate} setDate={(date: Date) => { setStartDate(date) }} />
                            </div>
                            <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                                <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                                    행사 종료일시
                                </p>
                                <DatePicker title={""} date={endDate} setDate={(date: Date) => { setEndDate(date) }} />
                            </div>
                            <InputList title={"행사 장소"} ref={placeRef} />
                            <InputList title={"행사 정보 이미지"} ref={imageRef} />
                            <InputList title={"행사 문의처"} ref={inqRef} />
                            <div className="w-[330px] h-full overflow-hidden flex">
                                <p className="w-[115px] h-[175px] text-[15px] font-bold text-center text-white">
                                    행사 설명
                                </p>
                                <textarea ref={descRef} className="w-[215px] h-[175px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2" />
                            </div>
                        </div>
                        <Button title={"Create"} type={"default"} func={() => { handleRegist() }} loading={event.loading}/>
                    </div>
                </div>
                <NavBar role="staff" state="1" />
            </div>
        </Templete>
    )
}

export default EventRegister;