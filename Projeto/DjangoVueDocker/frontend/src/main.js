import Vue from "vue"
import App from "./App.vue"

// import axiosApi from "axios"
// const axios = axiosApi.create({
//   baseURL: "http://backend:8000",
// })
// window.axios = axios

// Vue.http.headers.common["Access-Control-Allow-Origin"] = true

// Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
