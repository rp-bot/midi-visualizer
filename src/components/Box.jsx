import React, { useState } from "react";

const Box = ({ beatnum, keynum, index, ...attr }) => {
	return (
		<div
			className={`col-span-1 row-span-1 col-start-${beatnum} bg-gray-200  border border-gray-600 h-5 `}
			{...attr}
		></div>
	);
};

export default Box;
