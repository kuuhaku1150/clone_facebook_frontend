import apiConfig from "../apiConfig";

const facebookService = {
  getDataFacebook: function () {
    try {
      return apiConfig.get("/api/facebook/postFacebook/get");
    } catch (error) {
      throw error;
    }
  },
  postContentFacebook: function (payload) {
    try {
      return apiConfig.post("/api/facebook/postFacebook/manage", {
        payload: payload,
      });
    } catch (error) {
      throw error;
    }
  },
  postCommentFacebook: function (id, payload) {
    try {
      
      return apiConfig.post("/api/facebook/postFacebook/manage/" + id, {
        payload: payload,
      });
    } catch (error) {
      throw error;
    }
  },
  deleteContentFacebook: function (payload) {
    try {
      return apiConfig.delete("/api/facebook/postFacebook/delete/" + payload);
    } catch (error) {
      throw error;
    }
  },
};

export default facebookService;
