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

	// const handleClick = () => {
	// 	if (!note) {
	// 		setNote(!note);
	// 		// console.log(note);
	// 	} else {
	// 		setNote(!note);
	// 	}
	// };
	return (
		<div className={`bg-gray-800  grid grid-rows-84 grid-cols-16  `}>
			{KEYS_RANGE.map((keynum) =>
				STAFF.map((beatnum, index) => {
					return (
						<div key={index}>
							<Box
								key={index}
								beatnum={beatnum}
								keynum={keynum}
								
							/>
						</div>
					);
				})
			)}
		</div>
	);
};

export default Grid;
