import { ForwardedRef, forwardRef } from "react"

interface props {
    title: string;
    value?: string;
    type?: string;
}

const WebInfoInput = forwardRef(({ title, value, type }: props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="w-full h-10 overflow-hidden flex items-center flex-shrink-0 flex-grow-0 px-5">
            <p className=" w-48 h-fit text-base font-bold text-center text-white">
                {title}
            </p>
            <input
                type={type||"text"}
                ref={ref}
                className="w-full h-[37px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31] focus:outline-none focus:bg-[#c4c4c4]/[0.50] px-4 text-lg font-bol mx-5"
                value={value}
            />
        </div>
    )
})

export default WebInfoInput