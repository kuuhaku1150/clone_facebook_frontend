import apiConfig from "../apiConfig";

const userService = {
  postLogin: function (payload) {
    try {
      return apiConfig.post("/back/api/v1/auth", { payload: payload });
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
