const Templete = ({ children }: any) => {
    return (
        <div className="w-screen h-screen relative overflow-hidden flex flex-col justify-center items-center templete">
            <div className="w-full max-w-[375px] h-full overflow-hidden flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    )
}

export default Templete;