import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

class GameService {
   getGameContent() {
    return axios.get(API_URL + "questions", {
      headers: authHeader(),
      "Content-Type": "application/json",
    });
    //return "dummytext";
  }

  getOptions({id}) {
    return axios.get(API_URL + `questions/${id}/options`, {
      headers: authHeader(),
      "Content-Type": "application/json",
    });
    //return "dummytext";
  }

  //   getUserBoard() {
  //     return axios.get(API_URL + 'user', { headers: authHeader() });
  //   }

  //   getModeratorBoard() {
  //     return axios.get(API_URL + 'mod', { headers: authHeader() });
  //   }

  //   getAdminBoard() {
  //     return axios.get(API_URL + 'admin', { headers: authHeader() });
  //   }
}

export default new GameService();
