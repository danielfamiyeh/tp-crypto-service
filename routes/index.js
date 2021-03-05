const router = require("express").Router();
const { getSearchResults } = require("./../controllers");

router.get("/", (req, res) =>
	res.json({ msg: "Greetings from the Crypto service." })
);

router.get("/search/:query", getSearchResults);

module.exports = router;
