import { ForwardedRef, forwardRef } from "react"

interface props {
    title: string;
    value?: string;
    type?: string;
}

const WebInfoInput = forwardRef(({ title, value, type }: props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="w-[558.31px] h-10 overflow-hidden flex items-center flex-shrink-0 flex-grow-0">
            <p className="w-[194.56px] h-[39.14px] text-[15px] font-bold text-center text-white">
                {title}
            </p>
            <input
                type={type||"text"}
                ref={ref}
                className="w-[363.75px] h-[37px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] focus:outline-none focus:bg-[#c4c4c4]/[0.50] px-4 text-lg font-bold"
                value={value}
            />
        </div>
    )
})

export default WebInfoInput