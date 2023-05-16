import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const InfoCheck = () => {
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
            <Header title="비밀번호 확인"/>
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[331px] h-[580px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                <div className="w-[330px] h-[90px] absolute left-0 top-0 overflow-hidden">
                    <p className="w-[330px] h-10 absolute left-0 top-0 text-[15px] font-bold text-left text-white">
                        본인 확인을 위해 비밀번호를 입력해주세요.
                    </p>
                    <div className="w-[330px] h-[49px] absolute left-0 top-[41px] overflow-hidden bg-[#b1b1b1]">
                        <p className="w-[330px] h-[50px] absolute left-0 top-[-1px] text-[15px] font-bold text-center text-white/50">
                            1234567890
                        </p>
                    </div>
                </div>
                <div className="w-[330px] h-[140px] absolute left-0 top-[443px] overflow-hidden">
                    <div className="w-20 h-10 absolute left-[37px] top-[50px]">
                        <div className="w-20 h-10 absolute left-[-1px] top-[-1px] rounded-[15px] bg-[#fd3030]" />
                        <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                            return
                        </p>
                    </div>
                    <div className="w-20 h-10 absolute left-52 top-[50px] overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                        <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                            send
                        </p>
                    </div>
                </div>
            </div>
			<NavBar state="3"/>
        </div>
    )
}
export default InfoCheck;