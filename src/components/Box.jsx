import React from "react";

const Box = ({ beat }) => {
	return (
		<div
			className={`col-span-1 row-span-1 col-start-${beat} bg-gray-700  border border-gray-600 h-5`}
		></div>
	);
};

export default Box;
