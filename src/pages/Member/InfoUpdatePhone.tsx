import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const InfoUpdatePhone = () => {
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
            <svg
                width={375}
                height={812}
                viewBox="0 0 375 812"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[375px] h-[812px] absolute left-0 top-0"
                preserveAspectRatio="none"
            >
                <path d="M0 0H375V812H0V0Z" fill="#454545" />
            </svg>
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border-t border-b border-white">
                <div className="w-[330px] h-[90px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[330px] h-10 absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        새로운 연락처를 입력해주세요.
                    </p>
                    <div className="w-[330px] h-[49px] absolute left-0 top-[41px] overflow-hidden bg-[#b1b1b1]">
                        <p className="w-[330px] h-[50px] absolute left-0 top-[-1px] text-[15px] font-bold text-center text-white/50">
                            010-1234-5678
                        </p>
                    </div>
                </div>
                <div className="w-[330px] h-[140px] absolute left-0 top-[443px] overflow-hidden flex justify-between px-10">
                    <Button title="Return" type="delete" func={()=>{}} />
                    <Button title="Send" type="default" func={()=>{}} />
                </div>
            </div>
            <NavBar state="3" />
            <Header title="연락처 수정" />
        </div>
    )
}

export default InfoUpdatePhone;