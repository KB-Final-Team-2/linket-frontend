import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import Button from "../Button/Button";
import { closeModal } from "../../redux/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";

const DeleteEventModal = () => {
    const event : Event = useSelector((state:any)=>state.event.event)
    const dispatch = useDispatch();
    return (
        <Modal>
            <div className="w-[600px] h-[800px] relaitve overflow-hidden rounded-[49px] bg-[#454545] border-[10px] border-white flex flex-col">
                <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 justify-center items-center text-[40px] font-bold text-center text-white">
                    행사 삭제
                </div>
                <div className="w-[600px] h-[600px] overflow-hidden border-y border-white">
                    <div className="w-[600px] h-[700px] relative overflow-hidden">
                        <div className="w-[600px] h-[166px] absolute left-0 top-0 overflow-hidden border border-white">
                            <div className="w-[601.82px] h-[41.5px] absolute left-0 top-[124.5px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                                <p className="w-[209.72px] h-[41.5px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    행사 장소
                                </p>
                                <p className="w-[392.09px] h-[41.5px] absolute left-[209.72px] top-0 text-[15px] font-bold text-center text-white">
                                    {event.place}
                                </p>
                            </div>
                            <div className="w-[601.82px] h-[41.5px] absolute left-0 top-[83px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                                <p className="w-[209.72px] h-[41.5px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    행사 기간
                                </p>
                                <p className="w-[392.09px] h-[41.5px] absolute left-[209.72px] top-0 text-[15px] font-bold text-center text-white">
                                    {event.startDate} ~ {event.endDate}
                                </p>
                            </div>
                            <div className="w-[601.82px] h-[41.5px] absolute left-0 top-[41.5px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                                <p className="w-[209.72px] h-[41.5px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    행사 분류
                                </p>
                                <p className="w-[392.09px] h-[41.5px] absolute left-[209.72px] top-0 text-[15px] font-bold text-center text-white">
                                    {event.eventType}
                                </p>
                            </div>
                            <div className="w-[601.82px] h-[41.5px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                                <p className="w-[209.72px] h-[41.5px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    행사명
                                </p>
                                <p className="w-[392.09px] h-[41.5px] absolute left-[209.72px] top-0 text-[15px] font-bold text-center text-white">
                                    {event.eventName}
                                </p>
                            </div>
                        </div>
                        <div className="w-[600px] h-[534px] absolute left-0 top-[166.56px] overflow-hidden">
                            <div className="w-[598.19px] h-[306.32px] absolute left-0 top-[0.44px] overflow-hidden">
                                <p className="w-[598.19px] h-[155.67px] absolute left-0 top-[75.32px] font-bold text-center text-white">
                                    <span className="w-[598.19px] h-[155.67px] text-[40px] font-bold text-center text-white">
                                        해당 행사를 삭제하시겠습니까?
                                    </span>
                                    <br />
                                    <span className="w-[598.19px] h-[155.67px] text-2xl font-bold text-center text-white">
                                        삭제된 행사는 복구할 수 없으며,
                                    </span>
                                    <br />
                                    <span className="w-[598.19px] h-[155.67px] text-2xl font-bold text-center text-white">
                                        기존에 등록된 리뷰 및 이미지가 모두 삭제됩니다.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center">
                    <Button title="삭제" type={"delete"} func={() => { }} />
                </div>
                <AiOutlineClose className="absolute right-8 top-8 text-3xl" onClick={() => { dispatch(closeModal()) }} />
            </div>
        </Modal>
    )
}

export default DeleteEventModal;