import { ForwardedRef, forwardRef } from "react";

interface props {
    title: string,
    value?: string,
    type?: string
}

const RegistInput = forwardRef(({title, value="", type="text"}: props, ref:ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
            <p className="w-[115px] h-[37px] text-base font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                {title}
            </p>
            <input type={type} ref={ref} className="w-[215px] h-[37px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" defaultValue={value} />
        </div>
    )
})

export default RegistInput;