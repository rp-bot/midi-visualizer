import React, { useEffect, useState } from "react";
import Piano from "./Piano";
import Grid from "./Grid";

const PianoRoll = () => {
	const handleClick = () => {};

	return (
		<div className="flex">
			<div className="flex-none">
				<div className="text-white bg-slate-300 grid grid-cols-1 h-5">
					h
				</div>
				<Piano />
			</div>
			<div className="flex-1 relative bg-gray-800 min-w-[1920px]">
				{/* PlayHead */}
				{/* <div className={`absolute h-full translate-x-[0px]`}>
					<svg
						width="22"
						height="1703"
						viewBox="0 0 22 1703"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.5 0L0.499972 1703"
							stroke="#FF0000"
							className="h-full"
						/>
						<path
							d="M22 12L1.00398 25L1.00398 0L22 12Z"
							fill="#FF0000"
						/>
					</svg>
				</div> */}
				<div
					className=" bg-slate-300 grid grid-cols-16 p-0 h-5 text-sm text-black"
					onClick={handleClick}
				>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						1
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						2
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						3
					</div>
				</div>

				<Grid />
			</div>
		</div>
	);
};

export default PianoRoll;
