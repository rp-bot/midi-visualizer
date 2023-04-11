import React, { useState, useRef } from "react";

const Box = ({ beat, keynum, midiref, ...attr }) => {
	const [noteStyle, setNoteStyle] = useState("");
	const [noteValue, setNoteValue] = useState("");
	const noteStatus = useRef(false);
	const [noteSequence, setNoteSequence] = useState("");

	// console.log(beat, keynum, key);
	// TODO: BEAT AND INDEX are undefined
	const noteOn = async () => {
		const response = await fetch("api/melody_handler", {
			method: "POST",
			body: JSON.stringify({
				beat: beat,
				note: keynum,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();

		noteStatus.current = true;
		// setNoteValue(Tone.Frequency(keynum, "midi").toNote());
		if (noteStatus.current) {
			setNoteStyle("bg-blue-500 border-2 border-gray-200");
		} else {
			setNoteStyle("");
		}
	};
	const noteOff = (e) => {
		e.preventDefault();
		noteStatus.current = false;
		setNoteValue("");

		if (!noteStatus.current) {
			setNoteStyle("");
		}
	};

	return (
		<div
			className={`col-span-1 row-span-1 col-start-${beat}  border  border-gray-300 h-5 ${noteStyle} grid grid-cols-1`}
			onClick={noteOn}
			onDoubleClick={noteOff}
			onContextMenu={(e) => noteOff(e)}
			{...attr}
		>
			<div className="justify-self-end self-center text-white text-xs px-2">
				{noteValue}
			</div>
		</div>
	);
};

export default Box;
