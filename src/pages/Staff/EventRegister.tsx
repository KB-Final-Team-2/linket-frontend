import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InputList from "../../components/Input/RegisterInput";
import NavBar from "../../components/NavBar/NavBar";

const EventRegister = () => {
    const eventNameRef = useRef<HTMLInputElement>(null);
    const eventPlaceRef = useRef<HTMLInputElement>(null);
    const eventPosterRef = useRef<HTMLInputElement>(null);
    const eventImgRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="행사 생성" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white py-2 flex flex-col justify-center items-center">
                    <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2">
                        <InputList title={"행사명"} ref={eventNameRef} />
                        <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                            <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                                행사 분류
                            </p>
                            <div className="w-[215px] h-[37px] overflow-hidden flex">
                                <div className="w-[70px] h-[30px] overflow-hidden rounded-[15px] bg-secondary">
                                    <p className="w-20 h-10 text-[15px] font-bold text-center text-black">
                                        Festival
                                    </p>
                                </div>
                                <div className="w-[70px] h-[30px] overflow-hidden rounded-[15px] bg-secondary">
                                    <p className="w-20 h-10 text-[15px] font-bold text-center text-black">
                                        Concert
                                    </p>
                                </div>
                                <div className="w-[70px] h-[30px] overflow-hidden rounded-[15px] bg-secondary">
                                    <p className="w-20 h-10 text-[15px] font-bold text-center text-black">
                                        etc
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                            <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                                행사 시작일시
                            </p>
                            <div className="w-[215px] h-[37px] top-0 overflow-hidden rounded-[20px] flex">
                                <div className="w-[60px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[60px] h-[37px] text-[15px] font-bold text-center text-white">
                                        10시
                                    </p>
                                </div>
                                <div className="w-[46px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[46px] h-[37px] text-[15px] font-bold text-center text-white">
                                        01.
                                    </p>
                                </div>
                                <div className="w-[46px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[46px] h-[37px] text-[15px] font-bold text-center text-white">
                                        01.
                                    </p>
                                </div>
                                <div className="w-[57px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[57px] h-[37px] text-[15px] font-bold text-center text-white">
                                        2023.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
                            <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white">
                                행사 종료일시
                            </p>
                            <div className="w-[215px] h-[37px] overflow-hidden rounded-[20px] flex">
                                <div className="w-[60px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[60px] h-[37px] text-[15px] font-bold text-center text-white">
                                        10시
                                    </p>
                                </div>
                                <div className="w-[46px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[46px] h-[37px] text-[15px] font-bold text-center text-white">
                                        01.
                                    </p>
                                </div>
                                <div className="w-[46px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[46px] h-[37px] text-[15px] font-bold text-center text-white">
                                        01.
                                    </p>
                                </div>
                                <div className="w-[57px] h-[37px] overflow-hidden bg-[#c4c4c4]/[0.31]">
                                    <p className="w-[57px] h-[37px] text-[15px] font-bold text-center text-white">
                                        2023.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <InputList title={"행사 장소"} ref={eventPlaceRef} />
                        <InputList title={"행사 포스터"} ref={eventPosterRef} />
                        <InputList title={"행사 정보 이미지"} ref={eventImgRef} />
                        <div className="w-[330px] h-full overflow-hidden flex">
                            <p className="w-[115px] h-[175px] text-[15px] font-bold text-center text-white">
                                행사 설명
                            </p>
                            <div className="w-[215px] h-[175px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                        </div>
                    </div>
                    <Button title={"Create"} type={"default"} func={()=>{console.log(eventNameRef.current?.value)}} />
                </div>
            </div>
            <NavBar role="staff" state="1" />
        </div>
    )
}

export default EventRegister;