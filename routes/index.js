const router = require("express").Router();

router.get("/", (req, res) =>
	res.json({ msg: "Greetings from the Crypto service." })
);

module.exports = router;
