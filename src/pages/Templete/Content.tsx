const Content = ({ children }: any) => {
    return (
        <div className="w-[331px] h-full flex flex-col overflow-auto items-center flex-grow-0 border-t border-white">
            {children}
        </div>
    )
}

export default Content;