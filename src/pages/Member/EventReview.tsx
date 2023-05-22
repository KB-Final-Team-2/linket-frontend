import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Templete from "../Templete";

const EventReview = () => {
    return (
        <Templete>
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col items-center justify-center">
                <Header title="리뷰" />
                <div className="w-[331px] h-full">
                    <div className="w-[331px] h-[610px] overflow-hidden">
                        <div className="w-[330px] h-[580px] overflow-hidden border-b border-t border-white">
                            <div className="w-[330px] h-[70px] overflow-hidden">
                                <div className="w-[260px] h-[69px] overflow-hidden">
                                    <p className="text-[32px] font-medium text-left text-white">
                                        4.5/ 5.0 (2)
                                    </p>
                                </div>
                                <div className="w-[70px] h-[70px] overflow-hidden">
                                    <p className="text-xl font-medium text-left text-white">
                                        <span className="text-xl font-medium text-left text-white">평점</span>
                                        <br />
                                        <span className="text-xl font-medium text-left text-white">평균</span>
                                    </p>
                                </div>
                                <svg
                                    width={330}
                                    height={1}
                                    viewBox="0 0 330 1"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-[330px] h-0"
                                    preserveAspectRatio="none"
                                >
                                    <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                                </svg>
                            </div>
                            <div className="w-[330px] h-[482px] overflow-hidden">
                                <div className="w-[330px] h-[100px] overflow-hidden">
                                    <svg
                                        width={328}
                                        height={1}
                                        viewBox="0 0 328 1"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[330px] h-0"
                                        preserveAspectRatio="none"
                                    >
                                        <line x1={-2} y1="0.5" x2={328} y2="0.5" stroke="white" />
                                    </svg>
                                    <div className="w-[330px] h-[35px] overflow-hidden">
                                        <p className="w-[70px] h-[35px] text-[15px] font-medium text-center text-white">
                                            gits****
                                        </p>
                                        <div className="w-[165px] h-[35px] overflow-hidden">
                                            <p className="w-[37px] h-[35px] text-[15px] font-medium text-right text-white">
                                                4
                                            </p>
                                        </div>
                                        <div className="w-[95px] h-[35px] overflow-hidden">
                                            <p className=" text-[15px] font-medium text-center text-[#d9d9d9]">
                                                2023.05.09
                                            </p>
                                        </div>
                                        <svg
                                            width={328}
                                            height={1}
                                            viewBox="0 0 328 1"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[330px] h-0"
                                            preserveAspectRatio="none"
                                        >
                                            <line x1={-2} y1="0.5" x2={328} y2="0.5" stroke="white" />
                                        </svg>
                                    </div>
                                    <div className="w-[330px] h-[65px] overflow-hidden">
                                        <p className="w-[330px] h-[65px] text-[15px] font-medium text-left text-white">
                                            좋은 강의 감사합니당.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[330px] h-[100px] overflow-hidden">
                                    <svg
                                        width={330}
                                        height={1}
                                        viewBox="0 0 330 1"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[330px] h-0"
                                        preserveAspectRatio="none"
                                    >
                                        <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                                    </svg>
                                    <div className="w-[330px] h-[35px] overflow-hidden">
                                        <p className="w-[70px] h-[35px] text-[15px] font-medium text-center text-white">
                                            smil****
                                        </p>
                                        <div className="w-[165px] h-[35px] overflow-hidden">
                                            <p className="w-[37px] h-[35px] text-[15px] font-medium text-right text-white">
                                                5
                                            </p>
                                        </div>
                                        <div className="w-[95px] h-[35px] overflow-hidden">
                                            <p className="text-[15px] font-medium text-center text-[#d9d9d9]">
                                                2023.05.10
                                            </p>
                                        </div>
                                        <svg
                                            width={330}
                                            height={1}
                                            viewBox="0 0 330 1"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[330px] h-0 absolute left-0 top-[35px]"
                                            preserveAspectRatio="none"
                                        >
                                            <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                                        </svg>
                                    </div>
                                    <div className="w-[330px] h-[65px] overflow-hidden">
                                        <p className="w-[330px] h-[65px] text-[15px] font-medium text-left text-white">
                                            좋은 강의 감사합니당.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar role="member" state="1" />
            </div>
        </Templete>
    )
}

export default EventReview;