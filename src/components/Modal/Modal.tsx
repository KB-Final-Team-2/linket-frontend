interface props {
    isOpen: boolean;
}

const Modal = ({ children }: any) => {
    return (
        <div className="
            z-50 w-screen h-screen bg-white/20 backdrop-blur absolute flex justify-center items-center
            transform transition-all
        ">
            {children}
        </div>
    )
}

export default Modal;