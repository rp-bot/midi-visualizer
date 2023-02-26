import React from "react";
import { useState } from "react";
import * as Tone from "tone";

const Player = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		const synth = new Tone.Synth().toDestination();
		const now = Tone.now();
		// trigger the attack immediately
		synth.triggerAttack("C4", now);
		// wait one second before triggering the release
		synth.triggerRelease(now + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>Play</button>
		</div>
	);
};

export default Player;
