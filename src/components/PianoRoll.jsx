import React from "react";
import Piano from "./Piano";
import Grid from "./Grid";
const PianoRoll = () => {
	return (
		<div className="flex">
			<Piano />
			<div className="bg-gray-800 flex-1">
					<Grid />
			</div>
		</div>
	);
};

export default PianoRoll;
