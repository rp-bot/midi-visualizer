import React from "react";
import { useState } from "react";
import * as Tone from "tone";

const Player = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		const synth = new Tone.Synth().toDestination();
		const note = Tone.Frequency(77, "midi").toNote();
		const now = Tone.now();
		console.log(note);
		// trigger the attack immediately
		synth.triggerAttack(note, now);
		// wait one second before triggering the release
		synth.triggerRelease(now + 0.5);
	};

	return (
		<div>
			<button onClick={handleClick}>Play</button>
		</div>
	);
};

export default Player;