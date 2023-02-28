import React from "react";
import Piano from "./Piano";

const PianoRoll = () => {
	return (
		<div className="grid grid-cols-2">
			<div className="col-span-1 justify-self-end">
				<Piano />
			</div>
			<div className="bg-gray-800"></div>
		</div>
	);
};

export default PianoRoll;
