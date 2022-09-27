import apiConfig from "../apiConfig";

const authFacebook = {
  loginFacebook: function (payload) {
    try {
      return apiConfig.post("/api/facebook/auth/login", {
        payload: payload,
      });
    } catch (error) {
      throw error;
    }
  },
  fetchUserFacebook: function () {
    try {
      return apiConfig.get("/api/facebook/auth/get");
    } catch (error) {
      throw error;
    }
  },
};

export default authFacebook;
