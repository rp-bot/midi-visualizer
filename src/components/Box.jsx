import React, { useState, useRef } from "react";

const Box = ({ beatnum, keynum, index, ...attr }) => {
	const [noteStyle, setNoteStyle] = useState("");
	const noteStatus = useRef(false);
	const noteToggle = () => {
		noteStatus.current = !noteStatus;
		if (noteStatus) {
			setNoteStyle("bg-blue-500 border-transparent");
		} else {
			setNoteStyle("");
		}
	};

	return (
		<div
			className={`col-span-1 row-span-1 col-start-${beatnum} bg-gray-200  border border-gray-600 h-5 ${noteStyle} `}
			onClick={noteToggle}
			{...attr}
		></div>
	);
};

export default Box;
