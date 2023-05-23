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
                w-20 h-10 left-[148px] top-5 overflow-hidden rounded-[15px]
                ${type === "delete" && "bg-red-600 hover:bg-red-500 cursor-pointer"}
                ${type === "default" && "bg-secondary/80 hover:bg-secondary cursor-pointer"}
                ${type === "unable" && "bg-gray-500 text-gray-200 cursor-not-allowed"}
                text-[15px] font-bold text-black flex justify-center items-center
            `}
                onClick={() => { handleFunc() }}
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