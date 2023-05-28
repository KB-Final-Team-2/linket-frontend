import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slice/modalSlice";

const Modal = ({children }: any) => {
    const dispatch = useDispatch();

    return (
        <div className="
            z-50 w-screen h-screen bg-white/20 backdrop-blur absolute flex justify-center items-center
            transform transition-all
        ">
            <div className="w-fit h-fit relative overflow-hidden rounded-[49px] bg-[#454545] border-[10px] border-white flex flex-col px-4 py-2">
                <AiOutlineClose className="absolute right-8 top-8 text-3xl" onClick={() => { dispatch(closeModal()) }} />
                {children}
            </div>
        </div>
    )
}

export default Modal;