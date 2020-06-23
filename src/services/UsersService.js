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
    return apiClient.get("users.json");
  }
};
