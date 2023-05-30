import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import RegistInput from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useDispatch, useSelector } from "react-redux";
import SelectButton from "../../components/Button/SelectButton";
import { User } from "../../interface/User";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Content from "../Templete/Content";
import { registEvent } from "../../redux/slice/eventSlice";
import { RegionDetailList, RegionList, RegistEvent } from "../../interface/Event";
import moment from "moment";
import { closeModal, setSelectPlaceModal } from "../../redux/slice/modalSlice";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Modal from "../../components/Modal/Modal";
import { CgSpinner } from "react-icons/cg";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import SelectPlaceModal from "../../components/Modal/SelectPlaceModal";

const EventRegister = () => {
    const [isOk, setIsOk] = useState(false);
    const [place, setPlace] = useState({ id: "", content: "" });
    const nameRef = useRef<HTMLInputElement>(null);
    const placeRef = useRef<HTMLInputElement>(null);
    const inqRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);
    const startDate = useRef<HTMLInputElement>(null);
    const endDate = useRef<HTMLInputElement>(null);

    const user: User = useSelector((state: any) => state.auth?.data);
    const event = useSelector((state: any) => state.event);
    const modal = useSelector((state: any) => state.modal);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const [type, setType] = useState("");
    const typeList = ["concert", "festival", "etc"];
    const today = moment().format("YYYY-MM-DD");

    const handleRegist = () => {
        const event: RegistEvent = {
            eventCompanyId: user.userCompanyId,
            eventName: nameRef.current?.value || "",
            eventType: type,
            startDate: startDate.current?.value || today,
            endDate: endDate.current?.value || today,
            place: place.content || "",
            placeId: place.id || "",
            eventImage: "",
            eventInq: inqRef.current?.value || "",
            eventDesc: descRef.current?.value || "",
            link: "",
        }

        console.log(event);

        dispatch(registEvent(event))
            .then(unwrapResult)
            .then(() => {
                setIsOk(true);
            })
            .catch((err: Error) => {
                alert(err.message);
            })
    }

    const getPlaceList = async () => {
        const list = (
            await axios.get(
                `https://www.kopis.or.kr/openApi/restful/prfplc?
                service=11653933ac2447da843868e7cb625bdb&cpage=1
                &rows=1000`
            )).data;

    }

    return (
        <>
            <Templete>
                <Header title="행사 생성" />
                <Content>
                    {isOk
                        ?
                        <>
                            <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                                <p className="inline w-fit h-fit justify-center items-center text-lg">
                                    이벤트 등록이 완료되었습니다.<br />
                                    이벤트 리스트에서 확인할 수 있습니다.
                                </p>
                            </div>
                            <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                                <Button title="Home" type="default" func={() => { navigate("/staff") }} />
                            </div>
                        </>
                        :
                        <>
                            <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                                <RegistInput title={"행사명"} ref={nameRef} />
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
                                <RegistInput title={"행사 시작일"} value={today} type="date" />
                                <RegistInput title={"행사 종료일"} value={today} type="date" />
                                <div className="w-full h-fit flex flex-grow-0">
                                    <div className="w-[250px] h-[37px] overflow-hidden flex flex-shrink-0 self-stretch">
                                        <p className="w-[115px] h-[37px] text-base font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                                            행사 장소
                                        </p>
                                        <input type={type} ref={placeRef} className="w-full h-[37px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" value={place.content} readOnly />
                                    </div>
                                    <Button title={"검색"} type={"default"} func={() => { dispatch(setSelectPlaceModal()) }} />
                                </div>
                                <RegistInput title={"행사 문의처"} ref={inqRef} />
                                <div className="w-[330px] h-full overflow-hidden flex">
                                    <p className="w-[115px] h-[175px] text-base font-bold text-center text-white">
                                        행사 설명
                                    </p>
                                    <textarea ref={descRef} className="w-[215px] h-[175px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] outline-none focus:bg-white/30 text-base p-2" />
                                </div>
                            </div>
                            <Button title={"Create"} type={"default"} func={() => { handleRegist() }} loading={event.loading} />
                        </>
                    }
                </Content>
                <NavBar role="staff" state="1" />
            </Templete>
            {modal.current === "selectPlace" && <SelectPlaceModal onSelect={(place: any) => { setPlace(place); dispatch(closeModal()); }} />}
        </>
    )
}

export default EventRegister;