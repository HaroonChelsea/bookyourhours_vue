<template>
  <fragment>
    <Navbar />
    <router-view />
    <Footer />
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Fragment,
    Navbar,
    Footer,
  },
};
</script>

<style></style>
