import Vue from "vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faHatWizard,
  faClock,
  faPhone,
  faEnvelope,
  faAward,
  faLock,
  faPenToSquare,
  faGraduationCap,
  faNetworkWired,
  faToolbox,
  faChartSimple,
  faPlane,
  faEarthEurope,
  faArrowRight,
  faInbox,
  faQuoteRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

library.add(faChevronRight, faHatWizard, faClock, faPhone, faEnvelope, faFacebook, faFacebookF);
library.add(faTwitter, faLinkedinIn, faAward, faLock, faPenToSquare, faGraduationCap);
library.add(faNetworkWired, faToolbox, faChartSimple, faPlane, faEarthEurope, faArrowRight);
library.add(faInbox, faQuoteRight, faLocationDot);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
