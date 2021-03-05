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

	async getInfo(symbol) {
		try {
			const info = await axios.get(
				this.URI(`detail/cryptocurrency/${symbol}?`)
			);

			return info.data;
		} catch (error) {
			console.error(error);

			return {};
		}
	}

	async getPrice(symbol) {
		try {
			const price = await axios.get(
				this.URI(`last/crypto/detailed/${symbol}?`)
			);

			return price.data;
		} catch (error) {
			console.error(error);

			return {};
		}
	}

	async getTicks(symbol, from, to, interval) {
		try {
			const ticks = await axios.get(
				this.URI(`agg/crypto/${symbol}/1/${interval}/${from}/${to}?`)
			);

			return ticks.data;
		} catch (error) {
			console.error(error);

			return {};
		}
	}

	async getDepth(symbol) {
		try {
			const depth = await axios.get(this.URI(`depth/crypto/${symbol}?`));

			return depth.data;
		} catch (error) {
			console.error(error);

			return {};
		}
	}
}

module.exports = Client;
