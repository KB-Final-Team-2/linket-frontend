import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { registPartHire, setHire } from "../../redux/slice/hireSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Content from "../Templete/Content";

const HireRegister = () => {
    const [isOk, setIsOk] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const hire = useSelector((state: any) => state.hire);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const handleRegist = () => {
        // dispatch(registPartHire(Number.parseInt(inputRef.current?.value!)))
        // .then(unwrapResult)
        // .then(()=>{
        //     dispatch(setHire(INIT_HIRE));
        //     navigate("/part");
        // }).catch((err:Error)=>{
        //     console.log(err);
        // })
        setIsOk(true);
    }

    return (
        <Templete>
            <Header title="공고 등록" />
            <Content>
                {isOk
                    ?
                    <>
                        <div className="w-[331px] h-full overflow-hidden flex flex-col gap-2 place-content-center">
                            <p className="inline w-fit h-fit justify-center items-center text-lg">
                                공고 등록이 완료되었습니다.<br />
                                공고 리스트에서 확인할 수 있습니다.
                            </p>
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Home" type="default" func={() => { navigate("/part") }} />
                        </div>
                    </>
                    :
                    <>
                        <div className="w-[330px] h-full overflow-hidden px-5">
                            <p className="w-full h-10 text-[15px] font-bold text-left text-white flex items-center my-3 border-b">
                                공지된 공고 등록번호를 입력해주세요.
                            </p>
                            <input ref={inputRef} className="w-full h-[49px] overflow-hidden rounded-md flex" placeholder="000000" />
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Send" type="default" func={() => { handleRegist() }} loading={hire?.loading} />
                        </div>
                    </>
                }
            </Content>
            <NavBar role="part" state="1" />
        </Templete>
    )
}

export default HireRegister;