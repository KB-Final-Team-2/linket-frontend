import logoImg from "../../img/logo_icon.png";

const RegisterHeader = () => {
return (
    <div className="w-[372px] h-[150px] relative overflow-hidden">
        <div className="w-[300px] h-[50px] absolute left-9 top-[50px] overflow-hidden">
            <p className="w-[265px] h-[50px] absolute left-[70px] top-0 text-[35px] font-bold text-left text-white">
            회원가입
            </p>
            <div className="w-[50px] h-[50px] absolute left-0 top-0">
                <img
                    className="w-full h-full"
                    src={logoImg}
                />
            </div>
        </div>
    </div>
)
};

export default RegisterHeader;