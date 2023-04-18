// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const NOTE_SEQUENCE = [];

export default function melody_handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json({ NOTE_SEQUENCE });
	} else if (req.method === "POST") {
		NOTE_SEQUENCE.push(req.body);
		res.status(201).json(req.body);
	}
}
