import React from "react";
import Key from "./Key";
import { KEYS, OCTAVE_STRUCTURE, OCTAVE_RANGES } from "../constants/constants";

const Piano = () => {
	return (
		<div className=" grid grid-cols-1 w-1 h-0">
			{OCTAVE_RANGES.map((octave) =>
				OCTAVE_STRUCTURE.map((key, index) => (
					<Key
						key={index}
						keyColor={KEYS[key]}
						midiNote={octave[0] + index}
					/>
				)).reverse()
			).reverse()}
		</div>
	);
};

export default Piano;
