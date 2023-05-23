import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { registPartHire, setHire } from "../../redux/slice/hireSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { INIT_HIRE } from "../../interface/Hire";

const HireRegister = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const hire = useSelector((state:any)=>state.hire);
    const dispatch : any = useDispatch();
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
    }

    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                <Header title="공고 등록" />
                <div className="w-[331px] h-full left-[22px] top-[125px]">
                    <div className="w-[331px] h-[580px] overflow-hidden border-t border-b border-white flex flex-col">
                        <div className="w-[330px] h-full overflow-hidden px-5">
                            <p className="w-full h-10 text-[15px] font-bold text-left text-white flex items-center my-3 border-b">
                                공지된 공고 등록번호를 입력해주세요.
                            </p>
                            <input ref={inputRef} className="w-full h-[49px] overflow-hidden rounded-md flex" placeholder="000000"/>
                        </div>
                        <div className="w-[330px] h-[140px] overflow-hidden flex flex-shrink-0 justify-center items-center px-10">
                            <Button title="Send" type="default" func={() => { handleRegist() }} loading={hire?.loading}/>
                        </div>
                    </div>
                </div>
                <NavBar role="part" state="1" />
            </div>
        </Templete>
    )
}

export default HireRegister;