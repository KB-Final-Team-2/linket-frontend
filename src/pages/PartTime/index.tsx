import IndexHeader from "../../components/Header/IndexHeader";
import ConcertList from "../../components/List/ConcertList";
import NavBar from "../../components/NavBar/NavBar";

const PartTime = () => {
	const list = [{type:"콘서트", title:"KB IT's your life1"}, {type:"콘서트", title:"KB IT's your life2"}, {type:"콘서트", title:"KB IT's your life3"}, {type:"콘서트", title:"KB IT's your life4"}];

	return (
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
			<div className="w-[331px] h-[622px] absolute left-[22px] top-[125px]" />
			<IndexHeader title="User name"/>
			
			<div className="w-[153px] h-[156px] absolute left-[199px] top-[562px] overflow-hidden">
				<div className="w-[152px] h-[156px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
			</div>
			<div className="w-[153px] h-[156px] absolute left-[22px] top-[562px] overflow-hidden">
				<div className="w-[152px] h-[156px] absolute left-0 top-[-1px] bg-[#d9d9d9]" />
				<p className="absolute left-7 top-[51px] text-sm font-bold text-center text-black">
					새 행사 등록하기
				</p>
			</div>
			<div className="w-[331px] h-[436px] absolute left-[22px] top-[126px] overflow-hidden">
				<p className="w-[85px] h-[30px] absolute left-0 top-0 text-sm font-bold text-center text-[#ff9f0e]">
					등록 행사
				</p>
			</div>
			<div className="w-[331px] h-[380px] absolute left-[22px] top-[153px] overflow-hidden">
				<svg
					width={330}
					height={1}
					viewBox="0 0 330 1"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-[330px] h-0 absolute left-0 top-px"
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
					className="w-[330px] h-0 absolute left-px top-[380px]"
					preserveAspectRatio="none"
				>
					<line y1="0.5" x2={330} y2="0.5" stroke="white" />
				</svg>
				{list.map((v,i)=>(
					<ConcertList key={i} title={v.title} type={v.type} id={i} />
				))}
			</div>
			<NavBar state="1" />

		</div>
	)
}

export default PartTime;