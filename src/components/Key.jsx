import React from "react";

const Key = ({ keyColor }) => {
	if (keyColor == "white") {
		return (
			<div className="bg-white border border-black px-12 py-2 hover:bg-gray-400"></div>
		);
	} else {
		return (
			<div className=" bg-black border border-black px-12 py-2 hover:bg-gray-800"></div>
		);
	}
};

export default Key;
