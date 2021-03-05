require("dotenv").config();

const Finage = require("./../lib/finage");
const finageClient = new Finage(process.env.FINAGE_KEY);

module.exports = {
	getSearchResults: async (req, res) => {
		const { query } = req.params;
		const results = await finageClient.getSearchResults(query);

		res.json(results);
	},
};
