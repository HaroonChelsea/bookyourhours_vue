<template>
  <fragment>
    <HeaderFreelancer v-if="user === 'freelancer'" />
    <HeaderEmployer v-if="user === 'employer'" />
    <Price />
  </fragment>
</template>
<script>
import HeaderEmployer from "@/components/HeaderEmployer";
import HeaderFreelancer from "@/components/HeaderFreelancer";
import Price from "@/components/Price";
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment,
    HeaderFreelancer,
    HeaderEmployer,
    Price,
  },
  computed: {
    user() {
      return this.$store.getters.user.accountType;
    },
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
