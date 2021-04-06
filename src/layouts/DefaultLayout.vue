<template>
  <fragment>
    <Navbar />
    <router-view />
    <SigninPopup v-if="!['login', 'register'].includes($route.name)" />
    <Footer />
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import Navbar from "@/components/Navbar";
import SigninPopup from "@/components/SigninPopup";
import Footer from "@/components/Footer";
export default {
  name: "default-layout",
  components: {
    Fragment,
    Navbar,
    SigninPopup,
    Footer,
  },
};
</script>
