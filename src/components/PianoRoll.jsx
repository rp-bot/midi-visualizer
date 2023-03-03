import React from "react";
import Piano from "./Piano";
import Grid from "./Grid";
const PianoRoll = () => {
	return (
		<div className="flex">
			<div className="flex-none">
				<Piano />
			</div>
			<div className="flex-1 bg-gray-800 min-w-[1920px]">
				<Grid />
			</div>
		</div>
	);
};

export default PianoRoll;
