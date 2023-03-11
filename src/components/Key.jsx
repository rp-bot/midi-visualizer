import React from "react";

const Key = ({ keyColor, midiNote, ...attr }) => {
	if (keyColor == "white") {
		return (
			<div
				className="col-span-1 col-start-2 bg-white border border-black px-12  text-black h-5"
				{...attr}
			>
				{/* {midiNote} */}
			</div>
		);
	} else {
		return (
			<div
				className="col-span-1 col-start-2 bg-black border border-black px-12  text-white h-5"
				{...attr}
			>
				{/* {midiNote} */}
			</div>
		);
	}
};

export default Key;
