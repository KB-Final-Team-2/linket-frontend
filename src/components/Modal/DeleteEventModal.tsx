import Modal from "./Modal";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import { ListProps } from "../../interface/props";

const ModalInfoList = ({ title, content }: ListProps) => {
    return (
        <div className="w-full h-12 overflow-hidden border-b border-white flex items-center justify-center px-5">
            <p className="w-48 h-fit text-[15px] font-bold text-center text-white">
                {title}
            </p>
            <p className="w-full h-fit text-[15px] font-bold text-center text-white">
                {content}
            </p>
        </div>
    )
}

const DeleteEventModal = () => {
    const event: Event = useSelector((state: any) => state.event?.data)
    const dispatch = useDispatch();
    return (
        <Modal>
            <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center text-[40px] font-bold text-center text-white">
                행사 삭제
            </div>
            <div className="w-[600px] h-[600px] overflow-hidden border-y border-white">
                <ModalInfoList title="행사명" content={event.eventName} />
                <ModalInfoList title="행사 종류" content={event.eventType} />
                <ModalInfoList title="행사 기간" content={`${event.startDate} ~ ${event.endDate}`} />
                <ModalInfoList title="행사 장소" content={event.place} />
                <div className="w-full h-[408px] font-bold text-center text-white flex flex-shrink-0 flex-col items-center justify-center py-5">
                    <span className="w-full h-fit text-[40px] font-bold text-center text-white">
                        해당 행사를 삭제하시겠습니까?
                    </span>
                    <br />
                    <span className="w-full h-fit text-2xl font-bold text-center text-white">
                        삭제된 행사는 복구할 수 없으며,
                    </span>
                    <br />
                    <span className="w-full h-fit text-2xl font-bold text-center text-white">
                        기존에 등록된 리뷰 및 이미지가 모두 삭제됩니다.
                    </span>
                </div>
            </div>
            <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center">
                <Button title="삭제" type={"delete"} func={() => { }} />
            </div>
        </Modal>
    )
}

export default DeleteEventModal;