import IndexHeader from "../../components/Header/IndexHeader";
import NavBar from "../../components/NavBar/NavBar";

const Info = () => {
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
            <div className="w-[331px] h-[582px] absolute left-[22px] top-[125px] overflow-hidden border border-white">
                <div className="w-[331px] h-[100px] absolute left-0 top-[100px] overflow-hidden border-t-0 border-r-0 border-b-2 border-l-0 border-white">
                    <div className="w-[331px] h-[50px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                        <div className="w-[278px] h-[50px] absolute left-[50px] top-0 overflow-hidden">
                            <p className="w-[278px] h-[50px] absolute left-0 top-0 text-sm font-bold text-left text-white">
                                공지사항
                            </p>
                        </div>
                    </div>
                    <div className="w-[331px] h-[50px] absolute left-0 top-[50px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                        <div className="w-[278px] h-[50px] absolute left-[50px] top-0 overflow-hidden">
                            <p className="w-[278px] h-[50px] absolute left-0 top-0 text-sm font-bold text-left text-white">
                                FAQ
                            </p>
                        </div>
                    </div>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 absolute left-[13px] top-[13px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M20.625 2.625C20.5359 2.625 20.4445 2.64141 20.3531 2.67891L6.84375 8.10703H3C2.79375 8.10703 2.625 8.28047 2.625 8.49609V15.5039C2.625 15.7195 2.79375 15.893 3 15.893H5.38359C5.29687 16.1648 5.25 16.4531 5.25 16.7461C5.25 18.2906 6.51094 19.5469 8.0625 19.5469C9.36094 19.5469 10.4555 18.6656 10.7789 17.475L20.3555 21.3234C20.4469 21.3586 20.5383 21.3773 20.6273 21.3773C21.0234 21.3773 21.3773 21.0445 21.3773 20.5992V3.40312C21.375 2.95781 21.0234 2.625 20.625 2.625ZM8.0625 17.8664C7.44141 17.8664 6.9375 17.3648 6.9375 16.7461C6.9375 16.4836 7.02891 16.2328 7.19531 16.0336L9.18516 16.8328C9.13828 17.4094 8.65312 17.8664 8.0625 17.8664V17.8664ZM19.6875 19.2352L7.47187 14.3273L7.16953 14.2055H4.3125V9.79453H7.16953L7.47187 9.67266L19.6875 4.76484V19.2352V19.2352Z"
                            fill="white"
                        />
                    </svg>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 absolute left-[13px] top-[63px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M9.5 11C10.3284 11 11 10.3284 11 9.5C11 8.67157 10.3284 8 9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11Z"
                            fill="white"
                        />
                        <path
                            d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
                            fill="white"
                        />
                        <path
                            d="M12 2C6.486 2 2 5.589 2 10C2 12.908 3.897 15.515 7 16.934V22L12.34 17.996C17.697 17.852 22 14.32 22 10C22 5.589 17.514 2 12 2ZM12 16H11.667L9 18V15.583L8.359 15.336C5.671 14.301 4 12.256 4 10C4 6.691 7.589 4 12 4C16.411 4 20 6.691 20 10C20 13.309 16.411 16 12 16Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="w-[331px] h-[100px] absolute left-0 top-0 overflow-hidden border-2 border-white">
                    <div className="w-[331px] h-[50px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                        <div className="w-[278px] h-[50px] absolute left-[50px] top-0 overflow-hidden">
                            <p className="w-[278px] h-[50px] absolute left-0 top-0 text-sm font-bold text-left text-white">
                                내 정보
                            </p>
                        </div>
                    </div>
                    <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[25px] h-[25px] absolute left-[13px] top-[13px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M12.5 2.08333C6.75629 2.08333 2.08337 6.75625 2.08337 12.5C2.08337 18.2437 6.75629 22.9167 12.5 22.9167C18.2438 22.9167 22.9167 18.2437 22.9167 12.5C22.9167 6.75625 18.2438 2.08333 12.5 2.08333ZM12.5 20.8333C7.90525 20.8333 4.16671 17.0948 4.16671 12.5C4.16671 7.9052 7.90525 4.16666 12.5 4.16666C17.0948 4.16666 20.8334 7.9052 20.8334 12.5C20.8334 17.0948 17.0948 20.8333 12.5 20.8333Z"
                            fill="white"
                        />
                        <path
                            d="M8.85413 12.5C9.71707 12.5 10.4166 11.8004 10.4166 10.9375C10.4166 10.0746 9.71707 9.375 8.85413 9.375C7.99118 9.375 7.29163 10.0746 7.29163 10.9375C7.29163 11.8004 7.99118 12.5 8.85413 12.5Z"
                            fill="white"
                        />
                        <path
                            d="M16.1386 12.4854C16.9975 12.4854 17.6938 11.7891 17.6938 10.9302C17.6938 10.0713 16.9975 9.375 16.1386 9.375C15.2797 9.375 14.5834 10.0713 14.5834 10.9302C14.5834 11.7891 15.2797 12.4854 16.1386 12.4854Z"
                            fill="white"
                        />
                        <path
                            d="M12.5 18.75C16.6666 18.75 17.7083 14.5833 17.7083 14.5833H7.29163C7.29163 14.5833 8.33329 18.75 12.5 18.75Z"
                            fill="white"
                        />
                    </svg>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 absolute left-[15px] top-[63px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M20 2H4C2.897 2 2 2.897 2 4V16C2 17.103 2.897 18 4 18H7V21.767L13.277 18H20C21.103 18 22 17.103 22 16V4C22 2.897 21.103 2 20 2ZM20 16H12.723L9 18.233V16H4V4H20V16Z"
                            fill="white"
                        />
                        <path d="M7 7H17V9H7V7ZM7 11H14V13H7V11Z" fill="white" />
                    </svg>
                    <div className="w-[331px] h-[50px] absolute left-0 top-[50px] overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                        <div className="w-[278px] h-[50px] absolute left-[50px] top-0 overflow-hidden">
                            <p className="w-[278px] h-[50px] absolute left-0 top-0 text-sm font-bold text-left text-white">
                                리뷰 관리
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[331px] h-[50px] absolute left-0 top-[200px] overflow-hidden">
                    <div className="w-[331px] h-[50px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-white">
                        <div className="w-[278px] h-[50px] absolute left-[50px] top-0 overflow-hidden">
                            <p className="w-[278px] h-[50px] absolute left-0 top-0 text-sm font-bold text-left text-white">
                                로그아웃
                            </p>
                        </div>
                    </div>
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 absolute left-[13px] top-[13px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M16.5371 2.92734C16.5084 2.91289 16.4765 2.90604 16.4444 2.90747C16.4123 2.90889 16.3811 2.91854 16.3538 2.93548C16.3265 2.95242 16.3041 2.97608 16.2885 3.00421C16.273 3.03233 16.265 3.06397 16.2652 3.09609V4.60078C16.2652 4.72969 16.3332 4.84922 16.441 4.91953C16.9695 5.2522 17.4586 5.64376 17.8988 6.08672C18.6652 6.85547 19.2676 7.74844 19.6871 8.74219C20.121 9.77093 20.3434 10.8765 20.341 11.993C20.341 13.1203 20.1207 14.2148 19.6871 15.2438C19.268 16.2361 18.6608 17.1378 17.8988 17.8992C17.1394 18.6631 16.2382 19.2713 15.2457 19.6898C14.2191 20.1258 13.1246 20.3461 11.9996 20.3461C10.8746 20.3461 9.78007 20.1258 8.7535 19.6898C7.76102 19.2713 6.85978 18.6631 6.10038 17.8992C5.33843 17.1378 4.73115 16.2361 4.3121 15.2438C3.87823 14.215 3.65584 13.1095 3.65819 11.993C3.65819 10.8656 3.8785 9.77109 4.3121 8.74219C4.73163 7.74844 5.33397 6.85547 6.10038 6.08672C6.54569 5.64141 7.03319 5.25234 7.55819 4.91953C7.66835 4.85156 7.73397 4.72969 7.73397 4.60078V3.09375C7.73397 2.95312 7.58632 2.86406 7.4621 2.925C4.18319 4.575 1.92147 7.95234 1.8746 11.8664C1.80897 17.4633 6.38632 22.1133 11.9808 22.125C17.5824 22.1367 22.1246 17.5945 22.1246 11.9906C22.1246 8.025 19.8512 4.59141 16.5371 2.92734V2.92734ZM11.2496 13.125H12.7496C12.8527 13.125 12.9371 13.0406 12.9371 12.9375V2.0625C12.9371 1.95937 12.8527 1.875 12.7496 1.875H11.2496C11.1465 1.875 11.0621 1.95937 11.0621 2.0625V12.9375C11.0621 13.0406 11.1465 13.125 11.2496 13.125Z"
                            fill="#FF5353"
                        />
                    </svg>
                </div>
            </div>
            <svg
                width={30}
                height={33}
                viewBox="0 0 30 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[32.14px] absolute left-[29px] top-[62px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M15 12.8571C18.5504 12.8571 21.4286 9.97897 21.4286 6.42857C21.4286 2.87817 18.5504 0 15 0C11.4496 0 8.57143 2.87817 8.57143 6.42857C8.57143 9.97897 11.4496 12.8571 15 12.8571Z"
                    fill="white"
                />
                <path
                    d="M0 32.1429C0 23.8586 6.71573 17.1429 15 17.1429C23.2843 17.1429 30 23.8586 30 32.1429H0Z"
                    fill="white"
                />
            </svg>
            <NavBar state="3" />
            <IndexHeader title="김고객" />
        </div>
    )
}
export default Info;