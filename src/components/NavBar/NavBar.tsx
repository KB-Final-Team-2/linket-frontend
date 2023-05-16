interface props {
    state: string
}

const NavBar = ({ state }: props) => {
    return (
        <>
            {state == '1' && (
                <div className="w-[375px] h-[53px] relative overflow-hidden bg-[#454545]">
                    <div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] bg-[#d9d9d9]" />
                    <div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] rounded-tl-[20px] bg-[#d9d9d9]" />
                    <div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] bg-[#454545]" />
                    <svg
                        width={27}
                        height={27}
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[47px] top-[11px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M18.75 16.5H17.565L17.145 16.095C18.615 14.385 19.5 12.165 19.5 9.75C19.5 4.365 15.135 0 9.75 0C4.365 0 0 4.365 0 9.75C0 15.135 4.365 19.5 9.75 19.5C12.165 19.5 14.385 18.615 16.095 17.145L16.5 17.565V18.75L24 26.235L26.235 24L18.75 16.5V16.5ZM9.75 16.5C6.015 16.5 3 13.485 3 9.75C3 6.015 6.015 3 9.75 3C13.485 3 16.5 6.015 16.5 9.75C16.5 13.485 13.485 16.5 9.75 16.5Z"
                            fill="white"
                        />
                    </svg>
                    <div className="w-[23px] h-[39.26px]">
                        <div className="absolute left-[198.5px] top-[5.5px]" />
                        <img
                            className="w-[23.82px] h-[39px] absolute left-[198.5px] top-[5.5px]"
                            src="small_logo.png"
                        />
                    </div>
                </div>
            )}
            {state == '2' && (
                <div className="w-[375px] h-[53px] relative overflow-hidden bg-[#454545]">
                    <div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] rounded-tl-[20px] bg-[#d9d9d9]" />
                    <div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] bg-[#454545]" />
                    <div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] rounded-tr-[20px] bg-[#d9d9d9]" />
                    <div className="w-[23px] h-[39.26px]">
                        <div className="absolute left-[198.5px] top-[5.5px]" />
                        <img
                            className="w-[23.82px] h-[39px] absolute left-[198.5px] top-[5.5px]"
                            src="small_logo.png"
                        />
                    </div>
                </div>
            )}
            {state == '3' && (
                <div className="w-[375px] h-[53px] relative overflow-hidden bg-[#454545]">
                    <div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] bg-[#454545]" />
                    <div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] rounded-tr-[20px] bg-[#d9d9d9]" />
                    <div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] bg-[#d9d9d9]" />
                    <div className="w-[23px] h-[39.26px]">
                        <div className="absolute left-[198.5px] top-[5.5px]" />
                        <img
                            className="w-[23.82px] h-[39px] absolute left-[198.5px] top-[5.5px]"
                            src="small_logo.png"
                        />
                    </div>
                </div>
            )}
        </>
    )
}