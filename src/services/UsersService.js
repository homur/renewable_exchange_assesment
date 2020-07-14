import axios from "axios";

const apiClient = axios.create({
	baseURL: `https://renewable.exchange/test`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	getUsers() {
		const res = apiClient.get("users.json");
		return res;
	}
};
