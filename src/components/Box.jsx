import React, { useState } from "react";

const Box = ({ beatnum, keynum, index, ...attr }) => {
	return (
		<div
			className={`col-span-1 row-span-1 col-start-${beatnum} bg-gray-700  border border-gray-600 h-5 `}
			{...attr}
		>
			{keynum}
		</div>
	);
};

export default Box;
