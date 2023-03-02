import React from "react";
import Box from "./Box";
import Row from "./Row";
import {
	KEYS_RANGE,
	KEYS,
	OCTAVE_STRUCTURE,
	OCTAVE_RANGES,
} from "../constants/constants";

// 88 keys * 16

const Grid = () => {
	return (
		<div className="bg-gray-300  grid grid-cols-16 grid-rows-84 ">
			{KEYS_RANGE.map((keynum) => {
				return (
					<>
						<Row keynum={keynum}/>
					</>
				);
			})}
		</div>
	);
};

export default Grid;
