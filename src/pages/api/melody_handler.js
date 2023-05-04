// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let NOTE_SEQUENCE = [];

export default function melody_handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json({ NOTE_SEQUENCE });
	} else if (req.method === "POST") {
		// TODO make sure there isn't an exact copy of the object already in the array
		NOTE_SEQUENCE.push(req.body);
		res.status(201).json(req.body);
	} else if (req.method === "DELETE") {
		NOTE_SEQUENCE = [];
		console.log(NOTE_SEQUENCE);
		res.status(200).json(req.body);
	}
}
