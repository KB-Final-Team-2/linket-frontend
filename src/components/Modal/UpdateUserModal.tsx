import Modal from "./Modal"
import { ForwardedRef, forwardRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { User } from "../../interface/User";
import { ListProps } from "../../interface/props";

const InputList = forwardRef(({ title, content }: ListProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="w-[450px] h-24 overflow-hidden flex flex-grow-0 flex-col justify-center items-center px-5 gap-3">
            <p className="w-full text-xl font-bold text-left text-white flex-grow-0">
                {title}
            </p>
            <input
                className="
                    w-full h-10 rounded-[5px] bg-[#c4c4c4]/[0.31] flex-grow-0 outline-none focus:bg-white/20
                    text-center text-xl font-bold
                "
                value={content}
            />
        </div>
    )
})


const UpdateUserModal = () => {
    const phoneRef = useRef<HTMLInputElement>(null);
    const oldPasswordRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const checkPasswordRef = useRef<HTMLInputElement>(null);

    const user: User = useSelector((state: any) => state.auth?.data);
    const dispatch = useDispatch();

    return (
        <Modal>
            <div className="w-[600px] h-[100px] overflow-hidden flex flex-shrink-0 justify-center items-center text-[40px] font-bold text-center text-white">
                사용자 정보 수정
            </div>
            <div className="w-[600px] h-full overflow-hidden border-y border-white">
                <div className="w-[600px] h-40 relative overflow-hidden border-b border-white flex">
                    <div className="w-[150px] h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex justify-center items-center flex-shrink-0">
                        연락처 수정
                    </div>
                    <div className="w-[450px] h-full overflow-hidden flex flex-col items-center justify-center">
                        <InputList title="새로운 연락처를 입력해주세요." content={user.phone} ref={phoneRef} />
                        <div className="w-full h-fit overflow-hidden flex flex-shrink-0 justify-center">
                            <Button title="수정" type="default" func={() => { }} />
                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-[540px] relative overflow-hidden border border-white flex">
                    <div className="w-[150px] h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                        비밀번호 수정
                    </div>
                    <div className="w-[450px] h-full overflow-hidden flex flex-col justify-between items-center">
                        <InputList title="기존 비밀번호를 입력해주세요." ref={oldPasswordRef} />
                        <InputList title="새 비밀번호를 입력해주세요." ref={newPasswordRef} />
                        <InputList title="새 비밀번호를 다시 입력해주세요." ref={checkPasswordRef} />
                        <div className="w-[450px] h-[87px] overflow-hidden flex flex-shrink-0 justify-center items-center">
                            <Button title="수정" type="default" func={() => { }} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal;