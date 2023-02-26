import React, { useEffect, useRef } from "react";
import Key from "./Key";
import * as Tone from "tone";
import { KEYS, OCTAVE_STRUCTURE, OCTAVE_RANGES } from "../constants/constants";

const Piano = () => {
  const synth = useRef(null);

  useEffect(() => {
    synth.current = new Tone.Synth().toDestination();
  }, []);

  const onMouseDown = (e, n) => {
    const note = Tone.Frequency(n, "midi").toNote();
    const now = Tone.now();
    // trigger the attack immediately
    synth?.current?.triggerAttack(note, now);
  };

  const onMouseUp = () => {
    synth?.current?.triggerRelease();
  };
  return (
    <div className=" grid grid-cols-1 w-fit h-[500px] overflow-scroll">
      {OCTAVE_RANGES.map((octave) =>
        OCTAVE_STRUCTURE.map((key, index) => (
          <Key
            key={index}
            keyColor={KEYS[key]}
            midiNote={octave[0] + index}
            onMouseDown={(e) => onMouseDown(e, octave[0] + index)}
            onMouseUp={(e) => onMouseUp(e, octave[0] + index)}

          />
        )).reverse()
      ).reverse()}
    </div>
  );
};

export default Piano;
