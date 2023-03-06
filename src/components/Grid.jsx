import React, { useState } from "react";
import Box from "./Box";
import Row from "./Row";
import {
	KEYS_RANGE,
	STAFF,
	KEYS,
	OCTAVE_STRUCTURE,
	OCTAVE_RANGES,
} from "../constants/constants";

// 88 keys * 16

const Grid = () => {
	// Hook to handle the click of the squares
	// const [note, setNote] = useState(false);

	// Stores the amount of notes per row. This will help us change the grid-cols
	const notesPerRow = 0;

	return (
		<>
			<div
				className={`bg-white grid grid-rows-84 grid-flow-col`}
			>
				
				{KEYS_RANGE.map((keynum, index) => {
					return <Row key={index} keynum={keynum} />;
				})}
			</div>
		</>
	);
};

export default Grid;
