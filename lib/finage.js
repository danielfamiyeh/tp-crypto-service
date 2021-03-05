const axios = require("axios");

class Client {
	constructor(apiKey) {
		this._apiKey = apiKey;
		this.bindMethods();
	}

	bindMethods() {
		const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		methods
			.filter((method) => method !== "constructor")
			.forEach((method) => (this[method] = this[method].bind(this)));
	}

	URI(suffix) {
		return `https://api.finage.co.uk/${suffix}apikey=${this._apiKey}`;
	}

	async getSearchResults(query) {
		try {
			const results = await axios.get(
				this.URI(`search/cryptocurrency/${query}?limit=5&`)
			);

			return results.data;
		} catch (error) {
			console.error(error);

			return {};
		}
	}
}

module.exports = Client;
