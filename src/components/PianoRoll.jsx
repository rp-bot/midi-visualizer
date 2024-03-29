import React, { useEffect, useState } from "react";
import Piano from "./Piano";
import Grid from "./Grid";

const PianoRoll = () => {
	const handleClick = () => {};

	return (
		<div className="flex ">
			<div className="flex-none float-left sticky z-10 left-0">
				<div className="sticky top-0 text-white bg-slate-300 grid grid-cols-1 h-5">
					h
				</div>
				<Piano />
			</div>
			<div className="flex-1 relative  min-w-[1440px] max-w-[1000px]">
				<div
					className="sticky top-0 bg-slate-300 grid grid-cols-16 p-0 h-5 text-sm text-black"
					onClick={handleClick}
				>
					{/* PlayHead */}
					<div className={`absolute h-full translate-x-[0px]`}>
						<svg
							width="22"
							height="800"
							viewBox="0 0 22 800"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0.5 0L0.499972 800" stroke="#FF0000" />
							<path
								d="M22 12L1.00398 25L1.00398 0L22 12Z"
								fill="#FF0000"
								className="opacity-60"
							/>
						</svg>
					</div>

					{/* Beats */}
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						1
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						2
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						3
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						4
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						5
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						6
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						7
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						8
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						9
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						10
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						11
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						12
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						13
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						14
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						15
					</div>
					<div className="col-span-1 justify-self-center self-center w-full h-5 border-l border-y border-black">
						16
					</div>
				</div>

				<Grid />
			</div>
		</div>
	);
};

export default PianoRoll;
