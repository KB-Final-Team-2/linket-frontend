import RegisterHeader from "../../components/Header/RegisterHeader";

const StaffRegister = () => {
    return(
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
            <div className="w-[375px] h-[662px] absolute left-0 top-[150px] overflow-hidden">
                <div className="w-[375px] h-[662px] relative overflow-hidden">
                    <div className="w-[375px] h-[50px] absolute left-0 top-0 overflow-hidden">
                        <p className="w-[373px] h-[50px] absolute left-0 top-0 text-2xl font-bold text-center text-white">
                        회원정보를 입력해주세요.
                        </p>
                    </div>
                    <div className="w-[375px] h-[532px] absolute left-0 top-[50px] overflow-hidden">
                        <div className="w-[330px] h-[37px] absolute left-[23px] top-[484px] overflow-hidden">
                            <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                기업 코드
                            </p>
                            <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                        </div>
                        <div className="w-[330px] h-[37px] absolute left-[23px] top-[433px] overflow-hidden">
                            <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                개인정보동의
                            </p>
                            <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                        </div>
                        <div className="w-[330px] h-[37px] absolute left-[23px] top-[382px] overflow-hidden">
                            <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                연락처
                            </p>
                            <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                        </div>
                            <div className="w-[330px] h-[37px] absolute left-[23px] top-[331px] overflow-hidden">
                            <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                성별
                            </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden">
                            <div className="w-[70px] h-[30px] absolute left-[120px] top-1 overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                                <p className="w-20 h-10 absolute left-[-5px] top-[-5px] text-[15px] font-bold text-center text-black">
                                    Woman
                                </p>
                            </div>
                            <div className="w-[70px] h-[30px] absolute left-[25px] top-1 overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                                <p className="w-20 h-10 absolute left-[-5px] top-[-5px] text-[15px] font-bold text-center text-black">
                                    Man
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[280px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            생년월일
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[20px]">
                            <div className="w-[71px] h-[37px] absolute left-36 top-0 overflow-hidden bg-[#c4c4c4]/[0.31]">
                                <p className="w-[71px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    01.
                                </p>
                            </div>
                            <div className="w-[71px] h-[37px] absolute left-[72px] top-0 overflow-hidden bg-[#c4c4c4]/[0.31]">
                                <p className="w-[71px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    01.
                                </p>
                            </div>
                            <div className="w-[71px] h-[37px] absolute left-0 top-0 overflow-hidden bg-[#c4c4c4]/[0.31]">
                                <p className="w-[71px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                                    2023.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[229px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            이름
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[178px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            비밀번호 확인
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[127px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            비밀번호
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[76px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            email 인증
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                    </div>
                    <div className="w-[330px] h-[37px] absolute left-[23px] top-[25px] overflow-hidden">
                        <p className="w-[115px] h-[37px] absolute left-0 top-0 text-[15px] font-bold text-center text-white">
                            email
                        </p>
                        <div className="w-[215px] h-[37px] absolute left-[115px] top-0 overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" />
                    </div>
                </div>
                <div className="w-[375px] h-20 absolute left-0 top-[582px] overflow-hidden">
                    <div className="w-20 h-10 absolute left-[148px] top-5 overflow-hidden rounded-[15px] bg-[#ff9f0e]">
                        <p className="w-20 h-10 absolute left-0 top-0 text-[15px] font-bold text-center text-black">
                            회원가입
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <RegisterHeader />
        </div>
    )
}

export default StaffRegister;