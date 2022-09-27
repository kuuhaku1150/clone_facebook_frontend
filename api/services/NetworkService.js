import apiConfig from "../apiConfig";

const networkService = {
  getDataNetwork: function () {
    try {
      return apiConfig.get("/backhealthscore/api/v1/healthscore/network/detail");
    } catch (error) {
      throw error;
    }
  },
};

export default networkService;
