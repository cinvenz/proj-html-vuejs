import Vue from "vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

library.add(faChevronRight, faHatWizard);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
