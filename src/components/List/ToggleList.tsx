interface props {
    title: string,
    content: string,
    state: boolean,
    open: Function,
    close: Function
}

const ToggleList = ({ title, content, state, open, close }: props) => {
    return (
        <>
            {state
                ? (
                    <div className="w-[331px] h-fit flex flex-col">
                        <div
                            className="w-full h-[35px] flex justify-between itmes-center"
                            onClick={() => { close() }}
                        >
                            <div
                                className="w-[331px] h-[35px] overflow-hidden flex justify-start items-center pl-2 text-base font-bold text-left text-white"
                            >
                                {title}
                            </div>
                            <div className="w-[35px] h-full items-center overflow-hidden p-2">
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
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-start items-start w-[330px] h-[263px] overflow-hidden gap-2.5 p-2.5 bg-[#c4c4c4]/[0.31]">
                            <p className="self-stretch flex-grow w-[310px] h-[243px] text-base font-bold text-left text-white">
                                <span className="self-stretch flex-grow w-[310px] h-[243px] text-base font-bold text-left text-white">
                                    우린 그걸 허황된 소리라고 하기로 했어요.
                                </span>
                                <br />
                                <span className="self-stretch flex-grow w-[310px] h-[243px] text-base font-bold text-left text-white">
                                    앞으로 5월 27일 개발 마무리 전까지는 매일매일 열심히 할 생각 하시면 됩니다.
                                </span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="w-[331px] h-[35px] relative overflow-hidden flex border-b justify-between items-center"
                        onClick={() => { open() }}
                    >
                        <div className="w-[331px] h-[35px] overflow-hidden">
                            <div className="w-[331px] h-[35px] overflow-hidden text-base font-bold text-white flex flex-shrink-0 justify-start items-center px-2">
                                {title}
                            </div>
                        </div>
                        <div className="w-[35px] h-full items-center overflow-hidden p-2">
                            <svg
                                width={20}
                                height={16}
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M16.8619 1.25049L9.50073 14.0005L2.13952 1.25049L16.8619 1.25049Z"
                                    fill="#FF6000"
                                    stroke="#454545"
                                    strokeWidth={2}
                                />
                            </svg>
                        </div>
                    </div>
                )}

        </>
    )
}

export default ToggleList;
