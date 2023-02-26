import React from "react";
import { useState } from "react";
import * as Tone from "tone";

const Player = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		const synth = new Tone.Synth().toDestination();
		const note = Tone.Midi(60).toFrequency(); // 261.6255653005986;
		const now = Tone.now();
		console.log(note);
		// trigger the attack immediately
		synth.triggerAttack(note, now);
		// wait one second before triggering the release
		synth.triggerRelease(now + 0.5);

		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(success, failure);
		}
		function success(midiAccess) {
			console.log(midiAccess);
		}

		function failure() {
			console.log("failed");
		}
	};

	return (
		<div>
			<button onClick={handleClick}>Play</button>
		</div>
	);
};

export default Player;
