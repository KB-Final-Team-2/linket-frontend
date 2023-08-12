import { CgSpinner } from "react-icons/cg";
import { ButtonProps } from "../../interface/props";

const Button = ({ title, type, func, loading = false }: ButtonProps) => {
    const handleFunc = () => {
        if (loading === false) func();
    }
    
    return (
        <div
            className={`
                w-fit min-w-20 h-fit overflow-hidden rounded-[15px] text-white px-4 py-2
                ${type === "delete" && "bg-black/50 hover:bg-red-500 cursor-pointer  border-red-500"}
                ${type === "default" && "bg-black/50 hover:bg-primary-100 cursor-pointer border-primary-100 "}
                ${type === "unable" && "bg-gray-500 cursor-not-allowed"}
                text-base font-bold flex justify-center items-center noselect flex-shrink-0 transition-all duration-100
            `}
            onClick={type === "unable" ? () => { } : () => { handleFunc() }}
        >
            {loading
                ?
                <CgSpinner className=" animate-spin m-auto text-3xl" />
                : title
            }
        </div>
    )
}

export default Button;