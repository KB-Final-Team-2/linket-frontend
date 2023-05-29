import { ForwardedRef, forwardRef } from "react";

interface props {
    title: string,
    placeholder?: string
}

const InfoInput = forwardRef((props: props, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div className="w-[330px] h-[90px] overflow-hidden">
            <p className="w-[330px] h-10 text-[15px] font-bold text-white flex justify-center items-center flex-shrink-0">
                {props.title}
            </p>
            <input ref={ref} className="w-[330px] h-[49px] overflow-hidden bg-[#b1b1b1] text-center placeholder:text-black/50" placeholder={props.placeholder} />
        </div>
    )
})

export default InfoInput;