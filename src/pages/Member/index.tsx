import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Auth";
import axios from "axios";
import { login, postLogin } from "../../redux/slice/authSilce";
import { AppDispatch } from "../../redux/store";

const Member = () => {
	return(
		<div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
			<svg
				width={375}
				height={812}
				viewBox="0 0 375 812"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-[375px] h-[812px] absolute left-0 top-0"
				preserveAspectRatio="none"
			>
				<path d="M0 0H375V812H0V0Z" fill="#454545" />
			</svg>
			<div className="w-[331px] h-[125px] absolute left-[22px] top-0 overflow-hidden">
				<div className="w-[331px] h-[30px] absolute left-0 top-0 overflow-hidden" />
				<div className="w-[331px] h-[95px] absolute left-0 top-[30px] overflow-hidden">
					<svg
						width={74}
						height={95}
						viewBox="0 0 74 95"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[74px] h-[95px] absolute left-[257px] top-0"
						preserveAspectRatio="none"
					>
						<circle cx={37} cy={48} r={3} fill="#FF9F0E" />
						<circle cx={28} cy={48} r={3} fill="#FF9F0E" />
						<circle cx={46} cy={48} r={3} fill="#FF9F0E" />
					</svg>
					<div className="w-[257px] h-[95px] absolute left-0 top-0 overflow-hidden">
						<p className="w-[257px] h-[95px] absolute left-0 top-0 text-[40px] font-medium text-left text-white">
						User name
						</p>
					</div>
				</div>
			</div>
			<div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
				<div className="w-[153px] h-[156px] absolute left-[199px] top-[535px] overflow-hidden">
					<div className="w-[152px] h-[156px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
				</div>
			<div className="w-[153px] h-[156px] absolute left-[22px] top-[535px] overflow-hidden">
				<div className="w-[152px] h-[156px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
				<p className="absolute left-7 top-[51px] text-sm font-bold text-center text-black">
				새 티켓 등록하기
				</p>
			</div>
			<div className="w-[330px] h-[408px] absolute left-[22px] top-[125px] overflow-hidden">
				<div className="w-[330px] h-[350px] absolute left-0 top-10 overflow-hidden">
				<div className="w-[330px] h-20 absolute left-0 top-[196px] overflow-hidden border-[5px] border-[#ffa559]">
					<p className="absolute left-[45px] top-[23px] text-[40px] font-bold text-center text-[#ffa559]">
					Ticket Title
					</p>
				</div>
				<div className="w-[330px] h-20 absolute left-0 top-[290px] overflow-hidden border-[5px] border-[#ffa559]">
					<p className="absolute left-[45px] top-[23px] text-[40px] font-bold text-center text-[#ffa559]">
					Ticket Title
					</p>
				</div>
				<div className="w-[330px] h-20 absolute left-0 top-[102px] overflow-hidden border-[5px] border-[#ffa559]">
					<p className="absolute left-[45px] top-[23px] text-[40px] font-bold text-center text-[#ffa559]">
					Ticket Title
					</p>
				</div>
				<div className="w-[330px] h-20 absolute left-0 top-2 overflow-hidden border-[5px] border-[#ffa559]">
					<p className="absolute left-[45px] top-[23px] text-[40px] font-bold text-center text-[#ffa559]">
					Ticket Title
					</p>
				</div>
				</div>
				<svg
				width={330}
				height={1}
				viewBox="0 0 330 1"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-[330px] h-0 absolute left-0 top-[389px]"
				preserveAspectRatio="none"
				>
				<line y1="0.5" x2={330} y2="0.5" stroke="white" />
				</svg>
				<svg
				width={330}
				height={1}
				viewBox="0 0 330 1"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-[330px] h-0 absolute left-0 top-[29px]"
				preserveAspectRatio="none"
				>
				<line y1="0.5" x2={330} y2="0.5" stroke="white" />
				</svg>
				<p className="w-[330px] h-[45px] absolute left-0 top-[-10px] text-xl font-bold text-left text-white">
				전체 이벤트
				</p>
			</div>
			<div className="w-[375px] h-[53px] absolute left-0 top-[759px] overflow-hidden bg-[#454545]">
				<div className="w-[125px] h-[53px] absolute left-[249px] top-[-1px] rounded-tl-[20px] bg-[#d9d9d9]" />
				<div className="w-[125px] h-[53px] absolute left-[124px] top-[-1px] bg-[#454545]" />
				<div className="w-[125px] h-[53px] absolute left-[-1px] top-[-1px] rounded-tr-[20px] bg-[#d9d9d9]" />
				<div className="w-[23px] h-[39.26px]">
				<div className="absolute left-[198.5px] top-[5.5px]" />
				<img
					className="w-[23.82px] h-[39px] absolute left-[198.5px] top-[5.5px]"
					src="small_logo.png"
				/>
				</div>
			</div>
			</div>
	)
}

export default Member;