const Content = ({ children }: any) => {
    return (
        <div className="w-[331px] h-full flex flex-col">
            <div className="w-[330px] h-[580px] overflow-hidden border-y border-white flex flex-col">
                {children}
            </div>
        </div>
    )
}

export default Content;