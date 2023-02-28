import React from "react";
import Piano from "./Piano";

const PianoRoll = () => {
	return (
		<div className="flex">
			<Piano />
			<div className="bg-gray-800 flex-1"></div>
			<div className="bg-red-600 flex-1 w-14"></div>
		</div>
	);
};

export default PianoRoll;
