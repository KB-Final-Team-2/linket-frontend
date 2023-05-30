const Content = ({ children }: any) => {
    return (
        <div className="w-[331px] h-full flex flex-col overflow-auto justify-center items-center flex-grow-0">
            <div className="w-[331px] h-full overflow-auto border-t border-white flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default Content;