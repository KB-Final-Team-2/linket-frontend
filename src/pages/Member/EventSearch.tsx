import Button from "../../components/Button/Button";
import SelectButton from "../../components/Button/SelectButton";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const EventSearch = () => {
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
            <div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
            <div className="w-[330px] h-[580px] absolute left-[23px] top-[125px] overflow-hidden">
                <div className="w-[330px] h-[465px] absolute left-0 top-[115px] overflow-hidden">
                    <svg
                        width={330}
                        height={1}
                        viewBox="0 0 330 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[330px] h-0 absolute left-0 top-px"
                        preserveAspectRatio="none"
                    >
                        <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                    </svg>
                    <div className="w-[330px] h-[324px] absolute left-0 top-[61px] overflow-hidden">
                        <div className="w-[270px] h-[324px] absolute left-[60px] top-0 overflow-hidden">
                            <div className="w-[270px] h-[268px] absolute left-0 top-14 overflow-hidden flex flex-col gap-8 px-5 py-7">
                                <div className="w-full flex justify-between">
                                    <SelectButton state={false} title={"1월"} func={()=>{}} />
                                    <SelectButton state={false} title={"2월"} func={()=>{}} />
                                    <SelectButton state={false} title={"3월"} func={()=>{}} />
                                </div>
                                <div className="w-full flex justify-between">
                                    <SelectButton state={false} title={"4월"} func={()=>{}} />
                                    <SelectButton state={false} title={"5월"} func={()=>{}} />
                                    <SelectButton state={false} title={"6월"} func={()=>{}} />
                                </div>
                                <div className="w-full flex justify-between">
                                    <SelectButton state={false} title={"7월"} func={()=>{}} />
                                    <SelectButton state={false} title={"8월"} func={()=>{}} />
                                    <SelectButton state={false} title={"9월"} func={()=>{}} />
                                </div>
                                <div className="w-full flex justify-between">
                                    <SelectButton state={false} title={"10월"} func={()=>{}} />
                                    <SelectButton state={false} title={"11월"} func={()=>{}} />
                                    <SelectButton state={false} title={"12월"} func={()=>{}} />
                                </div>
                            </div>
                            <div className="w-[270px] h-14 absolute left-0 top-0 overflow-hidden">
                                <p className="w-[270px] h-14 absolute left-0 top-0 text-xl font-bold text-center text-white">
                                    2023
                                </p>
                                <svg
                                    width={270}
                                    height={1}
                                    viewBox="0 0 270 1"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-[-1px] top-[55px]"
                                    preserveAspectRatio="none"
                                >
                                    <line y1="0.5" x2={270} y2="0.5" stroke="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-[60px] h-[324px] absolute left-0 top-0 overflow-hidden">
                            <p className="absolute left-4 top-[146px] text-[15px] font-bold text-center text-white">
                                <span className="text-[15px] font-bold text-center text-white">행사</span>
                                <br />
                                <span className="text-[15px] font-bold text-center text-white">기간</span>
                            </p>
                        </div>
                        <svg
                            width={330}
                            height={1}
                            viewBox="0 0 330 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[330px] h-0 absolute left-0 top-[324px]"
                            preserveAspectRatio="none"
                        >
                            <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                        </svg>
                        <svg
                            width={1}
                            height={324}
                            viewBox="0 0 1 324"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[59px] top-[-1px]"
                            preserveAspectRatio="none"
                        >
                            <line x1="0.5" x2="0.5" y2={324} stroke="white" />
                        </svg>
                    </div>
                    <div className="w-[330px] h-[60px] absolute left-0 top-px overflow-hidden">
                        <div className="w-[270px] h-[60px] absolute left-[60px] top-0 overflow-hidden flex justify-between items-center px-4">
                            <SelectButton state={false} title={"Concert"} func={()=>{}} />
                            <SelectButton state={false} title={"Festival"} func={()=>{}} />
                            <SelectButton state={false} title={"etc."} func={()=>{}} />
                        </div>
                        <div className="w-[60px] h-[60px] absolute left-0 top-0 overflow-hidden">
                            <p className="absolute left-4 top-3.5 text-[15px] font-bold text-center text-white">
                                행사<br/>종류
                            </p>
                        </div>
                        <svg
                            width={330}
                            height={1}
                            viewBox="0 0 330 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[330px] h-0 absolute left-0 top-[60px]"
                            preserveAspectRatio="none"
                        >
                            <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                        </svg>
                        <svg
                            width={1}
                            height={60}
                            viewBox="0 0 1 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[59px] top-[-1px]"
                            preserveAspectRatio="none"
                        >
                            <line x1="0.5" y1="3.39268e-9" x2="0.5" y2={60} stroke="white" />
                        </svg>
                    </div>
                    <Button title="Search" type="default" func={()=>{}}/>
                </div>
                <p className="w-[330px] h-[45px] absolute left-0 top-[70px] text-xl font-bold text-left text-white">
                    검색 조건
                </p>
                <div className="w-[330px] h-10 absolute left-0 top-5 overflow-hidden rounded-[20px] bg-[#c4c4c4]/[0.31]" />
            </div>
            <NavBar state="1"/>
            <Header title="행사 검색"/>
        </div>
    )
}

export default EventSearch;