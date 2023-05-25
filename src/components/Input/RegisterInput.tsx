import { ForwardedRef, forwardRef } from "react";

interface props {
    title: string,
    value?: string
}

const RegistInput = forwardRef((props: props, ref:ForwardedRef<HTMLInputElement>) => {
    return (
        <div className="w-[330px] h-[37px] overflow-hidden flex flex-shrink-0">
            <p className="w-[115px] h-[37px] text-[15px] font-bold text-center text-white flex flex-shrink-0 justify-center items-center">
                {props.title}
            </p>
            <input ref={ref} className="w-[215px] h-[37px] overflow-hidden rounded-[9px] bg-[#c4c4c4]/[0.31]" defaultValue={props.value} />
        </div>
    )
})

export default RegistInput;