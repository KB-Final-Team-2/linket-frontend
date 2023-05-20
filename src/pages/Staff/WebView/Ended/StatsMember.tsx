const StatsMember = () => {
    return (
        <div className="w-[830px] h-[770px] relative overflow-hidden">
            <div className="w-[790px] h-[730px] absolute left-5 top-5 overflow-hidden border-y border-white">
                <div className="w-[790px] h-[730px] absolute left-0 top-0 overflow-hidden">
                    <div className="w-[790px] h-[150px] absolute left-0 top-0 overflow-hidden border-b border-white flex">
                        <div className="w-[100px] h-[150px] overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                            성별
                        </div>
                        <div className="w-[690px] h-[150px] overflow-hidden px-5">
                            <div className="w-full h-[100px] relative left-0 top-0 overflow-hidden flex justify-between items-center flex-grow-0">
                                <div className="w-fit h-fit flex gap-5">
                                    <p className="text-4xl font-bold text-center text-white">
                                        남성
                                    </p>
                                    <p className="text-4xl font-bold text-center text-white">
                                        50%
                                    </p>
                                </div>
                                <div className="w-fit h-fit flex gap-5">
                                    <p className="text-4xl font-bold text-center text-white">
                                        여성
                                    </p>
                                    <p className="text-4xl font-bold text-center text-white">
                                        50%
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-5 bg-white rounded-full overflow-hidden">
                                <div className="w-[50%] h-full bg-blue-400" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[790px] h-[580px] absolute left-0 top-[150px] overflow-hidden">
                        <div className="w-[100px] h-[580px] absolute left-0 top-0 overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                            <p className="absolute left-3 top-[276px] text-2xl font-bold text-center text-white">
                                연령별
                            </p>
                        </div>
                        <div className="w-[690px] h-[580px] absolute left-[100px] top-0 overflow-hidden">
                            <div className="w-[640px] h-10 overflow-hidden border-b border-white flex justify-center items-center ml-[50px]">
                                <div className="w-80 h-10 overflow-hidden border-t-0 border-r border-b-0 border-l-0 border-white">
                                    <p className="text-2xl font-bold text-center text-white">
                                        연령층
                                    </p>
                                </div>
                                <div className="w-80 h-10 overflow-hidden">
                                    <p className="text-2xl font-bold text-center text-white">
                                        비율
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-full flex">
                                <div className=" mx-3 w-6 h-[500px] bg-white rounded-full overflow-hidden">

                                </div>
                                <div className="w-[640px] h-[540px] overflow-hidden">
                                    <div className="w-[640px] h-[90px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                        <div className="w-80 h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                10대 이하
                                        </div>
                                        <div className="w-80 h-full overflow-hidden text-2xl font-bold text-center text-stats-1 flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                16.7%
                                        </div>
                                    </div>
                                    <div className="w-[640px] h-[90px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                        <div className="w-80 h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                20대
                                        </div>
                                        <div className="w-80 h-full overflow-hidden text-2xl font-bold text-center text-stats-2 flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                16.7%
                                        </div>
                                    </div>
                                    <div className="w-[640px] h-[90px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                        <div className="w-80 h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                30대
                                        </div>
                                        <div className="w-80 h-full overflow-hidden text-2xl font-bold text-center text-stats-3 flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                16.7%
                                        </div>
                                    </div>
                                    <div className="w-[640px] h-[90px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                        <div className="w-80 h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                40대
                                        </div>
                                        <div className="w-80 h-full overflow-hidden text-2xl font-bold text-center text-stats-4 flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                16.7%
                                        </div>
                                    </div>
                                    <div className="w-[640px] h-[90px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                        <div className="w-80 h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                50대
                                        </div>
                                        <div className="w-80 h-full overflow-hidden text-2xl font-bold text-center text-stats-5 flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                16.7%
                                        </div>
                                    </div>
                                    <div className="w-[640px] h-[90px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white flex">
                                        <div className="w-80 h-full overflow-hidden border-r border-white text-2xl font-bold text-center text-white flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                60대 이상
                                        </div>
                                        <div className="w-80 h-full overflow-hidden text-2xl font-bold text-center text-stats-6 flex flex-shrink-0 flex-grow-0 items-center justify-center">
                                                16.7%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50px] h-[50px] absolute left-0 top-0 overflow-hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsMember;