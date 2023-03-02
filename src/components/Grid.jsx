import React from "react";

// 88 keys * 16

const Grid = () => {
	return (
		<div className="bg-gray-300 border-solid grid grid-cols-16 grid-rows-84">
			<div className="col-span-1 bg-transparent border-2 border-black h-5">h</div>
		</div>
	);
};

export default Grid;
