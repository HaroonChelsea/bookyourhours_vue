import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "https://bookyourhours.herokuapp.com/v1";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tokens: JSON.parse(localStorage.getItem("tokens")) || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  getters: {
    loggedIn(state) {
      return state.tokens !== null && state.user !== null;
    },
    user(state) {
      return state.user ? state.user : false;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTokens(state, tokens) {
      state.tokens = tokens;
    },
    logoutUser(state) {
      state.tokens = null;
      state.user = null;
    },
  },
  actions: {
    commonAnalytics(vuexContext) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .get("/common/analytics")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    getAllCategories() {
      // if (vuexContext.state.tokens) {
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + vuexContext.state.tokens.access.token;
      // }
      return new Promise((resolve, reject) => {
        axios
          .get("/category/")
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
    getUserById(vuexContext, id) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .get(`/users/${id}`)
            .then((response) => {
              localStorage.removeItem("user");
              localStorage.setItem("user", JSON.stringify(response.data));
              vuexContext.commit("setUser", response.data);
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    updateProfile(vuexContext, data) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .patch(`/users/${data.id}`, {
              name: data.name,
              introduction: data.introduction,
              tagLine: data.tagLine,
              nationality: data.nationality,
              hourlyRate: data.hourlyRate,
              skills: data.skills,
              accountType: data.accountType,
            })
            .then((response) => {
              vuexContext.dispatch("getUserById", response.data.id);
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    postJob(vuexContext, data) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .post("/jobPost", data)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    getAllTags() {
      // if (vuexContext.state.tokens) {
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + vuexContext.state.tokens.access.token;
      // }
      return new Promise((resolve, reject) => {
        axios
          .get("/tag")
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
    getTagById(vuexContext, id) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .get(`/tag/${id}`)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    getAllJobs(vuexContext, filter) {
      // if (vuexContext.state.tokens) {
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + vuexContext.state.tokens.access.token;
      // }
      return new Promise((resolve, reject) => {
        if (filter) {
          let filterText = "?";
          if (filter.sortBy === "asc") {
            filterText += "sortBy=asc";
          }
          if (filter.sortBy === "desc") {
            filterText += "sortBy=desc";
          }
          if (filter.tags.length > 0) {
            filterText += "&tags=";
            filter.tags.map((el, i) => {
              if (filter.tags.length === i + 1) {
                filterText += `${el}`;
              } else {
                filterText += `${el},`;
              }
            });
          }
          if (filter.cats.length > 0) {
            filterText += "&category=";
            filter.cats.map((el, i) => {
              if (filter.tags.length === i + 1) {
                filterText += `${el}`;
              } else {
                filterText += `${el},`;
              }
            });
          }
          if (filter.price.length > 0) {
            filterText += `&minPrice=${filter.price[0]}`;
            filterText += `&maxPrice=${filter.price[1]}`;
          }
          axios
            .get(`/jobPost${filterText}`)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        } else {
          axios
            .get("/jobPost")
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        }
      });
    },
    getAJob(vuexContext, data) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .get(`/jobPost/${data.id}`)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    createBid(vuexContext, data) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .post("/bid/", data)
            .then((response) => {
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    getJobBids(vuexContext, data) {
      if (vuexContext.state.tokens) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + vuexContext.state.tokens.access.token;
        return new Promise((resolve, reject) => {
          axios
            .get(`/bid?jobPost=${data.id}`)
            .then((response) => {
              resolve(response.data.results);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
    },
    refreshUserToken(vuexContext) {
      if (vuexContext.state.tokens) {
        if (
          new Date().getTime() >
          Date.parse(vuexContext.state.tokens.access.expires)
        ) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + vuexContext.state.tokens.access.token;
          return new Promise((resolve, reject) => {
            axios
              .post("/auth/refresh-tokens", {
                refreshToken: vuexContext.state.tokens.refresh.token,
              })
              .then((response) => {
                vuexContext.commit("setTokens", response.data);
                localStorage.setItem("tokens", JSON.stringify(response.data));
                resolve(response);
              })
              .catch((error) => {
                localStorage.removeItem("user");
                localStorage.removeItem("tokens");
                vuexContext.commit("logoutUser");
                reject(error);
              });
          });
        }
      }
    },
    loginUser(vuexContext, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/login", {
            email: userData.email,
            password: userData.password,
          })
          .then((response) => {
            vuexContext.commit("setUser", response.data.user);
            vuexContext.commit("setTokens", response.data.tokens);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem(
              "tokens",
              JSON.stringify(response.data.tokens)
            );
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
    registerUser(vuexContext, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/register", {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            phoneNumber: userData.phoneNumber,
            accountType: userData.accountType,
          })
          .then((response) => {
            vuexContext.commit("setUser", response.data.user);
            vuexContext.commit("setTokens", response.data.tokens);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem(
              "tokens",
              JSON.stringify(response.data.tokens)
            );
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
    logout(vuexContext) {
      if (vuexContext.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post("/auth/logout", {
              refreshToken: vuexContext.state.tokens.refresh.token,
            })
            .then((response) => {
              localStorage.removeItem("user");
              localStorage.removeItem("tokens");
              vuexContext.commit("logoutUser");
              resolve(response);
            })
            .catch((error) => {
              localStorage.removeItem("user");
              localStorage.removeItem("tokens");
              vuexContext.commit("logoutUser");
              reject(error);
            });
        });
      }
    },
  },
  modules: {},
});
