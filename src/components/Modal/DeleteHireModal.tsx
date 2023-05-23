import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import Button from "../Button/Button";
import { closeModal } from "../../redux/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../interface/Event";
import { Hire } from "../../interface/Hire";
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


const DeleteHireModal = () => {
    const hire: Hire = useSelector((state: any) => state.hire?.data)
    const dispatch = useDispatch();
    return (
        <Modal>
            <div className="w-[600px] h-[800px] relative overflow-hidden rounded-[49px] bg-[#454545] border-[10px] border-white flex flex-col">
                <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 flex-grow-0 justify-center items-center text-[40px] font-bold text-center text-white">
                    행사 삭제
                </div>
                <div className="w-[600px] h-[600px] overflow-hidden border-y border-white">
                    <ModalInfoList title="공고명" content={hire?.workName} />
                    <ModalInfoList title="근무 기간" content={`${hire?.workStartDate} ~ ${hire?.workEndDate}`} />
                    <ModalInfoList title="근무 시간" content={`${hire.workHour}`} />
                    <ModalInfoList title="등록 코드" content={`${hire.hireId}`} />
                    <div className="w-full h-[408px] font-bold text-center text-white flex flex-shrink-0 flex-col items-center justify-center py-5">
                        <span className="w-full h-fit text-[40px] font-bold text-center text-white">
                            해당 공고를 삭제하시겠습니까?
                        </span>
                        <br />
                        <span className="w-full h-fit text-2xl font-bold text-center text-white">
                            삭제된 공고는 복구할 수 없으며,
                        </span>
                        <br />
                        <span className="w-full h-fit text-2xl font-bold text-center text-white">
                            해당 공고와 연결된 근태 정보도 삭제됩니다.
                        </span>
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

export default DeleteHireModal;