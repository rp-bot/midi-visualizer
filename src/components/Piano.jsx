import React, { useEffect, useRef } from "react";
import Key from "./Key";
import * as Tone from "tone";
import { KEYS, OCTAVE_STRUCTURE, OCTAVE_RANGES } from "../constants/constants";

const Piano = () => {
	const synth = useRef(null);
	const sampler = useRef(null);

	const isClicked = useRef(false);

	useEffect(() => {
		synth.current = new Tone.Synth().toDestination();
		sampler.current = new Tone.Sampler({
			urls: {
				A1: "A1.mp3",
				A2: "A2.mp3",
			},
			baseUrl: "https://tonejs.github.io/audio/casio/",
		}).toDestination();
	}, []);

	const handleMouseDown = (e, n) => {
		const now = Tone.now();
		var note = Tone.Frequency(n, "midi").toNote();

		// synth?.current?.triggerAttack(note, now);
		// works with multiple notes and we can add different sound
		sampler?.current?.triggerAttackRelease([note], "4n");
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
		<div
			className="grid grid-cols-[1fr_2fr] w-fit bg-white border-l"
			onMouseLeave={handleMouseUp}
		>
			{/*h-[500px] overflow-scroll */}

			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-1 row-end-12 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C7</p>
				</div>
			</div>
			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-12 row-end-24 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C6</p>
				</div>
			</div>
			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-24 row-end-36 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C5</p>
				</div>
			</div>
			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-36 row-end-48 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C4</p>
				</div>
			</div>
			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-48 row-end-60 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C3</p>
				</div>
			</div>
			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-60 row-end-72 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C2</p>
				</div>
			</div>
			<div className="col-span-1 col-start-1 bg-white border-b border-black row-start-72 row-end-84 grid">
				<div className=" justify-self-end self-end">
					<p className="text-black text-sm">C1</p>
				</div>
			</div>
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
