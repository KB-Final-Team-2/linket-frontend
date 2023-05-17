import Header from "../../components/Header/Header";
import ToggleList from "../../components/List/ToggleList";
import NavBar from "../../components/NavBar/NavBar";

const InfoFAQContent = () => {
    const list = ["오늘 열심히 하면 내일 안해도 되나요?", "처음 일정을 잡은 사람이 누군가요?", "5월 31일까지 마무리할 수 있을까요?", "안되면 되게 하라고 하면 어떡하죠"];

    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <Header title="FAQ" />
            <div className="w-[331px] h-full flex flex-col">
                <div className="w-[331px] h-[580px] overflow-hidden border-y border-white">
                    <div className="w-full h-fit flex flex-col">
                        <div className="w-full h-[37px] flex">
                            <div className="w-[331px] h-[37px] overflow-hidden flex">
                                <div className="w-[331px] h-[37px] overflow-hidden">
                                    <p className="w-[331px] h-[37px] text-[15px] font-bold text-left text-white">
                                        오늘 열심히 하면 내일 안해도 되나요?
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start items-start overflow-hidden gap-2.5 p-2">
                                <svg
                                    width={19}
                                    height={16}
                                    viewBox="0 0 19 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M2.13878 14.75L9.5 2L16.8612 14.75L2.13878 14.75Z"
                                        fill="#FF6000"
                                        stroke="#454545"
                                        stroke-width={2}
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start items-start w-[330px] h-[263px] overflow-hidden gap-2.5 p-2.5 bg-[#c4c4c4]/[0.31]">
                            <p className="self-stretch flex-grow w-[310px] h-[243px] text-[15px] font-bold text-left text-white">
                                <span className="self-stretch flex-grow w-[310px] h-[243px] text-[15px] font-bold text-left text-white">
                                    우린 그걸 허황된 소리라고 하기로 했어요.
                                </span>
                                <br />
                                <span className="self-stretch flex-grow w-[310px] h-[243px] text-[15px] font-bold text-left text-white">
                                    앞으로 5월 27일 개발 마무리 전까지는 매일매일 열심히 할 생각 하시면 됩니다.
                                </span>
                            </p>
                        </div>
                    </div>
                    {list.map((v, i) => (<ToggleList key={i} title={v} content="i" />))}
                </div>
            </div>
            <NavBar state="3" />
        </div>
    )
}

export default InfoFAQContent;