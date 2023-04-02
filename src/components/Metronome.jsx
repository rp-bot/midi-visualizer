import React, { useState, useRef } from "react";

function Metronome() {
	const [bpm, setBpm] = useState(120); // default bpm
	const [playing, setPlaying] = useState(false);
	const intervalRef = useRef(null);

	function startStop() {
		if (playing) {
			clearInterval(intervalRef.current);
			setPlaying(false);
		} else {
			intervalRef.current = setInterval(() => {
				console.log("tick"); // replace with sound or animation code
			}, (60 / bpm) * 1000);
			setPlaying(true);
		}
	}

	function handleBpmChange(event) {
		setBpm(Number(event.target.value));
		if (playing) {
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(() => {
				console.log("tick"); // replace with sound or animation code
			}, (60 / bpm) * 1000);
		}
	}

	return (
		<div>
			<label className="">
				BPM:
				<input
					className="border p-2"
					type="number"
					value={bpm}
					onChange={handleBpmChange}
				/>
			</label>
			<button className="border p-2" onClick={startStop}>
				{playing ? "Stop" : "Start"}
			</button>
		</div>
	);
}

export default Metronome;
