import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";

const Event = () => {
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white flex justify-center">
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
            <IndexHeader title="Event"/>
            <div className="w-[330px] h-[580px] absolute left-[23px] top-[125px] overflow-hidden border border-white">
                <p className="w-[330px] h-[45px] absolute left-0 top-[70px] text-xl font-bold text-left text-white">
                    전체 이벤트
                </p>
                <div className="w-[330px] h-[465px] absolute left-0 top-[115px] overflow-hidden">
                    <svg
                        width={330}
                        height={1}
                        viewBox="0 0 330 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[330px] h-0 absolute left-0 top-[465px]"
                        preserveAspectRatio="none"
                    >
                        <line y1="0.5" x2={330} y2="0.5" stroke="white" />
                    </svg>
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
                    <div className="w-[300px] h-[400px] absolute left-[15px] top-[33px] overflow-hidden">
                        <div className="w-[237px] h-[356px] absolute left-8 top-0 overflow-hidden bg-white">
                            <p className="w-[237px] h-[356px] absolute left-0 top-0 text-[40px] font-bold text-center text-[#ff9f0e]">
                                Linket
                            </p>
                        </div>
                        <div className="w-[301px] h-11 absolute left-0 top-[356px] overflow-hidden">
                            <p className="w-[301px] h-11 absolute left-0 top-0 text-[40px] font-bold text-center text-white">
                                Event Title
                            </p>
                        </div>
                    </div>
                    <div className="w-[300px] h-[400px] absolute left-[280px] top-[33px] overflow-hidden">
                        <div className="w-[237px] h-[356px] absolute left-8 top-0 overflow-hidden bg-white">
                            <p className="w-[237px] h-[356px] absolute left-0 top-0 text-[40px] font-bold text-center text-[#ff9f0e]">
                                Linket
                            </p>
                        </div>
                        <div className="w-[301px] h-11 absolute left-0 top-[356px] overflow-hidden">
                            <p className="w-[301px] h-11 absolute left-0 top-0 text-[40px] font-bold text-center text-white">
                                Event Title
                            </p>
                        </div>
                    </div>
                </div>
                <svg
                    width={330}
                    height={40}
                    viewBox="0 0 330 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[330px] h-10"
                    preserveAspectRatio="none"
                >
                    <rect width={330} height={40} rx={20} fill="#C4C4C4" fillOpacity="0.31" />
                    <circle cx="307.5" cy="20.5" r="17.5" fill="#FF6000" />
                    <path
                        d="M308.142 21.4683C309.863 19.9992 310.06 17.4023 308.587 15.6734C307.11 13.9446 304.514 13.7332 302.792 15.1986C301.071 16.6677 300.874 19.2646 302.347 20.9934C303.82 22.726 306.42 22.9374 308.142 21.4683ZM301.03 22.1213C298.934 19.6616 299.216 15.9665 301.661 13.8778C304.105 11.7892 307.804 12.0934 309.9 14.5493C311.74 16.7048 311.748 19.8137 310.075 21.9543L314.104 26.6733C314.486 27.1185 314.434 27.7937 313.989 28.1721L313.658 28.4541C313.213 28.8325 312.542 28.7768 312.16 28.3316L308.097 23.5681C305.753 24.7405 302.814 24.2099 301.03 22.1213Z"
                        fill="#231F20"
                    />
                </svg>
            </div>
            <NavBar state="1"/>
        </div>
    )
}

export default Event;