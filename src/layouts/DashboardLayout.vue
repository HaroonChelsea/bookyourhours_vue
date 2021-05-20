<template>
  <fragment>
    <Navbar v-if="user === 'employer'" />
    <NavbarFreelancer v-if="user === 'freelancer'" />

    <div class="dashboard-container">
      <SideBar v-if="user === 'employer'" />
      <sideFreelancer v-if="user === 'freelancer'" />
      <router-view />
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

import Navbar from "@/components/Navbar";
import NavbarFreelancer from "@/components/NavbarFreelancer";
import SideBar from "@/components/SideBar";
import SideFreelancer from "@/components/SideFreelancer";

export default {
  name: "dashboard-layout",
  components: {
    Fragment,
    Navbar,
    NavbarFreelancer,
    SideFreelancer,
    SideBar,
  },
  computed: {
    user() {
      return this.$store.getters.user.accountType;
    },
  },
};
</script>
