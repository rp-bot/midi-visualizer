import React, { useEffect, useRef } from "react";
import Key from "./Key";
import * as Tone from "tone";
import { KEYS, OCTAVE_STRUCTURE, OCTAVE_RANGES } from "../constants/constants";

const Piano = () => {
	const synth = useRef(null);

	const isClicked = useRef(false);

	//TODO const changecolor = "gray-700"

	// TODO useRef to set boolean true or false when mouse is down or up
	// TODO Add listener when cursor enters the element

	useEffect(() => {
		synth.current = new Tone.Synth().toDestination();
	}, []);

	const handleMouseDown = (e, n) => {
		const now = Tone.now();
		var note = Tone.Frequency(n, "midi").toNote();

		synth?.current?.triggerAttack(note, now);

		isClicked.current = true;
	};

	const handleMouseUp = () => {
		synth?.current?.triggerRelease();
		isClicked.current = false;
	};

	const handleMouseEnter = (e, n) => {
		if (isClicked.current) {
			const now = Tone.now();
			var note = Tone.Frequency(n, "midi").toNote();
			synth?.current?.triggerAttack(note, now);
		}
	};

	const handleMouseLeave = (outofdiv = false) => {
		if (isClicked.current) {
			synth?.current?.triggerRelease();
		}
	};

	return (
		<div className=" grid grid-cols-1 w-fit " onMouseLeave={handleMouseUp}>
			{/*h-[500px] overflow-scroll */}
			{OCTAVE_RANGES.map((octave) =>
				OCTAVE_STRUCTURE.map((key, index) => (
					<Key
						key={index}
						keyColor={KEYS[key]}
						midiNote={octave[0] + index}
						onMouseDown={(e) =>
							handleMouseDown(e, octave[0] + index)
						}
						onMouseUp={(e) => handleMouseUp(e, octave[0] + index)}
						onMouseEnter={(e) =>
							handleMouseEnter(e, octave[0] + index)
						}
						onMouseLeave={handleMouseLeave}
					/>
				)).reverse()
			).reverse()}
		</div>
	);
};

export default Piano;
