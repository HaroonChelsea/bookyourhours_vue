<template>
  <fragment>
    <Header />
    <Price />
  </fragment>
</template>
<script>
import Header from "@/components/Header";
import Price from "@/components/Price";
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment,
    Header,
    Price,
  },
  mounted() {
    if (!document.getElementById("customJs")) {
      let customScript = document.createElement("script");
      customScript.setAttribute("src", "/assets/js/custom.js");
      customScript.setAttribute("type", "text/javascript");
      customScript.setAttribute("id", "customJs");
      document.body.appendChild(customScript);
    } else {
      let customScript = document.getElementById("customJs");
      document.body.removeChild(customScript);
      document.body.removeChild(document.getElementById("backtotop"));
      customScript = document.createElement("script");
      customScript.setAttribute("src", "/assets/js/custom.js");
      customScript.setAttribute("type", "text/javascript");
      customScript.setAttribute("id", "customJs");
      document.body.appendChild(customScript);
    }
  },
};
</script>
