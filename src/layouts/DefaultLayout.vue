<template>
  <fragment>
    <Navbar v-if="user === 'employer'" />
    <NavbarFreelancer v-if="user === 'freelancer'" />
    <Navbaruser v-else />

    <router-view />
    <SigninPopup v-if="!['login', 'register'].includes($route.name)" />
    <Footer />
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import NavbarFreelancer from "@/components/NavbarFreelancer";
import Navbar from "@/components/Navbar";
import Navbaruser from "@/components/Navbaruser";
import SigninPopup from "@/components/SigninPopup";
import Footer from "@/components/Footer";
export default {
  name: "default-layout",
  components: {
    Fragment,
    Navbar,
    SigninPopup,
    Footer,
    NavbarFreelancer,
    Navbaruser,
  },
  computed: {
    user() {
      return this.$store.getters.user.accountType;
    },
  },
};
</script>
