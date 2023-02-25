const KEYS_RANGE = [21, 108];
// W B W B W W B W B W B W
const KEYS = {
  'W': 'white',
  'B': 'black'
};
const OCTAVE_STRUCTURE = ['W', 'B', 'W', 'B', 'W', 'W', 'B', 'W', 'B', 'W', 'B', 'W'];

const OCTAVE_RANGES = [[24, 35], [36, 47], [48, 59], [60, 71], [72, 83], [84, 95], [96, 107]];

const OCTAVE_1 = [
  { midiNote: 21, keyColor: 'white' },
  { midiNote: 22, keyColor: 'black' },
  { midiNote: 23, keyColor: 'white' },
  { midiNote: 24, keyColor: 'black' },
  { midiNote: 25, keyColor: 'white' },
  { midiNote: 26, keyColor: 'white' },
  { midiNote: 27, keyColor: 'black' },
  { midiNote: 28, keyColor: 'white' },
  { midiNote: 29, keyColor: 'black' },
  { midiNote: 30, keyColor: 'white' },
  { midiNote: 31, keyColor: 'black' },
  { midiNote: 32, keyColor: 'white' },
];

export {
  KEYS_RANGE,
  KEYS,
  OCTAVE_STRUCTURE,
  OCTAVE_RANGES,
};