import React, { useState, useRef } from "react";
import Box from "./Box";
import Row from "./Row";
import { KEYS_RANGE, ALL_NOTES } from "../constants/constants";

// 88 keys * 16

const Grid = () => {
	// Hook to handle the click of the squares
	// const [note, setNote] = useState(false);

	// Stores the amount of notes per row. This will help us change the grid-cols
	const notesPerRow = 0;
	const notesRef = useRef([]);

	return (
		<>
			<div className={`bg-white grid grid-rows-84 grid-flow-col`}>
				{KEYS_RANGE.map((keynum, index) => {
					var bgshade = "";
					if (ALL_NOTES[keynum] == "W") {
						bgshade = "bg-white";
					} else {
						bgshade = "bg-gray-400";
					}
					return (
						<Row key={index} keynum={keynum} bgshade={bgshade} ref={notesRef}/>
					);
				})}
			</div>
		</>
	);
};

export default Grid;
