
const Templete = ({children} : any) => {
    return (
        <div className="w-full h-full relative overflow-hidden templete flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default Templete;