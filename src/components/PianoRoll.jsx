import React, { useEffect, useState } from "react";
import Piano from "./Piano";
import Grid from "./Grid";
import { VscTriangleDown } from "react-icons/vsc";

const PianoRoll = () => {
	const handleClick = () => {};

	return (
		<div className="flex">
			<div className="flex-none">
				<div>h</div>
				<Piano />
			</div>
			<div className="flex-1 relative bg-gray-800 min-w-[1920px]">
				{/* PlayHead */}
				<div className={`absolute h-full translate-x-[100px]`}>
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
				</div>
				<div onClick={handleClick}>h</div>

				<Grid />
			</div>
		</div>
	);
};

export default PianoRoll;
