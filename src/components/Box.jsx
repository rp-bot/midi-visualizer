import React, { useState, useRef } from "react";

const Box = ({ beatnum, keynum, index, ...attr }) => {
	const [noteStyle, setNoteStyle] = useState("");
	const noteStatus = useRef(false);
	const noteOn = () => {
		noteStatus.current = true;
		if (noteStatus.current) {
			setNoteStyle("bg-blue-500 border-2 border-gray-200");
		} else {
			setNoteStyle("");
		}
	};
	const noteOff = (e) => {
		e.preventDefault();
		noteStatus.current = false;

		if (!noteStatus.current) {
			setNoteStyle("");
		}
	};

	return (
		<div
			className={`col-span-1 row-span-1 col-start-${beatnum} bg-gray-200  border border-gray-600 h-5 ${noteStyle} `}
			onClick={noteOn}
			onDoubleClick={noteOff}
			onContextMenu={(e) => noteOff(e)}
			{...attr}
		></div>
	);
};

export default Box;
