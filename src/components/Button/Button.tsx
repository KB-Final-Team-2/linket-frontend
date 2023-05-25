import { CgSpinner } from "react-icons/cg";

interface props {
    title: string;
    type: string | undefined;
    func: Function;
    loading?: boolean;
}

const Button = ({ title, type, func, loading = false }: props) => {
    const handleFunc = () => {
        if (loading === false) func();
    }
    return (
        <>
            <div
                className={`
                w-20 h-10 left-[148px] top-5 overflow-hidden rounded-[15px] text-white border-4
                ${type === "delete" && "bg-black/50 hover:bg-red-500 cursor-pointer  border-red-500"}
                ${type === "default" && "bg-black/50 hover:bg-primary cursor-pointer border-primary "}
                ${type === "unable" && "bg-gray-500 cursor-not-allowed"}
                text-[15px] font-bold flex justify-center items-center noselect
            `}
                onClick={type==="unable"?()=>{}:() => { handleFunc() }}
            >
                {loading
                    ?
                    <CgSpinner className=" animate-spin m-auto text-3xl" />
                    : title
                }
            </div>
        </>
    )
}

export default Button;