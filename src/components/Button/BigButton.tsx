import { CgSpinner } from "react-icons/cg";
import { ButtonProps } from "../../interface/props";

const BigButton = ({title, type, func, loading=false}:ButtonProps) => {
    const handleFunc = () => {
        if (loading === false) func();
    }

    return(
        <div
            className={`
                text-place-center rounded-2xl shadow-lg
                w-full min-w-20 h-fit overflow-hidden text-white px-5 py-1
                ${type === "delete" && "bg-black/50 hover:bg-red-500 cursor-pointer  border-red-500"}
                ${type === "default" && "bg-black/50 hover:bg-primary-100 cursor-pointer border-primary-100 "}
                ${type === "unable" && "bg-gray-500 cursor-not-allowed"}
                font-bold flex noselect flex-shrink-0 transition-all duration-100 text-xl
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
};

export default BigButton;