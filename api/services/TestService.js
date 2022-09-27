import apiConfig from "../apiConfig";

const TestService = {
  postTest: function (payload) {
    try {
      return apiConfig.post("path", { payload: payload });
    } catch (error) {
      throw error;
    }
  },
  getTest: function () {
    try {
      return apiConfig.get("path");
    } catch (error) {
      throw error;
    }
  },
};

export default TestService;
