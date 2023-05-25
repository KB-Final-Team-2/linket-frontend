const Templete = ({ children }: any) => {
    return (
        <div className="w-full h-full relative overflow-hidden templete flex flex-col justify-center items-center">
            <div className="w-[375px] h-[812px] relative overflow-hidden flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    )
}

export default Templete;