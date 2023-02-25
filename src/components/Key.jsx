import React from "react";

const Key = ({ keyColor, midiNote }) => {
	console.log(midiNote);
	if (keyColor == "white") {
		return (
			<div className="bg-white border border-black px-12  text-black ">
				{midiNote}
			</div>
		);
	} else {
		return (
			<div className=" bg-black border border-black px-12  text-white">
				{midiNote}
			</div>
		);
	}
};

export default Key;
