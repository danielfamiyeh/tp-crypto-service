const router = require("express").Router();
const {
	getSearchResults,
	getInfo,
	getTicks,
	getPrice,
	getDepth,
} = require("./../controllers");

router.get("/", (req, res) =>
	res.json({ msg: "Greetings from the Crypto service." })
);

router.get("/:symbol/info", getInfo);
router.get("/:symbol/depth", getDepth);
router.get("/:symbol/price", getPrice);
router.get("/search/:query", getSearchResults);
router.get("/:symbol/ticks/:interval/:from/:to", getTicks);

module.exports = router;
