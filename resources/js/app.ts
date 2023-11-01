import "./bootstrap";

import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import en from "../lang/en.json";
import ja from "../lang/ja.json";
import App from "./App.vue";
import ComponentA from "./components/ComponentA.vue";

const app = createApp(App);

const i18n = createI18n({
  locale: "ja",
  fallbackLocale: "en",
  messages : {
    en,
    ja,
  }
})
app.use(i18n);
app.component("ComponentA", ComponentA);

app.mount("#app");
