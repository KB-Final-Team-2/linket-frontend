import { useNavigate } from "react-router-dom";
import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";

const Event = () => {
	const navigate = useNavigate();
	const list = [{title:"KB 콘서트",content:"poster.jpg"},{title:"멀캠 강연",content:"poster.jpg"}]


    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-background-dark flex flex-col justify-center items-center">
            <IndexHeader title="Event" />
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[330px] h-[580px] overflow-hidden border-t border-b border-white">
                    <p className="w-[330px] h-[45px] text-xl font-bold text-left text-white">
                        전체 이벤트
                    </p>
                    <div className="w-[330px] h-[465px] flex flex-col">
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
                        <div className="w-full h-full overflow-scroll flex flex-row flex-shrink-0">
                            <div className="w-[300px] h-[400px] overflow-hidden block">
                                <div
                                    className="w-[237px] h-[356px] overflow-hidden bg-white" 
                                    onClick={()=>{navigate(`/member/event/${1234}`)}}>
                                    <p className="w-[237px] h-[356px] text-[40px] font-bold text-center text-[#ff9f0e]">
                                        Linket
                                    </p>
                                </div>
                                <div className="w-[301px] h-11 overflow-hidden">
                                    <p className="w-[301px] h-11 font-bold text-center text-white">
                                        Event Title
                                    </p>
                                </div>
                            </div>
                            <div className="w-[300px] h-[400px] overflow-hidden block">
                                <div className="w-[237px] h-[356px] overflow-hidden bg-white">
                                    <p className="w-[237px] h-[356px] text-[40px] font-bold text-center text-[#ff9f0e]">
                                        Linket
                                    </p>
                                </div>
                                <div className="w-[301px] h-11 overflow-hidden">
                                    <p className="w-[301px] h-11 font-bold text-center text-white">
                                        Event Title
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar role="member" state="1" />
        </div>
    )
}

export default Event;